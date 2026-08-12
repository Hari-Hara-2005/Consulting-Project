import { useMemo, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Calendar as CalendarIcon,
  List,
  Globe,
  Clock,
  Star,
  X,
  User,
  Mail,
  Phone,
} from "lucide-react";
import PageTitleBanner from "../Components/Pagetitlebanner";

const THEME = {
  primary: "#063231",
  secondary: "#C3DF94",
  accent: "#F75709",
};

// Replace with the real WhatsApp number that should receive booking requests
// Format: countrycode + number, no + or spaces (e.g. India number below is a placeholder)
const HOST_WHATSAPP_NUMBER = "9952857016";

const HOST = {
  name: "Majid John",
  avatar:
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=200&q=80",
  rating: 4.9,
  reviewCount: 14,
  meetingTitle: "Mentorship Meeting",
  duration: "30 minutes",
};

const REVIEWS = [
  {
    name: "Farah",
    date: "Aug 2026",
    rating: 5,
    tag: "Financial Cycle 2 & FNA",
    text: "Really valuable session — clear, practical, and easy to follow. I walked away with a better way to think through my own goals, not just a list of facts. Thank you for the time and patience!",
  },
  {
    name: "Askar",
    date: "Aug 2026",
    rating: 5,
    tag: "Corporate Presentation",
    text: "Great presentation, well organized and easy to follow.",
  },
  {
    name: "Guest",
    date: "Aug 2026",
    rating: 5,
    tag: "Financial Cycle 2 & FNA",
    text: "Very helpful session, answered all my questions with patience.",
  },
  {
    name: "Farah",
    date: "Aug 2026",
    rating: 5,
    tag: "Financial Cycle 2 & FNA",
    text: "Second session was just as useful as the first — highly recommend.",
  },
];

// Build 30-minute slots from 11:30 AM to 8:30 PM (IST), formatted 12-hour with AM/PM
function buildTimeSlots(
  startHour,
  startMinute,
  endHour,
  endMinute,
  stepMinutes,
) {
  const slots = [];
  let totalStart = startHour * 60 + startMinute;
  const totalEnd = endHour * 60 + endMinute;
  while (totalStart <= totalEnd) {
    const h24 = Math.floor(totalStart / 60);
    const m = totalStart % 60;
    const period = h24 < 12 ? "AM" : "PM";
    let h12 = h24 % 12;
    if (h12 === 0) h12 = 12;
    slots.push(`${h12}:${String(m).padStart(2, "0")} ${period}`);
    totalStart += stepMinutes;
  }
  return slots;
}

const TIME_SLOTS = buildTimeSlots(11, 30, 20, 30, 30);

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const DAY_LABELS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function buildCalendarGrid(year, month) {
  // month: 0-indexed
  const firstDay = new Date(year, month, 1);
  const startWeekday = firstDay.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const cells = [];

  for (let i = startWeekday - 1; i >= 0; i--) {
    cells.push({ day: daysInPrevMonth - i, current: false });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, current: true });
  }
  while (cells.length % 7 !== 0 || cells.length < 42) {
    cells.push({
      day: cells.length - (startWeekday + daysInMonth) + 1,
      current: false,
    });
  }
  return cells;
}

