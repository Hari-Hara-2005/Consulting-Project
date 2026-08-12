import React from "react";
import PageTitleBanner from "../Components/Pagetitlebanner";
import FaqSection from "../Components/FaqSection";
import Footer from "../Components/Footer";

// Theme
const THEME = {
  primary: "#063231",
  secondary: "#C3DF94",
  accent: "#F75709",
};

const CheckIcon = ({ color }) => (
  <svg
    className="w-4 h-4 shrink-0"
    style={{ color }}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 17L17 7M17 7H7M17 7V17"
    />
  </svg>
);

const FEATURES = [
  ["Initial consultation", "Email support"],
  ["Online resources", "Flexible scheduling"],
  ["Tracking sheets", "Private client portal"],
];

function PricingCard({ highlighted = false, delay = 0 }) {
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="900"
      data-aos-delay={delay}
      data-aos-offset="120"
      className="rounded-2xl border p-8 flex flex-col sm:flex-row sm:items-center gap-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={
        highlighted
          ? {
              backgroundColor: THEME.primary,
              borderColor: THEME.primary,
            }
          : {
              backgroundColor: "#ffffff",
              borderColor: "#e2e8f0",
            }
      }
    >
      {/* Price block */}
      <div
        className="sm:w-56 shrink-0"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay={delay + 150}
      >
        <p
          className="text-lg mb-1"
          style={{
            color: highlighted ? THEME.secondary : THEME.primary,
          }}
        >
          Basic Package
        </p>

        <p
          className="text-6xl font-extrabold leading-none mb-6"
          style={{
            color: highlighted ? "#ffffff" : THEME.primary,
          }}
        >
          $199
          <span
            className="text-base font-medium align-baseline ml-1"
            style={{
              color: highlighted ? "#cbd5c9" : "#64748b",
            }}
          >
            /month
          </span>
        </p>

        <a
          href="#"
          className="inline-flex items-center gap-1.5 font-semibold text-sm transition-all duration-300 hover:gap-3 hover:opacity-80"
          style={{ color: THEME.accent }}
        >
          READ MORE
          <ArrowIcon />
        </a>
      </div>

      {/* Divider */}
      <div
        className="hidden sm:block w-px self-stretch"
        style={{
          backgroundColor: highlighted ? "rgba(255,255,255,0.15)" : "#e2e8f0",
        }}
      />

      {/* Features */}
      <div
        className="grid grid-cols-2 gap-x-10 gap-y-4"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay={delay + 250}
      >
        {FEATURES.map(([left, right], i) => (
          <React.Fragment key={i}>
            <div className="flex items-center gap-2.5">
              <CheckIcon color={highlighted ? THEME.secondary : "#22c55e"} />

              <span
                style={{
                  color: highlighted ? "#ffffff" : THEME.primary,
                }}
              >
                {left}
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <CheckIcon color={highlighted ? THEME.secondary : "#22c55e"} />

              <span
                style={{
                  color: highlighted ? "#ffffff" : THEME.primary,
                }}
              >
                {right}
              </span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <>
      {/* Page Banner */}
      <div data-aos="fade-down" data-aos-duration="900">
        <PageTitleBanner
          title="Pricing Plan"
          breadcrumbs={[
            { label: "Home", href: "/" },
            {
              label: "Pricing Plan",
              href: "#",
              active: true,
            },
          ]}
        />
      </div>

      {/* Pricing Section */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[420px_1fr] gap-16 items-start">
          {/* Left column */}
          <div
            className="lg:sticky lg:top-20"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-offset="150"
          >
            <p
              className="font-bold tracking-wide text-sm mb-3"
              style={{ color: THEME.accent }}
              data-aos="fade-up"
              data-aos-duration="700"
            >
              PRICING PLAN
            </p>

            <h2
              className="text-5xl font-extrabold leading-[1.05] mb-6"
              style={{ color: THEME.primary }}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              COACHING PACKAGES
              <br />
              THAT FIT YOU
            </h2>

            <p
              className="text-slate-500 leading-relaxed mb-8"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              Our coaching packages are designed to meet diverse needs and
              budgets, providing flexibility for every individual and
              organization. Whether you're seeking personal.
            </p>

            <button
              data-aos="zoom-in"
              data-aos-duration="700"
              data-aos-delay="300"
              className="font-bold text-sm tracking-wide px-7 py-4 rounded-lg text-white transition-all duration-300 hover:opacity-90 hover:-translate-y-1 hover:shadow-lg"
              style={{
                backgroundColor: THEME.accent,
              }}
            >
              GET ALL TOUCH
            </button>
          </div>

          {/* Right column - pricing cards */}
          <div className="flex flex-col gap-6">
            <PricingCard delay={0} />

            <PricingCard highlighted delay={150} />

            <PricingCard delay={300} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div data-aos="fade-up" data-aos-duration="900" data-aos-offset="120">
        <FaqSection />
      </div>

      {/* Footer */}
      <div data-aos="fade-up" data-aos-duration="800">
        <Footer />
      </div>
    </>
  );
}
