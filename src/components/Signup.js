import React from 'react';
import './Signup.css';
import '../index.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGoogle,
	faFacebook,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons'; // <-- import styles to be used

export default function Signup() {
	const myStyle = {
		margin: '10px 10px 0 10px',
		height: '10%',
		width: '10%',
	};
	return (
		<div>
			<Navbar />
			<div className='card'>
				<h1>Sign up</h1>
				<form action='./Home.js'>
					<div className='input0'>
						<lable forHtml='email' className='email'>
							User name
						</lable>
						<input
							type='text'
							required
							className='form-control'
							id='exampleFormControlInput1'
							placeholder='Enter your username'
						/>
					</div>

					<div className='input1'>
						<lable forHtml='email' className='email'>
							Email address
						</lable>

						<input
							type='email'
							required
							className='form-control'
							id='exampleFormControlInput1'
							placeholder='name@gmail.com'
						/>
					</div>

					<div className='input2'>
						<lable forHtml='password' className='password'>
							Password
						</lable>

						<input
							type='password'
							required
							pattern='(?=.*[a-z])(?=.*[^\w\*])(?=.*[A-Z]).{4,}'
							title='password must contain at least 4 characters including at least one uppercase, one lowercase letter and one special character.'
							className='form-control'
							id='Enter your password'
							placeholder='Enter your password'
						/>
					</div>

					<div className='input3'>
						<lable forHtml='Confirm Password' className='confirmpassword'>
							Confirm Password
						</lable>

						<input
							type='password'
							required
							pattern='(?=.*[a-z])(?=.*[^\w\*])(?=.*[A-Z]).{4,}'
							title='password must contain at least 4 characters including at least one uppercase, one lowercase letter and one special character.'
							className='form-control'
							id='Enter your password'
							placeholder='Enter your password again'
						/>
					</div>

					<button type='submit' className='loginform-button'>
						Sign up
					</button>
				</form>
				<hr />
				<FontAwesomeIcon style={myStyle} icon={faGoogle} />
				<FontAwesomeIcon style={myStyle} icon={faFacebook} />
				<FontAwesomeIcon style={myStyle} icon={faLinkedin} />
				<p>
					Already a user?<Link to='/Login'> Log in</Link>
				</p>
			</div>
		</div>
	);
}
