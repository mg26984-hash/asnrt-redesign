// ============================================================
// ASNRT Home Page — Society-focused design
// Hero about mission, Tools & Services section with calc links
// ============================================================

import { Link } from "wouter";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import {
  IMAGES,
  NEPHROCALCS_URL,
  OTCCALCS_URL,
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
  Heart,
  FileText,
  Beaker,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0, 0, 0.2, 1] as [number, number, number, number] },
  }),
};

export default function Home() {
  return (
    <PageLayout noBreadcrumb>
      {/* ===== HERO — Society Mission ===== */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/50" />
        </div>

        <div className="container relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Mission */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-300 text-sm font-medium mb-6">
                <Globe className="w-4 h-4" />
                Established 1996 — Serving 22 Arab Countries
              </div>

              <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
                Arab Society of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                  Nephrology
                </span>{" "}
                & Renal Transplantation
              </h1>

              <p className="text-lg text-white/70 mb-8 max-w-xl leading-relaxed">
                Advancing kidney health through education, research, and collaboration across the Arab world. Uniting nephrologists, researchers, and healthcare professionals to improve patient outcomes.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="flex items-center gap-2.5 px-7 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl font-bold text-base shadow-xl shadow-emerald-500/25 hover:shadow-2xl hover:shadow-emerald-500/35 hover:-translate-y-1 transition-all duration-300"
                >
                  About ASNRT
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/membership"
                  className="flex items-center gap-2 px-7 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl font-semibold hover:bg-white/20 transition-all duration-200"
                >
                  <Users className="w-5 h-5" />
                  Join Us
                </Link>
              </div>
            </motion.div>

            {/* Right: Quick Access Cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block space-y-4"
            >
              <div className="glass rounded-3xl p-6">
                <h3 className="font-heading font-bold text-white text-lg mb-4">Quick Access</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { title: "Education", desc: "Patient, Nursing & Medical", icon: <BookOpen className="w-5 h-5" />, href: "/education" },
                    { title: "Events", desc: "Congresses & Conferences", icon: <Calendar className="w-5 h-5" />, href: "/events" },
                    { title: "Academic", desc: "Journals & Guidelines", icon: <FileText className="w-5 h-5" />, href: "/academic" },
                    { title: "Contact", desc: "Get in Touch", icon: <Mail className="w-5 h-5" />, href: "/contact" },
                  ].map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 transition-all group"
                    >
                      <span className="text-emerald-400 group-hover:text-emerald-300 transition-colors">
                        {item.icon}
                      </span>
                      <div>
                        <div className="text-white text-sm font-medium">{item.title}</div>
                        <div className="text-white/40 text-xs">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR — Society Stats ===== */}
      <section className="bg-white border-b border-border">
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: <Globe className="w-6 h-6" />, value: 22, label: "Arab Countries" },
              { icon: <Award className="w-6 h-6" />, value: 29, suffix: "+", label: "Years of Service" },
              { icon: <Users className="w-6 h-6" />, value: 7, label: "Executive Members" },
              { icon: <BookOpen className="w-6 h-6" />, value: 80, suffix: "+", label: "Educational Resources" },
            ].map((stat, i: number) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <div className="font-heading font-bold text-2xl md:text-3xl text-slate-900">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                tag="About Us"
                title="Advancing Kidney Health Across the Arab World"
                align="left"
              />
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Arab Society of Nephrology and Renal Transplantation (ASNRT) is a non-profit scientific society established in 1996. Our mission is to advance the science and practice of nephrology in the Arab world through education, research, and collaboration.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We bring together nephrologists, researchers, and healthcare professionals from 22 Arab countries to share knowledge, develop clinical guidelines, and improve patient outcomes in kidney disease and transplantation.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white rounded-xl font-semibold text-sm hover:bg-emerald-700 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about/constitution"
                  className="flex items-center gap-2 px-5 py-2.5 border border-border text-slate-700 rounded-xl font-semibold text-sm hover:bg-slate-50 transition-colors"
                >
                  View Constitution
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src={IMAGES.kidney} alt="Kidney illustration" className="w-full h-80 object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-2xl text-slate-900">22</div>
                    <div className="text-sm text-muted-foreground">Arab Countries</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== TOOLS & SERVICES — Calculator Links ===== */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.calculatorSpotlight} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/90" />
        </div>
        <div className="container relative z-10">
          <SectionHeading
            tag="Tools & Services"
            title="Clinical Calculator Tools"
            subtitle="ASNRT provides access to comprehensive nephrology calculator platforms — free for all clinicians and healthcare professionals."
            light
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* NephroCalcs */}
            <motion.a
              href={NEPHROCALCS_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group glass rounded-3xl p-8 hover:bg-white/12 hover:border-emerald-500/30 transition-all cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/40 transition-shadow">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-bold text-white text-2xl mb-2">NephroCalcs</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Comprehensive nephrology calculator dashboard with 74 validated clinical tools across 13 categories — including eGFR, electrolytes, acid-base, dialysis adequacy, transplant scoring, and more.
              </p>
              <div className="flex items-center gap-2 text-emerald-400 font-semibold group-hover:text-emerald-300 transition-colors">
                Open NephroCalcs
                <ExternalLink className="w-4 h-4" />
              </div>
            </motion.a>

            {/* OTC Calcs */}
            <motion.a
              href={OTCCALCS_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="group glass rounded-3xl p-8 hover:bg-white/12 hover:border-blue-500/30 transition-all cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-shadow">
                <Beaker className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-bold text-white text-2xl mb-2">OTC Calcs</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Additional clinical calculators and tools for healthcare professionals — complementary resources for clinical decision-making and patient care management.
              </p>
              <div className="flex items-center gap-2 text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">
                Open OTC Calcs
                <ExternalLink className="w-4 h-4" />
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* ===== EXECUTIVE COMMITTEE PREVIEW ===== */}
      <section className="py-20 bg-stone-50">
        <div className="container">
          <SectionHeading
            tag="Leadership"
            title="Executive Committee"
            subtitle="Meet the distinguished leaders guiding ASNRT's mission across the Arab world."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-5">
            {MEMBERS.map((member, i: number) => (
              <motion.div
                key={member.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center group"
              >
                <div className="relative mb-3 rounded-2xl overflow-hidden aspect-square bg-slate-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-heading font-semibold text-sm text-slate-900 leading-tight">{member.name}</h3>
                <p className="text-xs text-emerald-600 font-medium mt-0.5">{member.role}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/members"
              className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-sm hover:text-emerald-700 transition-colors"
            >
              View Full Committee
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== EDUCATION PREVIEW ===== */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionHeading
            tag="Education"
            title="Resources for Everyone"
            subtitle="From patients to physicians — explore our comprehensive educational materials."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Patient Education", desc: "Understanding kidney disease, dialysis, and transplantation in accessible language.", icon: <BookOpen className="w-6 h-6" />, href: "/education/patient", color: "bg-blue-50 text-blue-600" },
              { title: "Nursing Education", desc: "Specialized training materials and protocols for nephrology nurses.", icon: <Stethoscope className="w-6 h-6" />, href: "/education/nurses", color: "bg-amber-50 text-amber-600" },
              { title: "Medical Education", desc: "CME resources, case studies, and advanced nephrology topics for physicians.", icon: <GraduationCap className="w-6 h-6" />, href: "/education/doctors", color: "bg-emerald-50 text-emerald-600" },
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
                  className="block p-7 rounded-2xl border border-border bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-full"
                >
                  <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-5`}>
                    {item.icon}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.desc}</p>
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
      <section className="py-20 bg-stone-50">
        <div className="container">
          <SectionHeading
            tag="Nephrology Newsweek"
            title="Latest in Nephrology"
            subtitle="Stay updated with the latest research, guidelines, and regulatory news."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="block bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
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
                  <h3 className="font-heading font-semibold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{item.excerpt}</p>
                  <div className="flex items-center gap-1 mt-4 text-emerald-600 text-sm font-medium">
                    Read More
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-slate-700 rounded-xl font-semibold text-sm hover:bg-white hover:shadow-md transition-all"
            >
              <Newspaper className="w-4 h-4" />
              View All News
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== GALLERY PREVIEW ===== */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionHeading
            tag="Gallery"
            title="Moments from Our Events"
            subtitle="Browse photos from ASNRT congresses, forums, and academic gatherings."
          />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {GALLERY_ITEMS.slice(0, 3).map((item, i: number) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative rounded-2xl overflow-hidden group aspect-[4/3]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-sm font-semibold leading-snug">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-sm hover:text-emerald-700 transition-colors"
            >
              <Image className="w-4 h-4" />
              View Full Gallery
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== QUICK LINKS SECTION ===== */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Journals", desc: "Arab & international nephrology journals", href: "/academic/journals", icon: <BookOpen className="w-5 h-5" /> },
              { title: "Guidelines", desc: "Clinical practice guidelines", href: "/academic/guidelines", icon: <Award className="w-5 h-5" /> },
              { title: "Societies", desc: "Arab & international societies", href: "/societies", icon: <Globe className="w-5 h-5" /> },
              { title: "Membership", desc: "Join ASNRT today", href: "/membership", icon: <Users className="w-5 h-5" /> },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/25 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-white text-sm">{item.title}</h3>
                  <p className="text-white/50 text-xs">{item.desc}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-white/30 ml-auto group-hover:text-emerald-400 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
