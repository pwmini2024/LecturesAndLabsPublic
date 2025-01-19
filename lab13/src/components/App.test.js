import React, { act } from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App Component Integration", () => {
  it("adds new employee and displays in table", async () => {
    await act(async () => {
      render(<App />);
    });

    await act(async () => {
      await userEvent.type(screen.getByLabelText(/name/i), "Jane Doe");
      await userEvent.type(screen.getByLabelText(/position/i), "Manager");
      await userEvent.type(screen.getByLabelText(/department/i), "HR");
      await userEvent.type(screen.getByLabelText(/email/i), "jane@example.com");

      const submitButton = screen.getByText("Add Employee");
      fireEvent.click(submitButton);
    });

    await waitFor(() => {
      expect(screen.getByText("Jane Doe")).toBeInTheDocument();
      expect(screen.getByText("Manager")).toBeInTheDocument();
    });
  });

  it("removes employee when delete button is clicked", async () => {
    await act(async () => {
      render(<App />);
    });

    await act(async () => {
      const deleteButton = screen.getByRole("button", {
        name: /delete john doe/i,
      });
      fireEvent.click(deleteButton);
    });

    await waitFor(() => {
      expect(screen.queryByText("John Doe")).not.toBeInTheDocument();
    });
  });
});

describe.skip("[Excercise] App Component Integration", () => {
  /* Exercise 1: Test multiple employees
     TODO: Write a test that adds multiple employees and verifies they all appear
     Hint: Add 3 employees and check if they're all in the document */
  it("handles multiple employee additions correctly", () => {
    expect(true).toBe(false); // TODO: Implement this test
  });

  /* Exercise 2: Test state persistence
     TODO: Write a test that verifies the state is maintained after operations
     Hint: Add employee, delete another, verify correct employees remain */
  it("maintains correct state after multiple operations", () => {
    expect(true).toBe(false); // TODO: Implement this test
  });
});
