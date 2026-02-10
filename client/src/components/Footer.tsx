import { Link } from "wouter";
import { IMAGES, NEPHROCALCS_URL, SOCIAL_LINKS } from "@/lib/constants";
import { Calculator, Facebook, Instagram, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white/80">
      {/* Calculator tools banner */}
      <div className="bg-gradient-to-r from-emerald-700 to-teal-700">
        <div className="container py-5 md:py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
              <Calculator className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-white text-base md:text-lg">NephroCalcs — Clinical Calculators</h3>
              <p className="text-white/70 text-xs md:text-sm">74+ free nephrology calculators for clinicians</p>
            </div>
          </div>
          <a
            href={NEPHROCALCS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-white text-emerald-700 rounded-xl font-semibold text-sm hover:bg-white/90 transition-colors shadow-lg shrink-0"
          >
            Open NephroCalcs
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="container py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* About */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={IMAGES.footerLogo} alt="ASNRT" className="h-10 w-10 object-contain" />
              <div>
                <div className="font-heading font-bold text-white">ASNRT</div>
                <div className="text-xs text-white/50">Est. 1996</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/60 mb-4">
              The Arab Society of Nephrology and Renal Transplantation is a non-profit scientific society dedicated to advancing kidney health across the Arab world.
            </p>
            <div className="flex items-center gap-3">
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-emerald-600 transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-emerald-600 transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-emerald-600 transition-colors"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm md:text-base">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "About ASNRT", href: "/about" },
                { label: "Executive Committee", href: "/members" },
                { label: "Education", href: "/education" },
                { label: "Academic Activities", href: "/academic" },
                { label: "Events", href: "/events" },
                { label: "News", href: "/news" },
                { label: "Gallery", href: "/gallery" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-emerald-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm md:text-base">Resources</h4>
            <ul className="space-y-2">
              {[
                { label: "NephroCalcs", href: NEPHROCALCS_URL, external: true },
                { label: "Journals", href: "/academic/journals" },
                { label: "Guidelines", href: "/academic/guidelines" },
                { label: "Patient Education", href: "/education/patient" },
                { label: "Nursing Education", href: "/education/nurses" },
                { label: "Membership", href: "/membership" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  {"external" in link && link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-emerald-400 transition-colors flex items-center gap-1">
                      {link.label}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link href={link.href} className="text-sm text-white/60 hover:text-emerald-400 transition-colors">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-heading font-semibold text-white mb-4 text-sm md:text-base">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-emerald-400 shrink-0" />
                <a href="mailto:info@asnrt.org" className="text-sm text-white/60 hover:text-emerald-400 transition-colors">info@asnrt.org</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-emerald-400 shrink-0" />
                <span className="text-sm text-white/60">Arab World</span>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600/20 text-emerald-400 rounded-lg text-sm font-medium hover:bg-emerald-600/30 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                Contact Us
              </Link>
              <Link
                href="/membership"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white/70 rounded-lg text-sm font-medium hover:bg-white/15 transition-colors"
              >
                Join ASNRT
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/40 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Arab Society of Nephrology and Renal Transplantation. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/about/constitution" className="text-xs text-white/40 hover:text-white/60 transition-colors">Constitution</Link>
            <Link href="/membership" className="text-xs text-white/40 hover:text-white/60 transition-colors">Membership</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
