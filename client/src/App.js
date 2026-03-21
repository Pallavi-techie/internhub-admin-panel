import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

// PUBLIC PAGES
import SiteLayout from "./layout/SiteLayout";
import Home from "./pages/site/Home";
import About from "./pages/site/About";
import Services from "./pages/site/Services";
import Pricing from "./pages/site/Pricing";
import Portfolio from "./pages/site/Portfolio";
import BlogPublic from "./pages/site/BlogPublic";
import Team from "./pages/site/Team";
import Career from "./pages/site/Career";
import VerifyCredential from "./pages/site/VerifyCredential";
import Contact from "./pages/site/Contact";
import Login from "./pages/site/Login";
import FreeConsultant from "./pages/site/FreeConsultant";

// ADMIN LAYOUT
import AdminLayout from "./layout/AdminLayout";

// ADMIN PAGES
import AdminHome from "./pages/AdminHome";
import PostInternship from "./pages/PostInternship";
import PostJob from "./pages/PostJob";
import InternshipApplications from "./pages/InternshipApplications";
import JobApplications from "./pages/JobApplications";
import ManageVerifications from "./pages/ManageVerifications";
import UploadedInternships from "./pages/UploadedInternships";
import UploadedJobs from "./pages/UploadedJobs";
import InterviewScheduler from "./pages/InterviewScheduler";
import UserQueries from "./pages/UserQueries";
import ConnectionRequests from "./pages/ConnectionRequests";
import ManageClients from "./pages/ManageClients";
import ManageTeam from "./pages/ManageTeam";
import ManageSliderAds from "./pages/ManageSliderAds";
import ManageUsers from "./pages/ManageUsers";

// BLOG ADMIN
import BlogList from "./pages/blog/BlogList";
import BlogCreate from "./pages/blog/BlogCreate";
import BlogEdit from "./pages/blog/BlogEdit";

// ----------------------
// PROTECTED ROUTE WRAPPER
// ----------------------
function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/login" replace />;
  return children;
}

// ----------------------
// SAVE GOOGLE TOKEN AUTOMATICALLY
// ----------------------
function GoogleTokenHandler() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token);
      window.history.replaceState({}, "", "/admin");
    }
  }, [location]);

  return null;
}

// ----------------------
// MAIN APP
// ----------------------
export default function App() {
  return (
    <BrowserRouter>
      <GoogleTokenHandler />

      <Routes>
        {/* PUBLIC WEBSITE ROUTES */}
          <Route element={<SiteLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Home/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog-public" element={<BlogPublic />} />
        <Route path="/team" element={<Team />} />
        <Route path="/career" element={<Career />} />
        <Route path="/verify-credential" element={<VerifyCredential />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/free-consultant" element={<FreeConsultant />} />
</Route>
        {/* LOGIN PAGE */}
        <Route path="/login" element={<Login />} />

        {/* ADMIN ROUTES (PROTECTED) */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminHome />} />
          <Route path="/admin/post-internship" element={<PostInternship />} />
          <Route path="post-job" element={<PostJob />} />
          <Route path="internship-applications" element={<InternshipApplications />} />
          <Route path="job-applications" element={<JobApplications />} />
          <Route path="manage-verifications" element={<ManageVerifications />} />
          <Route path="uploaded-internships" element={<UploadedInternships />} />
          <Route path="uploaded-jobs" element={<UploadedJobs />} />
          <Route path="interview-scheduler" element={<InterviewScheduler />} />
          <Route path="user-queries" element={<UserQueries />} />
          <Route path="connection-requests" element={<ConnectionRequests />} />
          <Route path="manage-clients" element={<ManageClients />} />
          <Route path="manage-team" element={<ManageTeam />} />
          <Route path="manage-slider-ads" element={<ManageSliderAds />} />
          <Route path="manage-users" element={<ManageUsers />} />

          {/* BLOG ADMIN */}
          <Route path="blog/list" element={<BlogList />} />
          <Route path="blog/create" element={<BlogCreate />} />
          <Route path="blog/edit/:id" element={<BlogEdit />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
