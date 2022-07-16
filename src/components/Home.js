import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import './Home.css';

const Home = () => {
	return (
		<>
			<Navbar />
			<div className='container'>
				<div className='parallax'>
					<section>Scroll Down</section>
				</div>
				<div className='parallax' style={{ height: '165vh' }}>
					<div className='block'>
						<fieldset>
							<legend>Parallax Scrolling</legend>
							<p>
								Parallax scrolling is a computer graphics technique used by web
								designers to create a faux-3D effect. As users scroll down a
								webpage, different layers of content or backgrounds move at
								different speeds, and this creates an optical illusion. Using
								parallax scrolling is not a new technique. In the early 1980s,
								game designers working on Super Mario Bros. used parallax
								graphics to create a sensation of depth. Today, parallax
								scrolling has become more of a trend in the web design world—and
								for good reason. Scrolling is easier than clicking, and a
								well-designed parallax effect engages users to scroll for more
								information.
							</p>
							<p>
								Parallax graphics are ideal for storytelling. Good design is all
								about communication—and when we design websites, we want to
								communicate with our visitors and tell a compelling story about
								our product, service, or brand. Parallax scrolling allows us to
								immerse our website visitors in unique online experiences. It’s
								even possible to create a one-page website where visitors can
								read an entire story about your product or brand without
								navigating to multiple pages.
							</p>
						</fieldset>
					</div>
					<section style={{ paddingTop: '350px' }}>Scroll Up</section>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Home;
