import React from "react";
import PageTitleBanner from "../Components/Pagetitlebanner";
import FaqSection from "../Components/FaqSection";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const CheckIcon = ({ color }) => (
  <svg
    className="w-4 h-4 shrink-0"
    style={{ color }}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 13l4 4L19 7"
    />
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

function PricingCard({
  highlighted = false,
  delay = 0,
  packageName = "Basic Package",
  price = "299",
  features = [],
}) {
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
              backgroundColor: "#0A0A0A",
              borderColor: "#0A0A0A",
            }
          : {
              backgroundColor: "#FFFFFF",
              borderColor: "#E5E5E5",
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
            color: highlighted ? "#F7BD02" : "#0A0A0A",
          }}
        >
          {packageName}
        </p>

        <p
          className="text-6xl font-extrabold leading-none mb-6"
          style={{
            color: highlighted ? "#FFFFFF" : "#0A0A0A",
          }}
        >
          ${price}

          <span
            className="text-base font-medium align-baseline ml-1"
            style={{
              color: highlighted ? "#D6D6D6" : "#6B6B6B",
            }}
          >
            /month
          </span>
        </p>

        <Link
          to="/contact-us"
          className="
            inline-flex
            items-center
            gap-2
            text-sm
            font-bold
            uppercase
            tracking-wide
            text-[#C9A227]
            transition-all
            duration-300
            hover:text-[#FFFFFF]
            hover:gap-3
          "
        >
          Read More
          <ArrowIcon />
        </Link>
      </div>

      {/* Divider */}
      <div
        className="hidden sm:block w-px self-stretch"
        style={{
          backgroundColor: highlighted
            ? "rgba(255,255,255,0.15)"
            : "#E5E5E5",
        }}
      />

      {/* Features */}
      <div
        className="grid grid-cols-2 gap-x-10 gap-y-4"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay={delay + 250}
      >
        {features.map((feature, i) => (
          <React.Fragment key={i}>
            {/* Left Feature */}
            <div className="flex items-center gap-2.5">
              <CheckIcon
                color={highlighted ? "#F7BD02" : "#F7BD02"}
              />

              <span
                style={{
                  color: highlighted ? "#FFFFFF" : "#0A0A0A",
                }}
              >
                {feature[0]}
              </span>
            </div>

            {/* Right Feature */}
            <div className="flex items-center gap-2.5">
              <CheckIcon
                color={highlighted ? "#F7BD02" : "#F7BD02"}
              />

              <span
                style={{
                  color: highlighted ? "#FFFFFF" : "#0A0A0A",
                }}
              >
                {feature[1]}
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
              className="text-xl font-bold tracking-wide mb-3"
              style={{ color: "#F7BD02" }}
              data-aos="fade-up"
              data-aos-duration="700"
            >
              PRICING PLAN
            </p>

            <h2
              className="text-4xl md:text-5xl font-extrabold leading-[1.05] mb-6"
              style={{ color: "#0A0A0A" }}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              COACHING PACKAGES THAT FIT YOU
            </h2>

            <p
              className="text-yellow-500 font-semibold leading-relaxed mb-8"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              Our coaching packages are designed to meet diverse needs and
              budgets, providing flexibility for every individual and
              organization. Whether you're seeking personal.
            </p>

            <Link to="/contact-us">
              <button
                data-aos="zoom-in"
                data-aos-duration="700"
                data-aos-delay="300"
                className="font-bold text-sm tracking-wide px-7 py-4 rounded-lg text-black transition-all duration-300 hover:opacity-90 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  backgroundColor: "#F7BD02",
                }}
              >
                GET ALL TOUCH
              </button>
            </Link>
          </div>

          {/* Right column - pricing cards */}
          <div className="flex flex-col gap-6">

            <PricingCard
              packageName="Basic Package"
              price="299"
              highlighted={false}
              delay={0}
              features={[
                ["5 Pages", "Responsive Design"],
                ["Basic SEO", "Contact Form"],
                ["1 Revision", "Email Support"],
              ]}
            />

            <PricingCard
              packageName="Standard Package"
              price="399"
              highlighted={true}
              delay={150}
              features={[
                ["10 Pages", "Responsive Design"],
                ["Advanced SEO", "Contact Form"],
                ["3 Revisions", "Priority Support"],
              ]}
            />

            <PricingCard
              packageName="Premium Package"
              price="999"
              highlighted={false}
              delay={300}
              features={[
                ["Unlimited Pages", "Premium Design"],
                ["Advanced SEO", "Google Analytics"],
                ["Unlimited Revisions", "Priority Support"],
              ]}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-offset="120"
      >
        <FaqSection />
      </div>

      {/* Footer */}
      <div data-aos="fade-up" data-aos-duration="800">
        <Footer />
      </div>
    </>
  );
}