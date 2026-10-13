"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, CONTACT } from "./data";
import { SocialLinks } from "./social";

function Logo({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link
      href="#top"
      onClick={onClick}
      className={`flex items-baseline gap-1.5 leading-none ${className ?? ""}`}
    >
      <span className="font-heading text-[20px] font-extrabold uppercase tracking-tight text-white">
        DJ Pachanga
      </span>
      <span className="font-script text-[26px] leading-none text-[var(--color-club-green)]">
        latina
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  const left = NAV_LINKS.slice(0, 3);
  const right = NAV_LINKS.slice(3);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass =
    "font-sans text-[13px] font-medium uppercase tracking-[2.2px] text-white/85 transition-colors hover:text-[var(--color-club-green)]";

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur">
      <div className="mx-auto flex h-[68px] w-full max-w-[1140px] items-center justify-between px-5 lg:grid lg:h-[90px] lg:grid-cols-[1fr_auto_1fr]">
        {/* Left nav (desktop) */}
        <nav className="hidden items-center gap-8 lg:flex">
          {left.map((item) => (
            <Link key={item.label} href={item.href} className={linkClass}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Logo */}
        <Logo className="justify-self-center" />

        {/* Right nav (desktop) */}
        <nav className="hidden items-center justify-end gap-8 lg:flex">
          {right.map((item) => (
            <Link key={item.label} href={item.href} className={linkClass}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label="Abrir menú"
          onClick={() => setOpen(true)}
          className="flex size-10 items-center justify-center rounded-md border border-white/15 text-white transition-colors hover:border-[var(--color-club-green)] hover:text-[var(--color-club-green)] lg:hidden"
        >
          <Menu className="size-6" />
        </button>
      </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-[70] flex flex-col bg-black transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-[68px] shrink-0 items-center justify-between border-b border-white/10 px-5">
          <Logo onClick={() => setOpen(false)} />
          <button
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
            className="flex size-10 items-center justify-center rounded-md border border-white/15 text-white"
          >
            <X className="size-6" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col items-center justify-center gap-7">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-heading text-[24px] font-bold uppercase tracking-wide text-white transition-colors hover:text-[var(--color-club-green)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="shrink-0 space-y-4 border-t border-white/10 px-6 pb-10 pt-6">
          <SocialLinks className="justify-center" />
          <Link
            href="#contacto"
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center border-2 border-[var(--color-club-green)] bg-[var(--color-club-green)] px-6 py-4 font-heading text-[15px] font-bold uppercase tracking-wide text-white"
          >
            Cotiza tu evento
          </Link>
          <a
            href={`tel:${CONTACT.phone.replace(/[^0-9+]/g, "")}`}
            className="flex items-center justify-center gap-2 text-sm font-medium text-white/70"
          >
            <Phone className="size-4 text-[var(--color-club-green)]" />
            {CONTACT.phone}
          </a>
        </div>
      </div>
    </>
  );
}
