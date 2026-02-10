import { useParams } from "wouter";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { IMAGES, NEPHROCALCS_URL } from "@/lib/constants";
import { motion } from "framer-motion";
import { Target, Eye, CheckCircle, Globe, Users, BookOpen, Calculator, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
};

function AboutMain() {
  return (
    <PageLayout
      breadcrumbs={[{ label: "About ASNRT" }]}
      pageTitle="About ASNRT"
      pageSubtitle="Advancing nephrology and renal transplantation across the Arab world since 1996."
    >
      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
              className="p-8 rounded-2xl bg-emerald-50 border border-emerald-100"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-slate-900 mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To advance the science and practice of nephrology and renal transplantation in the Arab world through education, research, clinical practice improvement, and fostering collaboration among nephrologists and healthcare professionals across the region.
              </p>
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
              className="p-8 rounded-2xl bg-blue-50 border border-blue-100"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-slate-900 mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading nephrology society in the Arab world, recognized for excellence in education, research, and patient care, and to serve as a bridge between Arab nephrologists and the global nephrology community.
              </p>
            </motion.div>
          </div>

          {/* Objectives */}
          <SectionHeading tag="Our Goals" title="Key Objectives" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              "Promote nephrology education and training across Arab countries",
              "Facilitate research collaboration among Arab nephrologists",
              "Develop clinical practice guidelines adapted to the region",
              "Organize scientific conferences, congresses, and workshops",
              "Support the development of renal transplant programs",
              "Foster relationships with international nephrology societies",
              "Advocate for kidney disease prevention and awareness",
              "Provide clinical tools and calculators for practicing nephrologists",
              "Support young nephrologists through mentorship and fellowships",
            ].map((obj, i) => (
              <motion.div
                key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="flex items-start gap-3 p-4 rounded-xl bg-stone-50 border border-border"
              >
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-700 leading-relaxed">{obj}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-stone-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading tag="Our Story" title="A Legacy of Excellence" align="left" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in 1996, the Arab Society of Nephrology and Renal Transplantation has grown from a small group of dedicated nephrologists into a thriving organization representing kidney health professionals across 22 Arab countries.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Over nearly three decades, ASNRT has organized numerous congresses, published clinical guidelines, and fostered partnerships with leading international nephrology organizations including ISN, ASN, ERA, and KDIGO.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Today, ASNRT continues to lead the way in nephrology education and practice in the Arab world, with initiatives ranging from our comprehensive calculator hub with 74 clinical tools to educational programs for patients, nurses, and physicians.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: <Globe className="w-5 h-5" />, label: "22 Countries", color: "text-emerald-600 bg-emerald-50" },
                  { icon: <Users className="w-5 h-5" />, label: "Since 1996", color: "text-blue-600 bg-blue-50" },
                  { icon: <BookOpen className="w-5 h-5" />, label: "14 Congresses", color: "text-amber-600 bg-amber-50" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white border border-border">
                    <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center`}>{stat.icon}</div>
                    <span className="text-sm font-semibold text-slate-900">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src={IMAGES.galleryCongress} alt="ASNRT Congress" className="w-full h-96 object-cover" />
            </div>
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
              <h3 className="font-heading font-bold text-white text-xl">Try Our Clinical Calculators</h3>
              <p className="text-white/70">74 validated tools across 13 nephrology categories</p>
            </div>
          </div>
          <a
            href={NEPHROCALCS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-white text-emerald-700 rounded-xl font-bold hover:bg-white/90 transition-colors shadow-lg text-sm"
          >
            Open NephroCalcs
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>
    </PageLayout>
  );
}

function Constitution() {
  return (
    <PageLayout
      breadcrumbs={[{ label: "About", href: "/about" }, { label: "Constitution" }]}
      pageTitle="ASNRT Constitution"
      pageSubtitle="The governing document of the Arab Society of Nephrology and Renal Transplantation."
    >
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The ASNRT Constitution outlines the society's governance structure, membership criteria, election procedures, and operational guidelines. It serves as the foundational document guiding all activities and decisions of the society.
            </p>

            {[
              { title: "Article 1: Name and Establishment", content: "The society shall be known as the Arab Society of Nephrology and Renal Transplantation (ASNRT), established in 1996 as a non-profit scientific organization." },
              { title: "Article 2: Objectives", content: "The society aims to advance nephrology and renal transplantation in the Arab world through education, research, and collaboration among healthcare professionals." },
              { title: "Article 3: Membership", content: "Membership is open to all qualified nephrologists, transplant physicians, and allied health professionals from Arab countries who share the society's mission and objectives." },
              { title: "Article 4: Governance", content: "The society is governed by an Executive Committee consisting of a President, Vice President, President-Elect, Secretary General, Treasurer, and Members at Large, elected by the general assembly." },
              { title: "Article 5: Meetings", content: "The society shall hold a general assembly meeting at least once every two years, coinciding with the biennial congress. Special meetings may be called by the Executive Committee." },
              { title: "Article 6: Financial Provisions", content: "The society's funds shall be derived from membership fees, congress registrations, donations, and grants. All funds shall be used exclusively for the society's stated objectives." },
            ].map((article, i) => (
              <div key={i} className="mb-8 p-6 rounded-xl bg-stone-50 border border-border">
                <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">{article.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{article.content}</p>
              </div>
            ))}

            <p className="text-sm text-muted-foreground italic">
              For the complete constitution document, please contact the ASNRT Secretariat at info@asnrt.org.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function PastPresidents() {
  return (
    <PageLayout
      breadcrumbs={[{ label: "About", href: "/about" }, { label: "Past Presidents" }]}
      pageTitle="Past Presidents"
      pageSubtitle="Honoring the leaders who shaped ASNRT's legacy."
    >
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-center">
            The following distinguished nephrologists have served as Presidents of ASNRT, each contributing significantly to the growth and development of nephrology in the Arab world.
          </p>
          <div className="space-y-4">
            {[
              { name: "Prof. Rashad Barsoum", period: "Founding President", country: "Egypt" },
              { name: "Prof. Ali Abu-Alfa", period: "Past President", country: "Lebanon" },
              { name: "Prof. Kamel El-Reshaid", period: "Past President", country: "Kuwait" },
              { name: "Prof. Hani Al-Otaibi", period: "Past President", country: "Saudi Arabia" },
            ].map((president, i) => (
              <motion.div
                key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="flex items-center gap-5 p-5 rounded-xl bg-stone-50 border border-border"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-heading font-bold text-lg shrink-0">
                  {president.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-slate-900">{president.name}</h3>
                  <p className="text-sm text-muted-foreground">{president.period} — {president.country}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export default function About() {
  const params = useParams<{ sub?: string }>();
  if (params.sub === "constitution") return <Constitution />;
  if (params.sub === "past-presidents") return <PastPresidents />;
  return <AboutMain />;
}
