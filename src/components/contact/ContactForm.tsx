"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, MessageSquare, Phone, Mail, Clock } from "lucide-react";

const QUERY_TYPES = [
  { id: "trial", label: "Net Practice / Trial Session" },
  { id: "fixture", label: "Match / Friendly Fixture Request" },
  { id: "sponsor", label: "Sponsorship & Kit Partnership" },
  { id: "general", label: "General Club Query" },
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    queryType: "trial",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate instant client handling
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 400);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/90 shadow-sm text-center space-y-5 animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h3 className="font-headline text-2xl font-bold text-stone-900">
            Query Received, {formData.name || "Friend"}!
          </h3>
          <p className="text-sm text-stone-600 max-w-md mx-auto font-body">
            Thank you for reaching out to Devpur Cricket Club. Our team coordinator will review your cricket query and get back to you via WhatsApp / Phone shortly.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs font-mono text-stone-700 max-w-sm mx-auto space-y-1.5 text-left">
          <div className="flex items-center gap-2 text-stone-900 font-bold">
            <Clock className="w-3.5 h-3.5 text-[#F0A04B]" />
            <span>Response Time: Usually within 24 hours</span>
          </div>
          <p className="text-stone-500 font-body">
            For urgent weekend match fixtures or net timings, you can also join us at Matunga Ground on Mon • Wed • Fri at 7:00 AM.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", phone: "", email: "", queryType: "trial", message: "" });
          }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-900 text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#D7833D] transition-colors"
        >
          Send Another Query
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-sm space-y-6"
    >
      <div>
        <h3 className="font-headline text-2xl font-bold text-stone-900">
          Send Your Cricket Query
        </h3>
        <p className="text-sm text-stone-600 mt-1 font-body">
          Fill in your details below and our club team will respond quickly.
        </p>
      </div>

      {/* Query Category Selector */}
      <div className="space-y-2" role="group" aria-labelledby="query-type-label">
        <span id="query-type-label" className="text-xs font-mono font-bold uppercase tracking-wider text-stone-700 block">
          What is your query about?
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {QUERY_TYPES.map((type) => {
            const isSelected = formData.queryType === type.id;
            return (
              <button
                type="button"
                key={type.id}
                onClick={() => setFormData({ ...formData, queryType: type.id })}
                className={`p-3 rounded-xl text-xs font-semibold text-left transition-colors border ${
                  isSelected
                    ? "bg-[#F0A04B]/10 text-[#F0A04B] border-[#C16A35] font-bold shadow-2xs"
                    : "bg-stone-50/80 text-stone-700 border-stone-200 hover:bg-stone-100"
                }`}
              >
                {type.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Name & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-xs font-mono font-bold uppercase tracking-wider text-stone-700 block">
            Your Name *
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Rahul Patel"
            className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#D7833D]/30 focus:border-[#C16A35] transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-xs font-mono font-bold uppercase tracking-wider text-stone-700 block">
            Mobile / WhatsApp *
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="e.g. +91 98765 43210"
            className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#D7833D]/30 focus:border-[#C16A35] transition-colors"
          />
        </div>
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <label htmlFor="email" className="text-xs font-mono font-bold uppercase tracking-wider text-stone-700 block">
          Email Address (Optional)
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="e.g. rahul@example.com"
          className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#D7833D]/30 focus:border-[#C16A35] transition-colors"
        />
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label htmlFor="message" className="text-xs font-mono font-bold uppercase tracking-wider text-stone-700 block">
          Query Details / Message *
        </label>
        <textarea
          id="message"
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us what you need — e.g. 'I am a top-order batsman looking to attend Wednesday nets at Matunga' or 'Looking to schedule a Sunday fixture with our club'"
          className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#D7833D]/30 focus:border-[#C16A35] transition-colors resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#F0A04B] to-[#D7833D] hover:from-[#C27332] hover:to-[#D7833D] text-white font-bold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-[box-shadow,opacity] duration-200 disabled:opacity-60 cursor-pointer"
      >
        {loading ? (
          <span>Sending Query...</span>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Send Cricket Query</span>
          </>
        )}
      </button>

      <p className="text-[11px] text-stone-500 text-center font-mono">
        Your contact details are strictly used for Devpur Cricket Club communication.
      </p>
    </form>
  );
}
