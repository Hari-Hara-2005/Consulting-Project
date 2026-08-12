import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useState, useEffect } from "react";

// Dropdown data for nav items that have sub-menus
const NAV_ITEMS = [
  { label: "HOME" },
  { label: "PAGES" },
  { label: "PORTFOLIO" },
  { label: "BLOG" },
  { label: "CONTACT" },
];

function NavDropdownItem({ label, dropdown }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <Box
      onMouseEnter={dropdown ? handleOpen : undefined}
      onMouseLeave={dropdown ? handleClose : undefined}
      sx={{ display: "flex", alignItems: "center" }}
    >
      <Button
        onClick={dropdown ? handleOpen : undefined}
        disableRipple
        sx={{
          color: "#0d3b34",
          fontWeight: 700,
          fontSize: "0.85rem",
          letterSpacing: "0.03em",
          textTransform: "uppercase",
          px: 1.25,
          "&:hover": {
            backgroundColor: "transparent",
            color: "#f36f21",
          },
        }}
        endIcon={
          dropdown ? (
            <KeyboardArrowDownIcon sx={{ fontSize: "1rem", ml: -0.5 }} />
          ) : null
        }
      >
        {label}
      </Button>

      {dropdown && (
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{ onMouseLeave: handleClose }}
          disableScrollLock
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
          slotProps={{
            paper: {
              sx: {
                mt: 1,
                borderRadius: "10px",
                minWidth: 180,
                boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
                py: 1,
              },
            },
          }}
        >
          {dropdown.map((item) => (
            <MenuItem
              key={item}
              onClick={handleClose}
              sx={{
                fontSize: "0.85rem",
                fontWeight: 500,
                color: "#0d3b34",
                py: 1,
                "&:hover": {
                  backgroundColor: "rgba(243,111,33,0.08)",
                  color: "#f36f21",
                },
              }}
            >
              {item}
            </MenuItem>
          ))}
        </Menu>
      )}
    </Box>
  );
}

function Logo() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Box
        sx={{
          position: "relative",
          width: 32,
          height: 32,
          borderRadius: "50%",
          background: "#f36f21",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: 22,
            height: 22,
            borderRadius: "50%",
            background: "#0d3b34",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FiberManualRecordIcon
            sx={{ color: "#ffffff", fontSize: "0.7rem" }}
          />
        </Box>
      </Box>
      <Typography
        sx={{
          fontWeight: 800,
          fontSize: "1.3rem",
          letterSpacing: "0.02em",
          color: "#0d3b34",
        }}
      >
        PROZEN
      </Typography>
    </Box>
  );
}

export default function Navbar() {
  // Track scroll position so the bar can morph from a floating
  // rounded pill into a full-width fixed bar once the page scrolls.
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Spacer so page content doesn't jump when the navbar becomes fixed */}
      {isScrolled && <Box sx={{ height: 76 }} />}

      <AppBar
        position={isScrolled ? "fixed" : "static"}
        elevation={isScrolled ? 4 : 0}
        sx={{
          top: 0,
          left: 0,
          backgroundColor: "#ffffff",
          borderRadius: isScrolled ? 0 : "16px",
          maxWidth: isScrolled ? "100%" : "1300px",
          width: "100%",
          mx: "auto",
          transition:
            "border-radius 0.35s ease, max-width 0.35s ease, box-shadow 0.35s ease",
          zIndex: 1200,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 1.5,
            px: { xs: 2, md: isScrolled ? 6 : 3 },
            minHeight: "auto !important",
            transition: "padding 0.35s ease",
          }}
        >
          {/* Logo */}
          <Logo />

          {/* Nav links */}
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              alignItems: "center",
              gap: 0.5,
            }}
          >
            {NAV_ITEMS.map((item) => (
              <NavDropdownItem key={item.label} label={item.label} />
            ))}
          </Box>

          <Button
            variant="contained"
            disableElevation
            sx={{
              backgroundColor: "#b7d17e",
              color: "#0d3b34",
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.03em",
              textTransform: "uppercase",
              borderRadius: "999px",
              px: 3,
              py: 1.4,
              "&:hover": {
                backgroundColor: "#a3c369",
              },
            }}
          >
            Let's Get In Touch
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}