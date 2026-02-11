import PageLayout from "@/components/PageLayout";
import SEOHead from "@/components/SEOHead";
import { SEO } from "@/lib/seo";
import { GALLERY_ITEMS } from "@/lib/constants";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
};

export default function Gallery() {
  return (
    <PageLayout
      breadcrumbs={[{ label: "Gallery" }]}
      pageTitle="Photo Gallery"
      pageSubtitle="Highlights from ASNRT congresses, forums, and academic events."
    >
      <SEOHead {...SEO.gallery} />
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_ITEMS.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Camera className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 text-xs font-medium">Event Photos</span>
                  </div>
                  <h3 className="text-white font-heading font-semibold text-sm leading-snug">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
