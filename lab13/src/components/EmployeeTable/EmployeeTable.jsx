import React from "react";
import "./EmployeeTable.css";

function EmployeeTable({ employees, onDelete }) {
  if (employees.length === 0) {
    return <div className="table-container"></div>;
  }

  return (
    <div className="table-container">
      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.department}</td>
              <td>{employee.email}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => onDelete(employee.id)}
                  aria-label={`Delete ${employee.name}`}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
