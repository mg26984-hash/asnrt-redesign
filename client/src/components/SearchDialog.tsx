import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  FileText,
  Newspaper,
  BookOpen,
  Globe,
  Users,
  Calendar,
  GraduationCap,
  ExternalLink,
  ArrowRight,
  Command,
  CornerDownLeft,
  ChevronUp,
  ChevronDown,
  Calculator,
  Stethoscope,
  Heart,
  Droplets,
  Award,
  Mail,
  Image,
} from "lucide-react";
import {
  EDUCATION_MATERIALS,
  NEWS_ITEMS,
  ACADEMIC_ACTIVITIES,
  INTERNATIONAL_SOCIETIES,
  ARAB_SOCIETIES,
  MEMBERS,
  NEPHROCALCS_URL,
  CALCULATOR_CATEGORIES,
  type EducationResource,
} from "@/lib/constants";

// ── Search result types ──
interface SearchResult {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  categoryIcon: React.ReactNode;
  href?: string;
  externalUrl?: string;
  type: "page" | "education" | "news" | "journal" | "guideline" | "society" | "member" | "calculator";
}

// ── Build the search index ──
function buildSearchIndex(): SearchResult[] {
  const results: SearchResult[] = [];

  // Site pages
  const pages = [
    { title: "Home", href: "/", subtitle: "ASNRT homepage" },
    { title: "About ASNRT", href: "/about", subtitle: "Mission, vision, and objectives" },
    { title: "Constitution", href: "/about/constitution", subtitle: "ASNRT constitution and bylaws" },
    { title: "Past Presidents", href: "/about/past-presidents", subtitle: "History of ASNRT leadership" },
    { title: "Executive Committee", href: "/members", subtitle: "Current ASNRT leadership" },
    { title: "Coordinators", href: "/members/coordinators", subtitle: "Country coordinators" },
    { title: "Patient Education", href: "/education/patient", subtitle: "Resources for patients and families" },
    { title: "Nursing Education", href: "/education/nurses", subtitle: "Training for nephrology nurses" },
    { title: "Medical Education", href: "/education/doctors", subtitle: "CME resources for physicians" },
    { title: "Journals", href: "/academic/journals", subtitle: "Nephrology journals" },
    { title: "Guidelines", href: "/academic/guidelines", subtitle: "Clinical practice guidelines" },
    { title: "Events & Congresses", href: "/events", subtitle: "Upcoming and past conferences" },
    { title: "Nephrology Newsweek", href: "/news", subtitle: "Latest nephrology news" },
    { title: "Gallery", href: "/gallery", subtitle: "Photos from ASNRT events" },
    { title: "Arab Societies", href: "/societies", subtitle: "Arab nephrology societies" },
    { title: "International Societies", href: "/societies/international", subtitle: "International nephrology organizations" },
    { title: "Contact Us", href: "/contact", subtitle: "Get in touch with ASNRT" },
    { title: "Membership", href: "/membership", subtitle: "Join ASNRT" },
  ];
  pages.forEach((p, i) => {
    results.push({
      id: `page-${i}`,
      title: p.title,
      subtitle: p.subtitle,
      category: "Pages",
      categoryIcon: <BookOpen className="w-4 h-4" />,
      href: p.href,
      type: "page",
    });
  });

  // Education materials
  const eduSections = [
    { key: "patient", audience: "Patient" },
    { key: "nurses", audience: "Nursing" },
    { key: "doctors", audience: "Medical" },
  ] as const;

  const subKeys = ["nephrology", "dialysis", "transplantation"] as const;

  for (const section of eduSections) {
    for (const sub of subKeys) {
      const data = (EDUCATION_MATERIALS as any)[section.key]?.[sub];
      if (!data?.resources) continue;
      (data.resources as EducationResource[]).forEach((r: EducationResource, i: number) => {
        results.push({
          id: `edu-${section.key}-${sub}-${i}`,
          title: r.title,
          subtitle: [r.author, r.event, r.year].filter(Boolean).join(" · "),
          category: `${section.audience} Education`,
          categoryIcon: <GraduationCap className="w-4 h-4" />,
          externalUrl: r.pdfUrl,
          type: "education",
        });
      });
    }
  }

  // News
  NEWS_ITEMS.forEach((n, i) => {
    results.push({
      id: `news-${i}`,
      title: n.title,
      subtitle: `${n.source} · ${n.date}`,
      category: "News",
      categoryIcon: <Newspaper className="w-4 h-4" />,
      externalUrl: n.url,
      type: "news",
    });
  });

  // Journals
  [...ACADEMIC_ACTIVITIES.journals.arab, ...ACADEMIC_ACTIVITIES.journals.international].forEach((j, i) => {
    results.push({
      id: `journal-${i}`,
      title: j.name,
      subtitle: "Nephrology Journal",
      category: "Journals",
      categoryIcon: <FileText className="w-4 h-4" />,
      externalUrl: j.url !== "#" ? j.url : undefined,
      href: j.url === "#" ? "/academic/journals" : undefined,
      type: "journal",
    });
  });

  // Guidelines
  [...ACADEMIC_ACTIVITIES.guidelines.arab, ...ACADEMIC_ACTIVITIES.guidelines.international].forEach((g, i) => {
    results.push({
      id: `guideline-${i}`,
      title: g.name,
      subtitle: "Clinical Guideline",
      category: "Guidelines",
      categoryIcon: <Award className="w-4 h-4" />,
      externalUrl: g.url !== "#" ? g.url : undefined,
      href: g.url === "#" ? "/academic/guidelines" : undefined,
      type: "guideline",
    });
  });

  // Societies
  ARAB_SOCIETIES.forEach((s, i) => {
    results.push({
      id: `arab-soc-${i}`,
      title: s.name,
      subtitle: "Arab Society",
      category: "Societies",
      categoryIcon: <Globe className="w-4 h-4" />,
      href: "/societies",
      type: "society",
    });
  });
  INTERNATIONAL_SOCIETIES.forEach((s, i) => {
    results.push({
      id: `intl-soc-${i}`,
      title: s.name,
      subtitle: "International Society",
      category: "Societies",
      categoryIcon: <Globe className="w-4 h-4" />,
      externalUrl: s.url,
      type: "society",
    });
  });

  // Members
  MEMBERS.forEach((m, i) => {
    results.push({
      id: `member-${i}`,
      title: m.name,
      subtitle: m.role,
      category: "Committee",
      categoryIcon: <Users className="w-4 h-4" />,
      href: "/members",
      type: "member",
    });
  });

  // Calculator categories
  CALCULATOR_CATEGORIES.forEach((c, i) => {
    results.push({
      id: `calc-${i}`,
      title: `${c.name} Calculator`,
      subtitle: `${c.count} tools — ${c.description}`,
      category: "Calculators",
      categoryIcon: <Calculator className="w-4 h-4" />,
      externalUrl: NEPHROCALCS_URL,
      type: "calculator",
    });
  });

  return results;
}

