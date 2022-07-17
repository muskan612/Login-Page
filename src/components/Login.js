import React, { useState } from 'react';
import './Login.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGoogle,
	faFacebook,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons'; // <-- import styles to be used
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
	const myStyle = {
		height: '25px',
		width: '25px',
	};
	const [mode, setMode] = useState(faEye);
	const [visibility, setVisibility] = useState('password');
	const toggleButton = () => {
		if (mode === faEye) {
			setMode(faEyeSlash);
			setVisibility('text');
		} else {
			setMode(faEye);
			setVisibility('password');
		}
	};

	return (
		<div style={{ fontFamily: "'Open Sans', sans-serif" }}>
			<Navbar />
			<div className='card1'>
				<h1>Log in</h1>
				<form id='form1' action='./Home'>
					<div className='input01'>
						<label forHtml='email' className='email1 '>
							Email address
						</label>

						<input
							type='email'
							required
							className='form-control1 '
							id='exampleFormControlInput1'
							placeholder='name@gmail.com'
						/>
					</div>
					<div className='input02'>
						<label forHtml='password' className='password1'>
							Password
						</label>
						<div className='buttonIn1'>
							<input
								id='eye1'
								type={visibility}
								required
								pattern="(?=.*\W|_)(?=.*[a-z])(?=.*[A-Z]).{8,}"
								title='password must contain at least 4 characters including at least one uppercase, one lowercase letter and one special character.'
								className='form-control1'
								placeholder='Enter your password'
							/>
							<button type='button' onClick={toggleButton} className='eye1'>
								<FontAwesomeIcon icon={mode} />
							</button>
              <a href='/' id='Forget1'>
						    Forgot password?
					    </a>
						</div>
					</div>

					
					<button type='submit' form='form1' className='loginform-button1'>
						LOGIN
					</button>
				</form>

				<hr />
				<form action='./Home'>
					<button type='submit' className='icons1'>
						<FontAwesomeIcon style={myStyle} icon={faGoogle} />
					</button>
					<button type='submit' className='icons1'>
						<FontAwesomeIcon style={myStyle} icon={faFacebook} />
					</button>
					<button type='submit' className='icons1'>
						<FontAwesomeIcon style={myStyle} icon={faLinkedin} />
					</button>
				</form>
				<p style={{ fontSize: '14px' }}>
					Need an Account? <Link to='/Signup'>Sign up</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
