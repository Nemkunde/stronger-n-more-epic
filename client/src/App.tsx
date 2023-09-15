// @ts-check

import React from "react";
import "./App.css";
//import { createBrowserRouter, RouterProvider } from "react-router-dom"; not standard components provided byu react router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import UserBookingPage from "./pages/UserBookingPage";
import RegisterPage from "./pages/RegisterPage";
import AdminUserPage from "./pages/AdminUserPage";
import AdminActivityPage from "./pages/AdminActivityPage";

// react router dom <--


const App: React.FC = () => { // ts update functional component and routes rapped in a Routes component
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/userbooking" element={<UserBookingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="admin/user" element={<AdminUserPage />} />
        <Route path="admin/activity" element={<AdminActivityPage />} />
      </Routes>
    </Router>
  );
};

export default App;

/*const routes = [
  {
    path: "*",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/userbooking",
    element: <UserBookingPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "admin/user", 
    element: <AdminUserPage /> 
  },
  { 
    path: "admin/activity", 
    element: <AdminActivityPage /> 
  }
];

function App() {
  return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default App;*/