// ── Fuzzy match ──
function fuzzyMatch(query: string, text: string): boolean {
  const q = query.toLowerCase();
  const t = text.toLowerCase();
  // Direct substring match
  if (t.includes(q)) return true;
  // Word-start match: check if query matches the start of any word
  const words = t.split(/\s+/);
  if (words.some((w) => w.startsWith(q))) return true;
  // Fuzzy: all query chars appear in order
  let qi = 0;
  for (let ti = 0; ti < t.length && qi < q.length; ti++) {
    if (t[ti] === q[qi]) qi++;
  }
  return qi === q.length && q.length >= 3;
}

function scoreResult(query: string, result: SearchResult): number {
  const q = query.toLowerCase();
  const title = result.title.toLowerCase();
  const subtitle = (result.subtitle || "").toLowerCase();

  // Exact title match
  if (title === q) return 100;
  // Title starts with query
  if (title.startsWith(q)) return 90;
  // Title contains query as substring
  if (title.includes(q)) return 80;
  // Word in title starts with query
  if (title.split(/\s+/).some((w) => w.startsWith(q))) return 70;
  // Subtitle contains query
  if (subtitle.includes(q)) return 50;
  // Category match
  if (result.category.toLowerCase().includes(q)) return 40;
  // Fuzzy match
  return 20;
}

