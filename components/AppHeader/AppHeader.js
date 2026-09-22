"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SocialLink, { SOCIALS } from "@/components/SocialLink";
import Logo from "@/public/images/logoSajt1-volt.png";
import Navigation from "@/public/navigation.json";
import s from "./AppHeader.module.css";

const AppHeader = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [today, setToday] = React.useState("");
  const pathname = usePathname();

  // datum se računa tek posle montiranja da se izbegne neslaganje pri hidrataciji
  React.useEffect(() => {
    setToday(
      new Date().toLocaleDateString("sr-RS", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    );
  }, []);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.classList.toggle("overflow-hidden", expanded);
    return () => document.body.classList.remove("overflow-hidden");
  }, [expanded]);

  React.useEffect(() => {
    setExpanded(false);
  }, [pathname]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : Boolean(pathname?.startsWith(href));

  return (
    // sticky stoji na <header>-u jer element može da klizi samo unutar svog roditelja;
    // -top-9 pušta gornju traku da odskroluje, a donja se zakači za vrh
    <header className="sticky top-0 z-50 w-full md:-top-9">
      <div className="hidden w-full bg-navy-900 text-secondary md:block">
        <div className="shell flex h-9 items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="kicker flex items-center gap-2 text-volt">
              <span className={s.pulse} aria-hidden="true" />
              Sportske vesti
            </span>
            {today ? (
              <span className="text-xs capitalize tracking-wide text-grayMid">{today}</span>
            ) : null}
          </div>
          <div className="flex items-center gap-4">
            {SOCIALS.map((item) => (
              <SocialLink key={item.name} item={item} />
            ))}
          </div>
        </div>
      </div>

      <div
        className={`grain w-full border-b bg-navy-800 transition-[box-shadow,border-color] duration-300 ease-out ${
          scrolled ? "border-white/10 shadow-chrome" : "border-transparent"
        }`}
      >
        {/* visina trake mora da ostane ista: menjanje visine pomera ceo dokument
            i vraća skrol unazad, pa se stanje vrti u krug — zato se skuplja logo */}
        <div className="shell flex h-20 items-center justify-between md:h-24">
          <Link
            href="/"
            className={`relative block h-full shrink-0 origin-left py-3 transition-transform duration-300 ease-out ${
              scrolled ? "scale-90" : "scale-100"
            }`}
            aria-label="TimeOut, početna strana"
          >
            <Image src={Logo} alt="TimeOut" priority className="h-full w-auto object-contain" style={{ width: "auto" }} />
          </Link>

          <nav className="hidden md:block" aria-label="Glavna navigacija">
            <ul className="flex flex-row items-center gap-8">
              {Navigation.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      data-active={active ? "true" : undefined}
                      aria-current={active ? "page" : undefined}
                      className={`${s.navLink} display text-[15px] tracking-wider2 text-secondary transition-colors duration-200 hover:text-volt`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            type="button"
            aria-label="Otvori meni"
            aria-expanded={expanded}
            onClick={() => setExpanded(true)}
            className="group -mr-2 space-y-1.5 p-2 md:hidden"
          >
            <span className="block h-0.5 w-7 bg-secondary transition-colors group-hover:bg-volt" />
            <span className="block h-0.5 w-7 bg-secondary transition-colors group-hover:bg-volt" />
            <span className="block h-0.5 w-7 bg-secondary transition-colors group-hover:bg-volt" />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[70] overflow-hidden transition-opacity duration-300 md:hidden ${
          expanded ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-ink/70" onClick={() => setExpanded(false)} aria-hidden="true" />

        <aside
          className={`grain absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-navy-800 transition-transform duration-300 ease-out ${
            expanded ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
            <span className="kicker text-volt">Navigacija</span>
            <button
              type="button"
              aria-label="Zatvori meni"
              onClick={() => setExpanded(false)}
              className="grid h-10 w-10 place-items-center rounded-full text-secondary transition-colors hover:bg-white/10 hover:text-volt"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 py-8" aria-label="Mobilna navigacija">
            <ul className="flex flex-col">
              {Navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`display block border-b border-white/10 py-3 text-3xl transition-colors duration-200 ${
                      isActive(link.href) ? "text-volt" : "text-secondary hover:text-volt"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-6 border-t border-white/10 px-6 py-6">
            {SOCIALS.map((item) => (
              <SocialLink key={item.name} item={item} />
            ))}
          </div>
        </aside>
      </div>
    </header>
  );
};

export default AppHeader;
