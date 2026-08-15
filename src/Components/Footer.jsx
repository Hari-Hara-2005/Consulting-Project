import { Link } from "react-router-dom";

const FOOTER_COLUMNS = [
  {
    title: "Services",
    links: [
      {
        name: "Coaching",
        path: "/service",
      },
      {
        name: "Consulting",
        path: "/service",
      },
      {
        name: "Marketing & Growth",
        path: "/service",
      },
      {
        name: "Legal & Finance",
        path: "/service",
      },
    ],
  },
  {
    title: "Menu",
    links: [
      {
        name: "Services",
        path: "/service",
      },
      {
        name: "Pricing",
        path: "/pricing",
      },
      {
        name: "FAQ",
        path: "/faq",
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
        name: "Contact",
        path: "/contact-us",
      },
    ],
  },
  {
    title: "Terms & Conditions",
    links: [
      {
        name: "Terms & Conditions",
        path: "/terms-conditions",
      }
    ],
  },
];

const SOCIALS = [
  {
    label: "WhatsApp",
    url: "https://wa.me/919345969545",
    path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.437-9.884 9.89-9.884 2.64 0 5.122 1.03 6.986 2.894a9.83 9.83 0 012.893 6.99c-.002 5.45-4.438 9.884-9.887 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.89c0 2.096.547 4.142 1.588 5.945L.057 24l6.3-1.654a11.882 11.882 0 005.694 1.448h.005c6.554 0 11.89-5.335 11.893-11.89a11.815 11.815 0 00-3.485-8.416",
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
    <footer className="relative bg-black px-4 sm:px-6 pt-12 sm:pt-16 pb-8">
      <div className="max-w-6xl mx-auto">

        {/* Top: logo + description + socials */}
        <div
          className="
            flex
            flex-col
            gap-6
            mb-10
            lg:flex-row
            lg:items-start
            lg:justify-between
            lg:gap-8
          "
        >
          {/* Logo */}
          <div
            className="flex items-center gap-2 min-w-0"
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-once="true"
          >
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
                  max-w-[42px]
                  object-contain
                  rounded-lg
                "
              />
            </div>

            {/* Brand Name + Tagline */}
            <div className="min-w-0">
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
                  truncate
                "
              >
                Legacy Vault
              </span>

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
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="
                  w-10
                  h-10
                  shrink-0
                  rounded-lg
                  bg-white
                  hover:bg-[#f7bd02]
                  text-black
                  flex
                  items-center
                  justify-center
                  transition-colors
                  duration-300
                "
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

        <div className="h-px bg-yellow-500 mb-10 sm:mb-12" />

        {/* Link columns */}
        <div
          className="
            grid
            grid-cols-2
            gap-x-6
            gap-y-10
            mb-10
            sm:gap-x-10
            md:grid-cols-4
            md:gap-10
            lg:gap-20
            xl:gap-40
            lg:mb-12
          "
        >
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="min-w-0">
              <h4
                className="
                  font-black
                  text-white
                  uppercase
                  text-sm
                  sm:text-base
                  mb-4
                  sm:mb-5
                  tracking-wide
                  break-words
                "
              >
                {col.title}
              </h4>

              <ul
                className="
                  space-y-3
                  text-white
                  font-semibold
                  text-xs
                  sm:text-sm
                "
              >
                {col.links.map((link) => (
                  <li key={link.name} className="break-words">
                    <Link
                      to={link.path}
                      className="
                        inline-block
                        hover:text-[#f7bd02]
                        transition-colors
                        duration-300
                      "
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
        <div className="h-px bg-yellow-500 mb-5 sm:mb-6" />

        <div className="text-center font-bold text-white text-xs sm:text-sm px-2">
          &copy;2026
          <span className="text-[#fff]"> LegacyVault</span>. All rights
          reserved.
        </div>

        <div className="text-white text-xs sm:text-sm text-center mt-2">
          <a
            href="https://kudanthaiinfotech.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              text-[10px]
              sm:text-xs
              font-bold
              text-[#f7bd02]
              transition-colors
              hover:text-white
            "
          >
            Developed by Kudanthai Infotech
          </a>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="
          fixed
          bottom-4
          right-4
          sm:bottom-6
          sm:right-6
          w-10
          h-10
          sm:w-12
          sm:h-12
          rounded-full
          bg-[#f7bd02]
          hover:bg-[#000]
          border-2
          border-transparent
          hover:border-[#f7bd02]
          flex
          items-center
          justify-center
          shadow-lg
          transition-colors
          duration-300
          z-50
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="w-4 h-4 sm:w-5 sm:h-5 text-white"
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