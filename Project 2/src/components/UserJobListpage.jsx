import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function UserJobListPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/jobs/")
      .then((res) => setJobs(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const truncateText = (text, length = 100) => {
    if (!text) return "";
    return text.length > length ? text.substring(0, length) + "..." : text;
  };

  return (
    <>
    <Navbar/>
    <div className="container py-5">
      <h2 className="fw-bold text-center mb-5">🚀 Explore Latest Job Openings</h2>

      {loading ? (
        <p className="text-center">Loading jobs...</p>
      ) : jobs.length === 0 ? (
        <p className="text-center">No jobs available right now.</p>
      ) : (
        <div className="row g-4">
          {jobs.map((job) => (
            <div key={job.id} className="col-md-4">
              <div className="card shadow-sm h-100 border-0">
                {job.image && (
                  <img
  src={
    job.image.startsWith("http")
      ? job.image
      : `http://127.0.0.1:8000${job.image}`
  }
  alt={job.job_title}
  className="card-img-top"
  style={{ height: "180px", objectFit: "cover" }}
/>

                )}
                <div className="card-body">
                  <h5 className="fw-bold text-primary">{job.company}</h5>
                  <p className="text-muted mb-1">
                    📍 {job.location} • {job.job_type}
                  </p>
                  <p className="small text-secondary">
                    {truncateText(job.job_description, 100)}
                  </p>
                  <button
                    className="btn btn-outline-primary btn-sm mt-2"
                    onClick={() => navigate(`/jobs/${job.id}`, { state: job })}
                  >
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
}
