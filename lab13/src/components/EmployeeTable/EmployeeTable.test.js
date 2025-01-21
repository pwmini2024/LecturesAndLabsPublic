import React, { act } from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import EmployeeTable from "./EmployeeTable";

describe("Employee Table", () => {
  const mockEmployees = [
    {
      id: 1,
      name: "John Doe",
      position: "Developer",
      department: "IT",
      email: "john@example.com",
    },
  ];

  test("should render employee data correctly", async () => {
    await act(async () => {
      render(<EmployeeTable employees={mockEmployees} onDelete={() => {}} />);
    });

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument();
      expect(screen.getByText("Developer")).toBeInTheDocument();
      expect(screen.getByText("IT")).toBeInTheDocument();
      expect(screen.getByText("john@example.com")).toBeInTheDocument();
    });
  });

  test("should handle delete button clicks", async () => {
    const mockDelete = jest.fn();

    await act(async () => {
      render(<EmployeeTable employees={mockEmployees} onDelete={mockDelete} />);
    });

    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: /delete john doe/i }));
    });

    await waitFor(() => {
      expect(mockDelete).toHaveBeenCalledWith(1);
    });
  });

  describe.skip("Test driven development excercise", () => {
    test("[Ex2] should show message when no employees exist", () => {
      // TODO: 0. Write the test first, see it failing and then implement the code to make it pass
      // TODO: 1. Render the component
      // TODO: 2. Wait for the component to load
      // TODO: 3. Verify that the message is displayed
      // TODO: 4. Verify that the table headers are not displayed
    });

    test("[Ex3] should display all required column headers", () => {
      //TODO: 0. Write the test first, see it failing and then implement the code to make it pass
      //TODO: 1. Render the component
      //TODO: 2. Wait for the component to load
      //TODO: 3. Verify that the table headers are displayed
    });
  });
});
