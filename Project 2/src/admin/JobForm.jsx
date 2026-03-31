import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

// 🔹 Clean Layout Component (no navbar)
function JobLayout({ children }) {
  return (
    <div className="app-layout">
      {/* Main Content - Full Width */}
      <main
        className="p-4 d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh", background: "#f9f9f9" }}
      >
        {children}
      </main>
    </div>
  );
}

// 🔹 Job Form Component
function JobForm() {
  const [formData, setFormData] = useState({
    job_title: "",
    company: "",
    position: "",
    job_type: "",
    location: "",
    qualification: "",
    skills: "",
    responsibilities: "",
    experience: "",
    salary: "",
    job_description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
   Object.keys(formData).forEach((key) => {
  if (key === "image" && !formData[key]) {
    // skip appending empty/null image
  } else {
    formDataToSend.append(key, formData[key]);
  }
});


    try {
      await axios.post("http://127.0.0.1:8000/api/jobs/", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Job post created successfully!");
      setFormData({
        job_title: "",
        company: "",
        position: "",
        job_type: "",
        location: "",
        qualification: "",
        skills: "",
        responsibilities: "",
        experience: "",
        salary: "",
        job_description: "",
        image: null,
      });
    } catch (error) {
      console.error(error);
      alert(
        "Error creating job post: " +
          (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <JobLayout>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 shadow-sm rounded"
        style={{ width: "500px" }}
      >
        <h3 className="fw-bold text-center mb-4">Find Your Next Great Hire</h3>

        {/* Job Title */}
        <div className="mb-3">
          <label className="form-label fw-bold">Job Title:</label>
          <input
            type="text"
            className="form-control"
            name="job_title"
            value={formData.job_title}
            onChange={handleChange}
            required
          />
        </div>

        {/* Company */}
        <div className="mb-3">
          <label className="form-label fw-bold">Company:</label>
          <input
            type="text"
            className="form-control"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>

        {/* Position */}
        <div className="mb-3">
          <label className="form-label fw-bold">Position:</label>
          <input
            type="text"
            className="form-control"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
          />
        </div>

        {/* Job Type */}
        <div className="mb-3">
          <label className="form-label fw-bold">Job Type:</label>
          <input
            type="text"
            className="form-control"
            name="job_type"
            value={formData.job_type}
            onChange={handleChange}
            required
          />
        </div>

        {/* Location */}
        <div className="mb-3">
          <label className="form-label fw-bold">Location:</label>
          <input
            type="text"
            className="form-control"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        {/* Qualification */}
        <div className="mb-3">
          <label className="form-label fw-bold">Qualification:</label>
          <input
            type="text"
            className="form-control"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            required
          />
        </div>

        {/* Skills */}
        <div className="mb-3">
          <label className="form-label fw-bold">Skills:</label>
          <input
            type="text"
            className="form-control"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            required
          />
        </div>

        {/* Responsibilities */}
        <div className="mb-3">
          <label className="form-label fw-bold">Responsibilities:</label>
          <input
            type="text"
            className="form-control"
            name="responsibilities"
            value={formData.responsibilities}
            onChange={handleChange}
            required
          />
        </div>

        {/* Experience */}
        <div className="mb-3">
          <label className="form-label fw-bold">Experience:</label>
          <input
            type="text"
            className="form-control"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          />
        </div>

        {/* Salary */}
        <div className="mb-3">
          <label className="form-label fw-bold">Salary:</label>
          <input
            type="text"
            className="form-control"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            required
          />
        </div>

        {/* Job Description */}
        <div className="mb-3">
          <label className="form-label fw-bold">Job Description:</label>
          <textarea
            className="form-control"
            name="job_description"
            rows="3"
            value={formData.job_description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Image */}
        <div className="mb-3">
          <label className="form-label fw-bold">Image:</label>
          <input
            type="file"
            className="form-control"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-lg w-100">
          Post Job
        </button>
      </form>
    </JobLayout>
  );
}

export default JobForm;
