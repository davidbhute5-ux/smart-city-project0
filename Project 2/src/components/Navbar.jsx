import React from "react";

function Navbar() {
  const styles = {
    navbar: {
      backgroundColor: "#004aad", // Bold blue
      padding: "1rem 2rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "white",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    },
    logo: {
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    navLinks: {
      listStyle: "none",
      display: "flex",
      gap: "1.5rem",
      margin: 0,
    },
    link: {
      textDecoration: "none",
      color: "white",
      fontWeight: 500,
      transition: "color 0.3s ease",
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>Datatype IT</div>
      <ul style={styles.navLinks}>
        <li><a href="/" style={styles.link}>Home</a></li>
        <li><a href="/jobs" style={styles.link}>Jobs</a></li>
        <li><a href="/about" style={styles.link}>About</a></li>
        <li><a href="/contact" style={styles.link}>Contact</a></li>
        <li><a href="/roles" style={styles.link}>login</a></li>

      </ul>
    </nav>
  );
}

export default Navbar;
