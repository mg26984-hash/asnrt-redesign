import { Calculator, ExternalLink } from "lucide-react";
import { CALCULATOR_URL } from "@/lib/constants";
import { motion } from "framer-motion";

export default function CalculatorFAB() {
  return (
    <motion.a
      href={CALCULATOR_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl shadow-xl shadow-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/40 hover:-translate-y-1 transition-all duration-300 group"
      title="Open Clinical Calculators"
    >
      <Calculator className="w-5 h-5" />
      <span className="font-semibold text-sm">Calculators</span>
      <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
    </motion.a>
  );
}
