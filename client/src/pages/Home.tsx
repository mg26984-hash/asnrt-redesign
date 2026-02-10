// ============================================================
// ASNRT Home Page — Mobile-first, society-focused design
// ============================================================

import { Link } from "wouter";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import {
  IMAGES,
  NEPHROCALCS_URL,
  MEMBERS,
  NEWS_ITEMS,
  GALLERY_ITEMS,
} from "@/lib/constants";
import {
  Calculator,
  ExternalLink,
  ArrowRight,
  Users,
  Globe,
  BookOpen,
  Award,
  GraduationCap,
  Stethoscope,
  Newspaper,
  Image,
  ChevronRight,
  Calendar,
  Mail,
  FileText,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  }),
};

export default function Home() {
  return (
    <PageLayout noBreadcrumb>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/60" />
        </div>

        <div className="container relative z-10 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-300 text-xs md:text-sm font-medium mb-4 md:mb-6">
                <Globe className="w-3.5 h-3.5 md:w-4 md:h-4" />
                Established 1996 — Serving 22 Arab Countries
              </div>

              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.15] mb-4 md:mb-6">
                Arab Society of{" "}
                <span className="gradient-text">
                  Nephrology
                </span>{" "}
                & Renal Transplantation
              </h1>

              <p className="text-base md:text-lg text-white/70 mb-6 md:mb-8 max-w-xl leading-relaxed">
                Advancing kidney health through education, research, and collaboration across the Arab world.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/about"
                  className="flex items-center justify-center gap-2.5 px-6 py-3.5 md:px-7 md:py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl font-bold text-sm md:text-base shadow-xl shadow-emerald-500/25 hover:shadow-2xl hover:shadow-emerald-500/35 active:scale-[0.98] transition-all duration-300"
                >
                  About ASNRT
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </Link>
                <Link
                  href="/membership"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 md:px-7 md:py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl font-semibold text-sm md:text-base hover:bg-white/20 active:scale-[0.98] transition-all duration-200"
                >
                  <Users className="w-4 h-4 md:w-5 md:h-5" />
                  Join Us
                </Link>
              </div>
            </motion.div>

            {/* Right: Quick Access Cards — visible on all screens */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 lg:mt-0"
            >
              <div className="glass rounded-2xl md:rounded-3xl p-4 md:p-6">
                <h3 className="font-heading font-bold text-white text-base md:text-lg mb-3 md:mb-4">Quick Access</h3>
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  {[
                    { title: "Education", desc: "Patient, Nursing & Medical", icon: <BookOpen className="w-4 h-4 md:w-5 md:h-5" />, href: "/education" },
                    { title: "Events", desc: "Congresses & Conferences", icon: <Calendar className="w-4 h-4 md:w-5 md:h-5" />, href: "/events" },
                    { title: "Academic", desc: "Journals & Guidelines", icon: <FileText className="w-4 h-4 md:w-5 md:h-5" />, href: "/academic" },
                    { title: "Contact", desc: "Get in Touch", icon: <Mail className="w-4 h-4 md:w-5 md:h-5" />, href: "/contact" },
                  ].map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-center gap-2.5 md:gap-3 p-3 md:p-3.5 rounded-xl bg-white/5 hover:bg-white/10 active:bg-white/15 border border-white/5 hover:border-emerald-500/30 transition-all group min-h-[52px]"
                    >
                      <span className="text-emerald-400 group-hover:text-emerald-300 transition-colors shrink-0">
                        {item.icon}
                      </span>
                      <div className="min-w-0">
                        <div className="text-white text-sm font-medium truncate">{item.title}</div>
                        <div className="text-white/40 text-[11px] md:text-xs truncate">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
                {/* NephroCalcs link inside Quick Access on mobile */}
                <a
                  href={NEPHROCALCS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 mt-3 py-3 rounded-xl bg-emerald-500/15 text-emerald-300 text-sm font-semibold hover:bg-emerald-500/25 active:bg-emerald-500/35 transition-colors min-h-[44px]"
                >
                  <Calculator className="w-4 h-4" />
                  Open NephroCalcs
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-white border-b border-border">
        <div className="container py-6 md:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { icon: <Globe className="w-5 h-5 md:w-6 md:h-6" />, value: 22, label: "Arab Countries" },
              { icon: <Award className="w-5 h-5 md:w-6 md:h-6" />, value: 29, suffix: "+", label: "Years of Service" },
              { icon: <Users className="w-5 h-5 md:w-6 md:h-6" />, value: 7, label: "Executive Members" },
              { icon: <BookOpen className="w-5 h-5 md:w-6 md:h-6" />, value: 80, suffix: "+", label: "Educational Resources" },
            ].map((stat, i: number) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex items-center gap-3 md:gap-4"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <div className="font-heading font-bold text-xl md:text-3xl text-slate-900">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="section-spacing bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading
                tag="About Us"
                title="Advancing Kidney Health Across the Arab World"
                align="left"
              />
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
                The Arab Society of Nephrology and Renal Transplantation (ASNRT) is a non-profit scientific society established in 1996. Our mission is to advance the science and practice of nephrology in the Arab world through education, research, and collaboration.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
                We bring together nephrologists, researchers, and healthcare professionals from 22 Arab countries to share knowledge, develop clinical guidelines, and improve patient outcomes.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="flex items-center gap-2 px-5 py-3 bg-emerald-600 text-white rounded-xl font-semibold text-sm hover:bg-emerald-700 active:scale-[0.98] transition-all min-h-[44px]"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about/constitution"
                  className="flex items-center gap-2 px-5 py-3 border border-border text-slate-700 rounded-xl font-semibold text-sm hover:bg-slate-50 active:scale-[0.98] transition-all min-h-[44px]"
                >
                  View Constitution
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative"
            >
              <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                <img src={IMAGES.kidney} alt="Kidney illustration" className="w-full h-56 md:h-80 object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-2 md:-bottom-6 md:-left-6 bg-white rounded-xl md:rounded-2xl shadow-xl p-3 md:p-5 border border-border">
                <div className="flex items-center gap-2.5 md:gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-emerald-50 flex items-center justify-center">
                    <Globe className="w-5 h-5 md:w-6 md:h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-xl md:text-2xl text-slate-900">22</div>
                    <div className="text-xs md:text-sm text-muted-foreground">Arab Countries</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== TOOLS & SERVICES — NephroCalcs ===== */}
      <section className="relative section-spacing overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.calculatorSpotlight} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/90" />
        </div>
        <div className="container relative z-10">
          <SectionHeading
            tag="Tools & Services"
            title="Clinical Calculator Tools"
            subtitle="Free nephrology calculators for all clinicians and healthcare professionals."
            light
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <a
              href={NEPHROCALCS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass rounded-2xl md:rounded-3xl p-6 md:p-10 block hover:bg-white/12 hover:border-emerald-500/30 active:scale-[0.99] transition-all cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/40 transition-shadow shrink-0">
                  <Calculator className="w-7 h-7 md:w-10 md:h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-white text-xl md:text-3xl mb-1.5 md:mb-2">NephroCalcs</h3>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed mb-3 md:mb-4">
                    74+ validated clinical tools across 13 categories — eGFR, electrolytes, acid-base, dialysis adequacy, transplant scoring, and more.
                  </p>
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm md:text-base group-hover:text-emerald-300 transition-colors">
                    Open NephroCalcs
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ===== EXECUTIVE COMMITTEE ===== */}
      <section className="section-spacing bg-stone-50">
        <div className="container">
          <SectionHeading
            tag="Leadership"
            title="Executive Committee"
            subtitle="Meet the distinguished leaders guiding ASNRT's mission."
          />
          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-4 xl:grid-cols-7 md:gap-5 md:overflow-visible md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
            {MEMBERS.map((member, i: number) => (
              <motion.div
                key={member.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center group snap-start shrink-0 w-[140px] md:w-auto"
              >
                <div className="relative mb-2 md:mb-3 rounded-xl md:rounded-2xl overflow-hidden aspect-square bg-slate-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-heading font-semibold text-xs md:text-sm text-slate-900 leading-tight">{member.name}</h3>
                <p className="text-[11px] md:text-xs text-emerald-600 font-medium mt-0.5">{member.role}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-6 md:mt-8">
            <Link
              href="/members"
              className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-sm hover:text-emerald-700 transition-colors min-h-[44px]"
            >
              View Full Committee
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== EDUCATION PREVIEW ===== */}
      <section className="section-spacing bg-white">
        <div className="container">
          <SectionHeading
            tag="Education"
            title="Resources for Everyone"
            subtitle="From patients to physicians — explore our comprehensive educational materials."
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { title: "Patient Education", desc: "Understanding kidney disease, dialysis, and transplantation.", icon: <BookOpen className="w-5 h-5 md:w-6 md:h-6" />, href: "/education/patient", color: "bg-blue-50 text-blue-600" },
              { title: "Nursing Education", desc: "Training materials and protocols for nephrology nurses.", icon: <Stethoscope className="w-5 h-5 md:w-6 md:h-6" />, href: "/education/nurses", color: "bg-amber-50 text-amber-600" },
              { title: "Medical Education", desc: "CME resources and advanced nephrology topics for physicians.", icon: <GraduationCap className="w-5 h-5 md:w-6 md:h-6" />, href: "/education/doctors", color: "bg-emerald-50 text-emerald-600" },
            ].map((item, i: number) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link
                  href={item.href}
                  className="block p-5 md:p-7 rounded-xl md:rounded-2xl border border-border bg-white card-hover group h-full"
                >
                  <div className={`w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl ${item.color} flex items-center justify-center mb-4 md:mb-5`}>
                    {item.icon}
                  </div>
                  <h3 className="font-heading font-bold text-lg md:text-xl text-slate-900 mb-1.5 md:mb-2 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3 md:mb-4">{item.desc}</p>
                  <span className="flex items-center gap-1.5 text-emerald-600 text-sm font-semibold">
                    Explore
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWS PREVIEW ===== */}
      <section className="section-spacing bg-stone-50">
        <div className="container">
          <SectionHeading
            tag="Nephrology Newsweek"
            title="Latest in Nephrology"
            subtitle="Stay updated with the latest research, guidelines, and regulatory news."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {NEWS_ITEMS.slice(0, 3).map((item, i: number) => (
              <motion.a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="block bg-white rounded-xl md:rounded-2xl border border-border overflow-hidden card-hover group"
              >
                <div className="p-5 md:p-6">
                  <div className="flex items-center gap-2 mb-2.5 md:mb-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                      item.tag === "Guidelines"
                        ? "bg-blue-50 text-blue-600"
                        : item.tag === "Research"
                        ? "bg-purple-50 text-purple-600"
                        : "bg-amber-50 text-amber-600"
                    }`}>
                      {item.tag}
                    </span>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors leading-snug text-sm md:text-base">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 md:line-clamp-3">{item.excerpt}</p>
                  <div className="flex items-center gap-1 mt-3 md:mt-4 text-emerald-600 text-sm font-medium">
                    Read More
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
          <div className="text-center mt-6 md:mt-8">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 px-5 py-3 border border-border text-slate-700 rounded-xl font-semibold text-sm hover:bg-white hover:shadow-md active:scale-[0.98] transition-all min-h-[44px]"
            >
              <Newspaper className="w-4 h-4" />
              View All News
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== GALLERY PREVIEW ===== */}
      <section className="section-spacing bg-white">
        <div className="container">
          <SectionHeading
            tag="Gallery"
            title="Moments from Our Events"
            subtitle="Browse photos from ASNRT congresses, forums, and academic gatherings."
          />
          {/* Horizontal scroll on mobile */}
          <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
            {GALLERY_ITEMS.slice(0, 3).map((item, i: number) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative rounded-xl md:rounded-2xl overflow-hidden group aspect-[4/3] snap-start shrink-0 w-[280px] md:w-auto"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <h3 className="text-white text-xs md:text-sm font-semibold leading-snug">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-6 md:mt-8">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-sm hover:text-emerald-700 transition-colors min-h-[44px]"
            >
              <Image className="w-4 h-4" />
              View Full Gallery
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== QUICK LINKS ===== */}
      <section className="py-10 md:py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {[
              { title: "Journals", desc: "Arab & international journals", href: "/academic/journals", icon: <BookOpen className="w-4 h-4 md:w-5 md:h-5" /> },
              { title: "Guidelines", desc: "Clinical practice guidelines", href: "/academic/guidelines", icon: <Award className="w-4 h-4 md:w-5 md:h-5" /> },
              { title: "Societies", desc: "Arab & international societies", href: "/societies", icon: <Globe className="w-4 h-4 md:w-5 md:h-5" /> },
              { title: "Membership", desc: "Join ASNRT today", href: "/membership", icon: <Users className="w-4 h-4 md:w-5 md:h-5" /> },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="flex items-center gap-3 md:gap-4 p-3.5 md:p-5 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/30 active:bg-white/15 transition-all group min-h-[60px]"
              >
                <div className="w-9 h-9 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/25 transition-colors">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="font-heading font-semibold text-white text-xs md:text-sm truncate">{item.title}</h3>
                  <p className="text-white/50 text-[10px] md:text-xs truncate">{item.desc}</p>
                </div>
                <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-white/30 ml-auto shrink-0 group-hover:text-emerald-400 transition-colors hidden sm:block" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
