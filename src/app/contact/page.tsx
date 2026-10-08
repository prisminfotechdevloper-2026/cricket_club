import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Calendar, Mail, Phone, Clock, MessageSquare, ChevronRight, Shield } from "lucide-react";
import { Container } from "@/components/common/Container";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Club & Cricket Support",
  description:
    "Get in touch with Devpur Cricket Club. Send cricket queries regarding net practice trials at Matunga Ground, match fixture requests, sponsorships, and team selection.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      {/* 1. Header / Light Theme Hero */}
      <section className="bg-gradient-to-b from-stone-100 via-stone-50 to-white text-stone-900 pt-10 pb-12 sm:pt-14 sm:pb-16 border-b border-stone-200">
        <Container>
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-mono text-stone-500 mb-3">
              <Link href="/" className="hover:text-stone-900 transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              <span className="text-[#EA6E18] font-semibold">Contact &amp; Support</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EA6E18]/10 text-[#EA6E18] border border-[#EA6E18]/20 text-xs font-mono font-bold tracking-wider uppercase mb-3">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>DCC Helpdesk • Community Support</span>
            </div>

            <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-stone-900 leading-tight">
              Contact Club &amp; Send Cricket Queries
            </h1>

            <p className="mt-3 text-base sm:text-lg text-stone-600 font-body leading-relaxed">
              Have questions about net practice trials, match fixtures, team selection, or supporting Devpur Cricket Club? Send your query directly to our team coordinator.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Main Content: Contact Form & Ground Details */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Direct Club Coordinates (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Practice Ground Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#EA6E18]">
                  <MapPin className="w-4 h-4" />
                  <span>Practice Ground Location</span>
                </div>
                <div>
                  <h3 className="font-headline text-xl font-bold text-stone-900">
                    Matunga Ground, Mumbai
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                    Turf wickets &amp; clay net lanes located near Dadar / Matunga sports hub.
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 space-y-2.5 text-xs text-stone-700 font-mono">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#EA6E18] shrink-0" />
                    <span>Practice Days: Mon • Wed • Fri</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#EA6E18] shrink-0" />
                    <span>Morning Session: 7:00 AM – 9:30 AM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#EA6E18] shrink-0" />
                    <span>Supervised by Coach Aditya Koli</span>
                  </div>
                </div>
              </div>

              {/* Direct Communication Channels */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-sm space-y-4">
                <h4 className="font-headline text-lg font-bold text-stone-900">
                  Direct Channels
                </h4>
                <div className="space-y-3 text-sm text-stone-700">
                  <a
                    href="mailto:devpurcc@gmail.com"
                    className="flex items-center gap-3 p-3 rounded-xl bg-stone-50 hover:bg-[#EA6E18]/10 text-stone-800 hover:text-[#EA6E18] transition-colors group border border-stone-200"
                  >
                    <Mail className="w-4 h-4 text-[#EA6E18] shrink-0" />
                    <div>
                      <span className="text-[11px] font-mono text-stone-500 block uppercase">Official Email</span>
                      <span className="font-bold text-xs sm:text-sm">devpurcc@gmail.com</span>
                    </div>
                  </a>

                  <a
                    href="https://instagram.com/devpurcricketclub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-stone-50 hover:bg-[#EA6E18]/10 text-stone-800 hover:text-[#EA6E18] transition-colors group border border-stone-200"
                  >
                    <span className="w-4 h-4 flex items-center justify-center font-bold text-xs text-[#EA6E18] shrink-0">IG</span>
                    <div>
                      <span className="text-[11px] font-mono text-stone-500 block uppercase">Instagram Updates</span>
                      <span className="font-bold text-xs sm:text-sm">@devpurcricketclub</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Guidelines for New Trial Players */}
              <div className="p-5 rounded-2xl bg-[#FFF8F0] border border-[#EA6E18]/30 text-xs text-stone-800 space-y-2">
                <span className="font-mono text-[#EA6E18] font-bold block uppercase tracking-wider">
                  Trial Players Note:
                </span>
                <p className="leading-relaxed">
                  Attending a net session trial? Please arrive 15 minutes before 7:00 AM in standard cricket whites with your personal batting or bowling kit.
                </p>
              </div>
            </div>

            {/* Right Column: Contact Query Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
