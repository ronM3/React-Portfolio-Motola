import React from "react";
import { useState, useEffect } from "react";
import "../styles/navbar.css";
import { forwardRef } from "react";

export const NavBar = forwardRef((props, refs) => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const nextScrolled = window.scrollY > 150;
      setScrolled((prevScrolled) =>
        prevScrolled === nextScrolled ? prevScrolled : nextScrolled
      );
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (targetRef) => {
    setActiveLink(targetRef.current.id);
    setIsNavExpanded(false);
    targetRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleNavLinkClick = (event, targetRef) => {
    event.preventDefault();
    scrollToSection(targetRef);
  };

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="container">
        <div className="logo-holder px-2 pt-2 logo_container">
          <a
            href="#home"
            className="header_link"
            onClick={(event) => handleNavLinkClick(event, refs.homeRef)}
          >
            <h3>Motola</h3>
            <p>Web Developer</p>
          </a>
        </div>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
          type="button"
          aria-expanded={isNavExpanded}
          aria-controls="main-navigation"
          aria-label={isNavExpanded ? "Close navigation menu" : "Open navigation menu"}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul
          id="main-navigation"
          className={isNavExpanded ? "nav-links open" : "nav-links"}
        >
          <li className={isNavExpanded ? "fadelinks" : ""}>
            <a
              href="#home"
              className={
                activeLink === "home"
                  ? "active navbar-link"
                  : "navbar-link nav-link-ltr"
              }
              onClick={(event) => handleNavLinkClick(event, refs.homeRef)}
            >
              Home
            </a>
          </li>
          <li className={isNavExpanded ? "fadelinks" : ""}>
            <a
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={(event) => handleNavLinkClick(event, refs.skillsRef)}
            >
              Skills
            </a>
          </li>
          <li className={isNavExpanded ? "fadelinks" : ""}>
            <a
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={(event) => handleNavLinkClick(event, refs.projectsRef)}
            >
              Projects
            </a>
          </li>
          <li className={isNavExpanded ? "fadelinks" : ""}>
            <a
              href="#contacts"
              className={
                activeLink === "contacts" ? "active navbar-link" : "navbar-link"
              }
              onClick={(event) => handleNavLinkClick(event, refs.contactsRef)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
});
