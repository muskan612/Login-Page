import React from 'react'

import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGoogle,faFacebook,faLinkedin } from '@fortawesome/free-brands-svg-icons' // <-- import styles to be used




const Login = () => {
  const myStyle={
    margin:"10px 10px 0 10px",
    height:"10%",
    width:"10%"
  }
 
  return (
  <div > 

  {/* <div className='loginhead'>
    <h3>"WELCOME" </h3>
  </div> */}

  <div className='card'>
    <h1>Log in</h1>
    <form action="./Home.js">
      <div className='input1'>
        <lable forHtml="email" className="email ">Email address</lable>
        
        <input type="email" required className="form-control " id="exampleFormControlInput1" placeholder="name@gmail.com" />
      </div>
      <div className="input2">
        <lable forHtml="password" className="password">Password</lable>
        
        <input type="password" pattern="(?=.*[a-z])(?=.*[A-Z]).{4,}" title="Must contain at least one uppercase and lowercase letter, and at least 4 characters" className="form-control" id="Enter your password" placeholder="Enter your password" />
      </div>
      
      <button  className="loginform-button">LOGIN</button>
      </form>
      <hr />
      <FontAwesomeIcon style={myStyle} icon={faGoogle} />
      <FontAwesomeIcon style={myStyle} icon={faFacebook} />
      <FontAwesomeIcon style={myStyle} icon={faLinkedin} />
      <p>Need an Account? <Link to="/Signup">Sign up</Link></p>
      
      
  </div>
</div>  
  )
}

export default Login