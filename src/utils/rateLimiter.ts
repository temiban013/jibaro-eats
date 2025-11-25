import rateLimit from "express-rate-limit";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const requestStore = new Map<string, { count: number; timestamp: number }>();

export function rateLimiter(request: NextRequest) {
  // Skip in development
  if (process.env.NODE_ENV === "development") {
    return null;
  }

  const ip = request.headers.get("x-forwarded-for") || "unknown";
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5; // 5 requests per windowMs

  const requestData = requestStore.get(ip) || { count: 0, timestamp: now };

  // Reset count if window has passed
  if (now - requestData.timestamp > windowMs) {
    requestData.count = 0;
    requestData.timestamp = now;
  }

  // Increment count
  requestData.count += 1;
  requestStore.set(ip, requestData);

  // Check if rate limit is exceeded
  if (requestData.count > maxRequests) {
    return NextResponse.json(
      { message: "Too many requests, please try again later." },
      { status: 429 }
    );
  }

  return null;
}

export function createRateLimiter(
  windowMs = 15 * 60 * 1000, // 15 minutes
  max = 5 // limit each IP to 5 requests per windowMs
) {
  const limiter = rateLimit({
    windowMs,
    max,
    standardHeaders: true,
    legacyHeaders: false,
    skip: (req) => {
      // Skip in development
      return process.env.NODE_ENV === "development";
    },
    handler: (_, res) => {
      const response = NextResponse.json(
        { message: "Too many requests, please try again later." },
        { status: 429 }
      );
      return response;
    },
  });

  return limiter;
}
