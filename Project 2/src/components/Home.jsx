import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function HomePage() {
   const navigate = useNavigate();

  return (
    <div className="homepage">
      {/* Navbar */}
     <Navbar/>

      {/* Hero Section */}
      <section className="hero" id="home">
        <h1>Welcome to Datatype IT</h1>
        <p>Your trusted partner for career opportunities and talent discovery.</p>
        <button 
        className="explore-btn" 
        onClick={() => navigate("/jobs")}
      >
        Explore Jobs
      </button>
      </section>

      {/* Features Section */}
      <section className="features" id="jobs">
        <h2>Why Choose Datatype IT?</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>Verified Jobs</h3>
            <p>All job listings are verified for authenticity and relevance.</p>
          </div>
          <div className="card">
            <h3>For Employers</h3>
            <p>Hire skilled professionals with ease using our platform.</p>
          </div>
          <div className="card">
            <h3>Career Growth</h3>
            <p>Access resources to upskill and boost your career journey.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <h2>Our Impact</h2>
        <div className="stats-grid">
          <div>
            <h3>10,000+</h3>
            <p>Jobs Listed</p>
          </div>
          <div>
            <h3>5,000+</h3>
            <p>Companies</p>
          </div>
          <div>
            <h3>50,000+</h3>
            <p>Users Registered</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" id="about">
        <h2>What Our Users Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial">
            <p>"Datatype IT helped me land my dream job within weeks!"</p>
            <h4>- Priya K, Software Engineer</h4>
          </div>
          <div className="testimonial">
            <p>"As an employer, I found excellent candidates through this portal."</p>
            <h4>- Rajesh M, HR Manager</h4>
          </div>
        </div>
      </section>

      {/* Footer */}
    <Footer/>

      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f4f8fc;
        }

        /* Navbar */
        .navbar {
          background-color: #004aad; /* Bold blue */
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: white;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 1.5rem;
          margin: 0;
        }

        .nav-links li a {
          text-decoration: none;
          color: white;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-links li a:hover {
          color: #ffd700;
        }

        /* Hero Section */
        .hero {
          background: linear-gradient(to right, #0066ff, #33ccff);
          color: white;
          text-align: center;
          padding: 5rem 2rem;
        }

        .hero h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .hero p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
        }

        .explore-btn {
          padding: 0.8rem 2rem;
          font-size: 1rem;
          font-weight: bold;
          color: #004aad;
          background-color: white;
          border: none;
          border-radius: 25px;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .explore-btn:hover {
          background-color: #ffd700;
          color: #004aad;
        }

        /* Features */
        .features {
          padding: 3rem 2rem;
          text-align: center;
        }

        .features h2 {
          margin-bottom: 2rem;
        }

        .feature-cards {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .card {
          background: white;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
          max-width: 300px;
          transition: transform 0.3s ease;
        }

        .card:hover {
          transform: translateY(-5px);
        }

        /* Stats */
        .stats {
          background: linear-gradient(to right, #0066ff, #33ccff);
          color: white;
          text-align: center;
          padding: 3rem 2rem;
        }

        .stats-grid {
          display: flex;
          justify-content: center;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .stats-grid div {
          font-size: 1.2rem;
        }

        .stats-grid h3 {
          font-size: 2rem;
          margin: 0;
        }

        /* Testimonials */
        .testimonials {
          padding: 3rem 2rem;
          text-align: center;
        }

        .testimonial-cards {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .testimonial {
          background: #e6f0ff;
          padding: 1.5rem;
          border-radius: 10px;
          max-width: 300px;
          box-shadow: 0px 4px 8px rgba(0,0,0,0.1);
        }

        /* Footer */
        footer {
          background-color: #002f6c;
          color: white;
          text-align: center;
          padding: 1rem;
        }
      `}</style>
    </div>
  );
}

export default HomePage;
