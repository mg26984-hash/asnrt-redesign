import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wifi, WifiOff, RefreshCw } from "lucide-react";

interface OfflineIndicatorProps {
  isOffline: boolean;
  updateAvailable: boolean;
  applyUpdate: () => void;
}

/**
 * Subtle toast-style indicator that appears when the user goes offline/online
 * or when a new version of the site is available.
 */
export default function OfflineIndicator({
  isOffline,
  updateAvailable,
  applyUpdate,
}: OfflineIndicatorProps) {
  const [showOnlineToast, setShowOnlineToast] = useState(false);
  const [wasOffline, setWasOffline] = useState(false);

  // Track transitions: show "Back online" toast when coming back
  useEffect(() => {
    if (isOffline) {
      setWasOffline(true);
    } else if (wasOffline) {
      setShowOnlineToast(true);
      const timer = setTimeout(() => setShowOnlineToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isOffline, wasOffline]);

  return (
    <>
      <AnimatePresence>
        {/* Offline banner */}
        {isOffline && (
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed top-0 left-0 right-0 z-[100] bg-amber-500 text-white text-center py-2 px-4 text-sm font-medium flex items-center justify-center gap-2 shadow-lg"
          >
            <WifiOff className="w-4 h-4" />
            <span>You're offline — browsing cached content</span>
          </motion.div>
        )}

        {/* Back online toast */}
        {showOnlineToast && !isOffline && (
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] bg-emerald-600 text-white px-5 py-3 rounded-xl text-sm font-medium flex items-center gap-2 shadow-xl"
          >
            <Wifi className="w-4 h-4" />
            <span>Back online</span>
          </motion.div>
        )}

        {/* Update available toast */}
        {updateAvailable && !isOffline && (
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] bg-slate-800 text-white px-5 py-3 rounded-xl text-sm font-medium flex items-center gap-3 shadow-xl"
          >
            <RefreshCw className="w-4 h-4" />
            <span>New version available</span>
            <button
              onClick={applyUpdate}
              className="px-3 py-1 bg-emerald-500 hover:bg-emerald-600 rounded-lg text-xs font-semibold transition-colors"
            >
              Update
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
