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

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LoadingPage />} />
          <Route path="/singup" element={<SignUp />} />
          <Route path="/singin" element={<Login />} />

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
