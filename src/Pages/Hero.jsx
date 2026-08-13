import { useEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import Title from "../Components/Title";
import Service from "../Components/Service";
import AboutCompany from "../Components/Aboutcompany";
import StatsCounter from "../Components/Statscounter";
import WorkingProcess from "../Components/Workingprocess";
import TeamMembers from "../Components/Teammembers";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";

function useCountUp(target, { duration = 5000, decimals = 0 } = {}) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun.current) {
            hasRun.current = true;

            const start = performance.now();

            const tick = (now) => {
              const progress = Math.min((now - start) / duration, 1);

              // Ease-out cubic
              const eased = 1 - Math.pow(1 - progress, 3);

              setValue(target * eased);

              if (progress < 1) {
                requestAnimationFrame(tick);
              } else {
                setValue(target);
              }
            };

            requestAnimationFrame(tick);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [target, duration]);

  const display =
    decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();

  return [display, ref];
}

// ---------------------------------------------------------
// Stat Card
// ---------------------------------------------------------

function StatCard({
  value,
  decimals,
  suffix,
  label,
  className = "",
  delay = 0,
  duration,
}) {
  const [display, ref] = useCountUp(value, {
    decimals,
    duration,
  });

  return (
    <div
      ref={ref}
      className={`
        absolute
        min-w-[150px]
        rounded-2xl
        border
        border-white/25
        bg-white/[0.14]
        px-6
        py-4
        shadow-[0_12px_30px_rgba(0,0,0,0.25)]
        backdrop-blur-[14px]
        animate-float
        ${className}
      `}
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      <div className="text-[1.9rem] font-extrabold leading-[1.1] text-white">
        {display}
        {suffix}
      </div>

      <div className="mt-2 text-[0.85rem] font-medium text-white/85">
        {label}
      </div>
    </div>
  );
}

// ---------------------------------------------------------
// Hero
// ---------------------------------------------------------

export default function Hero() {
  return (
    <>
      <section
        className="
        overflow-hidden
        bg-[linear-gradient(135deg,#0d3b34_0%,#123f38_55%,#0d3b34_100%)]
        px-6
        py-8
        md:px-8
        md:py-10
      "
      >
        <Navbar />

        <div
          className="
          mx-auto
          flex
          max-w-[1300px]
          flex-col
          items-center
          gap-12
          md:flex-row
          md:gap-4
        "
        >
          {/* ------------------------------------------------
            Left Content
        ------------------------------------------------ */}

          <div className="flex-1">
            <h1
              className="
              mt-10
              md:mt-0
              text-[2.4rem]
              font-black
              uppercase
              leading-[1.05]
              tracking-[0.01em]
              text-white
              sm:text-[3.2rem]
              md:text-[5.2rem]
            "
            >
              Innovative
              <br />
              <span className="text-[#b7d17e]">Business</span>
              <br />
              Solutions
              <br />
              For Everyone
            </h1>

            <p
              className="
              mt-6
              max-w-[520px]
              text-base
              leading-[1.6]
              text-white
              font-semibold
            "
            >
              Our team prioritizes usability and accessibility to ensure that
              every visitor enjoys a seamless intuitive.
            </p>

            <button
              className="
              mt-8
              md:mt-4
              rounded-full
              bg-[#f36f21]
              px-7
              py-3.5
              text-[0.8rem]
              font-bold
              uppercase
              tracking-[0.03em]
              text-white
              transition-colors
              hover:bg-[#d95f18]
            "
            >
              Let's Get In Touch
            </button>
          </div>

          {/* ------------------------------------------------
            Right Image + Stats
        ------------------------------------------------ */}

          <div
            className="
            relative
            flex
            w-full
            flex-1
            justify-center
          "
          >
            <div
              className="
              relative
              w-full
              max-w-[460px]
              md:w-[460px]
            "
            >
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80&auto=format&fit=crop"
                alt="Smiling business professional"
                className="
                block
                w-full
                rounded-full
                p-5
              "
              />

              {/* ROI Card */}

              <StatCard
                value={98}
                suffix="%"
                label="Return on investment"
                delay={0}
                duration={4500}
                className="
                bottom-[50px]
                md:bottom-[175px]
                left-0
                sm:left-[-20px]
              "
              />

              {/* Happy Clients Card */}

              <StatCard
                value={22.5}
                decimals={1}
                suffix="K"
                label="Happy clients worldwide"
                delay={0.6}
                duration={5500}
                className="
                right-0
                top-[-2%]
                md:top-[38%]
                sm:right-[-10px]
              "
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-16">
        <Title
          align="center"
          subtitle="Our Services"
          title={<>Versatile Range Of Business Solutions</>}
        />
        <Service />
      </section>
      <section>
        <AboutCompany />
      </section>
      <section>
        <StatsCounter />
      </section>
      <section>
        <WorkingProcess />
      </section>
      <section>
        <TeamMembers />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}
