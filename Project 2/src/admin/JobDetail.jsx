import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { FaBell } from "react-icons/fa";

// Layout without sidebar
function JobLayout({ children }) {
  return (
    <div className="app-layout">
      {/* Top Navbar */}
      <nav className="navbar bg-primary text-white p-3 d-flex justify-content-between">
        <h1 className="fw-bold">JobPortal</h1>
        <div className="navbar-right d-flex align-items-center gap-3">
          <FaBell size={20} />
          <img
            src="/admin-avatar.png"
            alt="Admin"
            className="admin-avatar rounded-circle border border-light"
            style={{ width: "35px", height: "35px" }}
          />
        </div>
      </nav>

      {/* Main Content Full Width */}
      <main className="p-4" style={{ minHeight: "100vh", background: "#f9f9f9" }}>
        {children}
      </main>
    </div>
  );
}

// Job List Page
export function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/jobs/")
      .then((res) => setJobs(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <JobLayout>
      <h2 className="dashboard-heading mb-4">Job List</h2>
      <ul className="list-group shadow-sm">
        {jobs.map((job) => (
          <li key={job.id} className="list-group-item d-flex justify-content-between align-items-center">
            <Link to={`/admin/jobs/${job.id}`} className="text-decoration-none fw-bold text-dark">
              {job.job_title} – {job.company}
            </Link>
            <span className="badge bg-primary">{job.job_type}</span>
          </li>
        ))}
      </ul>
    </JobLayout>
  );
}

// Job Detail Page
export function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/jobs/${id}/`)
      .then((response) => setJob(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!job) return <JobLayout><p>Loading...</p></JobLayout>;

  return (
    <JobLayout>
      <h2 className="dashboard-heading mb-4">Job Details</h2>
      <div className="card shadow-sm p-4 border-0 rounded-3 bg-white">
        {job.image && (
          <img
            src={`http://localhost:8000${job.image}`}
            alt={job.job_title}
            className="job-image mb-3"
            style={{
              maxWidth: "100%",
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
        )}

        <h3 className="fw-bold mb-3">{job.job_title} at {job.company}</h3>

        <p><strong>Position:</strong> {job.position}</p>
        <p><strong>Type:</strong> {job.job_type}</p>
        <p><strong>Location:</strong> {job.location}</p>
        <p><strong>Qualification:</strong> {job.qualification}</p>
        <p><strong>Skills:</strong> {job.skills}</p>
        <p><strong>Responsibilities:</strong> {job.responsibilities}</p>
        <p><strong>Experience:</strong> {job.experience}</p>
        <p><strong>Description:</strong> {job.job_description}</p>
        <p><strong>Posted on:</strong> {new Date(job.created_at).toLocaleDateString()}</p>
        <p><strong>Last updated:</strong> {new Date(job.updated_at).toLocaleDateString()}</p>
      </div>
    </JobLayout>
  );
}

export default JobDetail;
