import { Link, useParams } from "wouter";
import PageLayout from "@/components/PageLayout";
import SEOHead from "@/components/SEOHead";
import { SEO } from "@/lib/seo";
import SectionHeading from "@/components/SectionHeading";
import {
  EDUCATION_CATEGORIES,
  EDUCATION_MATERIALS,
  NEPHROCALCS_URL,
  type EducationResource,
} from "@/lib/constants";
import { motion } from "framer-motion";
import {
  BookOpen, Stethoscope, Heart, Droplets, GraduationCap,
  ArrowRight, Calculator, ExternalLink, Users, FileText,
  Download, Beaker, ChevronRight,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="w-5 h-5" />,
  Stethoscope: <Stethoscope className="w-5 h-5" />,
  Heart: <Heart className="w-5 h-5" />,
  Droplets: <Droplets className="w-5 h-5" />,
  GraduationCap: <GraduationCap className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: [0, 0, 0.2, 1] as [number, number, number, number] },
  }),
};

type SubKey = "nephrology" | "dialysis" | "transplantation";

function ResourceCard({ resource, index }: { resource: EducationResource; index: number }) {
  return (
    <motion.a
      href={resource.pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="flex items-start gap-4 p-5 rounded-xl border border-border bg-white hover:shadow-md hover:border-emerald-200 transition-all group"
    >
      <div className="w-10 h-10 rounded-lg bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
        <FileText className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-sm text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug mb-1">
          {resource.title}
        </h4>
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          {resource.author && <span>{resource.author}</span>}
          {resource.event && (
            <>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span>{resource.event}</span>
            </>
          )}
          {resource.year && (
            <>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span>{resource.year}</span>
            </>
          )}
        </div>
      </div>
      <Download className="w-4 h-4 text-muted-foreground group-hover:text-emerald-600 shrink-0 mt-1 transition-colors" />
    </motion.a>
  );
}

export default function Education() {
  const params = useParams<{ category?: string }>();
  const category = params.category as "patient" | "nurses" | "doctors" | undefined;

  // Main education landing
  if (!category) {
    return (
      <PageLayout
      pageTitle="Education"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Education" },
      ]}
      >
        <SEOHead {...SEO.education} />
        <section className="py-16 bg-white">
          <div className="container">
            <SectionHeading
              tag="Education"
              title="Educational Resources"
              subtitle="Comprehensive materials for patients, nurses, and physicians — from understanding kidney disease to advanced clinical topics."
            />

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {[
                {
                  key: "patient",
                  title: "Patient Education",
                  desc: "Understanding kidney disease, dialysis, and transplantation in accessible language.",
                  icon: <BookOpen className="w-6 h-6" />,
                  color: "bg-blue-50 text-blue-600",
                  count: EDUCATION_MATERIALS.patient.nephrology.resources.length,
                },
                {
                  key: "nurses",
                  title: "Nursing Education",
                  desc: "Specialized training materials and protocols for nephrology nurses.",
                  icon: <Stethoscope className="w-6 h-6" />,
                  color: "bg-amber-50 text-amber-600",
                  count: EDUCATION_MATERIALS.nurses.nephrology.resources.length,
                },
                {
                  key: "doctors",
                  title: "Medical Education",
                  desc: "CME resources, case studies, and advanced nephrology topics for physicians.",
                  icon: <GraduationCap className="w-6 h-6" />,
                  color: "bg-emerald-50 text-emerald-600",
                  count:
                    EDUCATION_MATERIALS.doctors.nephrology.resources.length +
                    EDUCATION_MATERIALS.doctors.dialysis.resources.length +
                    EDUCATION_MATERIALS.doctors.transplantation.resources.length,
                },
              ].map((item, i) => (
                <motion.div
                  key={item.key}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <Link
                    href={`/education/${item.key}`}
                    className="block p-7 rounded-2xl border border-border bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-full"
                  >
                    <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-5`}>
                      {item.icon}
                    </div>
                    <h3 className="font-heading font-bold text-xl text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">{item.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{item.count} resources available</span>
                      <span className="flex items-center gap-1.5 text-emerald-600 text-sm font-semibold">
                        Explore
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Calculator tools callout */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="font-heading font-bold text-white text-xl mb-2">Clinical Calculator Tools</h3>
                <p className="text-white/60 text-sm">Access our free nephrology calculators for clinical decision-making.</p>
              </div>
              <a
                href={NEPHROCALCS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white rounded-xl font-semibold text-sm hover:bg-emerald-700 transition-colors shrink-0"
              >
                <Calculator className="w-4 h-4" />
                Open NephroCalcs
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>
        </section>
      </PageLayout>
    );
  }

  // Category page (patient, nurses, doctors)
  const catData = EDUCATION_CATEGORIES[category];
  if (!catData) return null;

  const materials = EDUCATION_MATERIALS[category];
  const subcategories: SubKey[] = ["nephrology", "dialysis", "transplantation"];

  return (
    <PageLayout
      pageTitle={catData.title}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Education", href: "/education" },
        { label: catData.title },
      ]}
    >
      <SEOHead title={`${catData.title} — Education`} description={catData.description} path={`/education/${category}`} />
      <section className="py-16 bg-white">
        <div className="container">
          <SectionHeading
            tag="Education"
            title={catData.title}
            subtitle={catData.description}
          />

          {subcategories.map((sub) => {
            const subData = materials[sub];
            const hasResources = subData.resources.length > 0;
            const isComingSoon = "comingSoon" in subData && subData.comingSoon;

            return (
              <div key={sub} className="mb-12 last:mb-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    {sub === "nephrology" ? <BookOpen className="w-5 h-5" /> : sub === "dialysis" ? <Droplets className="w-5 h-5" /> : <Heart className="w-5 h-5" />}
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-lg text-slate-900">{subData.title}</h2>
                    <p className="text-sm text-muted-foreground">{subData.description}</p>
                  </div>
                </div>

                {hasResources ? (
                  <div className="grid gap-3">
                    {subData.resources.map((resource: EducationResource, i: number) => (
                      <ResourceCard key={resource.title + i} resource={resource} index={i} />
                    ))}
                  </div>
                ) : isComingSoon ? (
                  <div className="rounded-xl border border-dashed border-border bg-stone-50 p-8 text-center">
                    <p className="text-muted-foreground text-sm">Materials coming soon. Check back later for updates.</p>
                  </div>
                ) : (
                  <div className="rounded-xl border border-dashed border-border bg-stone-50 p-8 text-center">
                    <p className="text-muted-foreground text-sm">No resources available yet.</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </PageLayout>
  );
}
