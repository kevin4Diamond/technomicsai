"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import styles from "./Header.module.css";

const links = [
  { href: "#why", label: "Why us" },
  { href: "#how", label: "How it works" },
  { href: "#services", label: "Services" },
  { href: "#use-cases", label: "Use cases" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${scrolled || open ? styles.scrolled : ""}`}
    >
      <div className={styles.inner}>
        <a href="#top" aria-label="Technomics AI home" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav className={styles.links} aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a className={styles.cta} href="#contact">
            Book a call
            <span className={styles.ctaDot} aria-hidden="true" />
          </a>
          <button
            className={styles.menuButton}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className={open ? styles.barOpen : ""} />
            <span className={open ? styles.barOpen : ""} />
          </button>
        </div>
      </div>

      {open && (
        <nav className={styles.mobileNav} aria-label="Mobile">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className={styles.mobileCta}
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Book a free call
          </a>
        </nav>
      )}
    </header>
  );
}
