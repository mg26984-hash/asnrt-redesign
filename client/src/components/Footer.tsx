import { Link } from "wouter";
import { IMAGES, CALCULATOR_URL, SOCIAL_LINKS } from "@/lib/constants";
import { Calculator, Facebook, Instagram, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white/80">
      {/* Calculator banner */}
      <div className="bg-gradient-to-r from-emerald-700 to-teal-700">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
              <Calculator className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-white text-lg">74 Clinical Calculators</h3>
              <p className="text-white/70 text-sm">Across 13 nephrology categories — free for all clinicians</p>
            </div>
          </div>
          <a
            href={CALCULATOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white text-emerald-700 rounded-xl font-semibold hover:bg-white/90 transition-colors shadow-lg"
          >
            Open Calculator Hub
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
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
            <h4 className="font-heading font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About ASNRT", href: "/about" },
                { label: "Executive Committee", href: "/members" },
                { label: "Education", href: "/education" },
                { label: "Academic Activities", href: "/academic" },
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
            <h4 className="font-heading font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Clinical Calculators", href: CALCULATOR_URL, external: true },
                { label: "Journals", href: "/academic/journals" },
                { label: "Guidelines", href: "/academic/guidelines" },
                { label: "Patient Education", href: "/education/patient" },
                { label: "Nursing Education", href: "/education/nurses" },
                { label: "Membership", href: "/membership" },
              ].map((link) => (
                <li key={link.label}>
                  {link.external ? (
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
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Contact</h4>
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
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/40">
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
