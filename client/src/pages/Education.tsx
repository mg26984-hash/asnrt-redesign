import { useParams } from "wouter";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { EDUCATION_CATEGORIES, IMAGES, CALCULATOR_URL } from "@/lib/constants";
import { motion } from "framer-motion";
import {
  BookOpen, Stethoscope, Heart, Droplets, GraduationCap,
  ArrowRight, Calculator, ExternalLink, Users, FileText,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="w-6 h-6" />,
  Droplets: <Droplets className="w-6 h-6" />,
  Heart: <Heart className="w-6 h-6" />,
  Stethoscope: <Stethoscope className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
};

function EducationOverview() {
  return (
    <PageLayout
      breadcrumbs={[{ label: "Education" }]}
      pageTitle="Education"
      pageSubtitle="Comprehensive educational resources for patients, nurses, and physicians."
    >
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                key: "patient",
                data: EDUCATION_CATEGORIES.patient,
                color: "from-blue-500 to-blue-600",
                bgColor: "bg-blue-50",
                textColor: "text-blue-600",
                icon: <Users className="w-8 h-8 text-white" />,
              },
              {
                key: "nurses",
                data: EDUCATION_CATEGORIES.nurses,
                color: "from-amber-500 to-amber-600",
                bgColor: "bg-amber-50",
                textColor: "text-amber-600",
                icon: <Stethoscope className="w-8 h-8 text-white" />,
              },
              {
                key: "doctors",
                data: EDUCATION_CATEGORIES.doctors,
                color: "from-emerald-500 to-emerald-600",
                bgColor: "bg-emerald-50",
                textColor: "text-emerald-600",
                icon: <GraduationCap className="w-8 h-8 text-white" />,
              },
            ].map((cat, i) => (
              <motion.div
                key={cat.key} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`bg-gradient-to-r ${cat.color} p-6`}>
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                    {cat.icon}
                  </div>
                  <h3 className="font-heading font-bold text-white text-2xl mb-1">{cat.data.title}</h3>
                  <p className="text-white/80 text-sm">{cat.data.description}</p>
                </div>
                <div className="p-6 space-y-3">
                  {cat.data.subcategories.map((sub) => (
                    <Link
                      key={sub.name}
                      href={`/education/${cat.key}`}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-stone-50 transition-colors group"
                    >
                      <span className={`${cat.textColor}`}>{iconMap[sub.icon]}</span>
                      <div className="flex-1">
                        <div className="font-medium text-sm text-slate-900">{sub.name}</div>
                        <div className="text-xs text-muted-foreground">{sub.description}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-emerald-600 transition-colors" />
                    </Link>
                  ))}
                </div>
                <div className="px-6 pb-6">
                  <Link
                    href={`/education/${cat.key}`}
                    className={`flex items-center justify-center gap-2 py-3 rounded-xl ${cat.bgColor} ${cat.textColor} font-semibold text-sm hover:opacity-80 transition-opacity`}
                  >
                    Explore {cat.data.title}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="py-12 bg-gradient-to-r from-emerald-700 to-teal-700">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center">
              <Calculator className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-white text-xl">Clinical Calculators</h3>
              <p className="text-white/70">Complement your learning with 74 validated clinical tools</p>
            </div>
          </div>
          <a href={CALCULATOR_URL} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white text-emerald-700 rounded-xl font-bold hover:bg-white/90 transition-colors shadow-lg">
            Open Calculators <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>
    </PageLayout>
  );
}

function EducationCategory({ category }: { category: "patient" | "nurses" | "doctors" }) {
  const data = EDUCATION_CATEGORIES[category];
  const colorMap = {
    patient: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-100" },
    nurses: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-100" },
    doctors: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-100" },
  };
  const colors = colorMap[category];

  return (
    <PageLayout
      breadcrumbs={[{ label: "Education", href: "/education" }, { label: data.title }]}
      pageTitle={data.title}
      pageSubtitle={data.description}
    >
      <section className="py-16 bg-white">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {data.subcategories.map((sub, i) => (
              <motion.div
                key={sub.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className={`p-6 rounded-2xl ${colors.bg} ${colors.border} border`}
              >
                <div className={`w-12 h-12 rounded-xl bg-white ${colors.text} flex items-center justify-center mb-4 shadow-sm`}>
                  {iconMap[sub.icon]}
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">{sub.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{sub.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Resources list */}
          <SectionHeading tag="Resources" title="Available Materials" align="left" />
          <div className="space-y-3">
            {[
              "Introduction to Kidney Function and Disease",
              "Understanding Chronic Kidney Disease (CKD) Stages",
              "Dialysis: Types, Procedures, and What to Expect",
              "Kidney Transplantation: A Comprehensive Guide",
              "Managing Medications in Kidney Disease",
              "Nutrition and Diet in Kidney Disease",
              "Living with Kidney Disease: Patient Support",
              "Pediatric Kidney Disease: A Guide for Families",
            ].map((resource, i) => (
              <motion.div
                key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="flex items-center gap-4 p-4 rounded-xl bg-stone-50 border border-border hover:bg-white hover:shadow-sm transition-all"
              >
                <FileText className={`w-5 h-5 ${colors.text} shrink-0`} />
                <span className="text-sm text-slate-700 font-medium">{resource}</span>
                <span className="ml-auto text-xs text-muted-foreground">Coming soon</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export default function Education() {
  const params = useParams<{ category?: string }>();
  if (params.category === "patient") return <EducationCategory category="patient" />;
  if (params.category === "nurses") return <EducationCategory category="nurses" />;
  if (params.category === "doctors") return <EducationCategory category="doctors" />;
  return <EducationOverview />;
}
