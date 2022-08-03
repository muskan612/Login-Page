import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactDOM } from 'react';
import './Navbar.css';

export default function Navbar() {
	return (
		<nav>
			<ul className='list'>
				<li className='items'>
					<Link to='/home' style={{ textDecoration: 'none', color: 'white' }}>
						Home
					</Link>
				</li>
				<li className='items'>Services</li>
				<li className='items'>Contact</li>
				<Link to='/login' className='btn1'>
					LOGIN
				</Link>
				<Link to='/signup' className='btn2'>
					SIGNUP
				</Link>
				<Link to='/' className='btn3'>
					LOGOUT
				</Link>
			</ul>
		</nav>

	);
}
