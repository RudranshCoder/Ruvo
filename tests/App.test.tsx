import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { RuvoRoutes } from "../src/App";

describe("foundation screen", () => {
  it("shows the default Ruvo budget", () => {
    render(<MemoryRouter initialEntries={["/"]}><RuvoRoutes /></MemoryRouter>);
    expect(screen.getByRole("heading", { name: "Ruvo" })).toBeInTheDocument();
    expect(screen.getAllByText("₹10,000")[0]).toBeInTheDocument();
  });

  it("takes Explore to the Ruvo workspace", () => {
    render(<MemoryRouter initialEntries={["/"]}><RuvoRoutes /></MemoryRouter>);
    fireEvent.click(screen.getByRole("link", { name: /explore ruvo/i }));
    expect(screen.getByRole("heading", { name: /make room for what matters/i })).toBeInTheDocument();
  });
});
