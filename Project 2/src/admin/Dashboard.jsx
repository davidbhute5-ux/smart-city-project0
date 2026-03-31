import React, { useEffect, useState } from "react";
import axios from "axios";


function Dashboard() {
  const [stats, setStats] = useState({
    totalJobs: 0,
    applications: 0,
    activeCandidates: 0,
  });
 const [adminName, setAdminName] = useState("Admin");
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const jobsRes = await axios.get("http://localhost:8000/api/jobs/");
        const appsRes = await axios
          .get("http://localhost:8000/api/applications/")
          .catch(() => ({ data: [] }));
        const candidatesRes = await axios
          .get("http://localhost:8000/api/candidates/?status=active")
          .catch(() => ({ data: [] }));

        setStats({
          totalJobs: jobsRes.data.length || 0,
          applications: appsRes.data.length || 0,
          activeCandidates: candidatesRes.data.length || 0,
        });
      } catch (error) {
        console.error("Error fetching stats", error);
      }
    };
 const fetchAdmin = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/admin/profile/", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // JWT token
          },
        });
        setAdminName(res.data.username);
      } catch (error) {
        console.error("Error fetching admin profile", error);
      }
    };

    fetchAdmin();
    fetchStats();
  }, []);

  return (
    <>
    <div className="layout">
      

      {/* Main content */}
      <div className="main-content">
        {/* Navbar */}
        

        {/* Dashboard Content */}
        <div className="dashboard">
          <h2 className="dashboard-title">Welcome Back,{adminName}!</h2>
          <div className="stats-grid">
            <div className="stat-card gradient-card">
              <h5>Total Jobs</h5>
              <h2>{stats.totalJobs}</h2>
            </div>
            <div className="stat-card gradient-card">
              <h5>Applications</h5>
              <h2>{stats.applications}</h2>
            </div>
            <div className="stat-card gradient-card">
              <h5>Active Candidates</h5>
              <h2>{stats.activeCandidates}</h2>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .layout {
          display: flex;
          height: 100vh;
          font-family: 'Segoe UI', sans-serif;
        }

        /* Sidebar */
        .sidebar {
          width: 220px;
          background: #0d6efd;
          color: white;
          padding: 20px;
        }
        .sidebar h2 { font-size: 1.2rem; margin-bottom: 15px; }
        .sidebar ul { list-style: none; padding: 0; }
        .sidebar ul li {
          margin: 12px 0;
          cursor: pointer;
          transition: color 0.3s ease;
        }
        .sidebar ul li:hover { color: #ffc107; }

        /* Navbar */
        .navbar {
          background: #f8f9fa;
          padding: 15px 20px;
          font-size: 1.3rem;
          font-weight: bold;
          border-bottom: 1px solid #ddd;
        }

        /* Main content */
        .main-content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .dashboard { padding: 20px; }
        .dashboard-title { font-size: 2rem; font-weight: bold; margin-bottom: 25px; color: #0d6efd; }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }

        .stat-card {
          padding: 25px;
          border-radius: 15px;
          text-align: center;
          color: #fff;
          box-shadow: 0 8px 16px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .stat-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.15);
        }
        .stat-card h5 { font-size: 1rem; margin-bottom: 12px; }
        .stat-card h2 { font-size: 2.2rem; font-weight: bold; }

        .gradient-card:nth-child(1) { background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); }
        .gradient-card:nth-child(2) { background: linear-gradient(135deg, #ff6a00 0%, #ee0979 100%); }
        .gradient-card:nth-child(3) { background: linear-gradient(135deg, #43cea2 0%, #185a9d 100%); }

        @media (max-width: 768px) {
          .layout { flex-direction: column; }
          .sidebar { width: 100%; text-align: center; }
          .main-content { width: 100%; }
        }
      `}</style>
      
    </div>
   
    </>
  );
}

export default Dashboard;
