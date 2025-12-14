import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";

import LoadingPage from "./pages/LoadingPage/LoadingPage";
import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";
import JobSeekerDashboard from "./pages/JobSeeker/JobSeekerDashboard";
import JobDetail from "./pages/JobSeeker/JobDetail";
import SavedJobs from "./pages/JobSeeker/SavedJobs";
import UserProfile from "./pages/JobSeeker/UserProfile";
import ProtectedRoutes from "./routes/ProtectedRoute";
import EmployerDashboard from "./pages/Employer/EmployerDashboard";
import JobPostingForm from "./pages/Employer/JobPostingForm";
import ManageJobs from "./pages/Employer/ManageJobs";
import ApplicationViewer from "./pages/Employer/ApplicationViewer";
import EmployerProfilePage from "./pages/Employer/EmployerProfilePage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LoadingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<Login />} />

          <Route path="/find-jobs" element={<JobSeekerDashboard />} />
          <Route path="/job/:jobId" element={<JobDetail />} />
          <Route path="saved-jobs" element={<SavedJobs />} />
          <Route path="profile" element={<UserProfile />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoutes requireRole="employer" />}>
            <Route path="/employer/dashboard" element={<EmployerDashboard />} />
            <Route path="/post-job" element={<JobPostingForm />} />
            <Route path="manage-jobs" element={<ManageJobs />} />
            <Route path="applicants" element={<ApplicationViewer />} />
            <Route path="company-profile" element={<EmployerProfilePage />} />
          </Route>

          {/* Catch All Routes */}
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: "13px",
          },
        }}
      />
    </div>
  );
};

export default App;
