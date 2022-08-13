import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  return (
    <>
      <Router>
        <div className="App">
          <Navbar isAuthenticated={isAuthenticated} />

          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </Router>
      {/* <Footer /> */}
    </>
  );
}

export default App;
