import React, { useState } from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGoogle,faFacebook,faLinkedin } from '@fortawesome/free-brands-svg-icons' // <-- import styles to be used
import {  faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons'



const Login = () => {
  const myStyle={
    
    height:"25px",
    width:"25px"
    
  }
  const [mode,setMode]=useState(faEye)
  const [visibility,setVisibility]=useState("password")
  const toggleButton=()=>{
    if(mode===faEye)
    {setMode(faEyeSlash);
    setVisibility("text");
    }
    else {setMode(faEye);
    setVisibility("password");}

  }
 
  return (
  <div style={{fontFamily: "'Open Sans', sans-serif"}}> 

 

  <div className='card'>
    <h1>Log in</h1>
    <form id='form1' action="./Home">
      <div className='input1'>
        <lable forHtml="email" className="email ">Email address</lable>
        
        <input type="email" required className="form-control " id="exampleFormControlInput1" placeholder="name@gmail.com" />
      </div>
      <div className="input2">
        <lable forHtml="password" className="password">Password</lable>
        <div className='buttonIn'>
        <input id="eye" type={visibility} required pattern="(?=.*[a-z]) (?=.*[^\w\*])(?=.*[A-Z]).{4,}" title="password must contain at least 4 characters including at least one uppercase, one lowercase letter and one special character." className="form-control"  placeholder="Enter your password"/>
        <button type='button' onClick={toggleButton} className='eye'><FontAwesomeIcon  icon={mode} /></button>
       </div>
       </div>
        
          
      
      <a href='/' id='Forget'>Forget password?</a>
      <button type='submit' form='form1' className="loginform-button">LOGIN</button>
      </form>
      
      <hr />
      <form action="./Home" >
        <button type='submit' className='icons'><FontAwesomeIcon style={myStyle} icon={faGoogle} /></button>
        <button type='submit' className='icons'><FontAwesomeIcon style={myStyle} icon={faFacebook} /></button>
      <button type='submit' className='icons'><FontAwesomeIcon style={myStyle} icon={faLinkedin} /></button>
      </form>
      <p style={{fontSize:"14px"}}>Need an Account? <Link to="/Signup">Sign up</Link></p>
      
      
  </div>
</div>  
  )
}

export default Login