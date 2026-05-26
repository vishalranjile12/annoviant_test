import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const env = import.meta.env as Record<string, string | undefined>;
const GA_ID = env.VITE_GA4_MEASUREMENT_ID;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Google Analytics 4 integration.
 *
 * Reads the measurement ID from VITE_GA4_MEASUREMENT_ID. If unset, this is a
 * no-op so dev/local builds don't error.
 *
 * Behavior:
 *   - Injects gtag.js once on first render.
 *   - Disables the automatic page_view that gtag fires on `config` (otherwise
 *     SPA navigations would double-count the initial pageview).
 *   - Fires a page_view event on every route change (pathname + search).
 *
 * Mount once near the App root, inside a Router so useLocation works.
 */
export const GoogleAnalytics = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    if (!GA_ID) return;

    // Already loaded → just track this navigation.
    if (window.gtag) {
      window.gtag("event", "page_view", { page_path: pathname + search });
      return;
    }

    // First load. Inject the gtag.js script tag.
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer!.push(args);
    };
    window.gtag("js", new Date());
    // send_page_view: false prevents double-tracking on initial config; we
    // fire page_view explicitly below and on every route change.
    window.gtag("config", GA_ID, { send_page_view: false });
    window.gtag("event", "page_view", { page_path: pathname + search });
  }, [pathname, search]);

  return null;
};
