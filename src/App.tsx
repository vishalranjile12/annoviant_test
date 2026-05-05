import { lazy, Suspense, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";

const TechnologyPage = lazy(() => import("./pages/Technology.tsx"));
const ApplicationsPage = lazy(() => import("./pages/Applications.tsx"));
const AboutPage = lazy(() => import("./pages/About.tsx"));
const NewsPage = lazy(() => import("./pages/News.tsx"));
const ContactPage = lazy(() => import("./pages/Contact.tsx"));
const PediatricPage = lazy(() => import("./pages/Pediatric.tsx"));
const CardiovascularPage = lazy(() => import("./pages/Cardiovascular.tsx"));
const ClinicalEvidencePage = lazy(() => import("./pages/ClinicalEvidence.tsx"));
const PublicationsPage = lazy(() => import("./pages/Publications.tsx"));
const TeamPage = lazy(() => import("./pages/Team.tsx"));
const LegalPage = lazy(() => import("./pages/Legal.tsx"));
const FaqPage = lazy(() => import("./pages/Faq.tsx"));
const FounderStoryPage = lazy(() => import("./pages/FounderStory.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};

const RouteFallback = () => (
  <div className="min-h-[60svh] grid place-items-center" aria-busy="true" aria-live="polite">
    <div className="flex items-center gap-3 text-muted-foreground">
      <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
      <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" style={{ animationDelay: "120ms" }} />
      <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" style={{ animationDelay: "240ms" }} />
      <span className="sr-only">Loading,</span>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/applications" element={<ApplicationsPage />} />
            <Route path="/solutions/pediatric" element={<PediatricPage />} />
            <Route path="/solutions/cardiovascular" element={<CardiovascularPage />} />
            <Route path="/clinical-evidence" element={<ClinicalEvidencePage />} />
            <Route path="/publications" element={<PublicationsPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/founder-story" element={<FounderStoryPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/legal/:slug" element={<LegalPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
