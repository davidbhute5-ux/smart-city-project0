import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PlanSelectionPage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const plans = [
    {
      id: 1,
      name: "30 Days Plan",
      originalPrice: 299,
      gst: 18,
      finalPrice: 199,
      validity: "30 days"
    },
    {
      id: 2,
      name: "6 Months Plan",
      originalPrice: 1499,
      gst: 270,
      finalPrice: 999,
      validity: "6 months"
    },
    {
      id: 3,
      name: "1 Year Plan",
      originalPrice: 2499,
      gst: 450,
      finalPrice: 1799,
      validity: "1 year"
    }
  ];

  const handleProceed = () => {
    if (!selected) {
      alert("Please select a plan");
      return;
    }
    navigate("/payment", { state: selected });
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Choose Your Subscription Plan</h2>

        {/* Plan Cards */}
        <div style={styles.grid}>
          {plans.map((plan) => (
            <div
              key={plan.id}
              style={{
                ...styles.card,
                border:
                  selected?.id === plan.id
                    ? "2px solid #4F46E5"
                    : "1px solid #e5e7eb",
                boxShadow:
                  selected?.id === plan.id
                    ? "0 4px 15px rgba(79,70,229,0.3)"
                    : "0 2px 8px rgba(0,0,0,0.05)",
              }}
              onClick={() => setSelected(plan)}
            >
              <h3 style={styles.planName}>{plan.name}</h3>
              <p style={styles.originalPrice}>₹{plan.originalPrice}</p>
              <p style={styles.gstText}>+ GST included</p>
              <p style={styles.finalPrice}>₹{plan.finalPrice}</p>
              <p style={styles.validity}>Valid for {plan.validity}</p>
            </div>
          ))}
        </div>

        {/* Proceed Button */}
        <button style={styles.proceedBtn} onClick={handleProceed}>
          Proceed to Payment
        </button>

        {/* Info Section */}
        <div style={styles.infoSection}>
          <div style={styles.infoGrid}>
            <div style={styles.infoCard}>
              <h3 style={styles.infoTitle}>Boost Your Hiring</h3>
              <p style={styles.infoText}>
                Access thousands of active job seekers instantly.
              </p>
            </div>
            <div style={styles.infoCard}>
              <h3 style={styles.infoTitle}>Flexible Plans</h3>
              <p style={styles.infoText}>
                Choose a subscription that fits your hiring cycle.
              </p>
            </div>
            <div style={styles.infoCard}>
              <h3 style={styles.infoTitle}>Secure Transactions</h3>
              <p style={styles.infoText}>
                Your payments are safe with encrypted processing.
              </p>
            </div>
          </div>
          <div style={styles.noteBox}>
            You can upgrade your plan anytime. No hidden charges.
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: "#f9fafb",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "sans-serif",
    padding: "2rem",
  },
  container: {
    maxWidth: "900px",
    width: "100%",
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "1.5rem",
    color: "#111827",
    fontSize: "1.8rem",
    fontWeight: "600",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1rem",
  },
  card: {
    padding: "1.2rem",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
    textAlign: "center",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  planName: {
    fontSize: "1.1rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
    color: "#111827",
  },
  originalPrice: {
    textDecoration: "line-through",
    color: "#9ca3af",
    fontSize: "0.9rem",
  },
  gstText: {
    fontSize: "0.85rem",
    color: "#6b7280",
  },
  finalPrice: {
    fontSize: "1.4rem",
    fontWeight: "bold",
    color: "#4F46E5",
    marginTop: "0.3rem",
  },
  validity: {
    color: "#6b7280",
    fontSize: "0.85rem",
    marginTop: "0.3rem",
  },
  proceedBtn: {
    marginTop: "1.5rem",
    width: "100%",
    padding: "0.9rem",
    backgroundColor: "#4F46E5",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: "500",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  },
  infoSection: {
    marginTop: "2rem",
  },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1rem",
    marginBottom: "1rem",
  },
  infoCard: {
    backgroundColor: "#ffffff",
    padding: "1rem",
    borderRadius: "8px",
    textAlign: "center",
    border: "1px solid #e5e7eb",
    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
  },
  infoTitle: {
    fontSize: "1rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
    color: "#111827",
  },
  infoText: {
    fontSize: "0.85rem",
    color: "#6b7280",
  },
  noteBox: {
    backgroundColor: "#e0e7ff",
    padding: "0.8rem",
    borderRadius: "6px",
    fontSize: "0.9rem",
    color: "#1e3a8a",
    textAlign: "center",
    fontWeight: "500",
  },
};
