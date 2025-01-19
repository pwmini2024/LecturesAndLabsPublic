import React, { act } from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EmployeeForm from "./EmployeeForm";

// Example tests that are complete
describe("EmployeeForm Component", () => {
  // Form submission test example
  it("submits form with correct data", async () => {
    const mockSubmit = jest.fn();

    await act(async () => {
      render(<EmployeeForm onSubmit={mockSubmit} />);
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
      expect(mockSubmit).toHaveBeenCalledWith(
        expect.objectContaining({
          name: "Jane Doe",
          position: "Manager",
          department: "HR",
          email: "jane@example.com",
        })
      );
    });
  });

  // Form reset test example
  it("resets form after submission", async () => {
    await act(async () => {
      render(<EmployeeForm onSubmit={() => {}} />);
    });

    const nameInput = screen.getByLabelText(/name/i);

    await act(async () => {
      await userEvent.type(nameInput, "Jane Doe");
      const submitButton = screen.getByText("Add Employee");
      fireEvent.click(submitButton);
    });

    await waitFor(() => {
      expect(nameInput.value).toBe("");
    });
  });
});

describe.skip("[Excercise] Validation Tests", () => {
  /* Exercise 1: Test form validation
     TODO: Write a test that verifies form validation works
     Hint: Try submitting the form without filling required fields */
  it("shows validation errors when submitting empty form", () => {
    // TODO: 1. Render the component
    // TODO: 2. Wait for the component to load
    // TODO: 3. Click the submit button
    // TODO: 4. Verify that the validation errors are displayed, hint: expect(screen.getByText(/name/i)).toBeInTheDocument();
  });

  /* Exercise 2: Test email format validation
     TODO: Write a test that verifies email format validation
     Hint: Try submitting the form with an invalid email format */
  it("validates email format", () => {
    //TODO: 1. Render the component
    //TODO: 2. Wait for the component to load
    //TODO: 3. Enter an invalid email
    //TODO: 4. Click the submit button
    //TODO: 5. Verify that the validation error is displayed, hint: expect(emailInput.validationMessage).toBeTruthy();// TODO: Implement this test
  });
});
