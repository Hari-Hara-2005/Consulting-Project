import { useEffect, useRef, useState } from "react";

const TESTIMONIALS = [
  {
    quote:
      "Guidance transformed the way we do business. Their innovative solutions and forward-thinking approach revitalized our organization. The results for themselves, and we couldn't be happier with the outcome. Trusting Guidance was a wise investment in our future.",
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
      "From the first consultation to final delivery, the process was seamless. They understood our goals instantly and delivered a plan that exceeded every expectation we had going in.",
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

  const peekIndex = (index - 1 + total) % total;
  const active = TESTIMONIALS[index];
  const peek = TESTIMONIALS[peekIndex];

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

  const goNext = () => {
    setIndex((prev) => (prev + 1) % total);
    startAutoplay();
  };

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + total) % total);
    startAutoplay();
  };

  const goTo = (i) => {
    setIndex(i);
    startAutoplay();
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div
        className="relative overflow-hidden bg-[#f4f6f5] rounded-3xl px-8 md:px-14 py-14"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr_1fr] gap-10 lg:gap-0 items-center">
          {/* LEFT: Title + Navigation */}
          <div
            data-aos="fade-right"
            data-aos-delay="150"
            data-aos-duration="900"
          >
            <p className="text-[#F75709] font-bold uppercase tracking-wide text-sm mb-3">
              Testimonials
            </p>

            <h2 className="font-black text-3xl md:text-4xl leading-tight text-[#0d2b26] uppercase mb-10">
              What Are They Saying
              <br />
              About Us?
            </h2>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={goPrev}
                aria-label="Previous testimonial"
                className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-gray-100 transition-all duration-300 hover:-translate-x-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="w-5 h-5 text-[#0d2b26]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={goNext}
                aria-label="Next testimonial"
                className="w-12 h-12 rounded-full bg-[#F75709] flex items-center justify-center hover:bg-[#0d2b26] transition-all duration-300 hover:translate-x-1"
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

          {/* MIDDLE: Peek testimonial */}
          <div
            className="hidden lg:block relative h-40 overflow-hidden"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            <p
              className="absolute top-0 font-bold text-xl leading-snug text-[#0d2b26]/90"
              style={{
                width: "380px",
                left: "-170px",
              }}
            >
              {peek.quote}
            </p>
          </div>

          {/* RIGHT: Active testimonial */}
          <div
            className="lg:border-l lg:border-gray-300 lg:pl-10"
            data-aos="fade-left"
            data-aos-delay="450"
            data-aos-duration="1000"
          >
            {/* Rating */}
            <div
              className="flex gap-1 mb-4"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              {Array.from({ length: active.rating }).map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#F75709"
                  className="w-5 h-5"
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
              className="font-bold text-xl leading-snug text-[#0d2b26] mb-8"
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
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <h4 className="font-black text-[#0d2b26] uppercase text-sm tracking-wide">
                  {active.name}
                </h4>

                <p className="text-gray-500 text-sm">{active.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination dots */}
        <div
          className="flex justify-center lg:justify-start lg:pl-[300px] mt-10 lg:mt-8 gap-3"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === index
                  ? "w-2.5 h-2.5 bg-[#F75709]"
                  : "w-4 h-4 border-2 border-[#F75709]/30"
              }`}
            />
          ))}
        </div>

        {/* Mobile navigation */}
        <div
          className="flex lg:hidden items-center justify-center gap-4 mt-8"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <button
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-gray-100 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="w-5 h-5 text-[#0d2b26]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goNext}
            aria-label="Next testimonial"
            className="w-12 h-12 rounded-full bg-[#F75709] flex items-center justify-center hover:bg-[#0d2b26] transition-colors duration-300"
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
