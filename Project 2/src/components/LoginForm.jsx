import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token);
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/login/",
        {
          email: formData.email,
          password: formData.password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("Login successful:", res.data);
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
      alert("Login successful!");
      window.location.href = "/dashboard";
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      alert(err.response?.data?.error || "Login failed. Check email and password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.heading}>Welcome Back 👋</h2>
          <p style={styles.subText}>Sign in to your Job Portal account</p>

          <form onSubmit={handleSubmit}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input}
            />

            <label style={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              style={styles.input}
            />

            <button
              type="submit"
              disabled={loading}
              style={styles.button}
              className="btn-hover"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p style={styles.orText}>OR</p>

          <a
            href="http://127.0.0.1:8000/social/login/google-oauth2/"
            style={styles.googleBtn}
            className="btn-hover"
          >
            <i className="fab fa-google" style={{ marginRight: "8px" }}></i>
            Login with Google
          </a>

          <p style={styles.registerText}>
            Don’t have an account?{" "}
            <a href="/register" style={styles.link}>
              Register Now
            </a>
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Extra CSS for hover effects */}
      <style>
        {`
          .btn-hover {
            transition: all 0.3s ease;
          }
          .btn-hover:hover {
            transform: scale(1.05);
            opacity: 0.9;
          }
        `}
      </style>
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
    background: "linear-gradient(135deg, #e3f2fd, #ffffff)",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },
  card: {
    background: "#fff",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0px 6px 25px rgba(0,0,0,0.15)",
    width: "360px",
    textAlign: "center",
  },
  heading: {
    marginBottom: "0.5rem",
    fontSize: "1.9rem",
    fontWeight: "bold",
    color: "#1a237e",
  },
  subText: {
    marginBottom: "1.5rem",
    fontSize: "1rem",
    color: "#555",
  },
  label: {
    display: "block",
    textAlign: "left",
    fontSize: "0.9rem",
    marginBottom: "0.3rem",
    fontWeight: "500",
    color: "#444",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "1rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "0.95rem",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#1976d2",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    cursor: "pointer",
    marginBottom: "1rem",
  },
  googleBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#db4437",
    color: "#fff",
    textDecoration: "none",
    padding: "10px",
    borderRadius: "8px",
    fontSize: "0.95rem",
    cursor: "pointer",
  },
  orText: {
    margin: "1rem 0",
    fontSize: "0.9rem",
    color: "#666",
  },
  registerText: {
    marginTop: "1rem",
    fontSize: "0.9rem",
    color: "#444",
  },
  link: {
    color: "#1976d2",
    textDecoration: "none",
    fontWeight: "500",
  },
};

export default LoginForm;
