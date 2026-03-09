"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { cn } from "../lib/cn";
import { site } from "../data/site";
import { Container } from "./Container";
import { IconMoon, IconSun } from "./Icons";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href.startsWith("/#")) return pathname === "/";
  return pathname.startsWith(href);
}

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setMounted(true), 0);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    const id = window.setTimeout(() => setMobileOpen(false), 0);
    return () => window.clearTimeout(id);
  }, [pathname]);

  const currentTheme = mounted ? resolvedTheme : "light";
  const isDark = currentTheme === "dark";

  const linkBase = "rounded-lg px-4 py-1.5 text-sm font-bold transition-all duration-200 border-2 border-transparent";
  
  const linkInactive = "text-slate-900 hover:bg-[#7fa9bc] hover:text-slate-900 dark:text-white";
  
  const linkActive = "bg-[#7fa9bc] text-slate-900 border-[#b85202]";

  return (
    <header 
      className="sticky top-0 z-50 border-b py-3 transition-colors duration-200 bg-slate-100 border-slate-200 dark:bg-[#0a1220] dark:border-white/10">
      <Container>
        <nav className="flex items-center justify-between">
          <Link 
            href={site.brand.href} 
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-md border border-white/10 bg-white text-slate-900">
              <span className="text-sm font-semibold">ND</span>
            </div>
            <div className="hidden sm:block leading-tight">
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                {site.name}
              </div>
              <div className="text-xs text-slate-400">{site.role}</div>
            </div>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            {site.nav.primary.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(linkBase, active ? linkActive : linkInactive)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            {site.nav.secondary.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn("hidden sm:inline-flex", linkBase, active ? linkActive : linkInactive)}
                >
                  {item.label}
                </Link>
              );
            })}

            <button
              type="button"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className={cn(
                "inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors",
                currentTheme === "dark" ? "text-white hover:text-[#7fa9bc]" : "text-slate-900 hover:text-[#7fa9bc]"
              )}
              aria-label="Toggle theme"
            >
              {isDark ? <IconSun className="h-6 w-6" /> : <IconMoon className="h-6 w-6" />}
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex h-9 items-center justify-center rounded-md border border-slate-300 px-3 text-sm font-medium text-slate-900 dark:border-white/10 dark:text-white md:hidden"
            >
              Menu
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 md:hidden">
            {[...site.nav.primary, ...site.nav.secondary].map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(linkBase, active ? linkActive : linkInactive)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        )}
      </Container>
    </header>
  );
}