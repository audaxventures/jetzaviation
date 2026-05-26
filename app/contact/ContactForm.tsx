"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

const initialData: FormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  interest: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: Errors = {};
    if (!form.name.trim()) newErrors.name = "Please enter your name.";
    if (!form.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) newErrors.message = "Please enter a message.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof Errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
          style={{ backgroundColor: "rgba(42, 100, 117, 0.1)" }}
        >
          <CheckCircle2 size={32} style={{ color: "#2A6475" }} />
        </div>
        <h3
          className="text-2xl font-bold mb-3"
          style={{ fontFamily: "var(--font-playfair)", color: "#0F2D3D" }}
        >
          Message Sent
        </h3>
        <p className="text-gray-600 max-w-xs leading-relaxed">
          Thank you for reaching out. A member of the Jetz Aviation team will be in touch
          within one business day.
        </p>
        <button
          onClick={() => {
            setForm(initialData);
            setSubmitted(false);
          }}
          className="mt-8 text-sm font-semibold hover:opacity-80 transition-opacity"
          style={{ color: "#2A6475" }}
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass = (field: keyof Errors) =>
    `w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 ${
      errors[field]
        ? "border-red-300 focus:ring-red-200"
        : "border-gray-200 focus:ring-teal-100 focus:border-teal-400"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClass("name")}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Company
          </label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Your company (optional)"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-100 focus:border-teal-400 transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={inputClass("email")}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+1 (xxx) xxx-xxxx"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-100 focus:border-teal-400 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          I&apos;m interested in
        </label>
        <select
          name="interest"
          value={form.interest}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-100 focus:border-teal-400 transition-colors bg-white text-gray-700"
        >
          <option value="">Select a topic...</option>
          <option value="buying">Buying an Aircraft</option>
          <option value="selling">Selling an Aircraft</option>
          <option value="consulting">Aviation Consulting</option>
          <option value="valuation">Aircraft Valuation</option>
          <option value="other">Other / General Inquiry</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your aviation objectives, timeline, and any specific requirements..."
          rows={5}
          className={`${inputClass("message")} resize-none`}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ backgroundColor: "#2A6475" }}
      >
        {submitting ? (
          <>
            <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={16} /> Send Message
          </>
        )}
      </button>
    </form>
  );
}
