import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import SEOHead from "@/components/SEOHead";
import { SEO } from "@/lib/seo";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import {
  Calendar, MapPin, Users, ExternalLink, ArrowRight,
  Clock, Globe, Award, Star,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: [0, 0, 0.2, 1] as [number, number, number, number] },
  }),
};

const UPCOMING_EVENTS = [
  {
    title: "15th Congress of ASNRT",
    date: "2026 (Date TBA)",
    location: "To Be Announced",
    description: "The upcoming 15th Congress of the Arab Society of Nephrology and Renal Transplantation. Stay tuned for dates and registration details.",
    status: "upcoming" as const,
    featured: true,
  },
];

const PAST_EVENTS = [
  {
    title: "4th GCC Organ Transplantation & Nephrology Congress",
    date: "2025",
    location: "GCC Region",
    description: "A major congress covering advances in organ transplantation, nephrology, dialysis, and transplant immunology across the GCC region.",
    highlights: ["18+ presentations", "International speakers", "Multi-track sessions"],
  },
  {
    title: "14th Congress of ASNRT",
    date: "24–27 April 2019",
    location: "Amman, Jordan",
    description: "The 14th biennial congress of ASNRT featuring the latest research, clinical updates, and networking opportunities for nephrologists across the Arab world.",
    highlights: ["4-day program", "International faculty", "Research presentations"],
  },
  {
    title: "ASNRT Autumn Nephrology Forum & ESNT Clinical Nephrology Chapter",
    date: "21–23 November 2018",
    location: "Egypt",
    description: "Joint forum combining ASNRT's autumn meeting with the Egyptian Society of Nephrology and Transplantation clinical chapter.",
    highlights: ["Joint society event", "Clinical focus", "Hands-on workshops"],
  },
  {
    title: "7th EMAN ISN Update",
    date: "13–16 December 2017",
    location: "Dubai, UAE",
    description: "The 7th Eastern Mediterranean and Africa Nephrology update in collaboration with the International Society of Nephrology.",
    highlights: ["ISN collaboration", "Regional focus", "CME accredited"],
  },
  {
    title: "ASNRT ESNT Congress",
    date: "28 Feb – 3 March 2017",
    location: "Egypt",
    description: "Joint congress between ASNRT and the Egyptian Society of Nephrology and Transplantation.",
    highlights: ["Joint congress", "Egyptian collaboration", "Research symposia"],
  },
  {
    title: "ASNRT Kuwait Meeting",
    date: "January 2017",
    location: "Kuwait",
    description: "ASNRT scientific meeting in Kuwait featuring presentations on CKD, dialysis, transplantation, and glomerular diseases.",
    highlights: ["12+ presentations", "International speakers", "Kuwait Nephrology Association"],
  },
];

export default function Events() {
  return (
    <PageLayout
      pageTitle="Congresses & Events"
      pageSubtitle="ASNRT organizes biennial congresses, forums, and scientific meetings across the Arab world."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Events" },
      ]}
    >
      <SEOHead {...SEO.events} />
      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="container">
          <SectionHeading
            tag="Upcoming"
            title="Upcoming Events"
            subtitle="Mark your calendar for our next congress and scientific meetings."
          />

          {UPCOMING_EVENTS.length > 0 ? (
            <div className="grid gap-6">
              {UPCOMING_EVENTS.map((event, i: number) => (
                <motion.div
                  key={event.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className={`rounded-2xl border-2 p-8 ${
                    event.featured
                      ? "border-emerald-200 bg-gradient-to-br from-emerald-50/50 to-teal-50/30"
                      : "border-border bg-white"
                  }`}
                >
                  {event.featured && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold mb-4">
                      <Star className="w-3 h-3" />
                      Featured Event
                    </div>
                  )}
                  <h3 className="font-heading font-bold text-2xl text-slate-900 mb-3">{event.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-emerald-600" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-emerald-600" />
                      {event.location}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">{event.description}</p>
                  <div className="flex items-center gap-3">
                    <Link
                      href="/contact"
                      className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white rounded-xl font-semibold text-sm hover:bg-emerald-700 transition-colors"
                    >
                      Contact for Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-border bg-stone-50 p-12 text-center">
              <Calendar className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground">No upcoming events at this time. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-stone-50">
        <div className="container">
          <SectionHeading
            tag="Archive"
            title="Past Events"
            subtitle="Browse our history of congresses, forums, and scientific meetings."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {PAST_EVENTS.map((event, i: number) => (
              <motion.div
                key={event.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-2xl border border-border p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-slate-900 mb-1 leading-snug">{event.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 mb-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {event.location}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{event.description}</p>
                    {event.highlights && (
                      <div className="flex flex-wrap gap-2">
                        {event.highlights.map((h) => (
                          <span key={h} className="px-2.5 py-1 rounded-full bg-stone-100 text-xs text-slate-600 font-medium">
                            {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-sm hover:text-emerald-700 transition-colors"
            >
              View Event Photos in Gallery
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Event Stats */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Calendar className="w-6 h-6" />, value: "14+", label: "Congresses Held" },
              { icon: <Globe className="w-6 h-6" />, value: "22", label: "Countries Represented" },
              { icon: <Users className="w-6 h-6" />, value: "1000+", label: "Attendees per Congress" },
              { icon: <Award className="w-6 h-6" />, value: "29+", label: "Years of Events" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                  {stat.icon}
                </div>
                <div className="font-heading font-bold text-2xl text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
