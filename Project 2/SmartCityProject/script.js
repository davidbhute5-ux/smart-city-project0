/* =========================
   📡 REAL-TIME IOT DATA
========================= */
setInterval(() => {

    let traffic = Math.floor(Math.random() * 100);
    let water = Math.floor(Math.random() * 500);
    let power = Math.floor(Math.random() * 1000);
    let waste = Math.floor(Math.random() * 50);

    // Update Dashboard
    if (document.getElementById("traffic")) {
        document.getElementById("traffic").innerHTML = "🚗 Traffic: " + traffic;
        document.getElementById("water").innerHTML = "💧 Water: " + water + " L";
        document.getElementById("power").innerHTML = "⚡ Power: " + power + " kW";
        document.getElementById("waste").innerHTML = "🗑 Waste: " + waste + " kg";
    }

}, 2000);


/* =========================
   🧠 AI PREDICTION SYSTEM
========================= */
setInterval(() => {

    const messages = [
        "🚨 High Traffic Detected",
        "✅ Power Usage Normal",
        "⚠️ Water Shortage Alert",
        "🗑 Waste Collection Required"
    ];

    let randomMsg = messages[Math.floor(Math.random() * messages.length)];

    if (document.getElementById("prediction")) {
        document.getElementById("prediction").innerHTML = randomMsg;
    }

}, 3000);


/* =========================
   👥 FEEDBACK SYSTEM
========================= */
function submitFeedback() {
    let text = document.getElementById("feedbackText").value.trim();

    if (text === "") {
        alert("⚠️ Please enter feedback");
        return;
    }

    // Show feedback on screen
    document.getElementById("output").innerHTML =
        "✅ Thank you! Your feedback:<br><b>" + text + "</b>";

    // Save to browser (for demo purpose)
    localStorage.setItem("lastFeedback", text);

    // Clear input box
    document.getElementById("feedbackText").value = "";

    console.log("User Feedback:", text);
}


/* =========================
   💾 LOAD SAVED FEEDBACK
========================= */
window.onload = function () {
    let saved = localStorage.getItem("lastFeedback");

    if (saved && document.getElementById("output")) {
        document.getElementById("output").innerHTML =
            "📝 Last Feedback:<br><b>" + saved + "</b>";
    }
};