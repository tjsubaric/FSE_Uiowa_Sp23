import * as React from "react";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
  return (
    <nav className={`dashboard-1 ${props.className || ""}`}>
      <div className="rectangle-3">{props.search || "Search"}</div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
};
export default Dashboard;
