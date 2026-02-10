import { useState } from "react";
import { Link, useLocation } from "wouter";
import { IMAGES, CALCULATOR_URL } from "@/lib/constants";
import {
  Calculator,
  Menu,
  X,
  ChevronDown,
  ExternalLink,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Mission, Vision & Objectives", href: "/about" },
      { label: "Constitution", href: "/about/constitution" },
      { label: "Past Presidents", href: "/about/past-presidents" },
    ],
  },
  {
    label: "Members",
    href: "/members",
    children: [
      { label: "Executive Committee", href: "/members" },
      { label: "Coordinators", href: "/members/coordinators" },
    ],
  },
  {
    label: "Societies",
    href: "/societies",
    children: [
      { label: "Arab Societies", href: "/societies" },
      { label: "International Societies", href: "/societies/international" },
    ],
  },
  {
    label: "Education",
    href: "/education",
    children: [
      { label: "Patient Education", href: "/education/patient" },
      { label: "Nursing Education", href: "/education/nurses" },
      { label: "Medical Education", href: "/education/doctors" },
    ],
  },
  {
    label: "Academic",
    href: "/academic",
    children: [
      { label: "Journals", href: "/academic/journals" },
      { label: "Guidelines", href: "/academic/guidelines" },
    ],
  },
  { label: "News", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "Membership", href: "/membership" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-slate-900 text-white/80 text-xs">
        <div className="container flex items-center justify-between py-1.5">
          <div className="flex items-center gap-4">
            <a href="mailto:info@asnrt.org" className="flex items-center gap-1 hover:text-white transition-colors">
              <Mail className="w-3 h-3" />
              <span className="hidden sm:inline">info@asnrt.org</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline mr-2">Follow Us:</span>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Facebook className="w-3.5 h-3.5" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Instagram className="w-3.5 h-3.5" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin className="w-3.5 h-3.5" /></a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <img src={IMAGES.logo} alt="ASNRT Logo" className="h-12 w-12 object-contain" />
            <div className="hidden sm:block">
              <div className="font-heading font-bold text-lg leading-tight text-slate-900">ASNRT</div>
              <div className="text-[10px] text-muted-foreground leading-tight">Arab Society of Nephrology<br />& Renal Transplantation</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-emerald-700 bg-emerald-50"
                      : "text-slate-700 hover:text-emerald-700 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-border py-2 z-50"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Calculator CTA + Mobile toggle */}
          <div className="flex items-center gap-2">
            <a
              href={CALCULATOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl text-sm font-semibold shadow-md shadow-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Calculator className="w-4 h-4" />
              <span className="hidden sm:inline">Calculators</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden border-t border-border bg-white"
            >
              <div className="container py-4 space-y-1">
                {NAV_ITEMS.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive(item.href)
                          ? "text-emerald-700 bg-emerald-50"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="ml-4 space-y-0.5">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-4 py-2 text-sm text-slate-500 hover:text-emerald-700 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-3 border-t border-border">
                  <Link
                    href="/membership"
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-emerald-700 hover:bg-emerald-50 rounded-lg"
                  >
                    Become a Member
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
