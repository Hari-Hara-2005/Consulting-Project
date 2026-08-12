import { useEffect, useState } from "react";
import {
  Users,
  Briefcase,
  Heart,
  Lightbulb,
  GraduationCap,
  Paintbrush,
  Code2,
  Monitor,
  Scale,
  Sparkles,
  Ticket,
  ThumbsUp,
  Home,
  Rocket,
  Star,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

const THEME = {
  primary: "#063231",
  secondary: "#C3DF94",
  accent: "#F75709",
};

const CATEGORIES = [
  { name: "Coaching", icon: Users },
  { name: "Consulting", icon: Briefcase },
  { name: "Therapy & Counseling", icon: Heart },
  { name: "Health & Wellness", icon: Lightbulb },
  { name: "Education & Tutoring", icon: GraduationCap },
  { name: "Creative Services", icon: Paintbrush },
  { name: "Tech & Development", icon: Code2 },
  { name: "Marketing & Growth", icon: Monitor },
  { name: "Legal & Finance", icon: Scale },
  { name: "Spiritual & Faith", icon: Sparkles },
  { name: "Beauty & Personal Care", icon: Sparkles },
  { name: "Events & Entertainment", icon: Ticket },
  { name: "Pets & Animals", icon: ThumbsUp },
  { name: "Home & Lifestyle", icon: Home },
  { name: "Sports & Recreation", icon: Rocket },
];

// Sample professionals shown for whichever category is opened.
// Swap this out for real per-category data / an API call.
const SAMPLE_PROFESSIONALS = [
  {
    name: "Frank Sondors",
    avatar:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=100&q=80",
    tagline: "Meet Frank - Salesforge.ai",
    description: "Book a meeting with me for 30 minutes!",
    price: "Free",
    rating: null,
  },
  {
    name: "Frank Sondors",
    avatar:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=100&q=80",
    tagline: "Meet Frank - Salesforge.ai",
    description: "Book a meeting with me for 15 minutes!",
    price: "Free",
    rating: null,
  },
  {
    name: "MarketXLS",
    avatar:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=100&q=80",
    tagline: "MarketXLS - Demo",
    description: null,
    price: "Free",
    rating: { score: 4.8, count: 5 },
  },
];

export default function CategorySection() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (name) => {
    setSelected((prev) => (prev === name ? null : name));
  };

  // close on Escape, lock page scroll while modal is open
  useEffect(() => {
    if (!selected) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [selected]);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2
        className="text-center text-2xl font-bold mb-10"
        style={{ color: THEME.primary }}
        data-aos="fade-up"
      >
        Browse by category
      </h2>

      {/* Category grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-4">
        {CATEGORIES.map(({ name, icon: Icon }, i) => {
          const isActive = selected === name;
          return (
            <button
              key={name}
              onClick={() => handleSelect(name)}
              data-aos="zoom-in"
              data-aos-delay={i * 60}
              data-aos-duration="500"
              data-aos-once="true"
              className="rounded-2xl border p-6 flex flex-col items-center justify-center gap-3 text-center transition-all duration-300 focus:outline-none"
              style={{
                borderColor: isActive ? THEME.accent : "#e5e7eb",
                borderWidth: isActive ? "2px" : "1px",
                backgroundColor: isActive ? "#fff7f2" : "#ffffff",
                boxShadow: isActive
                  ? "0 4px 14px rgba(247,87,9,0.15)"
                  : "0 1px 2px rgba(0,0,0,0.03)",
              }}
            >
              <span
                className="w-11 h-11 rounded-full flex items-center justify-center transition-colors duration-300"
                style={{
                  backgroundColor: isActive ? THEME.secondary : "#f3f4f6",
                }}
              >
                <Icon
                  className="w-5 h-5"
                  style={{ color: isActive ? THEME.primary : THEME.primary }}
                  strokeWidth={2}
                />
              </span>
              <span
                className="font-semibold text-sm md:text-base"
                style={{ color: THEME.primary }}
              >
                {name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Centered modal overlay with professionals list */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-10"
          style={{
            backgroundColor: "rgba(6, 50, 49, 0.55)",
            animation: "catOverlayFadeIn 0.25s ease-out",
          }}
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 md:p-8 relative shadow-2xl"
            style={{ animation: "catModalPop 0.25s ease-out" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
            >
              <X className="w-4 h-4" style={{ color: THEME.primary }} />
            </button>

            <h3
              className="text-lg font-bold mb-6 pr-10"
              style={{ color: THEME.primary }}
            >
              Top {selected} professionals
            </h3>

            <div className="flex flex-col gap-4">
              {SAMPLE_PROFESSIONALS.map((pro, i) => (
                <div
                  key={i}
                  className="flex items-start justify-between gap-4 rounded-xl border p-5"
                  style={{
                    borderColor: "#e5e7eb",
                    animation: `catRowIn 0.35s ease-out ${i * 0.08}s both`,
                  }}
                >
                  <div className="flex items-start gap-4 min-w-0">
                    <img
                      src={pro.avatar}
                      alt={pro.name}
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <h4
                        className="font-bold text-base"
                        style={{ color: THEME.primary }}
                      >
                        {pro.name}
                      </h4>
                      <p className="text-gray-500 text-sm truncate">
                        {pro.tagline}
                      </p>
                      {pro.description && (
                        <p className="text-gray-500 text-sm mt-1">
                          {pro.description}
                        </p>
                      )}
                      {pro.rating && (
                        <div className="flex items-center gap-1 mt-1">
                          {Array.from({ length: 5 }).map((_, idx) => (
                            <Star
                              key={idx}
                              className="w-3.5 h-3.5"
                              fill={
                                idx < Math.round(pro.rating.score)
                                  ? "#facc15"
                                  : "none"
                              }
                              stroke={
                                idx < Math.round(pro.rating.score)
                                  ? "#facc15"
                                  : "#d1d5db"
                              }
                            />
                          ))}
                          <span className="text-sm text-gray-700 ml-1">
                            {pro.rating.score} ({pro.rating.count} reviews)
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="text-right flex-shrink-0">
                    <p className="text-gray-400 text-xs mb-0.5">Starting at</p>
                    <p
                      className="font-bold text-base mb-2"
                      style={{ color: THEME.primary }}
                    >
                      {pro.price}
                    </p>
                    <Link to="/service-booking">
                      <button
                        className="text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-300"
                        style={{ backgroundColor: THEME.accent }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.backgroundColor =
                            THEME.primary)
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.backgroundColor = THEME.accent)
                        }
                      >
                        Book now
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes catOverlayFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes catModalPop {
          from { opacity: 0; transform: scale(0.95) translateY(8px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes catRowIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
