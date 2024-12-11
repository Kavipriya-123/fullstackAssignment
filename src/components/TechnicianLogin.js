import React, { useState } from "react";

const TechnicianLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    businessName: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    let formErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/; // At least 8 characters, 1 letter, 1 number

    if (!formData.email || !emailRegex.test(formData.email)) {
      formErrors.email = "Invalid email format.";
    }
    if (!formData.password || !passwordRegex.test(formData.password)) {
      formErrors.password =
        "Password must be at least 8 characters and include a letter and a number.";
    }
    if (!formData.businessName) {
      formErrors.businessName = "Business Name is required.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully:", formData);
      // Add backend integration here
    }
  };

  return (
    <div style={styles.container}>
      <h2>Technician Login</h2>
      <form onSubmit={handleSubmit}>
        {/* Email */}
        <div style={styles.inputGroup}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <span style={styles.error}>{errors.email}</span>}
        </div>

        {/* Password */}
        <div style={styles.inputGroup}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          {errors.password && (
            <span style={styles.error}>{errors.password}</span>
          )}
        </div>

        {/* Business Name */}
        <div style={styles.inputGroup}>
          <label>Business Name</label>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="Enter your business name"
          />
          {errors.businessName && (
            <span style={styles.error}>{errors.businessName}</span>
          )}
        </div>

        {/* Submit */}
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  error: {
    color: "red",
    fontSize: "0.8em",
  },
  button: {
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default TechnicianLogin;
