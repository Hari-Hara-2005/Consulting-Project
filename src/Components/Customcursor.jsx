import { useEffect, useRef } from "react";

// Theme
const ACCENT = "#F75709";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  // Actual mouse position
  const mouse = useRef({ x: -100, y: -100 });
  // Ring's current (eased) position
  const ring = useRef({ x: -100, y: -100 });

  const rafId = useRef(null);

  useEffect(() => {
    // Skip on touch-only devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const handleMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const handleDown = () => {
      ringRef.current?.classList.add("cursor-ring--active");
    };
    const handleUp = () => {
      ringRef.current?.classList.remove("cursor-ring--active");
    };

    // Grow the ring slightly over interactive elements
    const handleOver = (e) => {
      if (
        e.target.closest(
          "a, button, [role='button'], input, textarea, select, label",
        )
      ) {
        ringRef.current?.classList.add("cursor-ring--hover");
      }
    };
    const handleOut = (e) => {
      if (
        e.target.closest(
          "a, button, [role='button'], input, textarea, select, label",
        )
      ) {
        ringRef.current?.classList.remove("cursor-ring--hover");
      }
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mouseout", handleOut);

    // Smooth trailing animation loop (lerp toward mouse position)
    const EASE = 0.18;
    const tick = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * EASE;
      ring.current.y += (mouse.current.y - ring.current.y) * EASE;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);

    document.body.classList.add("custom-cursor-active");

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOut);
      cancelAnimationFrame(rafId.current);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <>
      <style>{`
        /* Hide the native cursor everywhere once our custom cursor mounts */
        .custom-cursor-active,
        .custom-cursor-active * {
          cursor: none !important;
        }

        .cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: ${ACCENT};
          pointer-events: none;
          z-index: 9999;
          will-change: transform;
        }

        .cursor-ring {
          position: fixed;
          top: 0;
          left: 0;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1.5px solid ${ACCENT};
          background-color: transparent;
          pointer-events: none;
          z-index: 9998;
          will-change: transform, width, height;
          transition: width 0.25s ease, height 0.25s ease, opacity 0.25s ease,
            border-width 0.25s ease;
        }

        .cursor-ring--hover {
          width: 48px;
          height: 48px;
          border-width: 1px;
        }

        .cursor-ring--active {
          width: 28px;
          height: 28px;
        }

        /* Auto-disable on touch devices */
        @media (pointer: coarse) {
          .cursor-dot,
          .cursor-ring {
            display: none;
          }
          .custom-cursor-active,
          .custom-cursor-active * {
            cursor: auto !important;
          }
        }
      `}</style>

      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}
