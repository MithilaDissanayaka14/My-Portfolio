import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { personalInfo } from '../../data/personalInfo';
import { SectionHeading } from '../common/SectionHeading';
import { TechRadarOrbit } from './TechRadarOrbit';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type SubmissionState = 'idle' | 'loading' | 'success' | 'error' | 'unconfigured';

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmissionState>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address (e.g. name@example.com).';
      }
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please provide a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Prevent duplicate submission during processing
    if (status === 'loading') {
      return;
    }

    if (!validate()) {
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if real EmailJS credentials are provided
    const isConfigured =
      serviceId &&
      templateId &&
      publicKey &&
      !serviceId.includes('your_') &&
      !templateId.includes('your_') &&
      !publicKey.includes('your_');

    if (!isConfigured) {
      // Clear informative notice for development mode / unconfigured credentials
      console.info(
        'EmailJS environment variables not configured. To enable live dispatch, define VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env file.'
      );

      setStatus('unconfigured');
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: personalInfo.name,
        },
        publicKey
      );

      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#f97316', '#fb923c', '#fdba74', '#ffffff'],
        });
      } catch {
        // ignore
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: unknown) {
      console.error('EmailJS submission error:', err);
      setStatus('error');
      setErrorMessage(
        'Failed to deliver message via direct service. Please use the direct email link or client fallback below.'
      );
    }
  };

  const mailtoFallbackUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    `Hi Mithila,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`
  )}`;

  return (
    <section id="contact" className="py-20 lg:py-28 relative scroll-mt-20">
      {/* Background ambient glow with viewport containment */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none -z-10 [clip-path:inset(0)]"
        aria-hidden="true"
      >
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
        {/* Section Heading */}
        <SectionHeading
          badge="Get in Touch"
          title="Contact"
          subtitle="Open to internship opportunities, collaboration, and technical discussions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Form & Direct Contact Details */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {personalInfo.email && (
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#141416]/90 border border-neutral-800/80 hover:border-orange-500/50 hover:bg-neutral-900 transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 group-hover:border-orange-500/40">
                    <Mail className="w-4 h-4 text-orange-400" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-neutral-500 uppercase block">Email</span>
                    <span className="text-xs font-semibold text-neutral-200 truncate block group-hover:text-orange-400 transition-colors">
                      {personalInfo.email}
                    </span>
                  </div>
                </a>
              )}

              {personalInfo.phone && (
                <a
                  href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#141416]/90 border border-neutral-800/80 hover:border-orange-500/50 hover:bg-neutral-900 transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 group-hover:border-orange-500/40">
                    <Phone className="w-4 h-4 text-orange-400" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-neutral-500 uppercase block">Phone</span>
                    <span className="text-xs font-semibold text-neutral-200 truncate block group-hover:text-orange-400 transition-colors">
                      {personalInfo.phone}
                    </span>
                  </div>
                </a>
              )}

              {personalInfo.location && (
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#141416]/90 border border-neutral-800/80">
                  <div className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-orange-400" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-neutral-500 uppercase block">Location</span>
                    <span className="text-xs font-semibold text-neutral-200 truncate block">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Form Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#141416]/90 border border-neutral-800/80 shadow-2xl relative">
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name & Email inputs in 2 columns on larger screens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono text-neutral-300 mb-2">
                      Your Name <span className="text-orange-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      disabled={status === 'loading'}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      className={`w-full px-4 py-3 rounded-xl bg-neutral-900/90 border text-sm text-neutral-100 placeholder-neutral-500 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500/50 ${
                        errors.name
                          ? 'border-red-500/60 focus:border-red-500'
                          : 'border-neutral-800 focus:border-orange-500'
                      }`}
                    />
                    {errors.name && (
                      <p id="contact-name-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono text-neutral-300 mb-2">
                      Your Email <span className="text-orange-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      disabled={status === 'loading'}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      className={`w-full px-4 py-3 rounded-xl bg-neutral-900/90 border text-sm text-neutral-100 placeholder-neutral-500 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500/50 ${
                        errors.email
                          ? 'border-red-500/60 focus:border-red-500'
                          : 'border-neutral-800 focus:border-orange-500'
                      }`}
                    />
                    {errors.email && (
                      <p id="contact-email-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono text-neutral-300 mb-2">
                    Subject <span className="text-orange-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Internship Opportunity / Project Collaboration"
                    disabled={status === 'loading'}
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                    className={`w-full px-4 py-3 rounded-xl bg-neutral-900/90 border text-sm text-neutral-100 placeholder-neutral-500 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500/50 ${
                      errors.subject
                        ? 'border-red-500/60 focus:border-red-500'
                        : 'border-neutral-800 focus:border-orange-500'
                    }`}
                  />
                  {errors.subject && (
                    <p id="contact-subject-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-neutral-300 mb-2">
                    Message <span className="text-orange-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message or inquiry here..."
                    disabled={status === 'loading'}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                    className={`w-full px-4 py-3 rounded-xl bg-neutral-900/90 border text-sm text-neutral-100 placeholder-neutral-500 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500/50 resize-y ${
                      errors.message
                        ? 'border-red-500/60 focus:border-red-500'
                        : 'border-neutral-800 focus:border-orange-500'
                    }`}
                  />
                  {errors.message && (
                    <p id="contact-message-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Status Banners */}
                <div aria-live="polite">
                  {status === 'success' && (
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-emerald-200">Message sent successfully!</p>
                        <p className="text-emerald-300/80 mt-0.5">
                          Thank you for reaching out. I will review your message and reply as soon as possible.
                        </p>
                      </div>
                    </div>
                  )}

                  {status === 'unconfigured' && (
                    <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm flex flex-col gap-2.5">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-amber-200">Direct Email Client Fallback</p>
                          <p className="text-amber-300/80 mt-0.5">
                            EmailJS API keys have not been configured in the environment (.env). You can dispatch this message directly with your pre-filled inquiry using your default email client:
                          </p>
                        </div>
                      </div>
                      <a
                        href={mailtoFallbackUrl}
                        className="inline-flex items-center gap-1.5 self-start px-3.5 py-2 rounded-lg bg-orange-500 hover:bg-orange-400 text-neutral-950 text-xs font-semibold transition-colors"
                      >
                        <span>Send via Email Client</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs sm:text-sm flex flex-col gap-2">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-red-200">Dispatch Error</p>
                          <p className="text-red-300/80 mt-0.5">{errorMessage}</p>
                        </div>
                      </div>
                      <a
                        href={mailtoFallbackUrl}
                        className="inline-flex items-center gap-1.5 self-start px-3 py-1.5 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-200 text-xs font-medium transition-colors"
                      >
                        <span>Open in Email Client</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Submit Button & Direct Email Link */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-neutral-950 bg-orange-500 hover:bg-orange-400 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-lg shadow-orange-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-neutral-950" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-neutral-950" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  {/* Reference helper line */}
                  <p className="mt-4 text-xs text-neutral-400">
                    Or email directly:{' '}
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-orange-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-mono"
                    >
                      {personalInfo.email}
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column: Tech Radar Orbit */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full flex flex-col items-center">
              <TechRadarOrbit />
              <div className="mt-6 text-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs font-mono">
                  <Sparkles className="w-3 h-3 text-orange-400" />
                  <span>Full-Stack & Systems Tech Radar</span>
                </span>
                <p className="mt-2 text-xs text-neutral-400 max-w-sm">
                  Interactive visual constellation of verified programming languages, frameworks, and engineering tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

