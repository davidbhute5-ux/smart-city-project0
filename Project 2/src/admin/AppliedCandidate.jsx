import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUserTie, FaEnvelope, FaBriefcase, FaClock } from "react-icons/fa";

function AppliedCandidate() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/applied-candidates/") // Django API endpoint
      .then((response) => setCandidates(response.data))
      .catch((error) => console.error("Error fetching candidates:", error));
  }, []);

  return (
    <div className="applied-candidates p-4">
      <h2 className="page-title">👥 Applied Candidates</h2>

      <div className="card shadow-sm p-4">
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead>
              <tr className="gradient-header text-white">
                <th><FaUserTie /> Name</th>
                <th><FaEnvelope /> Email</th>
                <th><FaBriefcase /> Applied Job</th>
                <th><FaClock /> Experience</th>
              </tr>
            </thead>
            <tbody>
              {candidates.length > 0 ? (
                candidates.map((candidate) => (
                  <tr key={candidate.id}>
                    <td>{candidate.name}</td>
                    <td>{candidate.email}</td>
                    <td>{candidate.job_title}</td>
                    <td>{candidate.experience}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center text-muted py-4">
                    No candidates have applied yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Styling */}
      <style>{`
        .page-title {
          font-size: 1.8rem;
          font-weight: bold;
          margin-bottom: 25px;
          color: #0d6efd;
        }
        .gradient-header {
          background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
        }
        .table th {
          font-weight: 600;
        }
        .table-hover tbody tr:hover {
          background-color: rgba(13, 110, 253, 0.05);
          transition: background 0.2s ease;
        }
        .card {
          border-radius: 15px;
        }
      `}</style>
    </div>
  );
}

export default AppliedCandidate;
