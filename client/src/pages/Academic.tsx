import { useParams } from "wouter";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import SEOHead from "@/components/SEOHead";
import { SEO } from "@/lib/seo";
import SectionHeading from "@/components/SectionHeading";
import { ACADEMIC_ACTIVITIES } from "@/lib/constants";
import { motion } from "framer-motion";
import { BookOpen, FileText, ExternalLink, ArrowRight, Award, Globe } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
};

function AcademicOverview() {
  return (
    <PageLayout
      breadcrumbs={[{ label: "Academic Activities" }]}
      pageTitle="Academic Activities"
      pageSubtitle="Journals, guidelines, and academic resources for nephrology professionals."
    >
      <SEOHead {...SEO.academic} />
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
              <Link href="/academic/journals" className="block p-8 rounded-2xl border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">Journals</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Access Arab and international nephrology journals for the latest research, reviews, and clinical studies.
                </p>
                <span className="flex items-center gap-1.5 text-emerald-600 font-semibold text-sm">
                  Browse Journals <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}>
              <Link href="/academic/guidelines" className="block p-8 rounded-2xl border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full">
                <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">Guidelines</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Clinical practice guidelines from Arab and international nephrology organizations.
                </p>
                <span className="flex items-center gap-1.5 text-emerald-600 font-semibold text-sm">
                  Browse Guidelines <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function Journals() {
  return (
    <PageLayout
      breadcrumbs={[{ label: "Academic", href: "/academic" }, { label: "Journals" }]}
      pageTitle="Nephrology Journals"
      pageSubtitle="Arab and international journals covering nephrology, dialysis, and transplantation."
    >
      <SEOHead {...SEO.academicJournals} />
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <SectionHeading tag="Arab" title="Arab Journals" align="left" />
          <div className="space-y-3 mb-12">
            {ACADEMIC_ACTIVITIES.journals.arab.map((j, i) => (
              <motion.a
                key={i} href={j.url} target="_blank" rel="noopener noreferrer"
                custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="flex items-center gap-4 p-5 rounded-xl bg-emerald-50 border border-emerald-100 hover:shadow-md transition-all group"
              >
                <BookOpen className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="font-medium text-slate-900 text-sm flex-1">{j.name}</span>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-emerald-600 transition-colors" />
              </motion.a>
            ))}
          </div>

          <SectionHeading tag="International" title="International Journals" align="left" />
          <div className="space-y-3">
            {ACADEMIC_ACTIVITIES.journals.international.map((j, i) => (
              <motion.a
                key={i} href={j.url} target="_blank" rel="noopener noreferrer"
                custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="flex items-center gap-4 p-5 rounded-xl bg-stone-50 border border-border hover:shadow-md transition-all group"
              >
                <Globe className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="font-medium text-slate-900 text-sm flex-1">{j.name}</span>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-blue-600 transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function Guidelines() {
  return (
    <PageLayout
      breadcrumbs={[{ label: "Academic", href: "/academic" }, { label: "Guidelines" }]}
      pageTitle="Clinical Practice Guidelines"
      pageSubtitle="Evidence-based guidelines for nephrology clinical practice."
    >
      <SEOHead {...SEO.academicGuidelines} />
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <SectionHeading tag="Arab" title="Arab Guidelines" align="left" />
          <div className="space-y-3 mb-12">
            {ACADEMIC_ACTIVITIES.guidelines.arab.map((g, i) => (
              <motion.div
                key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="flex items-center gap-4 p-5 rounded-xl bg-emerald-50 border border-emerald-100"
              >
                <Award className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="font-medium text-slate-900 text-sm flex-1">{g.name}</span>
                <span className="text-xs text-muted-foreground">Coming soon</span>
              </motion.div>
            ))}
          </div>

          <SectionHeading tag="International" title="International Guidelines" align="left" />
          <div className="space-y-3">
            {ACADEMIC_ACTIVITIES.guidelines.international.map((g, i) => (
              <motion.a
                key={i} href={g.url} target="_blank" rel="noopener noreferrer"
                custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="flex items-center gap-4 p-5 rounded-xl bg-stone-50 border border-border hover:shadow-md transition-all group"
              >
                <FileText className="w-5 h-5 text-amber-600 shrink-0" />
                <span className="font-medium text-slate-900 text-sm flex-1">{g.name}</span>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-amber-600 transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export default function Academic() {
  const params = useParams<{ sub?: string }>();
  if (params.sub === "journals") return <Journals />;
  if (params.sub === "guidelines") return <Guidelines />;
  return <AcademicOverview />;
}
