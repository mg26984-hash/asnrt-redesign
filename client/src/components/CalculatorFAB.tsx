import { Calculator, ExternalLink } from "lucide-react";
import { NEPHROCALCS_URL } from "@/lib/constants";
import { motion } from "framer-motion";

export default function CalculatorFAB() {
  return (
    <motion.a
      href={NEPHROCALCS_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 px-4 py-3 md:px-5 md:py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl shadow-xl shadow-emerald-500/25 hover:shadow-2xl hover:shadow-emerald-500/35 hover:-translate-y-0.5 transition-all duration-300"
      aria-label="Open NephroCalcs"
    >
      <Calculator className="w-5 h-5" />
      <span className="hidden sm:inline text-sm font-semibold">NephroCalcs</span>
      <ExternalLink className="w-3.5 h-3.5 opacity-70" />
    </motion.a>
  );
}
