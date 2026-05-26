import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { hasAnalyticsConsent } from "./CookieConsent";

const env = import.meta.env as Record<string, string | undefined>;
const GA_ID = env.VITE_GA4_MEASUREMENT_ID;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Google Analytics 4 integration, gated on explicit cookie consent.
 *
 * - Does nothing until the user clicks Accept in the CookieConsent banner.
 * - When consent is granted, injects gtag.js once and tracks subsequent
 *   route changes as page_view events.
 * - Listens for cookie-consent-change events so consent given during the
 *   session takes effect without a reload.
 *
 * Reads the measurement ID from VITE_GA4_MEASUREMENT_ID. If unset, this is
 * a no-op so dev/local builds don't error.
 */
export const GoogleAnalytics = () => {
  const { pathname, search } = useLocation();
  const [consented, setConsented] = useState<boolean>(false);

  useEffect(() => {
    setConsented(hasAnalyticsConsent());
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      setConsented(detail === "accepted");
    };
    window.addEventListener("cookie-consent-change", onChange);
    return () => window.removeEventListener("cookie-consent-change", onChange);
  }, []);

  useEffect(() => {
    if (!GA_ID || !consented) return;

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
    // fire page_view explicitly here and on every route change.
    window.gtag("config", GA_ID, { send_page_view: false });
    window.gtag("event", "page_view", { page_path: pathname + search });
  }, [pathname, search, consented]);

  return null;
};
