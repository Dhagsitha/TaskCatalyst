import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from './components/AuthContext';
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import TeamRegistration from "./components/TeamRegistration";
import WorkSubmission from "./components/WorkSubmission";
import TeacherRemarks from "./components/TeacherRemarks";
import ViewSubmission from "./components/ViewSubmission";
import AssignedTasks from "./components/AssignedTasks";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<><Header/><Home/></>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/dashboard/teamreg" element={<ProtectedRoute><><Dashboard/><TeamRegistration /></></ProtectedRoute>} />
          <Route path="/dashboard/submitwork" element={<ProtectedRoute><><Dashboard/><WorkSubmission /></></ProtectedRoute>} />
          <Route path="/dashboard/tmsubmissions" element={<ProtectedRoute><><Dashboard/><ViewSubmission /></></ProtectedRoute>} />
          <Route path="/dashboard/assignedtasks" element={<ProtectedRoute><><Dashboard/><AssignedTasks /></></ProtectedRoute>} />
          <Route path="/dashboard/teachersremarks" element={<ProtectedRoute><><Dashboard/><TeacherRemarks /></></ProtectedRoute>} />
        </Routes>
      </Router>
    </div>
  );
}

// Define ProtectedRoute only if not already imported
function ProtectedRoute({ children }) {
  const { auth } = useAuth();

  if (!auth.isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default App;
