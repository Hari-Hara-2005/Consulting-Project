import { useState } from "react";
import PageTitleBanner from "../Components/Pagetitlebanner";
import {
  Phone,
  MailCheck,
  MapPin,
  ArrowUp,
  ExternalLink,
  Navigation,
  Star,
  Info,
} from "lucide-react";
import Footer from "../Components/Footer";

const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: "Phone number",
    value: "+91 93459 69545",
  },
  {
    icon: MailCheck,
    label: "Email address",
    value: "legacyvault@gmail.com",
  },
  {
    icon: MapPin,
    label: "Office Address",
    value: "Kumbakonam, TN",
  },
];

const CONTACT_WHATSAPP_NUMBER = "9345969545";

const SUBJECT_OPTIONS = [
  "General inquiry",
  "Booking a service",
  "Support",
  "Partnership",
  "Other",
];

const LOCATION = {
  name: "LV Center",
  address: "Kumbakonam",
  rating: 4.0,
  reviewCount: "6,406",
  mapQuery: "LV Center, Kumbakonam",
};

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (field) => (e) => {
    setForm((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const isValid =
    form.name.trim() &&
    form.email.trim() &&
    form.subject.trim() &&
    form.message.trim();

  const handleSend = () => {
    if (!isValid) return;

    const text =
      `*New Contact Form Message*\n\n` +
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Subject: ${form.subject}\n\n` +
      `Message:\n${form.message}`;

    const waLink = `https://wa.me/${CONTACT_WHATSAPP_NUMBER}?text=${encodeURIComponent(
      text
    )}`;

    window.open(waLink, "_blank");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    LOCATION.mapQuery
  )}&output=embed`;

  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    LOCATION.mapQuery
  )}`;

  const directionsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    LOCATION.mapQuery
  )}`;

  return (
    <section>
      {/* Page Banner */}
      <PageTitleBanner
        title="Contact Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          {
            label: "Contact Us",
            href: "#",
            active: true,
          },
        ]}
      />

      {/* Contact Info Cards */}
      <div className="w-full bg-white py-12 px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {CONTACT_ITEMS.map(({ icon: Icon, label, value }, index) => (
            <div
              key={label}
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay={index * 150}
              className="group rounded-2xl p-6 md:p-7 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              style={{
                backgroundColor: "#F7F7F7",
              }}
            >
              {/* Icon */}
              <div
                data-aos="zoom-in"
                data-aos-delay={index * 150 + 150}
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300"
                style={{
                  backgroundColor: "#f7bd02",
                }}
              >
                <Icon
                  className="w-6 h-6"
                  style={{
                    color: "#0A0A0A",
                  }}
                />
              </div>

              {/* Label */}
              <p
                className="text-md font-extrabold mb-1.5"
                style={{
                  color: "#f7bd02",
                }}
              >
                {label}
              </p>

              {/* Value */}
              <p
                className="text-lg font-bold uppercase tracking-wide"
                style={{
                  color: "#0A0A0A",
                }}
              >
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form + Map */}
      <section
        style={{
          backgroundColor: "#FAFAFA",
        }}
      >
        {/* Form Section */}
        <div className="px-6 py-16 md:py-20">
          <div
            className="max-w-2xl mx-auto text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Subtitle */}
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-xs md:text-xl font-extrabold tracking-wide uppercase mb-3"
              style={{
                color: "#f7bd02",
              }}
            >
              Contact us
            </p>

            {/* Heading */}
            <h2
              data-aos="fade-up"
              data-aos-delay="200"
              className="uppercase font-black leading-tight text-3xl md:text-4xl mb-10"
              style={{
                color: "#111111",
              }}
            >
              Have questions?
              <br />
              Contact us!
            </h2>

            <div className="space-y-4 text-left">
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  value={form.name}
                  onChange={handleChange("name")}
                  placeholder="Your name"
                  data-aos="fade-right"
                  data-aos-delay="300"
                  className="w-full bg-white rounded-md px-4 py-3.5 text-sm outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-[#f7bd02] transition-all duration-300"
                />

                <input
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  placeholder="Email address"
                  data-aos="fade-left"
                  data-aos-delay="300"
                  className="w-full bg-white rounded-md px-4 py-3.5 text-sm outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-[#f7bd02] transition-all duration-300"
                />
              </div>

              {/* Subject */}
              <select
                value={form.subject}
                onChange={handleChange("subject")}
                data-aos="fade-up"
                data-aos-delay="400"
                className="w-full bg-white rounded-md px-4 py-3.5 text-sm outline-none appearance-none focus:ring-2 focus:ring-[#f7bd02] transition-all duration-300"
                style={{
                  color: form.subject ? "#111111" : "#6b7280",
                }}
              >
                <option value="" disabled>
                  Select subject
                </option>

                {SUBJECT_OPTIONS.map((opt) => (
                  <option
                    key={opt}
                    value={opt}
                    style={{
                      color: "#111111",
                    }}
                  >
                    {opt}
                  </option>
                ))}
              </select>

              {/* Message */}
              <textarea
                value={form.message}
                onChange={handleChange("message")}
                placeholder="Type your message"
                rows={6}
                data-aos="fade-up"
                data-aos-delay="500"
                className="w-full bg-white rounded-md px-4 py-3.5 text-sm outline-none resize-y placeholder:text-gray-500 focus:ring-2 focus:ring-[#f7bd02] transition-all duration-300"
              />
            </div>

            {/* Send Button */}
            <button
              onClick={handleSend}
              disabled={!isValid}
              data-aos="zoom-in"
              data-aos-delay="600"
              className="mt-8 uppercase text-sm font-bold text-black px-8 py-3.5 rounded-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 hover:-translate-y-1 hover:shadow-lg"
              style={{
                backgroundColor: "#f7bd02",
              }}
            >
              Send message here
            </button>
          </div>
        </div>

        {/* Map */}
        <div
          className="relative w-full h-[420px] md:h-[480px]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <iframe
            title="Location map"
            src={mapEmbedSrc}
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Location Card */}
          <div
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="900"
            className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg px-4 py-3 max-w-xs"
          >
            <div className="flex items-start justify-between gap-2">
              <p
                className="text-sm font-bold"
                style={{
                  color: "#111111",
                }}
              >
                {LOCATION.name}
              </p>

              <div className="flex items-center gap-1.5 flex-shrink-0">
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open in Google Maps"
                  className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
                >
                  <ExternalLink
                    className="w-3 h-3"
                    style={{
                      color: "#111111",
                    }}
                  />
                </a>

                <a
                  href={directionsLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Get directions"
                  className="w-6 h-6 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity duration-200"
                  style={{
                    backgroundColor: "#C9A227",
                  }}
                >
                  <Navigation className="w-3 h-3 text-white" />
                </a>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-0.5">
              {LOCATION.address}
            </p>

            <div className="flex items-center gap-1 mt-1.5 text-xs">
              <span
                className="font-medium"
                style={{
                  color: "#111111",
                }}
              >
                {LOCATION.rating.toFixed(1)}
              </span>

              <Star
                className="w-3 h-3"
                style={{
                  color: "#C9A227",
                  fill: "#C9A227",
                }}
              />

              <a
                href={mapLink}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                ({LOCATION.reviewCount})
              </a>

              <Info className="w-3 h-3 text-gray-400 ml-0.5" />
            </div>
          </div>

          {/* Scroll To Top */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            data-aos="zoom-in"
            data-aos-delay="500"
            className="absolute bottom-4 right-4 w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:opacity-90 hover:-translate-y-1 transition-all duration-300"
            style={{
              backgroundColor: "#C9A227",
            }}
          >
            <ArrowUp className="w-4 h-4 text-white" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </section>
  );
};

export default Contact;