import "./App.css";
import React from "react";
import UserContainer from "./containers/UserContainer";
import StopWatch from "./components/StopWatch";
import CountDown from "./components/CountDown";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import WithAuth from "./hoc/WithAuth";
import Profile from "./components/Profile";
import Login from "./components/Login";

function App() {
  const AuthDashboard = WithAuth(Dashboard);
  const AuthProfile = WithAuth(Profile);

  return (
    <div>
      <UserContainer />

      <>
        <h2>CountDown & Stop Watch (Custom Hook Design Pattern)</h2>
        <CountDown />
        <StopWatch />
      </>

      <h2>Dashboard & Profile (Higher-Order Component Design Pattern)</h2>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/dashboard" element={<AuthDashboard />} />
          <Route path="/profile" element={<AuthProfile />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
