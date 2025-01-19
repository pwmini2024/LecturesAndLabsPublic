import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import EmployeeList from "./EmployeeList";

describe("EmployeeList", () => {
  it("renders loading state initially", () => {
    render(<EmployeeList />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders employees after loading", async () => {
    const mockEmployees = [
      {
        id: "1",
        name: "John Doe",
        age: 30,
        company: "Test Corp",
        email: "john@test.com",
        isActive: true,
      },
    ];

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockEmployees),
      })
    );

    render(<EmployeeList />);

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument();
    });
  });

  it("renders error message on fetch failure", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
      })
    );

    render(<EmployeeList />);

    await waitFor(() => {
      expect(screen.getByText(/Error:/)).toBeInTheDocument();
    });
  });
});