// ── Component ──
interface SearchDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchDialog({ open, onClose }: SearchDialogProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [, setLocation] = useLocation();

  const searchIndex = useMemo(() => buildSearchIndex(), []);

  const filteredResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.trim();
    return searchIndex
      .filter((r) => {
        const searchable = `${r.title} ${r.subtitle || ""} ${r.category}`;
        return fuzzyMatch(q, searchable);
      })
      .sort((a, b) => scoreResult(q, b) - scoreResult(q, a))
      .slice(0, 20);
  }, [query, searchIndex]);

  // Group results by category
  const groupedResults = useMemo(() => {
    const groups: { category: string; icon: React.ReactNode; items: SearchResult[] }[] = [];
    const seen = new Set<string>();
    for (const r of filteredResults) {
      if (!seen.has(r.category)) {
        seen.add(r.category);
        groups.push({ category: r.category, icon: r.categoryIcon, items: [] });
      }
      groups.find((g) => g.category === r.category)!.items.push(r);
    }
    return groups;
  }, [filteredResults]);

  // Flat list for keyboard nav
  const flatResults = useMemo(() => filteredResults, [filteredResults]);

  // Reset on open
  useEffect(() => {
    if (open) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  // Reset selection when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [filteredResults]);

  // Scroll selected into view
  useEffect(() => {
    if (!listRef.current) return;
    const el = listRef.current.querySelector(`[data-index="${selectedIndex}"]`);
    if (el) el.scrollIntoView({ block: "nearest" });
  }, [selectedIndex]);

  const handleSelect = useCallback(
    (result: SearchResult) => {
      onClose();
      if (result.externalUrl) {
        window.open(result.externalUrl, "_blank", "noopener,noreferrer");
      } else if (result.href) {
        setLocation(result.href);
      }
    },
    [onClose, setLocation]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((i) => Math.min(i + 1, flatResults.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter" && flatResults[selectedIndex]) {
        e.preventDefault();
        handleSelect(flatResults[selectedIndex]);
      } else if (e.key === "Escape") {
        onClose();
      }
    },
    [flatResults, selectedIndex, handleSelect, onClose]
  );

  // Global keyboard shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (open) onClose();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  let flatIndex = -1;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-[10vh] sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-full sm:max-w-xl z-[101] bg-white rounded-2xl shadow-2xl border border-border overflow-hidden"
          >
            {/* Search input */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
              <Search className="w-5 h-5 text-muted-foreground shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search education materials, news, guidelines..."
                className="flex-1 text-base bg-transparent outline-none placeholder:text-muted-foreground/60"
                autoComplete="off"
                spellCheck={false}
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="p-1 rounded-md hover:bg-slate-100 transition-colors"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              )}
              <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground bg-slate-100 rounded border border-slate-200">
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div ref={listRef} className="max-h-[60vh] overflow-y-auto">
              {query.trim() === "" ? (
                // Empty state — show quick links
                <div className="p-6 text-center">
                  <Search className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground mb-4">
                    Search across 97+ education materials, news, journals, guidelines, and more
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {["CKD", "Dialysis", "Transplant", "IgA", "Lupus", "eGFR", "Anemia"].map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setQuery(tag)}
                        className="px-3 py-1.5 text-xs font-medium bg-emerald-50 text-emerald-700 rounded-full hover:bg-emerald-100 transition-colors"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              ) : filteredResults.length === 0 ? (
                // No results
                <div className="p-8 text-center">
                  <Search className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
                  <p className="text-sm font-medium text-slate-700 mb-1">No results found</p>
                  <p className="text-xs text-muted-foreground">
                    Try a different keyword or browse the site sections
                  </p>
                </div>
              ) : (
                // Grouped results
                <div className="py-2">
                  {groupedResults.map((group) => (
                    <div key={group.category}>
                      <div className="px-4 py-2 flex items-center gap-2">
                        <span className="text-emerald-600">{group.icon}</span>
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          {group.category}
                        </span>
                        <span className="text-[10px] text-muted-foreground/60 ml-auto">
                          {group.items.length} result{group.items.length > 1 ? "s" : ""}
                        </span>
                      </div>
                      {group.items.map((result) => {
                        flatIndex++;
                        const idx = flatIndex;
                        const isSelected = idx === selectedIndex;
                        return (
                          <button
                            key={result.id}
                            data-index={idx}
                            onClick={() => handleSelect(result)}
                            onMouseEnter={() => setSelectedIndex(idx)}
                            className={`w-full flex items-start gap-3 px-4 py-2.5 text-left transition-colors ${
                              isSelected
                                ? "bg-emerald-50 text-emerald-900"
                                : "hover:bg-slate-50 text-slate-700"
                            }`}
                          >
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium leading-snug truncate">
                                {result.title}
                              </div>
                              {result.subtitle && (
                                <div className="text-xs text-muted-foreground truncate mt-0.5">
                                  {result.subtitle}
                                </div>
                              )}
                            </div>
                            <div className="shrink-0 mt-0.5">
                              {result.externalUrl ? (
                                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/50" />
                              ) : (
                                <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/50" />
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer hints */}
            <div className="flex items-center justify-between px-4 py-2.5 border-t border-border bg-slate-50/80 text-[11px] text-muted-foreground">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <ChevronUp className="w-3 h-3" />
                  <ChevronDown className="w-3 h-3" />
                  Navigate
                </span>
                <span className="flex items-center gap-1">
                  <CornerDownLeft className="w-3 h-3" />
                  Open
                </span>
              </div>
              <span className="flex items-center gap-1">
                <Command className="w-3 h-3" />K to search
              </span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
