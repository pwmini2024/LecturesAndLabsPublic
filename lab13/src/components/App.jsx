import React, { useState } from "react";
import EmployeeTable from "./EmployeeTable/EmployeeTable";
import EmployeeForm from "./EmployeeForm/EmployeeForm";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "John Doe",
      position: "Developer",
      department: "IT",
      email: "john@example.com",
    },
  ]);

  const handleAddEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  return (
    <div className="app">
      <h1>Employee Management System</h1>
      <EmployeeForm onSubmit={handleAddEmployee} />
      <EmployeeTable employees={employees} onDelete={handleDeleteEmployee} />
    </div>
  );
}

export default App;
