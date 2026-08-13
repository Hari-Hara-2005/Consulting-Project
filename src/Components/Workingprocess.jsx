import Title from "./Title";

const STEPS = [
  {
    step: "Step 01",
    title: "Onboarding",
    desc: "Initial consultations to identify the client's goals and challenges.",
  },
  {
    step: "Step 02",
    title: "Planning",
    desc: "Initial consultations to identify the client's goals and challenges.",
  },
  {
    step: "Step 03",
    title: "Implementation",
    desc: "Initial consultations to identify the client's goals and challenges.",
  },
];

export default function WorkingProcess() {
  return (
    <section className="relative bg-[#0d2b26] overflow-hidden py-20 px-6">
      {/* decorative hexagon pattern, top-right, fading toward center */}
      <div
        className="absolute top-0 right-0 w-[560px] h-[420px] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100' viewBox='0 0 56 100'%3E%3Cpath d='M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100' fill='none' stroke='%23ffffff' stroke-opacity='0.08'/%3E%3Cpath d='M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34' fill='none' stroke='%23ffffff' stroke-opacity='0.08'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          maskImage: "linear-gradient(to bottom left, black, transparent 70%)",
          WebkitMaskImage:
            "linear-gradient(to bottom left, black, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Title */}
        <div className="mb-16" data-aos="fade-up">
          <Title
            align="centre"
            subtitle="Working Progress"
            subtitleColor="#f36f21"
            titleColor="#ffffff"
            title={<>We make things easy for you to start</>}
          />
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col md:flex-row md:justify-between gap-14 md:gap-0">
          {/* continuous vertical line for mobile, spans full stack */}
          {/* <div
            className="md:hidden absolute left-1/2 top-6 bottom-6 w-px bg-white/15 -translate-x-1/2 z-0"
            data-aos="fade"
            data-aos-delay="200"
          /> */}

          {/* horizontal line for desktop, aligned through badge centers */}
          <div
            className="hidden md:block absolute top-6 left-0 right-0 h-px bg-white/15 z-0"
            data-aos="fade"
            data-aos-delay="200"
          />

          {STEPS.map((item, i) => (
            <div
              key={item.step}
              className="relative z-10 flex-1 flex flex-col items-center text-center md:px-6"
              data-aos="fade-up"
              data-aos-delay={i * 150}
              data-aos-duration="700"
            >
              <span className="bg-[#a9d18e] text-[#0d2b26] font-black text-xs uppercase tracking-wide px-5 py-2.5 rounded-full">
                {item.step}
              </span>
              <div className="w-px h-10 bg-white/15 my-2" />
              <h3 className="font-black text-xl text-white uppercase mb-2 tracking-wide">
                {item.title}
              </h3>
              <p className="text-white text-sm leading-relaxed max-w-[240px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
