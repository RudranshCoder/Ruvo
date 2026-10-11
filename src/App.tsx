import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppShell } from "@/components/layout/AppShell";
import { LandingPage } from "@/features/landing/LandingPage";
import { DashboardPage } from "@/features/dashboard/DashboardPage";
import { ComingSoonPage } from "@/features/shared/ComingSoonPage";

export function RuvoRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/app" element={<AppShell />}>
        <Route index element={<DashboardPage />} />
        <Route
          path="plan"
          element={
            <ComingSoonPage
              title="Build your month plan"
              description="Category plans, fixed commitments, and goals will live here."
              progress={28}
            />
          }
        />
        <Route
          path="goals"
          element={
            <ComingSoonPage
              title="Set money aside with confidence"
              description="Goal priorities and projected shortfalls will appear here."
              progress={28}
            />
          }
        />
        <Route
          path="simulate"
          element={
            <ComingSoonPage
              title="Test a decision before it is real"
              description="Scenarios will compare your original month with a proposed choice."
              progress={28}
            />
          }
        />
      </Route>
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <RuvoRoutes />
    </BrowserRouter>
  );
}
