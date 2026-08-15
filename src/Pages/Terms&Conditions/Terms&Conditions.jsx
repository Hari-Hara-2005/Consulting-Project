import React from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

/**
 * TermsAndConditions.jsx
 * -----------------------------------------------------------------------
 * Drop-in page component for a React + Vite + Tailwind CSS project.
 *
 * Setup:
 * 1. Copy this file into src/pages/ (or src/components/).
 * 2. Make sure Tailwind CSS is configured in your Vite project
 *    (index.css should include @tailwind base/components/utilities).
 * 3. Import and route to it, e.g. with react-router-dom:
 *
 *      import TermsAndConditions from "./pages/TermsAndConditions";
 *      <Route path="/terms" element={<TermsAndConditions />} />
 *
 * Palette (gold / white / black):
 *   --black:      #0B0B0C
 *   --charcoal:   #1A1A1D
 *   --gold:       #C9A24B
 *   --gold-light: #E7CE84
 *   --white:      #FAFAF9
 * -----------------------------------------------------------------------
 */

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: `By accessing or using this website and its services, you agree to be
    bound by these Terms and Conditions. If you do not agree with any part of
    these terms, please discontinue use of the service immediately.`,
  },
  {
    title: "Use of Service",
    body: `You agree to use this service only for lawful purposes and in a way
    that does not infringe the rights of, restrict, or inhibit anyone else's
    use of the service. Unauthorized use may give rise to a claim for damages
    or be a criminal offense.`,
  },
  {
    title: "Intellectual Property",
    body: `All content, trademarks, logos, and materials displayed on this
    site are the property of their respective owners and are protected by
    applicable intellectual property laws. Nothing in these terms grants you
    a license to reproduce or exploit that content without prior consent.`,
  },
  {
    title: "User Accounts",
    body: `If you create an account with us, you are responsible for
    maintaining the confidentiality of your credentials and for all
    activities that occur under your account. Notify us immediately of any
    unauthorized use.`,
  },
  {
    title: "Limitation of Liability",
    body: `This service is provided on an "as is" and "as available" basis.
    We make no warranties, expressed or implied, and disclaim all other
    warranties. We shall not be liable for any indirect, incidental, or
    consequential damages arising from your use of the service.`,
  },
  {
    title: "Changes to These Terms",
    body: `We reserve the right to modify these terms at any time. Changes
    take effect immediately upon posting. Continued use of the service after
    changes are posted constitutes your acceptance of the revised terms.`,
  },
  {
    title: "Governing Law",
    body: `These terms shall be governed by and construed in accordance with
    the laws of the jurisdiction in which our company is registered, without
    regard to its conflict of law provisions.`,
  },
  {
    title: "Contact Us",
    body: `If you have any questions about these Terms and Conditions, please
    reach out to us through our official support channels.`,
  },
];

export default function TermsAndConditions() {
  return (
    <section>
        <Navbar />
    <div className="min-h-screen bg-[#FAFAF9] text-[#0B0B0C]">
      {/* ---------- Header ---------- */}
      <header className="relative overflow-hidden bg-[#0B0B0C]">
        {/* thin gold hairlines top & bottom for a "letterpress" feel */}
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#C9A24B] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-[#C9A24B]/40" />

        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20 md:py-24 text-center">
          <span className="inline-block text-[11px] sm:text-xs tracking-[0.35em] uppercase text-[#C9A24B] mb-4">
            Legal Agreement
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight text-[#FAFAF9]">
            Terms &amp; Conditions
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#E7CE84]/80">
            Last updated: August 15, 2026
          </p>
        </div>
      </header>

      {/* ---------- Body ---------- */}
      <main className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        {/* Intro card */}
        <div className="mb-12 border border-[#C9A24B]/30 bg-white rounded-md p-6 sm:p-8 shadow-sm">
          <p className="text-sm sm:text-base leading-relaxed text-[#1A1A1D]">
            Please read these Terms and Conditions carefully before using our
            website or services. These terms outline the rules and
            regulations governing your relationship with us as a user of our
            platform.
          </p>
        </div>

        {/* Numbered sections */}
        <ol className="space-y-10 sm:space-y-12">
          {SECTIONS.map((section, index) => (
            <li key={section.title} className="group">
              <div className="flex items-start gap-4 sm:gap-6">
                {/* Gold numeral marker */}
                <span
                  className="flex-shrink-0 flex items-center justify-center
                             w-9 h-9 sm:w-11 sm:h-11 rounded-full
                             border border-[#C9A24B] text-[#C9A24B]
                             font-serif text-sm sm:text-base
                             transition-colors duration-300
                             group-hover:bg-[#C9A24B] group-hover:text-[#0B0B0C]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex-1 border-b border-[#0B0B0C]/10 pb-8 sm:pb-10">
                  <h2 className="font-serif text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 text-[#0B0B0C]">
                    {section.title}
                  </h2>
                  <p className="text-sm sm:text-base leading-relaxed text-[#1A1A1D]/80">
                    {section.body}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        {/* Acceptance footer note */}
        <div className="mt-14 sm:mt-16 rounded-md bg-[#0B0B0C] px-6 py-8 sm:px-10 sm:py-10 text-center">
          <p className="text-[#E7CE84] font-serif text-base sm:text-lg mb-1">
            By continuing to use our service, you accept these terms.
          </p>
          <p className="text-[#FAFAF9]/60 text-xs sm:text-sm">
            Questions? Contact our support team at any time.
          </p>
        </div>
      </main>

      {/* ---------- Footer ---------- */}
      <div>
        <Footer />
      </div>
    </div>
    </section>
  );
}