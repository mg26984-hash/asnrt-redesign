import PageLayout from "@/components/PageLayout";
import { NEWS_ITEMS } from "@/lib/constants";
import { motion } from "framer-motion";
import { ExternalLink, Calendar, Tag } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
};

export default function News() {
  return (
    <PageLayout
      breadcrumbs={[{ label: "Nephrology Newsweek" }]}
      pageTitle="Nephrology Newsweek"
      pageSubtitle="The latest research, guidelines, and regulatory updates in nephrology and transplantation."
    >
      <section className="py-16 bg-white">
        <div className="container max-w-5xl">
          {/* Featured article */}
          <motion.a
            href={NEWS_ITEMS[0].url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="block mb-10 p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold">
                Featured
              </span>
              <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                NEWS_ITEMS[0].tag === "Guidelines"
                  ? "bg-blue-50 text-blue-600"
                  : NEWS_ITEMS[0].tag === "Research"
                  ? "bg-purple-50 text-purple-600"
                  : "bg-amber-50 text-amber-600"
              }`}>
                {NEWS_ITEMS[0].tag}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                {NEWS_ITEMS[0].date}
              </span>
            </div>
            <h2 className="font-heading font-bold text-2xl text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
              {NEWS_ITEMS[0].title}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{NEWS_ITEMS[0].excerpt}</p>
            <div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm">
              Read Full Article
              <ExternalLink className="w-4 h-4" />
            </div>
          </motion.a>

          {/* All articles */}
          <div className="grid md:grid-cols-2 gap-6">
            {NEWS_ITEMS.slice(1).map((item, i) => (
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
                className="block p-6 rounded-2xl bg-white border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
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
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-3">{item.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Source: {item.source}</span>
                  <span className="flex items-center gap-1 text-emerald-600 text-sm font-medium">
                    Read <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
