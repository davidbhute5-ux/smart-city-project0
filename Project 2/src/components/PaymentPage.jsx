import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function PaymentPage() {
  const { state } = useLocation();
  const [method, setMethod] = useState("");
  const [wallet, setWallet] = useState("");
  const [bank, setBank] = useState("");
  const [card, setCard] = useState({ number: "", name: "", expiry: "", cvv: "" });
  const [upiId, setUpiId] = useState("");

  const banks = ["State Bank of India", "HDFC Bank", "ICICI Bank", "Axis Bank", "Punjab National Bank"];
  const wallets = ["Paytm Wallet", "PhonePe Wallet", "Amazon Pay Wallet"];

  const paymentMethods = [
    { id: "credit", name: "Credit Card", icon: "💳" },
    { id: "debit", name: "Debit Card", icon: "🏦" },
    { id: "upi", name: "UPI", icon: "📱" },
    { id: "razorpay", name: "Razorpay", icon: "💠" },
    { id: "netbanking", name: "Net Banking", icon: "🌐" },
    { id: "wallet", name: "Wallet", icon: "👜" },
  ];

  const handlePay = () => {
    if (!method) {
      alert("Please select a payment method");
      
      return;
    }
    alert(`Processing payment via ${method}`);
  };

  // Use values directly from plan (state)
  const originalPrice = state?.originalPrice ?? 0;
  const finalPrice = state?.finalPrice ?? 0;
  const gstAmount = state?.gst ?? 0;
 

  const renderForm = () => {
    switch (method) {
      case "Credit Card":
      case "Debit Card":
        return (
          <div style={styles.form}>
            <input
              type="text"
              placeholder="Card Number"
              value={card.number}
              onChange={(e) => setCard({ ...card, number: e.target.value })}
              style={styles.input}
            />
            <input
              type="text"
              placeholder="Cardholder Name"
              value={card.name}
              onChange={(e) => setCard({ ...card, name: e.target.value })}
              style={styles.input}
            />
            <div style={{ display: "flex", gap: "1rem" }}>
              <input
                type="text"
                placeholder="MM/YY"
                value={card.expiry}
                onChange={(e) => setCard({ ...card, expiry: e.target.value })}
                style={{ ...styles.input, flex: 1 }}
              />
              <input
                type="password"
                placeholder="CVV"
                value={card.cvv}
                onChange={(e) => setCard({ ...card, cvv: e.target.value })}
                style={{ ...styles.input, flex: 1 }}
              />
            </div>
          </div>
        );
      case "UPI":
        return (
          <div style={styles.form}>
            <input
              type="text"
              placeholder="Enter UPI ID"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              style={styles.input}
            />
          </div>
        );
      case "Wallet":
        return (
          <div style={styles.form}>
            <select
              value={wallet}
              onChange={(e) => setWallet(e.target.value)}
              style={styles.input}
            >
              <option value="">Select Wallet</option>
              {wallets.map((w, i) => (
                <option key={i} value={w}>
                  {w}
                </option>
              ))}
            </select>
          </div>
        );
      case "Net Banking":
        return (
          <div style={styles.form}>
            <select
              value={bank}
              onChange={(e) => setBank(e.target.value)}
              style={styles.input}
            >
              <option value="">Select Bank</option>
              {banks.map((b, i) => (
                <option key={i} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.mainContainer}>

        {/* Payment Section */}
        <div style={styles.left}>
          <h2 style={styles.heading}>Select Payment Method</h2>
          <div style={styles.methodsGrid}>
            {paymentMethods.map((m) => (
              <div
                key={m.id}
                style={{
                  ...styles.methodCard,
                  border:
                    method === m.name
                      ? "2px solid #4F46E5"
                      : "1px solid #ddd",
                }}
                onClick={() => setMethod(m.name)}
              >
                <span style={styles.icon}>{m.icon}</span>
                <span style={styles.name}>{m.name}</span>
              </div>
            ))}
          </div>

          {renderForm()}

          <button style={styles.payButton} onClick={handlePay}>
            Pay Now
          </button>
        </div>

        {/* Order Summary */}
        <div style={styles.right}>
          <div style={styles.summaryCard}>
            <h3 style={{ marginBottom: "1rem" }}>Order Summary</h3>
            <div style={styles.productInfo}>
             
              <div>
                <p style={{ fontWeight: "bold" }}>{state?.name}</p>
                <p style={{ fontSize: "0.9rem", color: "#6b7280" }}>
                  Validity: {state?.validity}
                </p>
              </div>
            </div>
            <hr style={{ margin: "1rem 0" }} />

            {/* Price breakdown */}
            <div style={styles.row}>
              <span>Original Price</span>
              <span style={{ textDecoration: "line-through", color: "#9CA3AF" }}>
                ₹{originalPrice.toFixed(2)}
              </span>
            </div>
           <div style={styles.row}>
  <span>Discount</span>
  <span style={{ color: "green" }}>31%</span>
</div>

            <div style={styles.row}>
              <span>GST</span>
              <span>₹{gstAmount.toFixed(2)} </span>
            </div>
            <hr style={{ margin: "1rem 0" }} />
            <div style={{ ...styles.row, fontWeight: "bold", fontSize: "1.2rem" }}>
              <span>Total</span>
              <span>₹{finalPrice.toFixed(2)}</span>
            </div>
            <p style={styles.note}>
              Your purchase includes 24/7 support and free updates for{" "}
              {state?.validity}.
            </p>
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
  mainContainer: {
    display: "flex",
    gap: "2rem",
    maxWidth: "1000px",
    width: "100%",
  },
  left: {
    flex: 2,
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  },
  heading: {
    marginBottom: "1rem",
    color: "#111827",
  },
  methodsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
    marginBottom: "1.5rem",
  },
  methodCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    borderRadius: "8px",
    backgroundColor: "#f3f4f6",
    cursor: "pointer",
    transition: "0.2s ease",
  },
  icon: {
    fontSize: "1.5rem",
    marginBottom: "0.5rem",
  },
  name: {
    fontSize: "0.9rem",
    textAlign: "center",
  },
  form: {
    marginBottom: "1.5rem",
  },
  input: {
    width: "100%",
    padding: "0.6rem",
    marginBottom: "0.8rem",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontSize: "0.9rem",
  },
  payButton: {
    width: "100%",
    padding: "0.8rem",
    backgroundColor: "#4F46E5",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    cursor: "pointer",
  },
  right: {
    flex: 1,
  },
  summaryCard: {
    backgroundColor: "#fff",
    padding: "1.5rem",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  },
  productInfo: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  },
  productImg: {
    width: "50px",
    height: "50px",
    borderRadius: "8px",
    objectFit: "cover",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "0.5rem",
  },
  note: {
    marginTop: "1rem",
    fontSize: "0.85rem",
    color: "#6b7280",
  },
};
