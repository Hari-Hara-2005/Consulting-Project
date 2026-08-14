import { useEffect, useRef, useState } from "react";

const TESTIMONIALS = [
  {
    quote:
      "Guidance transformed the way we do business. Their innovative solutions and forward-thinking approach revitalized our organization. The results speak for themselves, and we couldn't be happier with the outcome. Trusting Guidance was a wise investment in our future.",
    name: "John Smith",
    role: "Head of Developer",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    quote:
      "Working with this team gave us clarity we didn't have before. Their strategic guidance and hands-on support helped us scale faster than we imagined, and every milestone felt achievable with them beside us.",
    name: "Amara Chen",
    role: "Marketing Director",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    quote:
      "From the first consultation to final delivery, the process was seamless. They understood our goals instantly and delivered a plan that exceeded every expectation we had.",
    name: "Michael Ortiz",
    role: "Operations Lead",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
];

const AUTOPLAY_DELAY = 5000;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const total = TESTIMONIALS.length;
  const active = TESTIMONIALS[index];

  // -----------------------------
  // AUTOPLAY
  // -----------------------------
  const startAutoplay = () => {
    clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, AUTOPLAY_DELAY);
  };

  useEffect(() => {
    startAutoplay();

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  // -----------------------------
  // NEXT
  // -----------------------------
  const goNext = () => {
    setIndex((prev) => (prev + 1) % total);
    startAutoplay();
  };

  // -----------------------------
  // PREVIOUS
  // -----------------------------
  const goPrev = () => {
    setIndex((prev) => (prev - 1 + total) % total);
    startAutoplay();
  };

  // -----------------------------
  // DOT
  // -----------------------------
  const goTo = (i) => {
    setIndex(i);
    startAutoplay();
  };

  return (
    <section
      className="
        w-full
        max-w-6xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        md:py-16
      "
    >
      <div
        className="
          relative
          w-full
          overflow-hidden
          bg-[#f4f6f5]
          rounded-3xl

          px-5
          py-10

          sm:px-8
          sm:py-12

          md:px-10
          md:py-14

          lg:px-14
          lg:py-14
        "
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* =====================================
            LEFT + RIGHT CONTENT
        ===================================== */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10
            lg:gap-12
            xl:gap-16
            items-center
          "
        >
          {/* =====================================
              LEFT SIDE
          ===================================== */}
          <div
            className="w-full min-w-0"
            data-aos="fade-right"
            data-aos-delay="150"
            data-aos-duration="900"
          >
            {/* Small Heading */}
            <p
              className="
                text-[#f7bd02]
                font-bold
                uppercase
                tracking-wide
                text-xs
                sm:text-sm
                mb-3
              "
            >
              Testimonials
            </p>

            {/* Main Heading */}
            <h2
              className="
                font-black
                text-2xl
                sm:text-3xl
                md:text-4xl
                leading-tight
                text-black
                uppercase
                mb-8
                sm:mb-10
              "
            >
              What Are They Saying
              <br />
              About Us?
            </h2>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Previous */}
              <button
                onClick={goPrev}
                aria-label="Previous testimonial"
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-white
                  shadow-sm
                  flex
                  items-center
                  justify-center
                  hover:bg-gray-100
                  transition-all
                  duration-300
                  hover:-translate-x-1
                  shrink-0
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="w-5 h-5 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Next */}
              <button
                onClick={goNext}
                aria-label="Next testimonial"
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-[#f7bd02]
                  flex
                  items-center
                  justify-center
                  hover:bg-black
                  transition-all
                  duration-300
                  hover:translate-x-1
                  shrink-0
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="w-5 h-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* =====================================
              RIGHT SIDE
          ===================================== */}
          <div
            className="
              w-full
              min-w-0
              lg:border-l
              lg:border-gray-300
              lg:pl-10
              xl:pl-12
            "
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            {/* Rating */}
            <div
              className="flex items-center gap-1 mb-4"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              {Array.from({ length: active.rating }).map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#C9A227"
                  className="w-5 h-5 shrink-0"
                >
                  <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.8L10 14.9l-5.2 2.62.99-5.8-4.21-4.1 5.82-.85z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <p
              key={active.quote}
              data-aos="fade-up"
              data-aos-duration="700"
              className="
                font-bold
                text-lg
                sm:text-xl
                leading-snug
                text-black
                mb-7
                sm:mb-8
                break-words
              "
            >
              "{active.quote}"
            </p>

            {/* User */}
            <div
              key={active.name}
              className="flex items-center gap-3"
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="700"
            >
              <img
                src={active.avatar}
                alt={active.name}
                loading="lazy"
                className="
                  w-12
                  h-12
                  rounded-full
                  object-cover
                  shrink-0
                "
              />

              <div className="min-w-0">
                <h4
                  className="
                    font-black
                    text-black
                    uppercase
                    text-sm
                    tracking-wide
                  "
                >
                  {active.name}
                </h4>

                <p className="text-gray-500 text-sm">
                  {active.role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================
            PAGINATION DOTS
        ===================================== */}
        <div
          className="
            flex
            justify-center
            lg:justify-start
            mt-8
            sm:mt-10
            gap-3
          "
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`
                rounded-full
                transition-all
                duration-300
                shrink-0

                ${
                  i === index
                    ? "w-2.5 h-2.5 bg-[#f7bd02]"
                    : "w-4 h-4 border-2 border-[#F75709]/30"
                }
              `}
            />
          ))}
        </div>

        {/* =====================================
            MOBILE / TABLET NAVIGATION
        ===================================== */}
        <div
          className="
            flex
            lg:hidden
            items-center
            justify-center
            gap-4
            mt-8
          "
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {/* Previous */}
          <button
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="
              w-12
              h-12
              rounded-full
              bg-white
              shadow-sm
              flex
              items-center
              justify-center
              hover:bg-gray-100
              transition-colors
              duration-300
              shrink-0
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="w-5 h-5 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={goNext}
            aria-label="Next testimonial"
            className="
              w-12
              h-12
              rounded-full
              bg-[#f7bd02]
              flex
              items-center
              justify-center
              hover:bg-black
              transition-colors
              duration-300
              shrink-0
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="w-5 h-5 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}