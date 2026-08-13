import { useState } from "react";

// Theme
const THEME = {
  primary: "#063231", // dark teal
  secondary: "#C3DF94", // light green
  accent: "#F75709", // orange
};

function Title({ align = "left", subtitle, title }) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <p
        className="font-bold tracking-wide text-sm mb-3 uppercase"
        style={{ color: THEME.accent }}
      >
        {subtitle}
      </p>
      <h2
        className="text-4xl sm:text-5xl font-extrabold leading-[1.1]"
        style={{ color: THEME.primary }}
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
      stroke={active ? "#ffffff" : THEME.primary}
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" d="M5 12h14" />
      {!open && <path strokeLinecap="round" d="M12 5v14" />}
    </svg>
  );
}

function FaqItem({ question, answer, isOpen, onClick, delay }) {
  return (
    <div
      className="rounded-xl overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: isOpen ? THEME.primary : "#f3f4f6" }}
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
          style={{ color: isOpen ? "#ffffff" : THEME.primary }}
        >
          {question}
        </span>
        <ToggleIcon open={isOpen} active={isOpen} />
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
            style={{ color: isOpen ? "#e2e8e0" : "#475569" }}
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
    question: "HOW TO CHOOSE HEALTH INSURANCE?",
    answer:
      "If you ask our clients what it's like working 36, they'll about how much we care about their success.",
  },
  {
    question: "HOW DOES LIFE INSURANCE HELP MY FAMILY?",
    answer:
      "Life insurance provides financial protection for your loved ones, covering expenses and securing their future in your absence.",
  },
  {
    question: "ESSENTIAL TYPES OF BUSINESS INSURANCE?",
    answer:
      "Business insurance typically covers liability, property, workers' compensation, and business interruption to protect your company.",
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
          {/* Decorative green blob */}
          <div
            className="hidden sm:block absolute -bottom-8 -left-8 w-3/4 h-3/4 rounded-[3rem] -z-10"
            style={{
              background: `linear-gradient(135deg, ${THEME.secondary} 0%, rgba(195,223,148,0) 100%)`,
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
          <div data-aos="fade-left" data-aos-duration="800">
            <Title
              align="left"
              subtitle="FAQ's"
              title={<>Frequently Asked Asked Question</>}
            />

            <p className="text-gray-800 font-semibold leading-relaxed mt-5 mb-8 max-w-md">
              Morem ipsum dolor sit amet, consectetur adipiscing elita florai
              psum dolor sit amet, amet consecteture.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {FAQS.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                delay={200 + index * 120}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
