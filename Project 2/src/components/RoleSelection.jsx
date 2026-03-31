import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function RoleSelection() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navbar */}
     <Navbar/>

      {/* Main Content */}
      <div className="role-container">
        <h1 className="role-heading">Welcome to DataType IT Consulting</h1>
        <p className="role-subheading">
          Please choose your role to continue to the Job Portal
        </p>

        <div className="role-card-container">
          {/* User Section */}
          <div
            className="role-card card-hover"
            onClick={() => navigate("/login")}
          >
            <h2 className="role-card-title">I am a Job Seeker</h2>
            <p className="role-card-text">
              Explore opportunities, apply for jobs, and build your career.
            </p>
            <button className="role-btn btn-hover">Login as User</button>
          </div>

          {/* Admin Section */}
          <div
            className="role-card card-hover"
            onClick={() => navigate("/adminlogin")}
          >
            <h2 className="role-card-title">I am an Admin</h2>
            <p className="role-card-text">
              Manage job postings, review applications, and track hiring.
            </p>
            <button className="role-btn btn-hover">Login as Admin</button>
          </div>
        </div>
       
      </div>
<Footer/>
      {/* CSS */}
      <style>
        {`
          /* Navbar */
          .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 50px;
            background-color: #0d47a1;
            color: white;
          }
          .logo {
            font-size: 1.5rem;
            font-weight: bold;
            letter-spacing: 1px;
          }
          .nav-links {
            list-style: none;
            display: flex;
            gap: 25px;
          }
          .nav-links li {
            cursor: pointer;
            transition: color 0.3s;
          }
          .nav-links li:hover {
            color: #ffca28;
          }

          /* Role Section */
          .role-container {
            text-align: center;
            padding: 50px;
            background: linear-gradient(135deg, #e3f2fd, #ffffff);
            min-height: calc(100vh - 70px);
          }
          .role-heading {
            font-size: 2.8rem;
            font-weight: bold;
            color: #1a237e;
            margin-bottom: 10px;
          }
          .role-subheading {
            font-size: 1.2rem;
            color: #555;
            margin-bottom: 40px;
          }
          .role-card-container {
            display: flex;
            justify-content: center;
            gap: 40px;
            flex-wrap: wrap;
          }
          .role-card {
            width: 300px;
            background: #fff;
            border-radius: 12px;
            padding: 30px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            transition: 0.3s;
          }
          .role-card-title {
            font-size: 1.6rem;
            color: #0d47a1;
            margin-bottom: 10px;
          }
          .role-card-text {
            font-size: 1rem;
            color: #444;
            margin-bottom: 20px;
          }
          .role-btn {
            padding: 10px 20px;
            border: none;
            border-radius: 8px;
            background: #1976d2;
            color: #fff;
            font-size: 1rem;
            cursor: pointer;
          }
          .card-hover {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            cursor: pointer;
          }
          .card-hover:hover {
            transform: translateY(-10px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.2);
          }
          .btn-hover {
            transition: all 0.3s ease;
          }
          .btn-hover:hover {
            background: #0056b3;
            color: #fff;
            transform: scale(1.05);
          }
          @media (max-width: 768px) {
            .role-card-container {
              flex-direction: column;
              align-items: center;
            }
          }
        `}
      </style>
      
    </div>
  );
}

export default RoleSelection;
