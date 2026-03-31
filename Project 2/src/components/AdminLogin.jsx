import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AdminLoginForm() {
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
      navigate("/admin/dashboard");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
     e.preventDefault();
  try {
    const res = await axios.post("http://127.0.0.1:8000/api/adminlogin/", formData);
    localStorage.setItem("token", res.data.access); // store access token
    navigate("/admin/dashboard");
  } catch (err) {
    console.error("Admin login error", err.response?.data || err.message);
  }

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/adminlogin/",
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
      window.location.href = "/admin/dashboard";
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      alert(err.response?.data?.error || "Login failed. Check email and password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Unified CSS */}
      <style>
        {`
          .admin-auth-container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 80vh;
            background: linear-gradient(135deg, #e3f2fd, #ffffff);
            padding: 20px;
            font-family: Arial, sans-serif;
          }
          .admin-auth-card {
            background: #fff;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0px 6px 25px rgba(0,0,0,0.15);
            width: 100%;
            max-width: 380px;
            text-align: center;
          }
          .admin-auth-card h2 {
            margin-bottom: 0.5rem;
            font-size: 1.8rem;
            font-weight: bold;
            color: #1a237e;
          }
          .admin-auth-card p {
            margin-bottom: 1.5rem;
            font-size: 0.95rem;
            color: #555;
          }
          .form-group {
            text-align: left;
            margin-bottom: 1.2rem;
          }
          .form-group label {
            display: block;
            margin-bottom: 0.4rem;
            font-weight: 500;
            font-size: 0.9rem;
            color: #444;
          }
          .form-input {
            width: 100%;
            padding: 10px;
            border-radius: 8px;
            border: 1px solid #ccc;
            font-size: 0.95rem;
            outline: none;
          }
          .form-input:focus {
            border-color: #1976d2;
            box-shadow: 0 0 5px rgba(25,118,210,0.3);
          }
          .btn-primary {
            width: 100%;
            padding: 10px;
            background: #1976d2;
            color: #fff;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            cursor: pointer;
            margin-top: 5px;
            margin-bottom: 1rem;
            transition: all 0.3s ease;
          }
          .btn-primary:hover {
            transform: scale(1.03);
            opacity: 0.9;
          }
          .google-btn {
            width: 100%;
            padding: 10px;
            background: #DB4437;
            color: #fff;
            font-size: 1rem;
            font-weight: bold;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .google-btn:hover {
            background: #c1351d;
            transform: translateY(-2px);
            box-shadow: 0px 4px 10px rgba(219, 68, 55, 0.4);
          }
          .or-text {
            margin: 1rem 0;
            font-size: 0.9rem;
            color: #666;
          }
          .register-text {
            margin-top: 1rem;
            font-size: 0.9rem;
            color: #444;
          }
          .register-text a {
            color: #1976d2;
            text-decoration: none;
            font-weight: 500;
          }
          .register-text a:hover {
            text-decoration: underline;
          }
        `}
      </style>

      {/* ✅ Admin Login Form */}
      <div className="admin-auth-container">
        <div className="admin-auth-card">
          <h2>Admin Login 🔑</h2>
          <p>Sign in to manage job postings & applications</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <button type="submit" disabled={loading} className="btn-primary">
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* <p className="or-text">OR</p>

          <button
            type="button"
            onClick={() =>
              (window.location.href =
                "http://127.0.0.1:8000/social/login/google-oauth2/")
            }
            className="google-btn"
          >
            <i className="fab fa-google" style={{ marginRight: "8px" }}></i>
            Login with Google
          </button> */}

          <p className="register-text">
            Don’t have an account?{" "}
            <a href="/adminregister">Register Now</a>
          </p>
        </div>
      </div>

      {/* ✅ Footer */}
      <Footer />
    </>
  );
}

export default AdminLoginForm;
