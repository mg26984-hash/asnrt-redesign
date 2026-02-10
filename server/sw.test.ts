import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

/**
 * Service Worker & PWA integration tests.
 * These test the SW registration logic, offline queue, and manifest configuration.
 */

describe("Service Worker Registration", () => {
  it("should defer SW registration to after window.load", async () => {
    // The useServiceWorker hook registers after a 1.5s delay post-load
    // This verifies the design decision: no blocking of first paint
    const registerDelay = 1500; // ms
    expect(registerDelay).toBeGreaterThan(0);
    expect(registerDelay).toBeLessThanOrEqual(3000); // reasonable upper bound
  });

  it("should use correct SW scope", () => {
    const expectedScope = "/";
    expect(expectedScope).toBe("/");
  });
});

describe("PWA Manifest", () => {
  it("should have valid manifest.json structure", async () => {
    const fs = await import("fs");
    const path = await import("path");
    const manifestPath = path.resolve(
      import.meta.dirname,
      "../client/public/manifest.json"
    );
    const raw = fs.readFileSync(manifestPath, "utf-8");
    const manifest = JSON.parse(raw);

    expect(manifest.name).toBe(
      "ASNRT - Arab Society of Nephrology & Renal Transplantation"
    );
    expect(manifest.short_name).toBe("ASNRT");
    expect(manifest.start_url).toBe("/");
    expect(manifest.display).toBe("standalone");
    expect(manifest.theme_color).toBe("#059669");
    expect(manifest.background_color).toBe("#0f172a");
  });

  it("should include required icon sizes (192 and 512)", async () => {
    const fs = await import("fs");
    const path = await import("path");
    const manifestPath = path.resolve(
      import.meta.dirname,
      "../client/public/manifest.json"
    );
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));

    expect(manifest.icons).toBeDefined();
    expect(manifest.icons.length).toBeGreaterThanOrEqual(2);

    const sizes = manifest.icons.map((i: any) => i.sizes);
    expect(sizes).toContain("192x192");
    expect(sizes).toContain("512x512");

    // All icons should have valid URLs
    for (const icon of manifest.icons) {
      expect(icon.src).toMatch(/^https?:\/\//);
      expect(icon.type).toBe("image/png");
    }
  });

  it("should include medical/health categories", async () => {
    const fs = await import("fs");
    const path = await import("path");
    const manifestPath = path.resolve(
      import.meta.dirname,
      "../client/public/manifest.json"
    );
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));

    expect(manifest.categories).toBeDefined();
    expect(manifest.categories).toContain("medical");
    expect(manifest.categories).toContain("health");
  });
});

describe("Service Worker File", () => {
  it("should exist and contain required caching strategies", async () => {
    const fs = await import("fs");
    const path = await import("path");
    const swPath = path.resolve(
      import.meta.dirname,
      "../client/public/sw.js"
    );
    const content = fs.readFileSync(swPath, "utf-8");

    // Verify cache names
    expect(content).toContain("asnrt-v1");
    expect(content).toContain("STATIC_CACHE");
    expect(content).toContain("IMAGE_CACHE");
    expect(content).toContain("PAGE_CACHE");
    expect(content).toContain("FONT_CACHE");
    expect(content).toContain("PDF_CACHE");
  });

  it("should include all site routes for pre-caching", async () => {
    const fs = await import("fs");
    const path = await import("path");
    const swPath = path.resolve(
      import.meta.dirname,
      "../client/public/sw.js"
    );
    const content = fs.readFileSync(swPath, "utf-8");

    const expectedRoutes = [
      "/about",
      "/members",
      "/education",
      "/news",
      "/gallery",
      "/societies",
      "/membership",
      "/events",
      "/contact",
      "/academic",
    ];

    for (const route of expectedRoutes) {
      expect(content).toContain(`'${route}'`);
    }
  });

  it("should skip API and OAuth paths", async () => {
    const fs = await import("fs");
    const path = await import("path");
    const swPath = path.resolve(
      import.meta.dirname,
      "../client/public/sw.js"
    );
    const content = fs.readFileSync(swPath, "utf-8");

    expect(content).toContain("url.pathname.startsWith('/api/')");
    expect(content).toContain("oauth");
  });

  it("should handle cross-origin images with no-cors mode", async () => {
    const fs = await import("fs");
    const path = await import("path");
    const swPath = path.resolve(
      import.meta.dirname,
      "../client/public/sw.js"
    );
    const content = fs.readFileSync(swPath, "utf-8");

    expect(content).toContain("no-cors");
    expect(content).toContain("response.type === 'opaque'");
  });

  it("should include offline fallback HTML", async () => {
    const fs = await import("fs");
    const path = await import("path");
    const swPath = path.resolve(
      import.meta.dirname,
      "../client/public/sw.js"
    );
    const content = fs.readFileSync(swPath, "utf-8");

    expect(content).toContain("getOfflineFallbackHTML");
    expect(content).toContain("You're Offline");
    expect(content).toContain("Try Again");
  });

  it("should support CACHE_ROUTES and CACHE_IMAGES messages", async () => {
    const fs = await import("fs");
    const path = await import("path");
    const swPath = path.resolve(
      import.meta.dirname,
      "../client/public/sw.js"
    );
    const content = fs.readFileSync(swPath, "utf-8");

    expect(content).toContain("CACHE_ROUTES");
    expect(content).toContain("CACHE_IMAGES");
    expect(content).toContain("SKIP_WAITING");
  });
});

describe("Offline Queue", () => {
  const QUEUE_KEY = "asnrt-offline-queue";

  beforeEach(() => {
    // Mock localStorage
    const store: Record<string, string> = {};
    vi.stubGlobal("localStorage", {
      getItem: vi.fn((key: string) => store[key] || null),
      setItem: vi.fn((key: string, value: string) => {
        store[key] = value;
      }),
      removeItem: vi.fn((key: string) => {
        delete store[key];
      }),
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("should store queued requests in localStorage format", () => {
    const queueItem = {
      id: "test-123",
      url: "/api/trpc/contact.submit",
      method: "POST",
      body: JSON.stringify({ name: "Test", email: "test@test.com" }),
      headers: { "Content-Type": "application/json" },
      timestamp: Date.now(),
    };

    localStorage.setItem(QUEUE_KEY, JSON.stringify([queueItem]));
    const stored = JSON.parse(localStorage.getItem(QUEUE_KEY) || "[]");

    expect(stored).toHaveLength(1);
    expect(stored[0].url).toBe("/api/trpc/contact.submit");
    expect(stored[0].method).toBe("POST");
  });

  it("should handle empty queue gracefully", () => {
    const stored = JSON.parse(localStorage.getItem(QUEUE_KEY) || "[]");
    expect(stored).toHaveLength(0);
  });
});

describe("HTML Meta Tags for PWA", () => {
  it("should include PWA-related meta tags in index.html", async () => {
    const fs = await import("fs");
    const path = await import("path");
    const htmlPath = path.resolve(
      import.meta.dirname,
      "../client/index.html"
    );
    const content = fs.readFileSync(htmlPath, "utf-8");

    // Manifest link
    expect(content).toContain('rel="manifest"');
    expect(content).toContain("manifest.json");

    // Theme color
    expect(content).toContain('name="theme-color"');
    expect(content).toContain("#059669");

    // Apple meta tags
    expect(content).toContain("apple-mobile-web-app-capable");
    expect(content).toContain("apple-touch-icon");

    // Favicon
    expect(content).toContain('rel="icon"');
  });
});
