import { useEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import Title from "../Components/Title";
import Service from "../Components/Service";
import AboutCompany from "../Components/Aboutcompany";
import StatsCounter from "../Components/Statscounter";
import WorkingProcess from "../Components/Workingprocess";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

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
// bg-[linear-gradient(135deg,#0d3b34_0%,#123f38_55%,#0d3b34_100%)]
// ---------------------------------------------------------

export default function Hero() {
  return (
    <>
      <section
        className="
        overflow-hidden
        
        bg-black
        px-6
        py-8
        md:px-8
        md:py-5
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
              <span className="text-[#f7bd02]">Business</span>
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

            <Link to="/contact-us">
              <button
                className="
              mt-8
              md:mt-4
              rounded-full
              bg-[#f7bd02]
              px-7
              py-3.5
              text-[0.8rem]
              font-bold
              uppercase
              tracking-[0.03em]
              text-black
              transition-colors
              hover:bg-white
              hover:text-black
            "
              >
                Let's Get In Touch
              </button>
            </Link>
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
    px-2
    sm:px-0
  "
          >
            <div
              className="
      relative
      w-full
      max-w-[360px]
      sm:max-w-[400px]
      md:max-w-[460px]
      lg:w-[460px]
    "
            >
              {/* Main Image */}
              <img
                src="assets/home4.png"
                alt="Smiling business professional"
                className="
        block
        w-full
        rounded-full
        p-3
        sm:p-4
        md:p-5
      "
              />

              {/* =====================================
        ROI CARD
    ===================================== */}
              <div
                className="
        absolute

        left-[-4px]
        sm:left-[-10px]
        md:left-[-20px]

        bottom-[35px]
        sm:bottom-[70px]
        md:bottom-[175px]

        z-20

        w-[125px]
        sm:w-[145px]
        md:w-[165px]

        rounded-xl
        sm:rounded-2xl

        bg-[#0A0A0A]
        border
        border-[#D4AF37]/50

        px-3
        py-2.5
        sm:px-3.5
        sm:py-3
        md:px-4
        md:py-3.5

        shadow-[0_10px_25px_rgba(0,0,0,0.22)]

        animate-float-smooth
      "
              >
                {/* Label */}
                <div className="flex items-center gap-1.5 mb-1.5">
                  <div
                    className="
            flex
            h-6
            w-6
            sm:h-7
            sm:w-7
            items-center
            justify-center
            rounded-full
            bg-[#D4AF37]
            shrink-0
          "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="
              w-3
              h-3
              sm:w-3.5
              sm:h-3.5
              text-[#0A0A0A]
            "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 17l6-6 4 4 8-9"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 6h4v4"
                      />
                    </svg>
                  </div>

                  <span
                    className="
            text-[8px]
            sm:text-[9px]
            md:text-[10px]
            font-bold
            uppercase
            tracking-wider
            text-white/60
          "
                  >
                    ROI
                  </span>
                </div>

                {/* Number */}
                <div className="flex items-baseline gap-0.5">
                  <span
                    className="
            text-2xl
            sm:text-3xl
            md:text-4xl
            font-black
            leading-none
            text-[#D4AF37]
          "
                  >
                    98
                  </span>

                  <span
                    className="
            text-sm
            sm:text-base
            font-bold
            text-[#D4AF37]
          "
                  >
                    %
                  </span>
                </div>

                {/* Description */}
                <p
                  className="
          mt-1
          text-[8px]
          sm:text-[9px]
          md:text-[10px]
          leading-tight
          font-medium
          text-white/65
        "
                >
                  Return on investment
                </p>
              </div>

              {/* =====================================
        HAPPY CLIENTS CARD
    ===================================== */}
              <div
                className="
        absolute

        right-[-4px]
        sm:right-[-8px]
        md:right-[-10px]

        top-[-2px]
        sm:top-[15px]
        md:top-[38%]

        z-20

        w-[125px]
        sm:w-[145px]
        md:w-[165px]

        rounded-xl
        sm:rounded-2xl

        bg-white
        border
        border-[#D4AF37]/40

        px-3
        py-2.5
        sm:px-3.5
        sm:py-3
        md:px-4
        md:py-3.5

        text-center

        shadow-[0_10px_25px_rgba(0,0,0,0.12)]

        animate-float-smooth
      "
              >
                {/* Gold Label */}
                <p
                  className="
          text-[8px]
          sm:text-[9px]
          md:text-[10px]
          font-bold
          uppercase
          tracking-wider
          text-[#C9A227]
          mb-1
        "
                >
                  Happy Clients
                </p>

                {/* Number */}
                <div
                  className="
          flex
          items-baseline
          justify-center
          gap-0.5
        "
                >
                  <span
                    className="
            text-2xl
            sm:text-3xl
            md:text-4xl
            font-black
            leading-none
            text-[#0A0A0A]
          "
                  >
                    5000
                  </span>

                  <span
                    className="
            text-sm
            sm:text-base
            font-bold
            text-[#C9A227]
          "
                  >
                    +
                  </span>
                </div>

                {/* Description */}
                <p
                  className="
          mt-1
          text-[8px]
          sm:text-[9px]
          md:text-[10px]
          leading-tight
          font-medium
          text-[#6B6B6B]
        "
                >
                  Clients worldwide
                </p>
              </div>
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
        <Testimonials />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}
