import { useCallback, useEffect } from "react";

const QUEUE_KEY = "asnrt-offline-queue";

interface QueuedRequest {
  id: string;
  url: string;
  method: string;
  body: string;
  headers: Record<string, string>;
  timestamp: number;
}

/**
 * Queues failed form submissions in localStorage when offline.
 * Automatically retries them when the user comes back online.
 */
export function useOfflineQueue() {
  // Replay queued requests when coming back online
  useEffect(() => {
    const replayQueue = async () => {
      const queue = getQueue();
      if (queue.length === 0) return;

      const remaining: QueuedRequest[] = [];

      for (const item of queue) {
        try {
          const response = await fetch(item.url, {
            method: item.method,
            headers: item.headers,
            body: item.body,
            credentials: "include",
          });
          if (!response.ok) {
            remaining.push(item);
          }
          // Successfully sent — don't re-add
        } catch {
          remaining.push(item);
        }
      }

      saveQueue(remaining);
    };

    window.addEventListener("online", replayQueue);

    // Also try on mount in case we're already online with queued items
    if (navigator.onLine) {
      replayQueue();
    }

    return () => window.removeEventListener("online", replayQueue);
  }, []);

  const enqueue = useCallback(
    (url: string, method: string, body: any, headers: Record<string, string> = {}) => {
      const queue = getQueue();
      queue.push({
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        url,
        method,
        body: typeof body === "string" ? body : JSON.stringify(body),
        headers: { "Content-Type": "application/json", ...headers },
        timestamp: Date.now(),
      });
      saveQueue(queue);
    },
    []
  );

  const queueLength = getQueue().length;

  return { enqueue, queueLength };
}

function getQueue(): QueuedRequest[] {
  try {
    const raw = localStorage.getItem(QUEUE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveQueue(queue: QueuedRequest[]) {
  try {
    localStorage.setItem(QUEUE_KEY, JSON.stringify(queue));
  } catch {
    // Storage full or unavailable
  }
}
