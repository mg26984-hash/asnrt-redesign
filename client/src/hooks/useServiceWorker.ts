import { useEffect, useRef, useState, useCallback } from "react";
import {
  IMAGES,
  MEMBERS,
  GALLERY_ITEMS,
  ARAB_SOCIETIES,
} from "@/lib/constants";

/**
 * Collects all image URLs used across the site for background caching.
 * This runs lazily after the SW is registered.
 */
function getAllImageUrls(): string[] {
  const urls: string[] = [];

  // Core site images
  Object.values(IMAGES).forEach((url) => {
    if (typeof url === "string") urls.push(url);
  });

  // Member photos
  MEMBERS.forEach((m) => urls.push(m.image));

  // Gallery images
  GALLERY_ITEMS.forEach((g) => urls.push(g.image));

  // Society banners
  ARAB_SOCIETIES.forEach((s) => urls.push(s.banner));

  return Array.from(new Set(urls)); // deduplicate
}

export interface ServiceWorkerState {
  isReady: boolean;
  isOffline: boolean;
  updateAvailable: boolean;
  applyUpdate: () => void;
}

/**
 * Registers the service worker AFTER window.load to avoid blocking first paint.
 * Then progressively caches all routes and images in the background.
 */
export function useServiceWorker(): ServiceWorkerState {
  const [isReady, setIsReady] = useState(false);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const waitingWorker = useRef<ServiceWorker | null>(null);

  const applyUpdate = useCallback(() => {
    if (waitingWorker.current) {
      waitingWorker.current.postMessage({ type: "SKIP_WAITING" });
      window.location.reload();
    }
  }, []);

  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    // Register AFTER window.load so it never blocks first paint
    const register = async () => {
      try {
        const registration = await navigator.serviceWorker.register("/sw.js", {
          scope: "/",
        });

        // Listen for updates
        registration.addEventListener("updatefound", () => {
          const newWorker = registration.installing;
          if (!newWorker) return;

          newWorker.addEventListener("statechange", () => {
            if (
              newWorker.state === "installed" &&
              navigator.serviceWorker.controller
            ) {
              // New version available
              waitingWorker.current = newWorker;
              setUpdateAvailable(true);
            }
          });
        });

        // Wait for the SW to be active
        const sw =
          registration.active ||
          registration.waiting ||
          registration.installing;
        if (sw) {
          if (sw.state === "activated") {
            setIsReady(true);
            triggerBackgroundCaching();
          } else {
            sw.addEventListener("statechange", () => {
              if (sw.state === "activated") {
                setIsReady(true);
                triggerBackgroundCaching();
              }
            });
          }
        }

        // Detect controller change (new SW took over)
        navigator.serviceWorker.addEventListener("controllerchange", () => {
          // Optionally reload on new SW activation
        });
      } catch (err) {
        console.warn("[SW] Registration failed:", err);
      }
    };

    // Defer registration to after the page has fully loaded
    if (document.readyState === "complete") {
      // Already loaded, register after a small delay to let React settle
      setTimeout(register, 1500);
    } else {
      window.addEventListener("load", () => {
        // Wait 1.5s after load to ensure first paint is complete
        setTimeout(register, 1500);
      });
    }

    // Online/offline listeners
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return { isReady, isOffline, updateAvailable, applyUpdate };
}

/**
 * Tells the SW to start caching all routes and images in the background.
 * Uses requestIdleCallback to avoid interfering with user interactions.
 */
function triggerBackgroundCaching() {
  const startCaching = () => {
    if (!navigator.serviceWorker.controller) return;

    // First: cache all page routes
    navigator.serviceWorker.controller.postMessage({
      type: "CACHE_ROUTES",
    });

    // Then: cache all images after a delay
    setTimeout(() => {
      if (!navigator.serviceWorker.controller) return;
      const imageUrls = getAllImageUrls();
      navigator.serviceWorker.controller.postMessage({
        type: "CACHE_IMAGES",
        urls: imageUrls,
      });
    }, 5000); // 5s delay so route caching finishes first
  };

  // Use requestIdleCallback if available, otherwise setTimeout
  if ("requestIdleCallback" in window) {
    (window as any).requestIdleCallback(startCaching, { timeout: 5000 });
  } else {
    setTimeout(startCaching, 2000);
  }
}
