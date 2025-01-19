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

  describe("Display Features", () => {
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
        render(
          <EmployeeTable employees={mockEmployees} onDelete={mockDelete} />
        );
      });

      await act(async () => {
        fireEvent.click(
          screen.getByRole("button", { name: /delete john doe/i })
        );
      });

      await waitFor(() => {
        expect(mockDelete).toHaveBeenCalledWith(1);
      });
    });
  });

  describe.skip("[Excercise] Test driven development excercise", () => {
    test("should show message when no employees exist", () => {
      expect(true).toBe(false); // TODO: Implement this test
    });

    test("should display all required column headers", () => {
      expect(true).toBe(false); // TODO: Implement this test
    });
  });
});
