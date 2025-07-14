import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./AppLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import CreateProfile from "./pages/CreateProfile";
import PublicProfile from "./pages/PublicProfile";
import { ToastProvider } from "./components/ToastProvider";
import "./App.css";

// PUBLIC_INTERFACE
function App() {
  // Store login state in memory. In real-world, use token/session/cookie
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  // PUBLIC_INTERFACE
  function handleLogin(email) {
    setAuthenticated(true);
  }

  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              authenticated ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/public-profile/:id"
            element={<PublicProfile />}
          />
          <Route
            path="/"
            element={
              authenticated ? (
                <AppLayout />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="create-profile" element={<CreateProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
}

export default App;
