import { useState } from "react";

function Title({ align = "left", subtitle, title }) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <p
        className="font-bold tracking-wide text-sm mb-3 uppercase"
        style={{ color: "#C9A227" }}
      >
        {subtitle}
      </p>

      <h2
        className="text-4xl sm:text-5xl font-extrabold leading-[1.1]"
        style={{ color: "#0A0A0A" }}
      >
        {title}
      </h2>
    </div>
  );
}

function ToggleIcon({ open, active }) {
  return (
    <svg
      className="w-4 h-4 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke={active ? "#FFFFFF" : "#0A0A0A"}
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" d="M5 12h14" />

      {!open && (
        <path
          strokeLinecap="round"
          d="M12 5v14"
        />
      )}
    </svg>
  );
}

function FaqItem({
  question,
  answer,
  isOpen,
  onClick,
  delay,
}) {
  return (
    <div
      className="rounded-xl overflow-hidden transition-colors duration-300"
      style={{
        backgroundColor: isOpen ? "#0A0A0A" : "#F5F5F5",
      }}
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-duration="600"
      data-aos-once="true"
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
      >
        <span
          className="font-bold text-sm sm:text-base tracking-wide"
          style={{
            color: isOpen ? "#FFFFFF" : "#0A0A0A",
          }}
        >
          {question}
        </span>

        <ToggleIcon
          open={isOpen}
          active={isOpen}
        />
      </button>

      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
        }}
      >
        <div className="overflow-hidden">
          <p
            className="px-6 pb-5 text-sm sm:text-base leading-relaxed"
            style={{
              color: isOpen ? "#E5E5E5" : "#555555",
            }}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

const FAQS = [
  {
    question:
      "Can Legacy Vault help families plan for future wealth?",
    answer:
      "Yes. We can help families develop structured approaches to wealth preservation, asset distribution, succession considerations, and long-term financial planning.",
  },
  {
    question:
      "What does the name Legacy Vault represent?",
    answer:
      "Legacy Vault represents our core philosophy: wealth should not only be created, but also protected, structured, and thoughtfully passed forward. We aim to help clients build a financial legacy that can stand the test of time.",
  },
  {
    question:
      "What is Legacy Vault's ultimate objective?",
    answer:
      "Our objective is to become a trusted strategic partner for clients by helping them preserve wealth, make informed asset decisions, plan efficiently for taxes, and prepare their financial legacy for the future.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-16 sm:py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

        {/* Left: Image with decorative blob */}
        <div
          className="relative w-full max-w-md mx-auto lg:mx-0"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          {/* Decorative gold blob */}
          <div
            className="hidden sm:block absolute -bottom-8 -left-8 w-3/4 h-3/4 rounded-[3rem] -z-10"
            style={{
              background:
                "linear-gradient(135deg, #D4AF37 0%, rgba(212,175,55,0) 100%)",
            }}
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="800"
          />

          <img
            src="assets/2.jpg"
            alt="Advisor discussing home insurance with a happy couple"
            className="relative w-full h-auto rounded-[2rem] object-cover shadow-lg"
          />
        </div>

        {/* Right: Title + Accordion */}
        <div>
          <div
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <Title
              align="left"
              subtitle="FAQ's"
              title={<>Frequently Asked Asked Question</>}
            />

            <p className="text-yellow-500 font-semibold leading-relaxed mt-5 mb-8 max-w-md">
              Explore answers to common questions about our consulting
              services, strategic planning, and business growth solutions.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {FAQS.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() =>
                  setOpenIndex(
                    openIndex === index ? -1 : index
                  )
                }
                delay={200 + index * 120}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}