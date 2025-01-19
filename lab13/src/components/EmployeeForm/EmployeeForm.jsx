import React, { useState } from "react";
import "./EmployeeForm.css";

function EmployeeForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    department: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, id: Date.now() });
    setFormData({ name: "", position: "", department: "", email: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form" role="form">
      <h2>Add New Employee</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="position">Position:</label>
        <input
          type="text"
          id="position"
          name="position"
          value={formData.position}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="department">Department:</label>
        <input
          type="text"
          id="department"
          name="department"
          value={formData.department}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;
