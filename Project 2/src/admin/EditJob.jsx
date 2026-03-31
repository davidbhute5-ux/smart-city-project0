import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function EditJob() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState({
    job_title: "",
    company: "",
    position: "",
    job_type: "",
    location: "",
    qualification: "",
    skills: "",
    experience: "",
    salary: "",
    image: "",
    job_description: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/jobs/${id}/`)
      .then((res) => {
        setJob(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching job:", err);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Saving job:", job);

    // Optional: simple validation
    if (!job.job_title || !job.company) {
      alert("Job Title and Company are required!");
      return;
    }

    axios
      .put(`http://localhost:8000/api/jobs/${id}/`, job)
      .then(() => {
        alert("Job updated successfully!");
        navigate("/formlist"); // Redirect to FormList page
      })
      .catch((err) => {
        console.error("Error updating job:", err);
        alert("Failed to update job. See console for details.");
      });
  };

  if (loading) return <p className="text-center mt-5">Loading job...</p>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Edit Job</h2>
      <div className="row">
        <div className="col-md-8">
          <form onSubmit={handleSave}>
            {[
              { label: "Job Title", name: "job_title" },
              { label: "Company", name: "company" },
              { label: "Position", name: "position" },
              { label: "Job Type", name: "job_type" },
              { label: "Location", name: "location" },
              { label: "Qualification", name: "qualification" },
              { label: "Skills", name: "skills" },
              { label: "Experience", name: "experience" },
              { label: "Salary", name: "salary" },
              { label: "Image URL", name: "image" },
            ].map((field) => (
              <div className="mb-3" key={field.name}>
                <label className="form-label">{field.label}</label>
                <input
                  type="text"
                  className="form-control"
                  name={field.name}
                  value={job[field.name] || ""}
                  onChange={handleChange}
                />
              </div>
            ))}

            <div className="mb-3">
              <label className="form-label">Job Description</label>
              <textarea
                className="form-control"
                name="job_description"
                rows="4"
                value={job.job_description || ""}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditJob;
