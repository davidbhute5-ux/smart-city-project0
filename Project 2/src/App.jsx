import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Register from "./components/RegisterForm";
import Login from "./components/LoginForm";
import Home from "./components/home.jsx";
import PlanSelectionPage from "./components/PlanSelectionPage.jsx";
import PaymentPage from "./components/PaymentPage.jsx";


import JobList from "./admin/JobList.jsx";
import JobForm from "./admin/JobForm.jsx";
import JobDetail from "./admin/JobDetail.jsx";
import Dashboard from "./admin/Dashboard.jsx";
import AppliedCandidate from "./admin/AppliedCandidate.jsx";
import RoleSelection from "./components/RoleSelection.jsx";
import AdminLogin from "./components/AdminLogin.jsx";
import AdminRegister from "./components/AdminReg.jsx";
import Layout from "./admin/Layout.jsx";
import ContactPage from "./components/Contact.jsx";
import AboutPage from "./components/About.jsx";
import UserJobDetailPage from "./components/UserJobDetailPage.jsx";
import UserJobListPage from "./components/UserJobListpage.jsx";
import UserApplyFormPage from "./components/UserApplyFormPage.jsx";
import EditJob from "./admin/EditJob.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public/User Routes */}
        <Route path="/roles" element={<RoleSelection />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
  <Route path="/apply" element={<UserApplyFormPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<UserJobListPage />} />
        <Route path="/jobs/:id" element={<UserJobDetailPage />} />
        <Route path="/plans" element={<PlanSelectionPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />


        {/* Admin Auth Routes (without Layout) */}
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminregister" element={<AdminRegister />} />

        {/* Admin Routes (with Layout) */}
        <Route path="/admin" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="jobs" element={<JobList />} />
          <Route path="create" element={<JobForm />} />
          {/* <Route path="jobs/:id" element={<JobDetail />} /> */}
          <Route path="appliedCandidate" element={<AppliedCandidate />} />
          <Route path="edit/:id" element={<EditJob/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
