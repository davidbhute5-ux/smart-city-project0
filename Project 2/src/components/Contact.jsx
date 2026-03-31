import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We’ll get back to you soon.");
  };

  const styles = {
    container: {
      padding: "4rem 2rem",
      backgroundColor: "#ffffff",
      minHeight: "80vh",
      textAlign: "center",
    },
    heading: {
      fontSize: "2.5rem",
      color: "#002f6c",
      marginBottom: "1rem",
    },
    subheading: {
      fontSize: "1.1rem",
      color: "#555",
      marginBottom: "2rem",
    },
    form: {
      maxWidth: "600px",
      margin: "0 auto",
      textAlign: "left",
    },
    label: {
      display: "block",
      marginBottom: "0.5rem",
      fontWeight: "bold",
      color: "#002f6c",
    },
    input: {
      width: "100%",
      padding: "0.8rem",
      marginBottom: "1rem",
      borderRadius: "6px",
      border: "1px solid #ccc",
      fontSize: "1rem",
    },
    textarea: {
      width: "100%",
      padding: "0.8rem",
      marginBottom: "1rem",
      borderRadius: "6px",
      border: "1px solid #ccc",
      fontSize: "1rem",
      minHeight: "120px",
    },
    button: {
      backgroundColor: "#002f6c",
      color: "white",
      border: "none",
      padding: "0.8rem 1.5rem",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "1rem",
      transition: "0.3s ease",
    },
  };

  return (
<>
<Navbar/>
    <div style={styles.container}>
        
      <h1 style={styles.heading}>Contact Us</h1>
      <p style={styles.subheading}>
        Have questions or need help? Fill out the form below and our team will get back
        to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Name</label>
        <input
          type="text"
          name="name"
          style={styles.input}
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label style={styles.label}>Email</label>
        <input
          type="email"
          name="email"
          style={styles.input}
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label style={styles.label}>Message</label>
        <textarea
          name="message"
          style={styles.textarea}
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" style={styles.button}>
          Send Message
        </button>
      </form>
   
    </div>
       <Footer/>
       </>
  );
}

export default ContactPage;
