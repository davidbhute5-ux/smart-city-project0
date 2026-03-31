// src/Register.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Username: "",
    email: "",
    password: "",
    mobile_no: "",
    Work_status: "",
    resume: null,
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
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] || null });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null && value !== "") {
          form.append(key, value);
        }
      });

      await axios.post("http://127.0.0.1:8000/api/register/", form, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Registration successful!");
      navigate("/login");
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
        "http://127.0.0.1:8000/social/login/google-oauth2/";
    } catch (err) {
      console.error("Google Signup Error:", err);
      alert("Google signup failed: " + err.message);
    }
  };

  return (
    <>
      {/* ✅ Navbar at the top */}
      <Navbar />

      {/* ✅ Unified CSS with your project theme */}
      <style>{`
        .auth-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: calc(100vh - 140px); /* leaves space for navbar+footer */
          background: linear-gradient(135deg, #e3f2fd, #ffffff);
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        .auth-card {
          background: #fff;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0px 6px 25px rgba(0,0,0,0.15);
          width: 100%;
          max-width: 400px;
          text-align: center;
        }
        .auth-card h2 {
          margin-bottom: 0.5rem;
          font-size: 1.8rem;
          font-weight: bold;
          color: #1a237e;
        }
        .auth-card p {
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
        }
        .google-btn:hover {
          background: #c1351d;
          transform: translateY(-2px);
          box-shadow: 0px 4px 10px rgba(219, 68, 55, 0.4);
        }
        .already-registered {
          margin-top: 1rem;
          font-size: 0.9rem;
          color: #444;
          text-align: center;
        }
        .already-registered a {
          color: #1976d2;
          text-decoration: none;
          font-weight: 500;
        }
        .already-registered a:hover {
          text-decoration: underline;
        }
      `}</style>

      {/* ✅ Register Form */}
      <div className="auth-container">
        <div className="auth-card">
          <h2>Create Your Account ✨</h2>
          <p>Join DataType and get started today</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="Username">Username</label>
              <input
                type="text"
                id="Username"
                name="Username"
                placeholder="Enter your username"
                value={formData.Username}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="mobile_no">Mobile Number</label>
              <input
                type="text"
                id="mobile_no"
                name="mobile_no"
                placeholder="Enter your mobile number"
                value={formData.mobile_no}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="Work_status">Work Status</label>
              <select
                id="Work_status"
                name="Work_status"
                value={formData.Work_status}
                onChange={handleChange}
                required
                className="form-input"
              >
                <option value="">Select Work Status</option>
                <option value="fresher">Fresher</option>
                <option value="experienced">Experienced</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="resume">Resume</label>
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <button type="submit" className="btn-primary">Register</button>

            <button
              type="button"
              onClick={handleGoogleSignup}
              className="google-btn"
            >
              <i className="fab fa-google" style={{ marginRight: "8px" }}></i>
              Sign up with Google
            </button>

            <p className="already-registered">
              Already registered? <a href="/login">Login</a>
            </p>
          </form>
        </div>
      </div>

      {/* ✅ Footer at the bottom */}
      <Footer />
    </>
  );
}

export default Register;
