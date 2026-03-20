import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import AmbientStage from "@/components/AmbientStage";
import { PortfolioProvider } from "@/lib/portfolio-store";
import Index from "./pages/Index.tsx";
import SkillsPage from "./pages/SkillsPage.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import JourneyPage from "./pages/JourneyPage.tsx";
import CertificatesPage from "./pages/CertificatesPage.tsx";
import CVPage from "./pages/CVPage.tsx";
import EducationPage from "./pages/EducationPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import AdminPage from "./pages/AdminPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const id = location.hash.replace("#", "");

    const scrollToTarget = () => {
      const element = document.getElementById(id);
      if (!element) {
        return;
      }

      element.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const frame = window.requestAnimationFrame(scrollToTarget);
    return () => window.cancelAnimationFrame(frame);
  }, [location.hash, location.pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <PortfolioProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AmbientStage />
          <ScrollToSection />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/journey" element={<JourneyPage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
            <Route path="/cv" element={<CVPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin" element={<AdminPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PortfolioProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
