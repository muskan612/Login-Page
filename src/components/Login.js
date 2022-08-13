import React, { useEffect, useState } from "react";
import "./Login.css";
//import Navbar from './Navbar';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"; // <-- import styles to be used
import { faEye, faEyeSlash, faIgloo } from "@fortawesome/free-solid-svg-icons";
import database from "./Data";

const check = (prop) => {
  const user = database.filter(
    (u) => u.email === prop.email && u.password === prop.password,
  );
  return user.length;
};

const Login = () => {
  const navigate = useNavigate();
  const myStyle = {
    height: "25px",
    width: "25px",
  };
  const [mode, setMode] = useState(faEye);
  const [visibility, setVisibility] = useState("password");
  const toggleButton = () => {
    if (mode === faEye) {
      setMode(faEyeSlash);
      setVisibility("text");
    } else {
      setMode(faEye);
      setVisibility("password");
    }
  };
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInputs = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (check(user)) {
      localStorage.setItem("token", "Success");
      navigate("/home");
      window.location.reload();
    } else {
      alert("Invalid credentials");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === "Success") {
      navigate("/home");
    }
  }, []);

  return (
    <div style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <div className="card1">
        <h1>Log in</h1>
        <form id="form1" onSubmit={handleSubmit}>
          <div className="input01">
            <label className="email1 ">Email address</label>

            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputs}
              required
              className="form-control1 "
              id="exampleFormControlInput1"
              placeholder="name@gmail.com"
            />
          </div>
          <div className="input02">
            <label className="password1">Password</label>
            <div className="buttonIn1">
              <input
                id="eye1"
                type={visibility}
                name="password"
                value={user.password}
                onChange={handleInputs}
                required
                pattern="(?=.*\W|_)(?=.*[a-z])(?=.*[A-Z]).{4,}"
                title="password must contain at least 4 characters including at least one uppercase, one lowercase letter and one special character."
                className="form-control1"
                placeholder="Enter your password"
              />
              <button type="button" onClick={toggleButton} className="eye1">
                <FontAwesomeIcon icon={mode} />
              </button>
              <a href="/" id="Forget1">
                Forgot password?
              </a>
            </div>
          </div>

          <button type="submit" className="loginform-button1">
            LOGIN
          </button>
        </form>

        <hr />
        <form>
          <button type="submit" className="icons1">
            <FontAwesomeIcon style={myStyle} icon={faGoogle} />
          </button>
          <button type="submit" className="icons1">
            <FontAwesomeIcon style={myStyle} icon={faFacebook} />
          </button>
          <button type="submit" className="icons1">
            <FontAwesomeIcon style={myStyle} icon={faLinkedin} />
          </button>
        </form>
        <p style={{ fontSize: "14px" }}>
          Need an Account? <Link to="/Signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
