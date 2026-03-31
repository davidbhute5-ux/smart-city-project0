import React from "react";

function Footer() {
  const styles = {
    footerContainer: {
      backgroundColor: "#002f6c",
      color: "white",
      padding: "1rem 2rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "wrap",
      fontSize: "0.85rem", // smaller font
    },
    logoSection: {
      maxWidth: "250px",
    },
    logo: {
      display: "flex",
      alignItems: "center",
      marginBottom: "0.5rem",
    },
    logoCircle: {
      width: "35px",
      height: "35px",
      borderRadius: "50%",
      backgroundColor: "white",
      color: "#002f6c",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
      marginRight: "8px",
    },
    logoText: {
      fontSize: "1rem",
      fontWeight: "bold",
    },
    section: {
      margin: "0.5rem 1rem",
    },
    heading: {
      fontSize: "0.95rem",
      marginBottom: "0.4rem",
      fontWeight: "600",
    },
    links: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    linkItem: {
      marginBottom: "0.3rem",
    },
    link: {
      color: "white",
      textDecoration: "none",
      fontSize: "0.8rem",
    },
    footerBottom: {
      textAlign: "center",
      marginTop: "0.8rem",
      paddingTop: "0.5rem",
      borderTop: "1px solid rgba(255,255,255,0.2)",
      fontSize: "0.75rem",
      width: "100%",
    },
  };

  return (
    <div style={styles.footerContainer}>
      {/* Logo + description */}
      <div style={styles.logoSection}>
        <div style={styles.logo}>
          <div style={styles.logoCircle}>DT</div>
          <span style={styles.logoText}>Datatype</span>
        </div>
        <p>Connecting talent with opportunity since 2023.</p>
      </div>

      {/* For Job Seekers */}
      <div style={styles.section}>
        <h3 style={styles.heading}>For Job Seekers</h3>
        <ul style={styles.links}>
          <li style={styles.linkItem}>
            <a href="#" style={styles.link}>Browse Jobs</a>
          </li>
          <li style={styles.linkItem}>
            <a href="#" style={styles.link}>Create Profile</a>
          </li>
          <li style={styles.linkItem}>
            <a href="#" style={styles.link}>Job Alerts</a>
          </li>
        </ul>
      </div>

      {/* For Employers */}
      <div style={styles.section}>
        <h3 style={styles.heading}>For Employers</h3>
        <ul style={styles.links}>
          <li style={styles.linkItem}>
            <a href="#" style={styles.link}>Post a Job</a>
          </li>
          <li style={styles.linkItem}>
            <a href="#" style={styles.link}>Browse Candidates</a>
          </li>
        </ul>
      </div>

      {/* Bottom */}
      <div style={styles.footerBottom}>
        <p>© 2025 Datatype-IT. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
