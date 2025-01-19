import React, { useState } from "react";
import { isValidEmail } from "../../utils/validation";
import "./EmployeeForm.css";

function EmployeeForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    department: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email
    if (!isValidEmail(formData.email)) {
      setErrors({ ...errors, email: "Please enter a valid email address" });
      return;
    }

    onSubmit({ ...formData, id: Date.now() });
    setFormData({ name: "", position: "", department: "", email: "" });
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
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
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;
