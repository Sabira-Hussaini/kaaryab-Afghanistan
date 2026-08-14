"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import ThemeToggle from "@/components/theme/ThemeToggle";
import LanguageSwitcher from "@/components/language/LanguageSwitcher";

import { useLanguage } from "@/context/LanguageContext";
import { useAuth } from "@/context/AuthContext";

import { translations } from "@/lib/translations";

export default function Navbar() {
  const { language } = useLanguage();

  const t = translations[language];

  const { user, logout } = useAuth();

  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  // Prevent server/client hydration mismatch
  // for authentication-dependent navigation.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    {
      name: t.home,
      href: "/",
    },
    {
      name: t.opportunities,
      href: "/opportunities",
    },
    {
      name: t.saved,
      href: "/saved",
    },
    {
      name: t.dashboard,
      href: "/dashboard",
    },
    {
      name: t.about,
      href: "/about",
    },
    {
      name: t.contact,
      href: "/contact",
    },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      dir={language === "fa" ? "rtl" : "ltr"}
      className="
        sticky top-0 z-50
        border-b border-slate-200
        bg-white/90
        backdrop-blur-md
        shadow-sm
        dark:border-slate-700
        dark:bg-slate-900/90
      "
    >
      <div
        className={`
          mx-auto flex h-20 max-w-7xl
          items-center justify-between
          px-6 lg:px-8
          ${language === "fa" ? "flex-row-reverse" : ""}
        `}
      >
        {/* Logo */}

        <Link
          href="/"
          onClick={closeMenu}
          className="text-2xl font-extrabold"
        >
          <span className="text-blue-600 dark:text-blue-400">
            Kaar
          </span>

          <span className="text-slate-900 dark:text-white">
            Yab
          </span>
        </Link>

        {/* Desktop Links */}

        <nav
          className="
            hidden
            items-center
            gap-8
            md:flex
          "
        >
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  rounded-md
                  px-2
                  py-1
                  font-medium
                  transition

                  ${
                    active
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-slate-700 hover:text-blue-600 dark:text-slate-200"
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}

        <div
          className="
            hidden
            items-center
            gap-4
            md:flex
          "
        >
          <LanguageSwitcher />

          <ThemeToggle />

          {/* Authentication buttons */}

          {!mounted ? (
            /*
             * Keep the same structure during SSR and
             * the first client render.
             */
            <div className="h-10 w-32" />
          ) : user ? (
            <>
              <Link
                href="/add-opportunity"
                className="
                  rounded-xl
                  bg-blue-600
                  px-5
                  py-2.5
                  font-semibold
                  text-white
                  hover:bg-blue-700
                "
              >
                {t.post}
              </Link>

              <button
                type="button"
                onClick={logout}
                className="
                  rounded-xl
                  border
                  border-red-500
                  px-5
                  py-2.5
                  font-semibold
                  text-red-600
                  hover:bg-red-50
                "
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="
                  rounded-xl
                  border
                  border-blue-600
                  px-5
                  py-2.5
                  font-semibold
                  text-blue-600
                "
              >
                Login
              </Link>

              <Link
                href="/signup"
                className="
                  rounded-xl
                  bg-blue-600
                  px-5
                  py-2.5
                  font-semibold
                  text-white
                  hover:bg-blue-700
                "
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Button */}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="
            rounded-lg
            p-2
            hover:bg-slate-100
            dark:hover:bg-slate-800
            md:hidden
          "
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <div
          className="
            border-t
            border-slate-200
            bg-white
            dark:border-slate-700
            dark:bg-slate-900
            md:hidden
          "
        >
          <nav
            className={`
              flex flex-col
              px-6 py-4
              ${
                language === "fa"
                  ? "text-right"
                  : "text-left"
              }
            `}
          >
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`
                    rounded-lg
                    px-4
                    py-3
                    transition

                    ${
                      active
                        ? "bg-blue-50 font-semibold text-blue-600 dark:bg-slate-800"
                        : "hover:bg-slate-100 dark:hover:bg-slate-800"
                    }
                  `}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Mobile Theme and Language */}

            <div
              className="
                mt-5
                flex
                items-center
                justify-between
              "
            >
              <LanguageSwitcher />

              <ThemeToggle />
            </div>

            {/* Mobile Authentication */}

            {!mounted ? (
              <div className="mt-5 h-24" />
            ) : user ? (
              <>
                <Link
                  href="/add-opportunity"
                  onClick={closeMenu}
                  className="
                    mt-5
                    rounded-xl
                    bg-blue-600
                    px-4
                    py-3
                    text-center
                    font-semibold
                    text-white
                  "
                >
                  {t.post}
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    logout();
                    closeMenu();
                  }}
                  className="
                    mt-3
                    rounded-xl
                    border
                    border-red-500
                    px-4
                    py-3
                    font-semibold
                    text-red-600
                  "
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={closeMenu}
                  className="
                    mt-5
                    rounded-xl
                    border
                    border-blue-600
                    px-4
                    py-3
                    text-center
                    font-semibold
                    text-blue-600
                  "
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  onClick={closeMenu}
                  className="
                    mt-3
                    rounded-xl
                    bg-blue-600
                    px-4
                    py-3
                    text-center
                    font-semibold
                    text-white
                  "
                >
                  Sign Up
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}