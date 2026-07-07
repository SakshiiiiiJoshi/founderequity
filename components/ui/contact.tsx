"use client";

import { useState } from "react";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const subject = encodeURIComponent(`Founder's Equity Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );

    // Launch default email composer
    window.location.href = `mailto:amoghshirke.valuation@gmail.com?subject=${subject}&body=${body}`;

    setFormSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 sm:px-8 lg:px-12 lg:py-28 bg-gradient-to-br from-[#F3F4F6] via-[#EBF3FC] to-[#E2E8F0] border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Contact Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600">Inquiries</h2>
              <p className="font-serif-heading mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Get in Touch
              </p>
              <p className="mt-4 text-slate-700 max-w-md">
                Schedule a private advisory consultation. We will analyze your cap structure, simulate future funding
                rounds, and establish equity preservation strategies.
              </p>

              <div className="mt-10 space-y-6">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=amoghshirke.valuation@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 border border-blue-100 text-blue-600 group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 uppercase tracking-wider font-semibold group-hover:text-slate-700 transition-colors">
                      Email
                    </p>
                    <span className="text-sm font-semibold text-slate-800 hover:underline">
                      amoghshirke.valuation@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/amogh-shirke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 border border-blue-100 text-blue-600 group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 uppercase tracking-wider font-semibold group-hover:text-slate-700 transition-colors">
                      LinkedIn
                    </p>
                    <span className="text-sm font-semibold text-slate-800 hover:underline">
                      amogh-shirke
                    </span>
                  </div>
                </a>

                <a
                  href="https://thebombayvaluationdesk.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 border border-blue-100 text-blue-600 group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.539 8.242H1.46V5.406h21.078v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.078V0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 uppercase tracking-wider font-semibold group-hover:text-slate-700 transition-colors">
                      Substack
                    </p>
                    <span className="text-sm font-semibold text-slate-800 hover:underline">
                      The Bombay Valuation Desk
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8 hover:border-blue-400/40 transition-all duration-300">
              {formSubmitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-50 border border-green-200 text-green-600">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif-heading text-lg font-bold text-slate-900 mt-4">Message Sent</h3>
                  <p className="text-sm text-slate-700 mt-2 max-w-sm mx-auto">
                    Thank you for reaching out. An advisor will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none transition-colors"
                        placeholder="Alex Chen"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                        Work Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none transition-colors"
                        placeholder="alex@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none transition-colors"
                      placeholder="Tell us about your venture advisory or capital structuring goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-blue-600 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg focus:outline-none cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
