"use client";

import { useState, useRef } from "react";
import type { FormEvent } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import type { ContactFormState } from "@/types/contact";

export default function ContactForm() {
  const [formState, setFormState] = useState<ContactFormState>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaValue(token);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate reCAPTCHA
    if (!recaptchaValue) {
      setSubmitError("Please complete the reCAPTCHA verification.");
      return;
    }
    // Validate form
    const validateForm = (): string | null => {
      // Email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!formState.firstName.trim()) {
        return "First name is required";
      }
      if (!formState.lastName.trim()) {
        return "Last name is required";
      }
      if (!formState.email.trim()) {
        return "Email is required";
      }
      if (!emailRegex.test(formState.email)) {
        return "Please enter a valid email address";
      }
      if (!formState.subject.trim()) {
        return "Subject is required";
      }
      if (!formState.message.trim()) {
        return "Message is required";
      }
      if (!recaptchaValue) {
        return "Please complete the reCAPTCHA verification";
      }

      return null;
    };

    const validationError = validateForm();
    if (validationError) {
      setSubmitError(validationError);
      return;
    }
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formState,
          recaptchaToken: recaptchaValue,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
      }

      setSubmitSuccess(true);

      // Reset form after successful submission
      setFormState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset reCAPTCHA
      recaptchaRef.current?.reset();
      setRecaptchaValue(null);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "There was an error submitting the form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium mb-1">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formState.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium mb-1">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formState.lastName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formState.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* reCAPTCHA */}
      <div className="flex justify-center">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
          onChange={handleRecaptchaChange}
        />
      </div>

      {submitError && (
        <div className="bg-red-100 text-red-700 p-3 rounded-md" role="alert">
          {submitError}
        </div>
      )}

      {submitSuccess && (
        <div
          className="bg-green-100 text-green-700 p-3 rounded-md"
          role="alert"
        >
          Your message has been sent successfully! We&apos;ll get back to you
          soon.
        </div>
      )}

      <div className="flex justify-center">
        <button
          type="submit"
          disabled={isSubmitting || !recaptchaValue}
          className={`px-6 py-3 bg-black text-white rounded-md transition-colors hover:bg-gray-800 ${
            isSubmitting || !recaptchaValue
              ? "opacity-70 cursor-not-allowed"
              : ""
          }`}
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </div>
    </form>
  );
}