function ordinal(n) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export default function BookingPage() {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 12),
  );
  const [viewMode, setViewMode] = useState("calendar"); // 'calendar' | 'list'
  const [showMutual, setShowMutual] = useState(false);

  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "Online: Google Meet",
  });
  const [submitted, setSubmitted] = useState(false);

  const slotsScrollRef = useRef(null);

  const scrollSlots = (direction) => {
    if (slotsScrollRef.current) {
      slotsScrollRef.current.scrollBy({
        top: direction * 140,
        behavior: "smooth",
      });
    }
  };

  const cells = useMemo(
    () => buildCalendarGrid(viewYear, viewMonth),
    [viewYear, viewMonth],
  );

  // Booking window: today's month up to 3 months ahead — no browsing into the past
  const MONTHS_AHEAD = 3;
  const minMonthIndex = today.getFullYear() * 12 + today.getMonth();
  const maxMonthIndex = minMonthIndex + MONTHS_AHEAD;
  const viewMonthIndex = viewYear * 12 + viewMonth;
  const isPrevDisabled = viewMonthIndex <= minMonthIndex;
  const isNextDisabled = viewMonthIndex >= maxMonthIndex;

  const goPrevMonth = () => {
    if (isPrevDisabled) return;
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const goNextMonth = () => {
    if (isNextDisabled) return;
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const isSameDate = (a, b) =>
    a &&
    b &&
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  const handleSelectDate = (cell) => {
    if (!cell.current) return;
    setSelectedDate(new Date(viewYear, viewMonth, cell.day));
    setSelectedSlot(null);
  };

  const handleSelectSlot = (slot) => {
    setSelectedSlot(slot);
    setShowModal(true);
    setSubmitted(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleFormChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const isFormValid =
    form.name.trim() && form.email.trim() && form.phone.trim();

  const handleBookEvent = () => {
    if (!isFormValid) return;

    const dateLabel = selectedDate.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    const message =
      `*New Booking Request*\n\n` +
      `With: ${HOST.meetingTitle}\n` +
      `When: ${dateLabel} at ${selectedSlot}\n` +
      `Timezone: Asia/Calcutta\n` +
      `Duration: ${HOST.duration}\n\n` +
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone}\n` +
      `Location: ${form.location}`;

    const waLink = `https://wa.me/${HOST_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waLink, "_blank");

    setSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setForm({
        name: "",
        email: "",
        phone: "",
        location: "Online: Google Meet",
      });
      setSelectedSlot(null);
    }, 1200);
  };

  return (
    <section>
      <PageTitleBanner
        title="Booking Services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "#", active: true },
        ]}
      />
      <div className="min-h-screen bg-white flex flex-col lg:flex-row">
        {/* LEFT: Host info + reviews */}
        <div className="w-full lg:w-[420px] flex-shrink-0 border-b lg:border-b-0 lg:border-r border-gray-200 p-6 lg:p-8 lg:h-screen lg:overflow-y-auto">
          <div className="flex items-center gap-3 mb-6">
            <img
              src={HOST.avatar}
              alt={HOST.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p
                className="font-semibold text-sm"
                style={{ color: THEME.primary }}
              >
                {HOST.name}
              </p>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3"
                    fill="#facc15"
                    stroke="#facc15"
                  />
                ))}
                <span className="text-xs text-gray-500">
                  {HOST.reviewCount} reviews
                </span>
              </div>
            </div>
          </div>

          <h2
            className="text-lg font-bold mb-3"
            style={{ color: THEME.primary }}
          >
            {HOST.meetingTitle}
          </h2>

          <div
            className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1.5 text-sm mb-6"
            style={{ color: THEME.primary }}
          >
            <Clock className="w-4 h-4" />
            {HOST.duration}
          </div>

          <h3
            className="text-xl font-bold mb-4"
            style={{ color: THEME.primary }}
          >
            {HOST.meetingTitle}
          </h3>

          <div className="flex items-center gap-2 pb-4 mb-4 border-b border-gray-200">
            <span className="font-bold" style={{ color: THEME.primary }}>
              {HOST.rating}
            </span>
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4"
                  fill="#facc15"
                  stroke="#facc15"
                />
              ))}
            </div>
            <span className="text-gray-500 text-sm">
              ({HOST.reviewCount} reviews)
            </span>
          </div>

          <div className="space-y-6">
            {REVIEWS.map((r, i) => (
              <div key={i}>
                <p
                  className="font-semibold text-sm"
                  style={{ color: THEME.primary }}
                >
                  {r.name}
                </p>
                <p className="text-xs text-gray-400 mb-1">{r.date}</p>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: r.rating }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-3.5 h-3.5"
                        fill="#facc15"
                        stroke="#facc15"
                      />
                    ))}
                  </div>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: `${THEME.secondary}55`,
                      color: THEME.primary,
                    }}
                  >
                    {r.tag}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {r.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Calendar + slots */}
        <div className="flex-1 bg-gray-50 p-4 md:p-8 lg:p-6 xl:p-8">
          <div className="w-full lg:max-w-3xl">
            {/* Top bar */}
            <div className="bg-white rounded-2xl shadow-sm px-5 py-4 lg:px-4 lg:py-3 flex flex-wrap items-center justify-between gap-4 mb-6 lg:mb-4">
              <div
                className="flex items-center gap-2 text-sm font-medium"
                style={{ color: THEME.primary }}
              >
                <Globe className="w-4 h-4" />
                Asia/Calcutta
                <ChevronRight className="w-3.5 h-3.5 rotate-90" />
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="flex items-center gap-2 text-sm"
                  style={{ color: THEME.primary }}
                >
                  <button
                    role="switch"
                    aria-checked={showMutual}
                    onClick={() => setShowMutual((v) => !v)}
                    className="w-9 h-5 rounded-full relative transition-colors duration-300"
                    style={{
                      backgroundColor: showMutual ? THEME.accent : "#e5e7eb",
                    }}
                  >
                    <span
                      className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-300"
                      style={{ left: showMutual ? "18px" : "2px" }}
                    />
                  </button>
                  Show mutual availability
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setViewMode("calendar")}
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-300"
                    style={{
                      backgroundColor:
                        viewMode === "calendar" ? THEME.primary : "#f3f4f6",
                      color: viewMode === "calendar" ? "#fff" : THEME.primary,
                    }}
                  >
                    <CalendarIcon className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-300"
                    style={{
                      backgroundColor:
                        viewMode === "list" ? THEME.primary : "#f3f4f6",
                      color: viewMode === "list" ? "#fff" : THEME.primary,
                    }}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {viewMode === "calendar" ? (
              <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] lg:grid-cols-[1fr_220px] gap-6 lg:gap-4">
                {/* Calendar */}
                <div className="bg-white rounded-2xl shadow-sm p-5 lg:p-4">
                  <div className="flex items-center justify-between mb-5 lg:mb-3">
                    <button
                      onClick={goPrevMonth}
                      disabled={isPrevDisabled}
                      className="w-8 h-8 lg:w-7 lg:h-7 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                    >
                      <ChevronLeft
                        className="w-4 h-4 lg:w-3.5 lg:h-3.5"
                        style={{ color: THEME.primary }}
                      />
                    </button>
                    <h3
                      className="font-bold text-base lg:text-sm"
                      style={{ color: THEME.primary }}
                    >
                      {MONTH_NAMES[viewMonth]}{" "}
                      {viewYear !== today.getFullYear() ? viewYear : ""}
                    </h3>
                    <button
                      onClick={goNextMonth}
                      disabled={isNextDisabled}
                      className="w-8 h-8 lg:w-7 lg:h-7 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                    >
                      <ChevronRight
                        className="w-4 h-4 lg:w-3.5 lg:h-3.5"
                        style={{ color: THEME.primary }}
                      />
                    </button>
                  </div>

                  <div className="grid grid-cols-7 gap-2 lg:gap-1.5 mb-2 lg:mb-1.5">
                    {DAY_LABELS.map((d) => (
                      <div
                        key={d}
                        className="text-center text-xs lg:text-[10px] font-semibold text-gray-400 py-1"
                      >
                        {d}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-2 lg:gap-1.5">
                    {cells.map((cell, i) => {
                      const cellDate = new Date(viewYear, viewMonth, cell.day);
                      const isSelected =
                        cell.current && isSameDate(cellDate, selectedDate);
                      const isToday =
                        cell.current && isSameDate(cellDate, today);
                      const isPast =
                        cell.current &&
                        viewYear * 12 + viewMonth === minMonthIndex &&
                        cell.day < today.getDate();
                      return (
                        <button
                          key={i}
                          disabled={!cell.current || isPast}
                          onClick={() => handleSelectDate(cell)}
                          className="aspect-square rounded-lg text-sm lg:text-xs font-medium flex items-center justify-center transition-colors duration-200"
                          style={{
                            backgroundColor: isSelected
                              ? THEME.primary
                              : cell.current
                                ? "#f3f4f6"
                                : "transparent",
                            color: isSelected
                              ? "#fff"
                              : isPast
                                ? "#d1d5db"
                                : cell.current
                                  ? THEME.primary
                                  : "#d1d5db",
                            boxShadow:
                              isToday && !isSelected
                                ? `inset 0 0 0 1.5px ${THEME.accent}`
                                : "none",
                            cursor:
                              cell.current && !isPast ? "pointer" : "default",
                          }}
                        >
                          {cell.day}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time slots — scrollable list, 11:30 AM to 8:30 PM every 30 minutes */}
                <div className="bg-white rounded-2xl shadow-sm p-5 lg:p-4 flex flex-col">
                  <h3
                    className="font-bold text-base lg:text-sm mb-4 lg:mb-3"
                    style={{ color: THEME.primary }}
                  >
                    {selectedDate.toLocaleDateString("en-US", {
                      weekday: "long",
                    })}{" "}
                    {ordinal(selectedDate.getDate())}
                  </h3>

                  <div className="relative flex-1">
                    {/* Scroll up arrow */}
                    <button
                      onClick={() => scrollSlots(-1)}
                      aria-label="Scroll up"
                      className="absolute -top-1 right-0 z-10 w-6 h-6 lg:w-5 lg:h-5 rounded-md flex items-center justify-center bg-white border border-gray-200 hover:bg-gray-100 transition-colors duration-200"
                    >
                      <ChevronUp
                        className="w-3.5 h-3.5 lg:w-3 lg:h-3"
                        style={{ color: THEME.primary }}
                      />
                    </button>

                    <div
                      ref={slotsScrollRef}
                      className="flex flex-col gap-2.5 lg:gap-2 overflow-y-auto pr-2 pt-8 pb-8"
                      style={{ maxHeight: "420px", scrollbarWidth: "thin" }}
                    >
                      {TIME_SLOTS.map((slot) => {
                        const isActive = selectedSlot === slot;
                        return (
                          <button
                            key={slot}
                            onClick={() => handleSelectSlot(slot)}
                            className="w-full rounded-lg py-3 lg:py-2 px-3 lg:px-2.5 text-sm lg:text-xs font-semibold text-left transition-colors duration-200 hover:opacity-90"
                            style={{
                              backgroundColor: isActive
                                ? THEME.primary
                                : "#f3f4f6",
                              color: isActive ? "#fff" : THEME.primary,
                            }}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>

                    {/* Scroll down arrow */}
                    <button
                      onClick={() => scrollSlots(1)}
                      aria-label="Scroll down"
                      className="absolute -bottom-1 right-0 z-10 w-6 h-6 lg:w-5 lg:h-5 rounded-md flex items-center justify-center bg-white border border-gray-200 hover:bg-gray-100 transition-colors duration-200"
                    >
                      <ChevronDown
                        className="w-3.5 h-3.5 lg:w-3 lg:h-3"
                        style={{ color: THEME.primary }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-sm p-5">
                <h3
                  className="font-bold text-base mb-4"
                  style={{ color: THEME.primary }}
                >
                  Available times — {MONTH_NAMES[viewMonth]} {viewYear}
                </h3>
                <div className="flex flex-col divide-y divide-gray-100">
                  {Array.from({ length: 7 }).map((_, i) => {
                    const d = new Date(
                      viewYear,
                      viewMonth,
                      selectedDate.getDate() + i,
                    );
                    return (
                      <div
                        key={i}
                        className="flex items-center justify-between py-3"
                      >
                        <span
                          className="text-sm font-medium"
                          style={{ color: THEME.primary }}
                        >
                          {d.toLocaleDateString("en-US", {
                            weekday: "short",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                        <div className="flex gap-2 flex-wrap justify-end">
                          {TIME_SLOTS.slice(0, 3).map((slot) => (
                            <button
                              key={slot}
                              onClick={() => {
                                setSelectedDate(d);
                                handleSelectSlot(slot);
                              }}
                              className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors duration-200"
                              style={{
                                backgroundColor: "#f3f4f6",
                                color: THEME.primary,
                              }}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Confirm booking modal */}
        {showModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-10 mt-16"
            style={{ backgroundColor: "rgba(6, 50, 49, 0.55)" }}
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto p-6 md:p-7 relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-1">
                <h3
                  className="text-lg font-bold"
                  style={{ color: THEME.primary }}
                >
                  Confirm booking:
                </h3>
                <button
                  onClick={closeModal}
                  aria-label="Close"
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 -mt-1 -mr-1"
                >
                  <X className="w-4 h-4" style={{ color: THEME.primary }} />
                </button>
              </div>
              <p className="text-sm text-gray-500 mb-5">Bookings</p>

              <div className="rounded-xl overflow-hidden border border-gray-200 mb-6">
                <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
                  <User className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <p className="text-sm">
                    <span className="text-gray-500">With:</span>{" "}
                    <span
                      style={{ color: THEME.primary }}
                      className="font-medium"
                    >
                      {HOST.meetingTitle}
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
                  <CalendarIcon className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <p className="text-sm">
                    <span className="text-gray-500">When:</span>{" "}
                    <span
                      style={{ color: THEME.primary }}
                      className="font-medium"
                    >
                      {selectedDate.toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}{" "}
                      at {selectedSlot}
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
                  <Globe className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <p className="text-sm">
                    <span className="text-gray-500">Timezone:</span>{" "}
                    <span
                      style={{ color: THEME.primary }}
                      className="font-medium"
                    >
                      Asia/Calcutta
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-3 px-4 py-3">
                  <Clock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <p className="text-sm">
                    <span className="text-gray-500">Duration:</span>{" "}
                    <span
                      style={{ color: THEME.primary }}
                      className="font-medium"
                    >
                      {HOST.duration}
                    </span>
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label
                    className="block text-sm font-medium mb-1.5"
                    style={{ color: THEME.primary }}
                  >
                    Your name*
                  </label>
                  <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3">
                    <User className="w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      value={form.name}
                      onChange={handleFormChange("name")}
                      placeholder="Enter your full name"
                      className="w-full bg-transparent py-2.5 text-sm outline-none"
                      style={{ color: THEME.primary }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-1.5"
                    style={{ color: THEME.primary }}
                  >
                    Your email*
                  </label>
                  <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      value={form.email}
                      onChange={handleFormChange("email")}
                      placeholder="you@example.com"
                      className="w-full bg-transparent py-2.5 text-sm outline-none"
                      style={{ color: THEME.primary }}
                    />
                  </div>
                </div>

                <button
                  type="button"
                  className="text-sm font-medium hover:underline"
                  style={{ color: THEME.accent }}
                >
                  + Invite guests
                </button>

                <div>
                  <label
                    className="block text-sm font-medium mb-1.5"
                    style={{ color: THEME.primary }}
                  >
                    Choose a location:
                  </label>
                  <select
                    value={form.location}
                    onChange={handleFormChange("location")}
                    className="w-full bg-gray-100 rounded-lg px-3 py-2.5 text-sm outline-none appearance-none"
                    style={{ color: THEME.primary }}
                  >
                    <option>Online: Google Meet</option>
                    <option>Online: Zoom</option>
                    <option>Phone Call</option>
                    <option>In Person</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-1.5"
                    style={{ color: THEME.primary }}
                  >
                    Please enter your phone number here*
                  </label>
                  <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={handleFormChange("phone")}
                      placeholder="081234 56789"
                      className="w-full bg-transparent py-2.5 text-sm outline-none"
                      style={{ color: THEME.primary }}
                    />
                  </div>
                </div>

                <button
                  onClick={handleBookEvent}
                  disabled={!isFormValid}
                  className="w-full py-3 rounded-lg font-semibold text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: THEME.accent }}
                >
                  {submitted ? "Sent to WhatsApp ✓" : "Book event"}
                </button>

                <button
                  onClick={closeModal}
                  className="w-full py-3 rounded-lg font-semibold transition-colors duration-300 hover:bg-gray-200"
                  style={{ backgroundColor: "#f3f4f6", color: THEME.primary }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
