import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaMoneyBillWave,
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = () => {
    axios.get("http://127.0.0.1:8000/api/jobs/")
      .then((res) => {
        console.log("API response:", res.data);
        setJobs(res.data);
      })

      .catch((err) => {
        console.error("API Error:", err);
      });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      axios
        .delete(`http://127.0.0.1:8000/api/jobs/${id}/`)
        .then(() => {
          setJobs(jobs.filter((job) => job.id !== id));
        })
        .catch((err) => {
          console.error("Delete Error:", err);
        });
    }
  };
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/admin/edit/${id}`);
  };

  const handleView = (id) => {
    navigate(`/admin/jobs/${id}`); // Or any route you use for job details
  };



  return (
    <div className="joblist-container">
      <h2 className="jobpost-heading">Job Posts</h2>
      {jobs.length > 0 ? (
        <div className="job-card-grid">
          {jobs.map((job) => (
            <div key={job.id} className="job-card">

              {/* Job Image */}
              <img
                src={`http://127.0.0.1:8000/media/${job.image}`}
                onError={(e) => { e.target.src = "/default-job.jpg"; }}
                alt={job.job_title}
                className="job-image"
              />

              {/* Job Content */}
              <div className="job-content">
                <h5 className="job-title">{job.job_title}</h5>
                <p className="job-company">{job.company}</p>
                {job.salary && (
                  <p className="job-salary">
                    <FaMoneyBillWave /> {job.salary}
                  </p>
                )}
                <p className="job-detail">
                  <FaBriefcase /> {job.job_type}
                </p>
                <p className="job-detail">
                  <FaMapMarkerAlt /> {job.location}
                </p>
                <p className="job-detail">Experience: {job.experience}</p>
                <p className="job-detail">Skills: {job.skills}</p>
                <p className="job-desc">
                  {job.job_description.length > 80
                    ? job.job_description.slice(0, 80) + "..."
                    : job.job_description}
                </p>
              </div>

              {/* Action Buttons at the Top */}
              <div className="job-actions">
                <button
                  className="btn-edit"
                  onClick={() => handleEdit(job.id)}
                >
                  Edit
                </button>

                <button
                  className="btn-view"
                  onClick={() => handleView(job.id)}
                >
                  View
                </button>

                <button
                  className="btn-delete"
                  onClick={() => handleDelete(job.id)}
                >
                  Delete
                </button>
              </div>



              {/* Job Footer */}
              <div className="job-footer">
                <small>
                  <FaCalendarAlt />{" "}
                  {job.created_at
                    ? new Date(job.created_at).toLocaleDateString()
                    : "N/A"}
                </small>
                <small>
                  Updated:{" "}
                  {job.updated_at
                    ? new Date(job.updated_at).toLocaleDateString()
                    : "N/A"}
                </small>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No job posts found.</p>
      )}
    </div>
  );
}

export default JobList;



/* ---------------- CSS ---------------- */
const css = `
.joblist-container {
  padding: 30px;
  background-color: #f9f9f9;
  min-height: 100vh;
}

.jobpost-heading {
  font-size: 2rem;
  font-weight: 700;
  color: #0d6efd;
  margin-bottom: 25px;
  text-align: center;
}

.job-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 25px;
}

.job-card {
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.job-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

.job-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.job-content {
  padding: 15px;
  flex-grow: 1;
}

.job-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
}

.job-company {
  color: #6c757d;
  margin-bottom: 10px;
}

.job-salary {
  color: #28a745;
  font-weight: bold;
  margin-bottom: 8px;
}

.job-detail {
  font-size: 0.9rem;
  color: #555;
  margin: 2px 0;
}

.job-desc {
  font-size: 0.9rem;
  color: #666;
  margin-top: 8px;
}

.job-footer {
  background: #f8f9fa;
  padding: 10px 15px;
  font-size: 0.8rem;
  color: #777;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #eee;
}

/* Buttons container */
.job-actions {
  display: flex;
  justify-content: flex-start; /* Start of card */
  gap: 8px;
  padding: 8px;
  background: #f1f1f1;
  border-bottom: 1px solid #ddd;
}

/* Edit Button - Green */
.btn-edit {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
}

.btn-edit:hover {
  background-color: #218838;
}

/* Delete Button - Red */
.btn-delete {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
}

.btn-delete:hover {
  background-color: #bb2d3b;
}

.btn-view {
  background-color: #17a2b8;
  color: #fff;
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  margin: 0 5px;
  display: inline-block;
  cursor: pointer;
}
.btn-view:hover {
  background-color: #138496;
}



`;

// Dynamically inject CSS into the document
const style = document.createElement("style");
style.textContent = css;
document.head.appendChild(style);
