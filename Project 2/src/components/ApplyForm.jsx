import React, { useState } from "react";
// import "../css/ApplyForm.css"; // Updated CSS


export default function ApplyForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
    experience: "",
    linkedin: "",
    portfolio: "",
    coverLetter: "",
    resume: null,
    agree: false,
  });

  const roles = [
    "Python Developer",
    "Django Developer",
    "Backend Engineer",
    "Full Stack Developer",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Build FormData if you plan to send files with axios
    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => fd.append(k, v));
    // Example:
    // await axios.post("/api/apply", fd, { headers: { "Content-Type": "multipart/form-data" }});
    alert("Application submitted! (wire this to your API)");
  };

  return (
    <section className="applyWrap">
      {/* Left banner */}
      <div className="hireBanner">
        <span className="badgeNowHiring">We’re hiring now</span>
        <h1 className="bannerTitle">Join Us</h1>
        <p className="bannerSubtitle">
          Build real products with Python, Django, and modern stacks.
          Grow fast with a team that cares about clean code and impact.
        </p>
        <ul className="perksList">
          <li>Flexible & collaborative culture</li>
          <li>Challenging backend projects</li>
          <li>Mentorship & growth</li>
        </ul>
      </div>

      {/* Right form */}
      <div className="formCard">
        <h2 className="formTitle">Apply for a role</h2>
        <p className="formHint">Fields marked * are required.</p>

        <form onSubmit={handleSubmit} className="gridForm">
          <div className="field">
            <label htmlFor="fullName">Full Name *</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="Enter your full name.."
              value={form.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="phone">Phone *</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="+91-XXXXXXXXXX"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="role">Role *</label>
            <select
              id="role"
              name="role"
              required
              value={form.role}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select a role
              </option>
              {roles.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="experience">Experience (years) *</label>
            <input
              id="experience"
              name="experience"
              type="number"
              min="0"
              step="0.5"
              required
              placeholder=""
              value={form.experience}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="linkedin">LinkedIn</label>
            <input
              id="linkedin"
              name="linkedin"
              type="url"
              placeholder="https://www.linkedin.com/in/username"
              value={form.linkedin}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="portfolio">Portfolio/GitHub</label>
            <input
              id="portfolio"
              name="portfolio"
              type="url"
              placeholder="https://github.com/username"
              value={form.portfolio}
              onChange={handleChange}
            />
          </div>

          <div className="field full">
            <label htmlFor="coverLetter">Cover Letter</label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              rows="5"
              placeholder="Tell us why you’re a great fit..."
              value={form.coverLetter}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="resume">Resume (PDF)</label>
            <input
              id="resume"
              name="resume"
              type="file"
              accept=".pdf"
              onChange={handleChange}
            />
          </div>

          <div className="checkboxRow">
            <input
              id="agree"
              name="agree"
              type="checkbox"
              checked={form.agree}
              onChange={handleChange}
              required
            />
            <label htmlFor="agree">
              I agree to the processing of my data for recruitment.*
            </label>
          </div>

          <button className="submitBtn" type="submit">Submit Application</button>
        </form>
      </div>
    </section>
  );
}
