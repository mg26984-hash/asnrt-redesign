import { useParams } from "wouter";
import PageLayout from "@/components/PageLayout";
import SEOHead from "@/components/SEOHead";
import { SEO } from "@/lib/seo";
import SectionHeading from "@/components/SectionHeading";
import { MEMBERS } from "@/lib/constants";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
};

function ExecutiveCommittee() {
  return (
    <PageLayout
      breadcrumbs={[{ label: "Members", href: "/members" }, { label: "Executive Committee" }]}
      pageTitle="Executive Committee"
      pageSubtitle="The leadership team guiding ASNRT's mission and strategic direction."
    >
      <SEOHead {...SEO.members} />
      <section className="py-16 bg-white">
        <div className="container">
          {/* President */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 p-8 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100"
            >
              <div className="w-40 h-40 rounded-2xl overflow-hidden shrink-0 shadow-lg">
                <img src={MEMBERS[0].image} alt={MEMBERS[0].name} className="w-full h-full object-cover" />
              </div>
              <div className="text-center md:text-left">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold mb-2">
                  {MEMBERS[0].role}
                </span>
                <h2 className="font-heading font-bold text-2xl text-slate-900 mb-2">{MEMBERS[0].name}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Leading ASNRT's mission to advance nephrology education, research, and clinical practice across the Arab world.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Other members */}
          <SectionHeading tag="Committee" title="Committee Members" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {MEMBERS.slice(1).map((member, i) => (
              <motion.div
                key={member.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-slate-900 text-sm">{member.name}</h3>
                  <span className="text-xs text-emerald-600 font-medium">{member.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function Coordinators() {
  const coordinators = [
    { name: "Dr. Sarah Al-Dosari", country: "Saudi Arabia", specialty: "Pediatric Nephrology" },
    { name: "Dr. Khaled Mansour", country: "Egypt", specialty: "Dialysis" },
    { name: "Dr. Fatima Al-Hashimi", country: "UAE", specialty: "Transplantation" },
    { name: "Dr. Omar Bouzidi", country: "Algeria", specialty: "Glomerular Diseases" },
    { name: "Dr. Layla Al-Sabah", country: "Kuwait", specialty: "CKD-MBD" },
    { name: "Dr. Hassan Jaber", country: "Lebanon", specialty: "AKI" },
  ];

  return (
    <PageLayout
      breadcrumbs={[{ label: "Members", href: "/members" }, { label: "Coordinators" }]}
      pageTitle="National Coordinators"
      pageSubtitle="ASNRT representatives in each Arab country, facilitating local activities and communication."
    >
      <SEOHead title="National Coordinators" description="ASNRT national coordinators representing the society in each Arab country, facilitating local activities and communication." path="/members/coordinators" />
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <div className="space-y-4">
            {coordinators.map((coord, i) => (
              <motion.div
                key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="flex items-center gap-4 p-5 rounded-xl bg-stone-50 border border-border"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-heading font-bold shrink-0">
                  {coord.name.split(" ").pop()?.charAt(0)}
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold text-slate-900 text-sm">{coord.name}</h3>
                  <p className="text-xs text-muted-foreground">{coord.country} — {coord.specialty}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export default function Members() {
  const params = useParams<{ sub?: string }>();
  if (params.sub === "coordinators") return <Coordinators />;
  return <ExecutiveCommittee />;
}
