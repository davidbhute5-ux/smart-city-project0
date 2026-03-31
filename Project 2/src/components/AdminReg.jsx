import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";   // ✅ your navbar component
import Footer from "../components/Footer";

function AdminRegister() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    mobile_no: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const error = params.get("error");

    if (error) {
      alert(`Google signup failed: ${error}`);
    } else if (token) {
      localStorage.setItem("token", token);
      alert("Google signup successful!");
      navigate("/admin/dashboard");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/adminregister/", formData, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      });

      alert("Admin registration successful!");
      navigate("/adminlogin");
    } catch (err) {
      console.error("Full error:", err.response?.data);
      alert(
        "Registration failed: " +
          (err.response?.data
            ? JSON.stringify(err.response.data)
            : err.message)
      );
    }
  };

  const handleGoogleSignup = () => {
    try {
      window.location.href =
        "http://127.0.0.1:8000/social/login/google-oauth2/?role=admin";
    } catch (err) {
      console.error("Google Signup Error:", err);
      alert("Google signup failed: " + err.message);
    }
  };

  // ✅ Inline theme styles
  const styles = {
    container: {
      minHeight: "calc(100vh - 120px)", // leaves space for navbar + footer
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #e3f2fd, #ffffff)",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    card: {
      background: "#fff",
      padding: "2rem",
      borderRadius: "12px",
      boxShadow: "0px 6px 25px rgba(0,0,0,0.15)",
      width: "100%",
      maxWidth: "420px",
      textAlign: "center",
    },
    heading: {
      marginBottom: "0.5rem",
      fontSize: "1.8rem",
      fontWeight: "bold",
      color: "#0d47a1",
    },
    subtitle: {
      marginBottom: "1.5rem",
      fontSize: "0.95rem",
      color: "#555",
    },
    formGroup: {
      textAlign: "left",
      marginBottom: "1.2rem",
    },
    label: {
      display: "block",
      marginBottom: "0.4rem",
      fontWeight: 500,
      fontSize: "0.9rem",
      color: "#333",
    },
    input: {
      width: "100%",
      padding: "10px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      fontSize: "0.95rem",
      outline: "none",
    },
    inputFocus: {
      borderColor: "#1976d2",
      boxShadow: "0 0 5px rgba(25,118,210,0.3)",
    },
    primaryBtn: {
      width: "100%",
      padding: "10px",
      background: "#1976d2",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      fontSize: "1rem",
      cursor: "pointer",
      marginTop: "5px",
      marginBottom: "1rem",
      transition: "all 0.3s ease",
    },
    googleBtn: {
      width: "100%",
      padding: "10px",
      background: "#DB4437",
      color: "#fff",
      fontSize: "1rem",
      fontWeight: "bold",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    already: {
      marginTop: "1rem",
      fontSize: "0.9rem",
      color: "#444",
    },
    link: {
      color: "#1976d2",
      textDecoration: "none",
      fontWeight: 500,
    },
  };

  return (
    <>
      <Navbar /> {/* ✅ Added Navbar */}

      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.heading}>Admin Registration 🔐</h2>
          <p style={styles.subtitle}>
            Create an admin account to manage the platform
          </p>

          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label htmlFor="username" style={styles.label}>
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter username"
                value={formData.username}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="email" style={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="password" style={styles.label}>
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="mobile_no" style={styles.label}>
                Mobile Number
              </label>
              <input
                type="text"
                id="mobile_no"
                name="mobile_no"
                placeholder="Enter mobile number"
                value={formData.mobile_no}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>

            <button type="submit" style={styles.primaryBtn}>
              Register as Admin
            </button>

            {/* <button type="button" onClick={handleGoogleSignup} style={styles.googleBtn}>
              <i className="fab fa-google" style={{ marginRight: "8px" }}></i>
              Sign up with Google
            </button> */}

            <p style={styles.already}>
              Already registered?{" "}
              <a href="/adminlogin" style={styles.link}>
                Login
              </a>
            </p>
          </form>
        </div>
      </div>

      <Footer /> {/* ✅ Added Footer */}
    </>
  );
}

export default AdminRegister;
