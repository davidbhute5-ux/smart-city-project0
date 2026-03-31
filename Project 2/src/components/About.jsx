import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function AboutPage() {
  const styles = {
    container: {
      padding: "4rem 2rem",
      backgroundColor: "#f9f9f9",
      minHeight: "80vh",
      textAlign: "center",
    },
    heading: {
      fontSize: "2.5rem",
      color: "#002f6c",
      marginBottom: "1rem",
    },
    subheading: {
      fontSize: "1.2rem",
      color: "#333",
      maxWidth: "800px",
      margin: "0 auto 2rem",
      lineHeight: "1.6",
    },
    section: {
      marginTop: "2rem",
      textAlign: "left",
      maxWidth: "900px",
      marginInline: "auto",
    },
    sectionHeading: {
      fontSize: "1.5rem",
      color: "#002f6c",
      marginBottom: "0.5rem",
    },
    paragraph: {
      fontSize: "1rem",
      lineHeight: "1.6",
      color: "#444",
      marginBottom: "1rem",
    },
  };

  return (
    <>
    <Navbar/>
    <div style={styles.container}>
        
      <h1 style={styles.heading}>About Datatype IT Consulting</h1>
      <p style={styles.subheading}>
        At Datatype IT, we connect top talent with the best companies worldwide. Since our
        launch in 2023, we’ve helped thousands of job seekers and employers achieve their
        career and hiring goals.
      </p>

      <div style={styles.section}>
        <h2 style={styles.sectionHeading}>Our Mission</h2>
        <p style={styles.paragraph}>
          To empower professionals by bridging the gap between talent and opportunity,
          providing innovative recruitment solutions, and supporting career growth at every stage.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionHeading}>Why Choose Us?</h2>
        <p style={styles.paragraph}>
          ✅ Easy-to-use job portal with advanced filtering  
          ✅ Verified employers and genuine job postings  
          ✅ Career resources and resume-building assistance  
        </p>
      </div>
      
    </div>
    <Footer/>
    </>
    
  );
}

export default AboutPage;
