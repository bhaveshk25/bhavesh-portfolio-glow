import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import AmbientStage from "@/components/AmbientStage";
import { PortfolioProvider } from "@/lib/portfolio-store";
import Index from "./pages/Index.tsx";
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
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150);
      }
    };

    const timer = setTimeout(scrollToTarget, 60);
    return () => clearTimeout(timer);
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
            {/* Direct sub-routes smoothly redirect to their respective anchor section on the single main page */}
            <Route path="/skills" element={<Navigate to="/#skills" replace />} />
            <Route path="/projects" element={<Navigate to="/#projects" replace />} />
            <Route path="/certificates" element={<Navigate to="/#certificates" replace />} />
            <Route path="/journey" element={<Navigate to="/#journey" replace />} />
            <Route path="/education" element={<Navigate to="/#education" replace />} />
            <Route path="/cv" element={<Navigate to="/#cv" replace />} />
            <Route path="/contact" element={<Navigate to="/#contact" replace />} />
            {/* Private Admin Dashboard */}
            <Route path="/admin" element={<AdminPage />} />
            {/* 404 Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PortfolioProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
