import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";
import type { ContactFormSubmission } from "@/types/contact";
import { rateLimiter } from "@/utils/rateLimiter";

// Verify reCAPTCHA token
async function verifyRecaptcha(token: string) {
  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      }
    );

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    // Apply rate limiter
    const rateLimitResponse = rateLimiter(request);
    if (rateLimitResponse) {
      return rateLimitResponse;
    }

    // Parse the request body
    const body = (await request.json()) as ContactFormSubmission;
    const { firstName, lastName, email, subject, message, recaptchaToken } =
      body;

    console.log("Form data received:", {
      firstName,
      lastName,
      email,
      subject,
      message: `${message.substring(0, 20)}...`,
    });

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA if token is provided
    if (recaptchaToken) {
      console.log("Verifying reCAPTCHA token...");
      const recaptchaValid = await verifyRecaptcha(recaptchaToken);

      if (!recaptchaValid) {
        console.log("reCAPTCHA verification failed");
        return NextResponse.json(
          { message: "reCAPTCHA verification failed" },
          { status: 400 }
        );
      }
      console.log("reCAPTCHA verification successful");
    } else {
      console.log("No reCAPTCHA token provided");
    }

    // Log email configuration
    console.log("Email configuration:", {
      host: process.env.EMAIL_SERVER_HOST,
      port: process.env.EMAIL_SERVER_PORT,
      user: process.env.EMAIL_SERVER_USER ? "Set" : "Not set",
      pass: process.env.EMAIL_SERVER_PASSWORD ? "Set" : "Not set",
      from: process.env.EMAIL_FROM,
      to: process.env.CONTACT_EMAIL_TO,
    });

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number.parseInt(process.env.EMAIL_SERVER_PORT || "587"),
      secure: Number.parseInt(process.env.EMAIL_SERVER_PORT || "587") === 465,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.CONTACT_EMAIL_TO,
      subject: `Contact Form: ${subject}`,
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    console.log("Sending email...");
    // Send email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error details:", error);
    if (error instanceof Error) {
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    }
    return NextResponse.json(
      { message: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
