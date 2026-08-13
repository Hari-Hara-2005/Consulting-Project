import { useEffect, useRef, useState } from "react";

const STATS = [
  {
    target: 10,
    suffix: "K",
    label: "Years In Business",
    desc: "Creating the successful path",
  },
  {
    target: 450,
    suffix: "",
    label: "Projects Delivered",
    desc: "with client satisfaction in 6 years",
  },
  {
    target: 37,
    suffix: "",
    label: "Team Members",
    desc: "Working for your success",
  },
];

const DURATION = 2500; // ms — slow, smooth count-up

function useCountUp(target, shouldStart) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let rafId;
    const startTime = performance.now();

    const frame = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / DURATION, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out
      setValue(Math.floor(eased * target));

      if (progress < 1) {
        rafId = requestAnimationFrame(frame);
      } else {
        setValue(target);
      }
    };

    rafId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafId);
  }, [shouldStart, target]);

  return value;
}

function StatItem({ stat, shouldStart, isLast, index }) {
  const value = useCountUp(stat.target, shouldStart);

  return (
    <div
      className={`text-center ${!isLast ? "sm:border-r border-gray-300" : ""}`}
      data-aos="fade-up"
      data-aos-delay={index * 150}
      data-aos-duration="700"
    >
      <p className="font-black text-5xl text-[#0d2b26] mb-3 tracking-tight">
        {value}
        {stat.suffix}
        <span className="text-[#F75709]">+</span>
      </p>
      <h4 className="font-black text-lg text-[#0d2b26] uppercase mb-1 tracking-wide">
        {stat.label}
      </h4>
      <p className="text-gray-800 font-semibold text-sm">{stat.desc}</p>
    </div>
  );
}

export default function StatsCounter() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="max-w-6xl mx-auto px-6 py-10" ref={sectionRef}>
      <div
        className="bg-[#f4f6f5] rounded-2xl px-10 py-12 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-0"
        data-aos="fade-up"
      >
        {STATS.map((stat, i) => (
          <StatItem
            key={stat.label}
            stat={stat}
            shouldStart={hasAnimated}
            isLast={i === STATS.length - 1}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
