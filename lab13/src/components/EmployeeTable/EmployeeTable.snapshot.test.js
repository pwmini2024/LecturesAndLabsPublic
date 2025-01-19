import React, { act } from "react";
import { render } from "@testing-library/react";
import EmployeeTable from "./EmployeeTable";

describe("EmployeeTable Snapshots", () => {
  const mockEmployees = [
    {
      id: 1,
      name: "John Doe",
      position: "Developer",
      department: "IT",
      email: "john@example.com",
    },
  ];

  it("should match snapshot with employees", async () => {
    let container;
    await act(async () => {
      const result = render(
        <EmployeeTable employees={mockEmployees} onDelete={() => {}} />
      );
      container = result.container;
    });

    expect(container).toMatchSnapshot();
  });

  it("should match snapshot with empty employees list", async () => {
    let container;
    await act(async () => {
      const result = render(
        <EmployeeTable employees={[]} onDelete={() => {}} />
      );
      container = result.container;
    });

    expect(container).toMatchSnapshot();
  });
});
