import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Circle, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "HOME", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/service" },
  { label: "Pricing", to: "/pricing" },
  { label: "Faq", to: "/faq" },
  { label: "CONTACT", to: "/contact-us" },
];

function NavLinkItem({ label, to, onClick, mobile, delay }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      data-aos={mobile ? undefined : "fade-down"}
      data-aos-delay={mobile ? undefined : delay}
      data-aos-duration="500"
      data-aos-once="true"
      className={
        mobile
          ? `
            block
            w-full
            px-5 py-3
            text-[0.9rem]
            font-bold
            tracking-[0.03em]
            uppercase
            text-black
            transition-colors
            hover:text-[#f7bd02]
          `
          : `
            flex items-center
            px-5 py-2
            text-[0.85rem]
            font-bold
            tracking-[0.03em]
            uppercase
            text-black
            transition-colors
            hover:bg-transparent
            hover:text-[#f7bd02]
          `
      }
    >
      {label}
    </Link>
  );
}

function Logo() {
  return (
    <div
  className="flex items-center gap-2"
  data-aos="fade-right"
  data-aos-duration="600"
  data-aos-once="true"
>
  {/* Logo */}
  <div className="shrink-0">
    <img
      src="/assets/LV.tuxpi.png"
      alt="Legacy Vault Logo"
      className="
        w-auto
        h-9
        sm:h-10
        object-contain
        drop-shadow-[0_0_2px_#000]
      "
    />
  </div>

  {/* Brand Name */}
  <div className="min-w-0">
    <span
      className="
        block
        text-[1.1rem]
        sm:text-[1.2rem]
        md:text-[1.3rem]
        font-extrabold
        tracking-[0.02em]
        text-black
        leading-tight
      "
    >
      LEGACY VAULT

      {/* Hidden on laptop (lg) and above */}
      <span
        className="
          block
          text-[8px]
          sm:text-[9px]
          md:text-[10px]
          font-semibold
          tracking-[0.08em]
          text-[#C9A227]
          mt-0.5
          
        "
      >
        PRESERVING WEALTH. BUILDING LEGACY
      </span>
    </span>
  </div>
</div>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  // Close the mobile menu automatically if the viewport grows past the lg breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Spacer when navbar becomes fixed */}
      {isScrolled && <div className="h-[76px]" />}

      <nav
        className={`
          ${isScrolled ? "fixed top-0 left-0 w-full" : "relative mx-auto w-full max-w-[1300px]"}
          z-[1200]
          bg-white
          transition-all
          duration-300
          ease-in-out
          ${isScrolled ? "rounded-none shadow-md" : "rounded-2xl"}
        `}
      >
        <div
          className={`
            flex
            items-center
            justify-between
            min-h-0
            py-4
            px-4
            transition-all
            duration-300
            md:px-6
            lg:py-6
            lg:${isScrolled ? "px-6" : "px-3"}
          `}
        >
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-2 lg:flex">
            {NAV_ITEMS.map((item, i) => (
              <NavLinkItem
                key={item.label}
                label={item.label}
                to={item.to}
                delay={150 + i * 60}
              />
            ))}
          </div>

          {/* Desktop Contact Button */}
          <Link to="/service-booking">
            {" "}
            <button
              data-aos="fade-left"
              data-aos-duration="600"
              data-aos-delay="200"
              data-aos-once="true"
              className="
              hidden
              lg:block
              rounded-full
              bg-[#f7bd02]
              px-6
              py-3.5
              text-[0.8rem]
              font-bold
              tracking-[0.03em]
              uppercase
              text-black
              transition-colors
              hover:bg-black
              hover:text-white
            "
            >
              Let's Get In 1:1
            </button>
          </Link>
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileOpen((v) => !v)}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-[#f7bd02]
              text-black
              transition-colors
              hover:bg-black
              hover:text-white
              lg:hidden
            "
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        <div
          className={`
            overflow-hidden
            transition-all
            duration-300
            ease-in-out
            lg:hidden
            ${isMobileOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="flex flex-col gap-1 border-t border-[#0d3b34]/10 px-4 py-4">
            {NAV_ITEMS.map((item) => (
              <NavLinkItem
                key={item.label}
                label={item.label}
                to={item.to}
                mobile
                onClick={() => setIsMobileOpen(false)}
              />
            ))}
            <Link to="/service-booking">
              <button
                onClick={() => setIsMobileOpen(false)}
                className="
                mt-2
                w-full
                rounded-full
                bg-[#f7bd02]
                px-6
                py-3.5
                text-[0.8rem]
                font-bold
                tracking-[0.03em]
                uppercase
                text-black
                transition-colors
                hover:bg-black
                hover:text-white
              "
              >
                Let's Get In 1:1
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
