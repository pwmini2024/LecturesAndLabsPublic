import React, { useState, useEffect } from "react";
import Loader from "../utils/Loader";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/employees")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((data) => {
        setEmployees(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="employee-list">
      <h2>Employees</h2>
      <div className="employees">
        {employees.map((employee) => (
          <div key={employee.id} className="employee-card">
            <h3>{employee.name}</h3>
            <p>Age: {employee.age}</p>
            <p>Company: {employee.company}</p>
            <p>Email: {employee.email}</p>
            <p>Status: {employee.isActive ? "Active" : "Inactive"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployeeList;
