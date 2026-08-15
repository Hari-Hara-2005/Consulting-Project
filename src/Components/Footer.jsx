import { Link } from "react-router-dom";

const FOOTER_COLUMNS = [
  {
    title: "Features",
    links: [
      {
        name: "Advanced Analytics",
        path: "/advanced-analytics",
      },
      {
        name: "Data Exploration",
        path: "/data-exploration",
      },
      {
        name: "Auto Track",
        path: "/auto-track",
      },
      {
        name: "Data Insights",
        path: "/data-insights",
      },
    ],
  },
  {
    title: "Menu",
    links: [
      {
        name: "Article & Blog",
        path: "/blog",
      },
      {
        name: "Documentation",
        path: "/documentation",
      },
      {
        name: "Learn Gulaly",
        path: "/learn-gulaly",
      },
      {
        name: "Tutorials",
        path: "/tutorials",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        name: "About Us",
        path: "/about",
      },
      {
        name: "Our Team",
        path: "/team",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        name: "Blog and Article",
        path: "/blog",
      },
      {
        name: "Community",
        path: "/community",
      },
      {
        name: "Documentation",
        path: "/documentation",
      },
      {
        name: "Tutorials",
        path: "/tutorials",
      },
    ],
  },
];

const SOCIALS = [
  {
    label: "X",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "Instagram",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.98-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.198-4.354-2.618-6.78-6.98-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 9.837a3.837 3.837 0 1 1 0-7.674 3.837 3.837 0 0 1 0 7.674zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
  },
  {
    label: "LinkedIn",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452z",
  },
  {
    label: "Facebook",
    path: "M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.522 1.492-3.915 3.777-3.915 1.094 0 2.238.196 2.238.196v2.475h-1.26c-1.243 0-1.63.775-1.63 1.57v1.888h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94z",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-black px-6 pt-16 pb-8">
      <div className="max-w-6xl mx-auto">
        {/* Top: logo + description + socials */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-10">
          <div
            className="flex items-center gap-2"
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-once="true"
          >
            {/* Logo */}
            <div
              className="
    shrink-0
    flex
    items-center
    justify-center
    bg-white
    rounded-xl
    p-[3px]
    border
    border-white
  "
            >
              <img
                src="/assets/LV.tuxpi.png"
                alt="Legacy Vault Logo"
                className="
      h-8
      sm:h-9
      w-auto
      object-contain
      rounded-lg
    "
              />
            </div>

            {/* Brand Name + Tagline */}
            <div>
              <span
                className="
        block
        font-black
        text-white
        text-lg
        sm:text-xl
        uppercase
        tracking-wide
        leading-tight
      "
              >
                Legacy Vault
              </span>

              {/* Hidden on laptop and above */}
              <p
                className="
        mt-0.5
        text-[#C9A227]
        font-semibold
        text-[8px]
        sm:text-[9px]
        leading-tight
        tracking-wide
        uppercase
      "
              >
                Excellence in every financial decision
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="w-10 h-10 rounded-lg bg-white  hover:bg-[#f7bd02] text-black flex items-center justify-center transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-black"
                >
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="h-px bg-yellow-500 mb-12" />

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-40 mb-12">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-black text-white uppercase text-base mb-5 tracking-wide">
                {col.title}
              </h4>

              <ul className="space-y-3 text-white font-semibold text-sm">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="hover:text-[#f7bd02] transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="h-px bg-yellow-500 mb-6" />

        <div className="text-center font-bold text-white text-sm">
          &copy;2026
          <span className="text-[#fff]"> LegacyVault</span>.All rights reserved.
        </div>

        <div className="text-white  text-sm text-center">
          <a
            href="https://kudanthaiinfotech.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#f7bd02] transition-colors hover:text-white"
          >
            Developed by Kudanthai Infotech
          </a>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[#f7bd02] hover:bg-[#000] border-2 border-transparent hover:border-[#f7bd02] flex items-center justify-center shadow-lg transition-colors duration-300 z-50"
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
            d="M12 19V5m0 0l-6 6m6-6l6 6"
          />
        </svg>
      </button>
    </footer>
  );
}
