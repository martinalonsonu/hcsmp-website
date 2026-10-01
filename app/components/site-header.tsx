"use client";

import Link from "next/link";
import Image from "next/image";
import { brotherhoodLogoUrl } from "@/app/data/assets";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigationGroups } from "@/app/data/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobilePanelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function updateScrollState() {
      setIsScrolled(window.scrollY > 12);
    }

    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const menuButton = menuButtonRef.current;
    document.body.style.overflow = "hidden";
    const focusableElements = () =>
      Array.from(
        mobilePanelRef.current?.querySelectorAll<HTMLElement>(
          "a[href], button:not([disabled])",
        ) ?? [],
      ).filter((element) => element.getClientRects().length > 0);

    focusableElements()[0]?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const elements = focusableElements();
      const firstElement = elements[0];
      const lastElement = elements.at(-1);

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      menuButton?.focus();
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-30 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${isScrolled ? "border-line/70 bg-paper/75 shadow-md backdrop-blur-md" : "border-line bg-paper"}`}
      >
        <div
          className={`mx-auto flex w-[calc(100%-2.5rem)] max-w-7xl items-center justify-between gap-6 transition-[min-height] duration-300 md:w-[calc(100%-4rem)] ${isScrolled ? "min-h-18 md:min-h-20" : "min-h-16 md:min-h-18"}`}
        >
          <Link
            aria-label="Hermandad de Cargadores de San Martín de Porres, inicio"
            className="flex shrink-0 items-center gap-3 text-forest-text"
            href="/"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="grid size-10 shrink-0 place-items-center md:size-11">
              <Image
                alt=""
                className="size-full object-contain"
                height={1080}
                priority
                quality={90}
                src={brotherhoodLogoUrl}
                width={1080}
              />
            </span>
            <span className="grid gap-0">
              <span className="text-[9px] leading-[1.1] sm:text-[10px]">
                Hermandad de Cargadores de
              </span>
              <span className="text-[9px] font-bold leading-[1.1] tracking-[0.06em] text-clay sm:text-[10px]">
                SAN MARTÍN DE PORRES
              </span>
              <span className="text-[9px] leading-[1.1] tracking-wide text-muted">
                Cruz Blanca - Huacho
              </span>
            </span>
          </Link>
          <div className="flex items-center md:order-2">
            <button
              aria-controls="mobile-navigation"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              className="grid size-11 touch-manipulation place-items-center border-0 bg-transparent text-forest-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay xl:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
              ref={menuButtonRef}
              type="button"
            >
              <span aria-hidden="true" className="grid gap-1.5">
                <span
                  className={`h-px w-[18px] bg-current transition-transform ${isMenuOpen ? "translate-y-[4px] rotate-45" : ""}`}
                />
                <span
                  className={`h-px w-[18px] bg-current transition-opacity ${isMenuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`h-px w-[18px] bg-current transition-transform ${isMenuOpen ? "-translate-y-[6px] -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
          <nav
            aria-label="Navegación principal"
            className="order-1 hidden xl:flex xl:flex-row xl:items-center xl:gap-4 2xl:gap-6"
            id="desktop-navigation"
          >
            {navigationGroups.map(({ href, label }) => {
              const isActive =
                pathname === href || pathname.startsWith(`${href}/`);
              return (
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={`whitespace-nowrap py-2 text-xs transition-colors hover:text-forest-text 2xl:text-sm ${isActive ? "text-forest-text" : "text-muted"}`}
                  href={href}
                  key={href}
                >
                  {label}
                </Link>
              );
            })}
            <Link
              className="inline-flex min-h-11 items-center justify-center whitespace-nowrap border border-forest/30 px-3 text-xs font-semibold text-forest-text transition-colors hover:bg-forest hover:text-white-warm 2xl:px-4"
              href="/contacto/"
            >
              Sé parte
            </Link>
          </nav>
        </div>
      </header>
      <div
        aria-hidden={!isMenuOpen}
        aria-modal={isMenuOpen}
        className={`fixed inset-0 z-40 overflow-hidden xl:hidden ${isMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        inert={!isMenuOpen}
        role="dialog"
      >
        <button
          aria-label="Cerrar menú"
          className={`absolute inset-0 size-full bg-black/45 transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsMenuOpen(false)}
          tabIndex={-1}
          type="button"
        />
        <nav
          aria-label="Navegación móvil"
          className={`absolute inset-y-0 right-0 flex h-dvh w-[65vw] flex-col border-l border-line bg-paper px-5 pb-8 pt-6 shadow-2xl transition-transform duration-300 ease-in-out sm:px-7 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          id="mobile-navigation"
          ref={mobilePanelRef}
        >
          <div className="flex items-center justify-between border-b border-line pb-5">
            <span className="font-display text-lg text-forest-text">
              Navegación
            </span>
            <button
              aria-label="Cerrar menú"
              className="grid size-10 place-items-center border border-line text-forest-text transition-colors hover:bg-mist focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay"
              onClick={() => setIsMenuOpen(false)}
              type="button"
            >
              <span aria-hidden="true" className="text-2xl leading-none">
                ×
              </span>
            </button>
          </div>
          <div className="mt-4 flex-1 overflow-y-auto overscroll-contain">
            {navigationGroups.map(({ href, label, links }) => {
              const isActive =
                pathname === href || pathname.startsWith(`${href}/`);
              return (
                <section className="border-b border-line py-3" key={href}>
                  <Link
                    aria-current={pathname === href ? "page" : undefined}
                    className={`block py-2 text-sm font-semibold transition-colors hover:text-clay ${isActive ? "text-forest-text" : "text-ink"}`}
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </Link>
                  {links.length > 0 && (
                    <div className="ml-3 flex flex-col border-l border-line pl-3">
                      {links.map((link) => (
                        <Link
                          aria-current={
                            pathname === link.href ? "page" : undefined
                          }
                          className={`py-2 text-xs transition-colors hover:text-clay ${pathname === link.href ? "text-forest-text" : "text-muted"}`}
                          href={link.href}
                          key={link.href}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </section>
              );
            })}
            <Link
              className="mt-5 inline-flex min-h-11 w-full items-center justify-center border border-forest/30 px-4 text-xs font-semibold text-forest-text transition-colors hover:bg-forest hover:text-white-warm"
              href="/contacto/"
              onClick={() => setIsMenuOpen(false)}
            >
              Sé parte
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
