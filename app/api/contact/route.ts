import { NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || "mike@jetzaviation.com";
const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "Jetz Aviation Website <onboarding@resend.dev>";

const MIN_SUBMIT_MS = 1500;

const INTEREST_LABELS: Record<string, string> = {
  buying: "Buying an Aircraft",
  selling: "Selling an Aircraft",
  consulting: "Aviation Consulting & Project Management",
  valuation: "Aircraft Valuation",
  other: "Other / General Inquiry",
};

interface ContactPayload {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  interest?: string;
  message?: string;
  turnstileToken?: string;
  website?: string;
  elapsedMs?: number;
}

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

async function verifyTurnstile(token: string, remoteIp?: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.error("Contact form submission failed: TURNSTILE_SECRET_KEY is not configured.");
    return false;
  }
  if (!token) return false;

  const body = new URLSearchParams();
  body.append("secret", secret);
  body.append("response", token);
  if (remoteIp) body.append("remoteip", remoteIp);

  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body,
    });
    const data = await res.json();
    return data.success === true;
  } catch (err) {
    console.error("Turnstile verification request failed:", err);
    return false;
  }
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: real users never fill this field, since it's hidden from sight and
  // screen readers. A filled value means a bot is blindly submitting every field —
  // fake success so it doesn't learn to work around the trap.
  if ((payload.website ?? "").trim()) {
    return NextResponse.json({ success: true });
  }

  // Timing: no human fills out this form in under 1.5s. This is a soft signal
  // (spoofable by a determined bot), not a substitute for Turnstile below.
  if (typeof payload.elapsedMs === "number" && payload.elapsedMs < MIN_SUBMIT_MS) {
    return NextResponse.json({ success: true });
  }

  const name = (payload.name ?? "").trim();
  const email = (payload.email ?? "").trim();
  const message = (payload.message ?? "").trim();
  const company = (payload.company ?? "").trim();
  const phone = (payload.phone ?? "").trim();
  const interest = (payload.interest ?? "").trim();
  const turnstileToken = (payload.turnstileToken ?? "").trim();

  if (!name || !email || !message || !isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please provide a valid name, email address, and message." },
      { status: 400 }
    );
  }

  if (!turnstileToken) {
    return NextResponse.json(
      { error: "Please complete the verification challenge before sending." },
      { status: 400 }
    );
  }

  const remoteIp = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const verified = await verifyTurnstile(turnstileToken, remoteIp);
  if (!verified) {
    return NextResponse.json(
      { error: "Verification failed. Please refresh the page and try again." },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("Contact form submission failed: RESEND_API_KEY is not configured.");
    return NextResponse.json(
      { error: "Email service is not configured. Please contact us by phone or email directly." },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const html = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
    ${interest ? `<p><strong>Interested In:</strong> ${escapeHtml(INTEREST_LABELS[interest] ?? interest)}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `;

  try {
    const { error } = await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New Website Inquiry from ${name}`,
      html,
    });

    if (error) {
      console.error("Resend failed to send contact form email:", error);
      return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unexpected error sending contact form email:", err);
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
