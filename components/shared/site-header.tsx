"use client";

import clsx from "clsx";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useModalDialog } from "@/hooks/use-modal-dialog";
import { useScrollThreshold } from "@/hooks/use-scroll-threshold";
import { brotherhoodLogoUrl } from "@/models/shared/assets";
import { navigationGroups } from "@/models/shared/navigation";

function isCurrentPath(pathname: string, href: string) {
  return pathname.replace(/\/$/, "") === href.replace(/\/$/, "");
}

function DesktopNavigation({ pathname }: { pathname: string }) {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const navigationRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!openGroup) return;
    function dismiss(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !navigationRef.current?.contains(event.target)
      )
        setOpenGroup(null);
    }
    function escape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      navigationRef.current
        ?.querySelector<HTMLButtonElement>('button[aria-expanded="true"]')
        ?.focus();
      setOpenGroup(null);
    }
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      document.removeEventListener("keydown", escape);
    };
  }, [openGroup]);

  return (
    <nav
      aria-label="Navegación principal"
      className="hidden items-center gap-5 xl:flex"
      id="desktop-navigation"
      ref={navigationRef}
    >
      {navigationGroups.map(({ href, label, links }) => {
        const isActive =
          isCurrentPath(pathname, href) || pathname.startsWith(`${href}/`);
        const isOpen = openGroup === href;
        const panelId = `navigation-${href.slice(1)}`;
        return (
          <div
            className="relative"
            key={href}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget))
                setOpenGroup((current) => (current === href ? null : current));
            }}
          >
            <div
              className={clsx(
                "flex items-center border-b-2 transition-colors",
                isActive
                  ? "border-clay text-ink"
                  : "border-transparent text-muted",
              )}
            >
              <Link
                aria-current={
                  isCurrentPath(pathname, href) ? "page" : undefined
                }
                className="inline-flex min-h-11 items-center whitespace-nowrap text-sm hover:text-ink"
                href={href}
                onClick={() => setOpenGroup(null)}
              >
                {label}
              </Link>
              {links.length > 0 && (
                <button
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  aria-label={`Subsecciones de ${label}`}
                  className="grid size-11 place-items-center hover:text-ink"
                  onClick={() => setOpenGroup(isOpen ? null : href)}
                  type="button"
                >
                  <ChevronDown
                    aria-hidden="true"
                    className={clsx(
                      "size-4 transition-transform",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
              )}
            </div>
            {links.length > 0 && (
              <ul
                className="absolute left-0 top-full mt-2 min-w-56 border border-line bg-paper p-2 shadow-lg"
                hidden={!isOpen}
                id={panelId}
              >
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      aria-current={
                        isCurrentPath(pathname, link.href) ? "page" : undefined
                      }
                      className="flex min-h-11 items-center px-3 py-2 text-sm text-ink transition-colors hover:bg-mist"
                      href={link.href}
                      onClick={() => setOpenGroup(null)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
      <Link
        aria-current={isCurrentPath(pathname, "/contacto") ? "page" : undefined}
        className="inline-flex min-h-11 items-center justify-center border border-forest/30 px-4 text-sm font-semibold transition-colors hover:bg-forest hover:text-white"
        href="/contacto/"
      >
        Contáctanos
      </Link>
    </nav>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrollThreshold(12);
  const dialogRef = useModalDialog(isMenuOpen);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1280px)");
    const closeOnDesktop = () => {
      if (query.matches) setIsMenuOpen(false);
    };
    query.addEventListener("change", closeOnDesktop);
    return () => query.removeEventListener("change", closeOnDesktop);
  }, []);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <>
      <header
        className={clsx(
          "sticky top-0 z-30 border-b transition-[background-color,box-shadow] duration-300",
          isScrolled
            ? "border-line/70 bg-paper/95 shadow-sm backdrop-blur-md"
            : "border-line bg-paper",
        )}
      >
        <div className="site-container flex min-h-16 items-center justify-between gap-4 md:min-h-18">
          <Link
            aria-label="Hermandad de Cargadores de San Martín de Porres, inicio"
            className="flex min-w-0 items-center gap-3 text-forest-text"
            href="/"
            onClick={closeMenu}
          >
            <Image
              alt=""
              className="size-11 shrink-0 object-contain"
              height={52}
              width={52}
              sizes="52px"
              src={brotherhoodLogoUrl}
            />
            <span className="grid gap-0.5 leading-snug">
              <span className="text-[11px] sm:text-xs">
                Hermandad de Cargadores de
              </span>
              <span className="text-[11px] font-bold tracking-[0.04em] text-clay-text sm:text-xs">
                SAN MARTÍN DE PORRES
              </span>
              <span className="text-[11px] text-muted">
                Cruz Blanca - Huacho
              </span>
            </span>
          </Link>
          <DesktopNavigation pathname={pathname} />
          <button
            aria-controls="mobile-navigation-dialog"
            aria-expanded={isMenuOpen}
            aria-label="Abrir menú"
            className="grid size-11 shrink-0 place-items-center text-ink xl:hidden"
            onClick={() => setIsMenuOpen(true)}
            ref={menuButtonRef}
            type="button"
          >
            <Menu aria-hidden="true" size={23} />
          </button>
        </div>
      </header>
      <dialog
        aria-labelledby="mobile-navigation-title"
        className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none border-0 bg-transparent p-0 text-ink backdrop:bg-black/45"
        id="mobile-navigation-dialog"
        onClick={(event) => {
          if (event.target === event.currentTarget) closeMenu();
        }}
        onClose={() => {
          closeMenu();
          if (menuButtonRef.current?.getClientRects().length)
            menuButtonRef.current.focus({ preventScroll: true });
        }}
        ref={dialogRef}
      >
        <div className="ml-auto flex h-full w-[min(90vw,26rem)] flex-col border-l border-line bg-paper px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-5 shadow-2xl">
          <div className="flex items-center justify-between gap-4 border-b border-line pb-4">
            <h2 className="font-display text-xl" id="mobile-navigation-title">
              Navegación
            </h2>
            <button
              aria-label="Cerrar menú"
              autoFocus
              className="grid size-11 place-items-center border border-line hover:bg-mist"
              onClick={closeMenu}
              type="button"
            >
              <X aria-hidden="true" size={21} />
            </button>
          </div>
          <nav
            aria-label="Navegación móvil"
            className="min-h-0 flex-1 overflow-y-auto overscroll-contain py-3"
            id="mobile-navigation"
          >
            <Link
              aria-current={pathname === "/" ? "page" : undefined}
              className="flex min-h-12 items-center border-b border-line text-sm font-semibold"
              href="/"
              onClick={closeMenu}
            >
              Inicio
            </Link>
            {navigationGroups.map(({ href, label, links }) => (
              <div className="border-b border-line py-2" key={href}>
                <Link
                  aria-current={
                    isCurrentPath(pathname, href) ? "page" : undefined
                  }
                  className="flex min-h-11 items-center text-sm font-semibold hover:underline"
                  href={href}
                  onClick={closeMenu}
                >
                  {label}
                </Link>
                {links.length > 0 && (
                  <ul className="ml-1 border-l border-line pl-4">
                    {links.map((link) => (
                      <li key={link.href}>
                        <Link
                          aria-current={
                            isCurrentPath(pathname, link.href)
                              ? "page"
                              : undefined
                          }
                          className={clsx(
                            "flex min-h-11 items-center text-sm hover:text-ink hover:underline",
                            isCurrentPath(pathname, link.href)
                              ? "font-semibold text-ink"
                              : "text-muted",
                          )}
                          href={link.href}
                          onClick={closeMenu}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <Link
              className="mt-5 flex min-h-12 items-center justify-center bg-forest px-4 text-sm font-semibold text-white hover:bg-forest-deep"
              href="/contacto/"
              onClick={closeMenu}
            >
              Contáctanos
            </Link>
          </nav>
        </div>
      </dialog>
    </>
  );
}
