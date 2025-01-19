import React from "react";
import { render, screen, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EmployeeList from "./EmployeeList";

// Mock fetch globally
const mockFetch = jest.fn();

describe("EmployeeList Component", () => {
  // Setup and teardown
  beforeEach(() => {
    // Clear mock and set up default mock implementation
    mockFetch.mockClear();
    global.fetch = mockFetch.mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([]),
      })
    );
  });

  // Cleanup after tests
  afterEach(() => {
    global.fetch = undefined;
  });

  // Integration test - loading state
  it("renders loading state initially", async () => {
    await act(async () => {
      render(<EmployeeList />);
    });
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  // Integration test - successful data fetching
  it("renders employees after successful fetch", async () => {
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

    mockFetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockEmployees),
      })
    );

    await act(async () => {
      render(<EmployeeList />);
    });

    // Test loading state
    expect(screen.getByText("Loading...")).toBeInTheDocument();

    // Test loaded content
    await act(async () => {
      await waitFor(() => {
        expect(screen.getByText("John Doe")).toBeInTheDocument();
      });
    });

    // Test data display
    expect(screen.getByText("Age: 30")).toBeInTheDocument();
    expect(screen.getByText("Company: Test Corp")).toBeInTheDocument();
  });

  // Error handling test
  it("renders error message on fetch failure", async () => {
    mockFetch.mockImplementationOnce(() =>
      Promise.reject(new Error("Network error"))
    );

    await act(async () => {
      render(<EmployeeList />);
    });

    await act(async () => {
      await waitFor(() => {
        expect(screen.getByText(/Error:/)).toBeInTheDocument();
      });
    });
  });

  // Snapshot test
  it("matches snapshot when data is loaded", async () => {
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

    mockFetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockEmployees),
      })
    );

    let container;
    await act(async () => {
      const rendered = render(<EmployeeList />);
      container = rendered.container;
    });

    await act(async () => {
      await waitFor(() => {
        expect(screen.getByText("John Doe")).toBeInTheDocument();
      });
    });

    expect(container).toMatchSnapshot();
  });
});
