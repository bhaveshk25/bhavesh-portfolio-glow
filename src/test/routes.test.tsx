import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PortfolioProvider } from "@/lib/portfolio-store";
import Index from "@/pages/Index";
import SkillsPage from "@/pages/SkillsPage";
import ProjectsPage from "@/pages/ProjectsPage";
import JourneyPage from "@/pages/JourneyPage";
import CertificatesPage from "@/pages/CertificatesPage";
import CVPage from "@/pages/CVPage";
import EducationPage from "@/pages/EducationPage";
import ContactPage from "@/pages/ContactPage";
import AdminPage from "@/pages/AdminPage";
import NotFound from "@/pages/NotFound";

const renderWithProviders = (ui: React.ReactElement, route = "/") => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  });

  return render(
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <PortfolioProvider>
          <MemoryRouter initialEntries={[route]}>
            {ui}
          </MemoryRouter>
        </PortfolioProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

describe("Portfolio Page Rendering", () => {
  it("renders the Home / Index page with hero and name", () => {
    renderWithProviders(<Index />, "/");
    expect(screen.getByText("Bhavesh Kumawat")).toBeInTheDocument();
    expect(screen.getByText(/Building web and data experiences/i)).toBeInTheDocument();
    expect(screen.getAllByText(/VisionType/i).length).toBeGreaterThan(0);
  });

  it("renders the Skills page with skill groups", () => {
    renderWithProviders(<SkillsPage />, "/skills");
    expect(screen.getByText("Languages")).toBeInTheDocument();
    expect(screen.getByText("Python, Web & ML Technologies")).toBeInTheDocument();
  });

  it("renders the Projects page with project cards and training", () => {
    renderWithProviders(<ProjectsPage />, "/projects");
    expect(screen.getByText(/Summer Training in Data Science/i)).toBeInTheDocument();
    expect(screen.getAllByText(/VisionType/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/DevOps Project: CI\/CD Pipeline for Portfolio Website/i)).toBeInTheDocument();
  });

  it("renders the Journey page", () => {
    renderWithProviders(<JourneyPage />, "/journey");
    expect(screen.getByText(/Growth so far, and the direction ahead/i)).toBeInTheDocument();
    expect(screen.getByText("Computer Science Student")).toBeInTheDocument();
  });

  it("renders the Certificates page with certificates sorted", () => {
    renderWithProviders(<CertificatesPage />, "/certificates");
    expect(screen.getByText(/Complete Machine Learning & Data Science/i)).toBeInTheDocument();
    expect(screen.getByText("GeeksforGeeks")).toBeInTheDocument();
    expect(screen.getAllByText(/CipherSchools/i).length).toBeGreaterThan(0);
  });

  it("renders the CV page with duration badges", () => {
    renderWithProviders(<CVPage />, "/cv");
    expect(screen.getByText("NOV 25 - DEC 25")).toBeInTheDocument();
    expect(screen.getByText("JUN 25 - JUL 25")).toBeInTheDocument();
    expect(screen.getByText("Lovely Professional University")).toBeInTheDocument();
  });

  it("renders the Education page", () => {
    renderWithProviders(<EducationPage />, "/education");
    expect(screen.getByText(/Academic foundations that shaped the way I learn/i)).toBeInTheDocument();
    expect(screen.getByText("Lovely Professional University")).toBeInTheDocument();
  });

  it("renders the Contact page", () => {
    renderWithProviders(<ContactPage />, "/contact");
    expect(screen.getByText(/Let's build something thoughtful and ambitious/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Your name")).toBeInTheDocument();
  });

  it("renders the Admin login form when unauthenticated", () => {
    renderWithProviders(<AdminPage />, "/admin");
    expect(screen.getByText(/Hidden control panel for portfolio updates/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter password")).toBeInTheDocument();
  });

  it("renders the NotFound 404 page", () => {
    renderWithProviders(<NotFound />, "/not-a-real-page");
    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText("Return to Home")).toBeInTheDocument();
  });
});
