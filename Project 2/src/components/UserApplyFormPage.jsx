import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function UserApplyFormPage() {
  const { state } = useLocation(); // job info passed from detail page
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
    coverLetter: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sendData = new FormData();
    Object.keys(formData).forEach((key) => sendData.append(key, formData[key]));
    sendData.append("job", state.id);

    try {
      await axios.post("http://127.0.0.1:8000/api/applications/", sendData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("✅ Application submitted successfully!");
      setFormData({ name: "", email: "", resume: null, coverLetter: "" });
    } catch (err) {
      console.error(err);
      alert("❌ Failed to apply. Please try again.");
    }
  };

  return (
    <>
  <Navbar/>
    <div className="container py-5 d-flex justify-content-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg p-4 rounded"
        style={{ width: "500px" }}
      >
        <h3 className="fw-bold text-center mb-4">
          Apply for {state?.job_title}
        </h3>

        <div className="mb-3">
          <label className="form-label fw-bold">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Resume (PDF/DOC)</label>
          <input
            type="file"
            className="form-control"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Cover Letter</label>
          <textarea
            className="form-control"
            name="coverLetter"
            rows="3"
            value={formData.coverLetter}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit Application 🚀
        </button>
      </form>
    </div>
    <Footer/>
      </>
  );

}
