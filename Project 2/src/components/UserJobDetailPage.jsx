import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function UserJobDetailPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return <p className="text-center mt-5">❌ Job details not found</p>;
  }

  const {
    job_title,
    company,
    position,
    job_type,
    location,
    qualification,
    skills,
    responsibilities,
    experience,
    salary,
    job_description,
    image,
    created_at,
  } = state;

  return (
    <>
    <Navbar/>
    <div className="container py-5">
      <div className="card shadow-lg border-0 p-4">
{image && (
  <div className="d-flex justify-content-center mb-4">
    <img
      src={image?.startsWith("http") ? image : `http://127.0.0.1:8000${image}`}
      alt={job_title}
      className="rounded shadow-sm"
      style={{
        maxHeight: "200px",   // reduced height
        maxWidth: "300px",    // reduced width
        objectFit: "cover",
      }}
    />
  </div>
)}


        <h2 className="fw-bold mb-3">{job_title}</h2>
        <h5 className="text-primary mb-3">{company}</h5>
        <p className="text-muted">
          📍 {location} | 🧭 {job_type} | 🗓️{" "}
          {new Date(created_at).toLocaleDateString()}
        </p>

        <hr />

        <p>
          <strong>Position:</strong> {position}
        </p>
        <p>
          <strong>Qualification:</strong> {qualification}
        </p>
        <p>
          <strong>Skills:</strong> {skills}
        </p>
        <p>
          <strong>Responsibilities:</strong> {responsibilities}
        </p>
        <p>
          <strong>Experience:</strong> {experience}
        </p>
        <p>
          <strong>Salary:</strong> {salary || "Not Disclosed"}
        </p>
        <p>
          <strong>Description:</strong> {job_description}
        </p>

        <div className="d-flex gap-3 mt-4">
  <button
    className="btn btn-success"
    onClick={() => navigate("/plans")}
  >
    Apply Now 🚀
  </button>
  <button
    className="btn btn-outline-secondary"
    onClick={() => navigate(-1)}
  >
    ← Back
  </button>
</div>

      </div>
    </div>
     <Footer/>
    </>
  );
}
