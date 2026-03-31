import React from "react";
import { Outlet } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import Footer from "../components/Footer";

function Layout() {
  return (
    <>
    <div className="app-layout">
      {/* Top Navbar */}
      <nav className="navbar d-flex justify-content-between align-items-center px-4 bg-primary text-white">
        <h1 className="h4 mb-0">Datatype IT Admin Panel</h1>
        <div className="d-flex align-items-center">
          <FaBell size={22} className="me-3 cursor-pointer" />
          {/* <img
            src="/admin-avatar.png"
            alt="Admin"
            className="rounded-circle"
            style={{ width: "40px", height: "40px", border: "2px solid #fff" }}
          /> */}
          <h5>Logout</h5>
        </div>
      </nav>

      <div className="main-layout d-flex">
        {/* Sidebar */}
        <aside className="bg-light p-3 sidebar">
          
          <ul className="list-unstyled">
            <li><a href="/admin/dashboard" className="sidebar-link">📊 Dashboard</a></li>
            <li><a href="/admin/create" className="sidebar-link">➕ Job Hiring</a></li>
            <li><a href="/admin/jobs" className="sidebar-link">📄 Job List</a></li>
            <li><a href="/admin/appliedCandidate" className="sidebar-link">👥 Applied Candidates</a></li>
            <li><a href="/admin/export" className="sidebar-link">⬇️ Export CSV</a></li>
            
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-grow-1 p-4">
          <Outlet /> {/* Dashboard or other admin page */}
        </main>
      </div>

      <style>{`
        .sidebar {
          width: 220px;
          min-height: 100vh;
          border-right: 1px solid #e6e6e6;
        }
        .sidebar-link {
          display: block;
          padding: 10px 8px;
          margin-bottom: 5px;
          border-radius: 6px;
          color: #444;
          font-weight: 500;
          text-decoration: none;
          transition: 0.3s;
        }
        .sidebar-link:hover {
          background: #0d6efd;
          color: #fff;
          padding-left: 12px;
        }
        .cursor-pointer { cursor: pointer; }
        @media (max-width: 768px) {
          .main-layout { flex-direction: column; }
          .sidebar { width: 100%; min-height: auto; border-right: none; border-bottom: 1px solid #e6e6e6; }
        }
      `}</style>
    </div>
    <Footer/>
    </>
  );
}

export default Layout;
