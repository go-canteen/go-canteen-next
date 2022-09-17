import Home from "../pages/index";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Homepage", () => {
  it("renders a a welcome text", () => {
    render(<Home />);
    expect(screen.getByTestId("welcome-header")).toBeInTheDocument();
  });
});
