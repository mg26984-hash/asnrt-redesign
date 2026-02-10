import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { CALCULATOR_URL } from "@/lib/constants";
import { motion } from "framer-motion";
import {
  CheckCircle, Users, BookOpen, Globe, Award,
  Calculator, ExternalLink, Mail, ArrowRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
};

export default function Membership() {
  return (
    <PageLayout
      breadcrumbs={[{ label: "Membership" }]}
      pageTitle="Join ASNRT"
      pageSubtitle="Become a member of the Arab Society of Nephrology and Renal Transplantation."
    >
      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container max-w-5xl">
          <SectionHeading
            tag="Benefits"
            title="Why Join ASNRT?"
            subtitle="Membership provides access to a network of nephrology professionals across the Arab world."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Users className="w-6 h-6" />, title: "Professional Network", desc: "Connect with nephrologists across 22 Arab countries.", color: "bg-emerald-50 text-emerald-600" },
              { icon: <BookOpen className="w-6 h-6" />, title: "Educational Resources", desc: "Access exclusive CME materials, webinars, and workshops.", color: "bg-blue-50 text-blue-600" },
              { icon: <Globe className="w-6 h-6" />, title: "Congress Access", desc: "Priority registration and discounts for ASNRT congresses.", color: "bg-purple-50 text-purple-600" },
              { icon: <Calculator className="w-6 h-6" />, title: "Clinical Tools", desc: "Full access to 74 clinical calculators across 13 categories.", color: "bg-teal-50 text-teal-600" },
              { icon: <Award className="w-6 h-6" />, title: "Research Grants", desc: "Eligibility for ASNRT research grants and fellowships.", color: "bg-amber-50 text-amber-600" },
              { icon: <Mail className="w-6 h-6" />, title: "Newsletter", desc: "Regular updates on nephrology news, guidelines, and events.", color: "bg-rose-50 text-rose-600" },
            ].map((benefit, i) => (
              <motion.div
                key={benefit.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="p-6 rounded-2xl border border-border"
              >
                <div className={`w-12 h-12 rounded-xl ${benefit.color} flex items-center justify-center mb-4`}>
                  {benefit.icon}
                </div>
                <h3 className="font-heading font-semibold text-slate-900 mb-1">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 bg-stone-50">
        <div className="container max-w-4xl">
          <SectionHeading tag="Eligibility" title="Who Can Join?" />
          <div className="space-y-3 mb-10">
            {[
              "Nephrologists and transplant physicians from Arab countries",
              "Nephrology fellows and trainees",
              "Nephrology nurses and allied health professionals",
              "Researchers in kidney disease and transplantation",
              "International nephrologists with interest in the Arab world",
            ].map((item, i) => (
              <motion.div
                key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="flex items-center gap-3 p-4 rounded-xl bg-white border border-border"
              >
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-sm text-slate-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container max-w-3xl text-center">
          <h2 className="font-heading font-bold text-3xl text-white mb-4">Ready to Join?</h2>
          <p className="text-white/60 text-lg mb-8">
            Contact the ASNRT Secretariat to begin your membership application.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:info@asnrt.org"
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl font-bold shadow-xl shadow-emerald-500/25 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Contact Us to Register
            </a>
            <a
              href={CALCULATOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-2xl font-semibold hover:bg-white/20 transition-all"
            >
              <Calculator className="w-5 h-5" />
              Try Our Calculators
              <ExternalLink className="w-4 h-4 opacity-70" />
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
