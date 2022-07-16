import React, {useState} from 'react'
import './Navbar.css'

export default function Navbar() {
  
    return (
      <nav>
        <ul className="list">
        <li className="items">Home</li>
        <li className="items">Services</li>
        <li className="items">Contact</li>
        <button><a href = "login" className="btn1">LOGIN</a></button>
        <button><a href = "signup" className="btn2">SIGNUP</a></button>
        </ul>
      </nav>
    )
  }