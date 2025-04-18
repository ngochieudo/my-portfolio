'use client';
import { Fab, Tooltip } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        scrolled ? "bg-black bg-opacity-80 shadow-lg" : "bg-transparent"
      } transition-all duration-300 px-6 py-4 flex justify-between items-center fixed top-0 left-0 w-full z-10`}
    >
    <Link href="/" className="font-bold font-sans text-xl text-white-600">
      Portfolio.
    </Link>
    <div className="space-x-4 font-sans font-semibold text-white-600 px-3">
      <Link href="#about" className="px-2">
        About
      </Link>
      <Link href="#projects" className="px-2">
        Projects
      </Link>
      <Link href="#contact" className="px-2">
        Contact
      </Link>
    </div>
    <div className="hidden md:flex items-center space-x-4 gap-2">
      <Tooltip title="Facebook" arrow>
        <Fab
          sx={{
            "&:hover": {
              opacity: 0.8,
            },
            "&.MuiFab-root": {
              backgroundColor: "transparent",
              border: "1px solid white",
              color: "white",
            },
          }}
          size="small"
          aria-label="facebook"
          href="https://www.facebook.com/hieu.o.335137"
          target="_blank"
        >
          <FacebookIcon sx={{ fontSize: "16px" }} />
        </Fab>
      </Tooltip>
      <Tooltip title="LinkedIn" arrow>
        <Fab
          sx={{
            "&:hover": {
              opacity: 0.8,
            },
            "&.MuiFab-root": {
              backgroundColor: "transparent",
              border: "1px solid white",
              color: "white",
            },
          }}
          size="small"
          aria-label="facebook"
          href="https://www.linkedin.com/in/peps1man/"
          target="_blank"
        >
          <LinkedInIcon sx={{ fontSize: "16px" }} />
        </Fab>
      </Tooltip>
      <Tooltip title="Instagram" arrow>
        <Fab
          sx={{
            "&:hover": {
              opacity: 0.8,
            },
            "&.MuiFab-root": {
              backgroundColor: "transparent",
              border: "1px solid white",
              color: "white",
            },
          }}
          size="small"
          aria-label="facebook"
          href="https://www.linkedin.com/in/peps1man/"
          target="_blank"
        >
          <InstagramIcon sx={{ fontSize: "16px" }} />
        </Fab>
      </Tooltip>
    </div>
  </nav>
  );
}
  

export default Navbar;
