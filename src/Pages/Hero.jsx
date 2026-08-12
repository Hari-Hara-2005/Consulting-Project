import { useEffect, useRef, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import Navbar from "../Components/Navbar";

function useCountUp(target, { duration = 5000, decimals = 0 } = {}) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun.current) {
            hasRun.current = true;
            const start = performance.now();

            const tick = (now) => {
              const progress = Math.min((now - start) / duration, 1);
              // ease-out cubic for a natural deceleration
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(target * eased);
              if (progress < 1) requestAnimationFrame(tick);
              else setValue(target);
            };

            requestAnimationFrame(tick);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  const display =
    decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();

  return [display, ref];
}

/* ------------------------------------------------------------------ */
/* StatCard — floating pill with a bouncing idle animation + counter  */
/* ------------------------------------------------------------------ */
function StatCard({ value, decimals, suffix, label, sx, delay = 0, duration }) {
  const [display, ref] = useCountUp(value, { decimals, duration });

  return (
    <Box
      ref={ref}
      sx={{
        position: "absolute",
        backgroundColor: "rgba(255,255,255,0.14)",
        backdropFilter: "blur(14px)",
        border: "1px solid rgba(255,255,255,0.25)",
        borderRadius: "16px",
        px: 3,
        py: 2,
        minWidth: 150,
        boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
        animation: `float 3.2s ease-in-out ${delay}s infinite`,
        "@keyframes float": {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
          "100%": { transform: "translateY(0px)" },
        },
        ...sx,
      }}
    >
      <Typography
        sx={{
          color: "#fff",
          fontWeight: 800,
          fontSize: "1.9rem",
          lineHeight: 1.1,
        }}
      >
        {display}
        {suffix}
      </Typography>
      <Typography
        sx={{
          color: "rgba(255,255,255,0.85)",
          fontSize: "0.85rem",
          fontWeight: 500,
          mt: 0.5,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

export default function Hero() {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg, #0d3b34 0%, #123f38 55%, #0d3b34 100%)",
        px: { xs: 3, md: 8 },
        py: { xs: 8, md: 10 },
        overflow: "hidden",
      }}
    >
      <Navbar />
      <Box
        sx={{
          maxWidth: "1300px",
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: 6, md: 4 },
        }}
      >
        {/* -------- Left: copy -------- */}
        <Box sx={{ flex: 1 }}>
          <Typography
            component="h1"
            sx={{
              fontWeight: 900,
              textTransform: "uppercase",
              color: "#fff",
              lineHeight: 1.05,
              fontSize: { xs: "2.4rem", sm: "3.2rem", md: "3.6rem" },
              letterSpacing: "0.01em",
            }}
          >
            Innovative
            <br />
            <Box component="span" sx={{ color: "#b7d17e" }}>
              Business
            </Box>
            <br />
            Solutions
            <br />
            For Everyone
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "1rem",
              mt: 3,
              maxWidth: 420,
              lineHeight: 1.6,
            }}
          >
            Our team prioritizes usability and accessibility to ensure that
            every visitor enjoys a seamless intuitive.
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "1rem",
              mt: 3,
              maxWidth: 420,
              lineHeight: 1.6,
            }}
          >
            Kudanthai Infotech Growing Company
          </Typography>

          <Button
            variant="contained"
            disableElevation
            sx={{
              mt: 4,
              backgroundColor: "#f36f21",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.03em",
              textTransform: "uppercase",
              borderRadius: "999px",
              px: 3.5,
              py: 1.5,
              "&:hover": { backgroundColor: "#d95f18" },
            }}
          >
            Let's Get In Touch
          </Button>
        </Box>

        {/* -------- Right: image + floating stat cards -------- */}
        <Box
          sx={{
            position: "relative",
            flex: 1,
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: "100%", md: 460 },
              maxWidth: 460,
            }}
          >
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80&auto=format&fit=crop"
              alt="Smiling business professional"
              sx={{
                width: "100%",
                display: "block",
                borderRadius: "24px",
              }}
            />

            {/* ROI card */}
            <StatCard
              value={98}
              suffix="%"
              label="Return on investment"
              delay={0}
              duration={4500}
              sx={{ left: { xs: 0, sm: -20 }, bottom: -20 }}
            />

            {/* Happy clients card */}
            <StatCard
              value={22.5}
              decimals={1}
              suffix="K"
              label="Happy clients worldwide"
              delay={0.6}
              duration={5500}
              sx={{ right: { xs: 0, sm: -10 }, top: "38%" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
