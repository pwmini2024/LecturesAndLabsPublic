import React, { act } from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("User Interaction Tests", () => {
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

describe("[Excercise] User Interaction Tests", () => {
  /* Exercise 1: Test state persistence
     TODO: Write a test that verifies the state is maintained after operations
     Hint: Add employee, delete another, verify correct employees remain */
  it.skip("maintains correct state after multiple operations", () => {
    // TODO: 1. Render the component
    // TODO: 2. Wait for the component to load
    // TODO: 3. Add an employee
    // TODO: 4. Delete another employee
    // TODO: 5. Verify that the correct employees remain, hint: expect(screen.getByText("Jane Doe")).toBeInTheDocument();
  });
});
