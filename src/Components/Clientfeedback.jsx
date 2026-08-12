import { useState, useEffect, useCallback, useRef } from "react";
import Title from "./Title";

// Theme
const THEME = {
  primary: "#063231", // dark teal
  secondary: "#C3DF94", // light green
  accent: "#F75709", // orange
};

const TESTIMONIALS = [
  {
    name: "RONALD RICHARDS",
    role: "Finance Advisor",
    quote:
      "Working with Campaign was a game-changer for our business. Their expertise and strategies helped us reach new heights we never thought possible heights we never",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "CHARLIZE THERON",
    role: "Ceo & Owner",
    quote:
      "Working with Campaign was a game-changer for our business. Their expertise and strategies helped us reach new heights we never thought possible heights we never",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    name: "MARVIN MCKINNEY",
    role: "Product Manager",
    quote:
      "Working with Campaign was a game-changer for our business. Their expertise and strategies helped us reach new heights we never thought possible heights we never",
    avatar: "https://randomuser.me/api/portraits/men/78.jpg",
  },
  {
    name: "ESTHER HOWARD",
    role: "Marketing Lead",
    quote:
      "Working with Campaign was a game-changer for our business. Their expertise and strategies helped us reach new heights we never thought possible heights we never",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "DARLENE ROBERTSON",
    role: "Operations Head",
    quote:
      "Working with Campaign was a game-changer for our business. Their expertise and strategies helped us reach new heights we never thought possible heights we never",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const StarIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 20 20" fill={THEME.accent}>
    <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6z" />
  </svg>
);

const ChevronIcon = ({ direction = "left" }) => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke={THEME.primary}
    strokeWidth={2.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d={direction === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
    />
  </svg>
);

function TestimonialCard({ item }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 h-full flex flex-col">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>

      <p className="text-slate-600 leading-relaxed mb-6 flex-1">
        "{item.quote}"
      </p>

      <div className="flex items-center gap-3">
        <img
          src={item.avatar}
          alt={item.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p
            className="font-bold text-sm tracking-wide"
            style={{ color: THEME.primary }}
          >
            {item.name}
          </p>
          <p className="text-slate-500 text-sm">{item.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function ClientFeedback({
  autoplay = true,
  autoplayInterval = 4000,
}) {
  const [perView, setPerView] = useState(3);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  // Responsive items-per-view
  useEffect(() => {
    const updatePerView = () => {
      if (window.innerWidth < 640) setPerView(1);
      else if (window.innerWidth < 1024) setPerView(2);
      else setPerView(3);
    };
    updatePerView();
    window.addEventListener("resize", updatePerView);
    return () => window.removeEventListener("resize", updatePerView);
  }, []);

  const maxIndex = Math.max(0, TESTIMONIALS.length - perView);

  // Clamp index whenever perView changes
  // useEffect(() => {
  //   setIndex((prev) => Math.min(prev, maxIndex));
  // }, [maxIndex]);

  const goNext = useCallback(() => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Autoplay
  useEffect(() => {
    if (!autoplay || isPaused) return;
    timerRef.current = setInterval(goNext, autoplayInterval);
    return () => clearInterval(timerRef.current);
  }, [autoplay, isPaused, autoplayInterval, goNext]);

  const slideWidthPct = 100 / perView;

  return (
    <section
      className="py-16 sm:py-20 px-6 md:px-16"
      style={{ backgroundColor: "#f4f6f4" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-10 flex-wrap gap-6">
          <div data-aos="fade-right" data-aos-duration="600">
            <Title
              align="left"
              subtitle="TESTIMONIALS"
              title={<>Client feedback</>}
            />
          </div>
          {/* Arrows */}
          <div
            className="flex items-center gap-3"
            data-aos="fade-left"
            data-aos-duration="600"
          >
            <button
              onClick={goPrev}
              aria-label="Previous testimonials"
              className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
            >
              <ChevronIcon direction="left" />
            </button>
            <button
              onClick={goNext}
              aria-label="Next testimonials"
              className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
            >
              <ChevronIcon direction="right" />
            </button>
          </div>
        </div>

        {/* Carousel viewport */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * slideWidthPct}%)`,
            }}
          >
            {TESTIMONIALS.map((item, i) => (
              <div
                key={i}
                className="shrink-0 px-3"
                style={{ width: `${slideWidthPct}%` }}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                data-aos-duration="600"
                data-aos-once="true"
              >
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div
          className="flex justify-center gap-2 mt-8"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: index === i ? "24px" : "8px",
                backgroundColor: index === i ? THEME.accent : "#d4d8d3",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}