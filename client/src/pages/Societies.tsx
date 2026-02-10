import { useParams } from "wouter";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { ARAB_SOCIETIES, INTERNATIONAL_SOCIETIES } from "@/lib/constants";
import { motion } from "framer-motion";
import { Globe, ExternalLink, ArrowRight, MapPin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
};

function ArabSocieties() {
  return (
    <PageLayout
      breadcrumbs={[{ label: "Societies" }]}
      pageTitle="Member Societies"
      pageSubtitle="Arab and international nephrology societies partnering with ASNRT."
    >
      <section className="py-16 bg-white">
        <div className="container">
          <SectionHeading tag="Arab World" title="Arab Nephrology Societies" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {ARAB_SOCIETIES.map((society, i) => (
              <motion.div
                key={society.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 group"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={society.banner}
                    alt={society.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <h3 className="font-heading font-semibold text-sm text-slate-900 leading-snug">{society.name}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/societies/international"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-colors"
            >
              <Globe className="w-4 h-4" />
              View International Societies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function InternationalSocietiesPage() {
  return (
    <PageLayout
      breadcrumbs={[{ label: "Societies", href: "/societies" }, { label: "International Societies" }]}
      pageTitle="International Societies"
      pageSubtitle="Global nephrology organizations collaborating with ASNRT."
    >
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <div className="space-y-4">
            {INTERNATIONAL_SOCIETIES.map((society, i) => (
              <motion.a
                key={society.name}
                href={society.url}
                target="_blank"
                rel="noopener noreferrer"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex items-center gap-4 p-5 rounded-xl bg-stone-50 border border-border hover:shadow-md hover:bg-white transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold text-slate-900 text-sm">{society.name}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{society.url}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-blue-600 transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export default function Societies() {
  const params = useParams<{ sub?: string }>();
  if (params.sub === "international") return <InternationalSocietiesPage />;
  return <ArabSocieties />;
}
