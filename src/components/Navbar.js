import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav>
      <ul className="list">
        <li className="items">
          <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
            Home
          </Link>
        </li>
        <li className="items">Services</li>
        <li className="items">Contact</li>
        {token === "Success" ? (
          <button className="btn2" onClick={logout}>
            LOGOUT
          </button>
        ) : (
          <div>
            <Link to="/" className="btn1">
              LOGIN
            </Link>
            <Link to="/signup" className="btn2">
              SIGNUP
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
}
