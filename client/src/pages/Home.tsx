// ============================================================
// ASNRT Home Page — "Nephro Hub" Design
// Sections: Hero, Stats, Calculator Spotlight, About Preview,
//           Members Preview, Education Preview, News Preview,
//           Gallery Preview, Societies Slider
// ============================================================

import { Link } from "wouter";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import {
  IMAGES,
  CALCULATOR_URL,
  CALCULATOR_CATEGORIES,
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
  Activity,
  AlertTriangle,
  Droplets,
  Zap,
  TestTube,
  Heart,
  Stethoscope,
  Ruler,
  HeartPulse,
  Bone,
  Shield,
  Wrench,
  GraduationCap,
  Newspaper,
  Image,
  ChevronRight,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Activity: <Activity className="w-5 h-5" />,
  AlertTriangle: <AlertTriangle className="w-5 h-5" />,
  Droplets: <Droplets className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  TestTube: <TestTube className="w-5 h-5" />,
  Heart: <Heart className="w-5 h-5" />,
  Stethoscope: <Stethoscope className="w-5 h-5" />,
  Ruler: <Ruler className="w-5 h-5" />,
  HeartPulse: <HeartPulse className="w-5 h-5" />,
  Bone: <Bone className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
};

export default function Home() {
  return (
    <PageLayout noBreadcrumb>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={IMAGES.heroBg}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/50" />
        </div>

        <div className="container relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-300 text-sm font-medium mb-6">
                <Globe className="w-4 h-4" />
                Established 1996 — Serving the Arab World
              </div>

              <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
                Arab Society of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                  Nephrology
                </span>{" "}
                & Renal Transplantation
              </h1>

              <p className="text-lg text-white/70 mb-8 max-w-xl leading-relaxed">
                Advancing kidney health through education, research, and collaboration across the Arab world. Access our comprehensive suite of clinical calculators and educational resources.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={CALCULATOR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center gap-2.5 px-7 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl font-bold text-base shadow-xl shadow-emerald-500/25 hover:shadow-2xl hover:shadow-emerald-500/35 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Calculator className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Open Calculators</span>
                  <ExternalLink className="w-4 h-4 opacity-70 relative z-10" />
                </a>
                <Link
                  href="/about"
                  className="flex items-center gap-2 px-7 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl font-semibold hover:bg-white/20 transition-all duration-200"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Right: Calculator Quick Access */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="glass rounded-3xl p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                    <Calculator className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-lg">Calculator Hub</h3>
                    <p className="text-white/50 text-sm">74 calculators · 13 categories</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {CALCULATOR_CATEGORIES.slice(0, 8).map((cat, i) => (
                    <a
                      key={cat.name}
                      href={CALCULATOR_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 transition-all group"
                    >
                      <span className="text-emerald-400 group-hover:text-emerald-300 transition-colors">
                        {iconMap[cat.icon]}
                      </span>
                      <div>
                        <div className="text-white text-xs font-medium leading-tight">{cat.name}</div>
                        <div className="text-white/40 text-[10px]">{cat.count} tools</div>
                      </div>
                    </a>
                  ))}
                </div>
                <a
                  href={CALCULATOR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 mt-4 py-2.5 rounded-xl bg-emerald-500/15 text-emerald-300 text-sm font-medium hover:bg-emerald-500/25 transition-colors"
                >
                  View All 13 Categories
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-white border-b border-border">
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: <Calculator className="w-6 h-6" />, value: 74, suffix: "+", label: "Clinical Calculators" },
              { icon: <Users className="w-6 h-6" />, value: 22, label: "Arab Countries" },
              { icon: <BookOpen className="w-6 h-6" />, value: 13, label: "Calculator Categories" },
              { icon: <Award className="w-6 h-6" />, value: 29, suffix: "+", label: "Years of Service" },
            ].map((stat, i) => (
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

      {/* ===== CALCULATOR SPOTLIGHT ===== */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.calculatorSpotlight} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/85" />
        </div>
        <div className="container relative z-10">
          <SectionHeading
            tag="Featured Tool"
            title="Nephrology Calculator Hub"
            subtitle="The most comprehensive collection of nephrology calculators available — from eGFR equations to transplant scoring, all validated and free."
            light
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
            {CALCULATOR_CATEGORIES.map((cat, i) => (
              <motion.a
                key={cat.name}
                href={CALCULATOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass rounded-2xl p-5 hover:bg-white/12 hover:border-emerald-500/30 transition-all group"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-emerald-400 mt-0.5">{iconMap[cat.icon]}</span>
                  <div>
                    <h3 className="font-heading font-semibold text-white text-sm">{cat.name}</h3>
                    <span className="text-emerald-400/70 text-xs font-medium">{cat.count} calculators</span>
                  </div>
                </div>
                <p className="text-white/50 text-xs leading-relaxed">{cat.description}</p>
              </motion.a>
            ))}
          </div>
          <div className="text-center">
            <a
              href={CALCULATOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl font-bold shadow-xl shadow-emerald-500/25 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <Calculator className="w-5 h-5" />
              Launch Calculator Hub
              <ExternalLink className="w-4 h-4 opacity-70" />
            </a>
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

      {/* ===== EXECUTIVE COMMITTEE PREVIEW ===== */}
      <section className="py-20 bg-stone-50">
        <div className="container">
          <SectionHeading
            tag="Leadership"
            title="Executive Committee"
            subtitle="Meet the distinguished leaders guiding ASNRT's mission across the Arab world."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-5">
            {MEMBERS.map((member, i) => (
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
            ].map((item, i) => (
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
            {NEWS_ITEMS.slice(0, 3).map((item, i) => (
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
            {GALLERY_ITEMS.slice(0, 3).map((item, i) => (
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
            ].map((item, i) => (
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
