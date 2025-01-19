import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

// Unit Tests for Button Component
describe("Button Component", () => {
  // Snapshot test
  it("matches snapshot", () => {
    const { container } = render(<Button>Click me</Button>);
    expect(container).toMatchSnapshot();
  });

  // Props test
  it("renders button text correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  // Event handler test
  it("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Disabled state test
  it("is disabled when disabled prop is true", () => {
    render(<Button disabled>Click me</Button>);
    expect(screen.getByText("Click me")).toBeDisabled();
  });

  // Class name test
  it("applies correct classes", () => {
    const { container } = render(<Button disabled>Click me</Button>);
    expect(container.firstChild).toHaveClass("custom-button", "disabled");
  });
});
