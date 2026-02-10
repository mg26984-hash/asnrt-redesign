import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { IMAGES, NEPHROCALCS_URL } from "@/lib/constants";
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
  Search,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SearchDialog from "./SearchDialog";

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
  { label: "Events", href: "/events" },
  { label: "News", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [location] = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileAccordion(null);
  }, [location]);

  // Detect scroll for header shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Global Cmd+K / Ctrl+K shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

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
            <a href="mailto:info@asnrt.org" className="flex items-center gap-1.5 hover:text-white transition-colors">
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
      <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border transition-shadow duration-300 ${scrolled ? "shadow-md" : "shadow-sm"}`}>
        <div className="container flex items-center justify-between py-2.5 md:py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <img src={IMAGES.logo} alt="ASNRT Logo" className="h-14 w-14 md:h-14 md:w-14 object-contain rounded-lg" />
            <div className="hidden sm:block">
              <div className="font-heading font-bold text-base md:text-lg leading-tight text-slate-900">ASNRT</div>
              <div className="text-[10px] text-muted-foreground leading-tight">Arab Society of Nephrology<br />& Renal Transplantation</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-2.5 py-2 rounded-lg text-sm font-medium transition-colors ${
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

          {/* Search + Calculator CTA + Mobile toggle */}
          <div className="flex items-center gap-2">
            {/* Search button — desktop */}
            <button
              onClick={() => setSearchOpen(true)}
              className="hidden md:flex items-center gap-2 px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl text-sm text-muted-foreground transition-colors"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
              <span className="text-slate-400">Search...</span>
              <kbd className="ml-1 px-1.5 py-0.5 text-[10px] font-medium bg-white rounded border border-slate-200 text-slate-400">
                ⌘K
              </kbd>
            </button>

            {/* Search button — mobile */}
            <button
              onClick={() => setSearchOpen(true)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-slate-600" />
            </button>

            {/* NephroCalcs CTA */}
            <a
              href={NEPHROCALCS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl text-sm font-semibold shadow-md shadow-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Calculator className="w-4 h-4" />
              <span className="hidden sm:inline">NephroCalcs</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav — full-screen overlay with accordion */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="xl:hidden overflow-hidden border-t border-border bg-white"
            >
              <div className="container py-3 max-h-[70vh] overflow-y-auto space-y-0.5">
                {/* Mobile search bar */}
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setTimeout(() => setSearchOpen(true), 100);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 mb-2 bg-slate-50 rounded-xl text-sm text-muted-foreground"
                >
                  <Search className="w-4 h-4" />
                  Search materials, news, guidelines...
                </button>

                {NAV_ITEMS.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <>
                        <button
                          onClick={() => setMobileAccordion(mobileAccordion === item.label ? null : item.label)}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                            isActive(item.href)
                              ? "text-emerald-700 bg-emerald-50"
                              : "text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          {item.label}
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileAccordion === item.label ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {mobileAccordion === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="ml-3 pl-3 border-l-2 border-emerald-100 space-y-0.5 py-1">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.label}
                                    href={child.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`block px-3 py-2.5 text-sm rounded-lg transition-colors ${
                                      location === child.href
                                        ? "text-emerald-700 bg-emerald-50/70 font-medium"
                                        : "text-slate-500 hover:text-emerald-700 hover:bg-slate-50"
                                    }`}
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
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
                    )}
                  </div>
                ))}

                {/* Mobile calculator link */}
                <div className="pt-3 mt-2 border-t border-border">
                  <a
                    href={NEPHROCALCS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-4 py-3.5 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 rounded-xl font-semibold text-sm"
                  >
                    <Calculator className="w-5 h-5" />
                    Open NephroCalcs
                    <ExternalLink className="w-3.5 h-3.5 ml-auto opacity-50" />
                  </a>
                </div>

                {/* Membership CTA */}
                <div className="pt-2">
                  <Link
                    href="/membership"
                    onClick={() => setMobileOpen(false)}
                    className="block text-center px-4 py-3 bg-slate-900 text-white rounded-xl font-semibold text-sm"
                  >
                    Join ASNRT
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Search Dialog */}
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
