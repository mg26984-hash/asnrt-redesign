import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import SEOHead from "@/components/SEOHead";
import { SEO } from "@/lib/seo";
import SectionHeading from "@/components/SectionHeading";
import { NEPHROCALCS_URL } from "@/lib/constants";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { motion } from "framer-motion";
import {
  CheckCircle, Users, BookOpen, Globe, Award,
  Calculator, ExternalLink, ArrowRight, Loader2, Beaker,
  Send, GraduationCap, Stethoscope,
} from "lucide-react";

const BENEFITS = [
  { icon: <Globe className="w-5 h-5" />, title: "International Network", desc: "Connect with nephrologists across 22 Arab countries" },
  { icon: <BookOpen className="w-5 h-5" />, title: "Educational Resources", desc: "Access presentations, guidelines, and CME materials" },
  { icon: <Calculator className="w-5 h-5" />, title: "Clinical Tools", desc: "Free access to NephroCalcs — 74+ clinical calculators" },
  { icon: <Award className="w-5 h-5" />, title: "Congress Access", desc: "Discounted registration for ASNRT congresses" },
  { icon: <Users className="w-5 h-5" />, title: "Collaboration", desc: "Research collaboration opportunities" },
  { icon: <GraduationCap className="w-5 h-5" />, title: "Career Development", desc: "Training programs and fellowship opportunities" },
];

const ARAB_COUNTRIES = [
  "Algeria", "Bahrain", "Comoros", "Djibouti", "Egypt", "Iraq", "Jordan",
  "Kuwait", "Lebanon", "Libya", "Mauritania", "Morocco", "Oman", "Palestine",
  "Qatar", "Saudi Arabia", "Somalia", "Sudan", "Syria", "Tunisia", "UAE", "Yemen",
  "Other",
];

export default function Membership() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    country: "",
    institution: "",
    specialty: "",
    qualifications: "",
    motivation: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const mutation = trpc.membership.submitApplication.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      toast.success("Application submitted successfully!");
    },
    onError: (err: { message?: string }) => {
      toast.error(err.message || "Failed to submit application. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.country || !form.institution || !form.specialty) {
      toast.error("Please fill in all required fields.");
      return;
    }
    mutation.mutate(form);
  };

  if (submitted) {
    return (
      <PageLayout
        pageTitle="Membership"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Membership" },
        ]}
      >
        <SEOHead {...SEO.membership} />
        <section className="py-20 bg-white">
          <div className="container max-w-lg text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h2 className="font-heading font-bold text-2xl text-slate-900 mb-3">Application Submitted!</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Thank you for your interest in joining ASNRT. Our team will review your application and contact you at the email address provided.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setForm({ fullName: "", email: "", country: "", institution: "", specialty: "", qualifications: "", motivation: "" });
              }}
              className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl font-semibold text-sm hover:bg-emerald-700 transition-colors"
            >
              Submit Another Application
            </button>
          </div>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      pageTitle="Membership"
      pageSubtitle="Join the Arab Society of Nephrology and Renal Transplantation and become part of a growing network of kidney health professionals."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Membership" },
      ]}
    >
      <SEOHead {...SEO.membership} />
      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container">
          <SectionHeading
            tag="Benefits"
            title="Why Join ASNRT?"
            subtitle="Membership provides access to a wealth of resources and networking opportunities."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {BENEFITS.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex items-start gap-4 p-5 rounded-xl border border-border bg-white"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  {b.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-slate-900 mb-1">{b.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Application Form */}
          <div className="max-w-2xl mx-auto">
            <SectionHeading
              tag="Apply"
              title="Membership Application"
              subtitle="Fill out the form below to apply for ASNRT membership."
            />
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl border border-border p-8"
            >
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-stone-50 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-colors"
                    placeholder="Prof. / Dr. Full Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-stone-50 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Country *</label>
                  <select
                    value={form.country}
                    onChange={(e) => setForm({ ...form, country: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-stone-50 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-colors"
                    required
                  >
                    <option value="">Select country</option>
                    {ARAB_COUNTRIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Institution *</label>
                  <input
                    type="text"
                    value={form.institution}
                    onChange={(e) => setForm({ ...form, institution: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-stone-50 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-colors"
                    placeholder="Hospital / University"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Specialty *</label>
                <input
                  type="text"
                  value={form.specialty}
                  onChange={(e) => setForm({ ...form, specialty: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-stone-50 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-colors"
                  placeholder="e.g., Nephrology, Transplant Surgery, Internal Medicine"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Qualifications</label>
                <input
                  type="text"
                  value={form.qualifications}
                  onChange={(e) => setForm({ ...form, qualifications: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-stone-50 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-colors"
                  placeholder="e.g., MD, PhD, FRCP"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Why do you want to join ASNRT?</label>
                <textarea
                  value={form.motivation}
                  onChange={(e) => setForm({ ...form, motivation: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-stone-50 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-colors resize-none"
                  placeholder="Tell us about your interest in ASNRT..."
                />
              </div>

              <button
                type="submit"
                disabled={mutation.isPending}
                className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl font-semibold text-sm hover:bg-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
              >
                {mutation.isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Application
                  </>
                )}
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Calculator Tools CTA */}
      <section className="py-12 bg-gradient-to-r from-emerald-700 to-teal-700">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center">
              <Stethoscope className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-white text-xl">Explore Our Clinical Tools</h3>
              <p className="text-white/70 text-sm">Free nephrology calculators for all clinicians</p>
            </div>
          </div>
          <a
            href={NEPHROCALCS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-white text-emerald-700 rounded-xl font-semibold text-sm hover:bg-white/90 transition-colors shadow-lg"
          >
            <Calculator className="w-4 h-4" />
            Open NephroCalcs
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
