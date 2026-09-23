import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PortfolioProvider } from "@/lib/portfolio-store";
import Index from "@/pages/Index";
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

describe("Portfolio Single-Window Rendering", () => {
  it("renders all sections on the unified Index page in sequence", () => {
    renderWithProviders(<Index />, "/");

    // 1. Home / Hero
    expect(screen.getByText("Bhavesh Kumawat")).toBeInTheDocument();
    expect(screen.getByText(/Building web and data experiences/i)).toBeInTheDocument();

    // 2. About Me
    expect(screen.getByText("About Me")).toBeInTheDocument();
    expect(screen.getByText(/Driven by curiosity, engineering discipline, and a passion to ship/i)).toBeInTheDocument();

    // 3. Skills (immediately after About)
    expect(screen.getByText("Technical Matrix")).toBeInTheDocument();
    expect(screen.getByText("Languages")).toBeInTheDocument();

    // 4. Projects & Training
    expect(screen.getAllByText(/VisionType/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Summer Training Highlight/i)).toBeInTheDocument();

    // 5. Certificates
    expect(screen.getByText("Verified Credentials")).toBeInTheDocument();
    expect(screen.getAllByText(/CipherSchools/i).length).toBeGreaterThan(0);

    // 6. Journey
    expect(screen.getByText("Roadmap & Milestones")).toBeInTheDocument();

    // 7. Education
    expect(screen.getByText("Academic Track")).toBeInTheDocument();
    expect(screen.getAllByText(/Lovely Professional University/i).length).toBeGreaterThan(0);

    // 8. CV
    expect(screen.getByText("Curriculum Vitae")).toBeInTheDocument();
    expect(screen.getByText(/Download Official CV \(PDF\)/i)).toBeInTheDocument();

    // 9. Contact
    expect(screen.getByText("Send a Message")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("e.g. Alex Smith")).toBeInTheDocument();
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
