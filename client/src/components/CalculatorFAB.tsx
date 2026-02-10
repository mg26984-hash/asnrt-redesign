import { useState } from "react";
import { NEPHROCALCS_URL, OTCCALCS_URL } from "@/lib/constants";
import { Calculator, ExternalLink, Beaker, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function CalculatorFAB() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-16 right-0 w-56 bg-white rounded-xl shadow-2xl border border-border py-2 mb-2"
          >
            <a
              href={NEPHROCALCS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 hover:bg-emerald-50 transition-colors"
            >
              <Calculator className="w-4 h-4 text-emerald-600" />
              <div className="flex-1">
                <div className="text-sm font-semibold text-slate-900">NephroCalcs</div>
                <div className="text-[10px] text-muted-foreground">74 calculators</div>
              </div>
              <ExternalLink className="w-3 h-3 text-muted-foreground" />
            </a>
            <a
              href={OTCCALCS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-colors"
            >
              <Beaker className="w-4 h-4 text-blue-600" />
              <div className="flex-1">
                <div className="text-sm font-semibold text-slate-900">OTC Calcs</div>
                <div className="text-[10px] text-muted-foreground">Clinical tools</div>
              </div>
              <ExternalLink className="w-3 h-3 text-muted-foreground" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
        title="Clinical Calculators"
      >
        {open ? <X className="w-6 h-6" /> : <Calculator className="w-6 h-6" />}
      </motion.button>
    </div>
  );
}
