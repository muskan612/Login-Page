import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<Router>
				<div className='App'>
					<Routes>
						<Route path='/' element={<Login />} />
						<Route path='/signup' element={<Signup />} />
						<Route path='/home' element={<Home />} />
					</Routes>
				</div>
			</Router>
			{/* <Footer /> */}
		</>
	);
}

export default App;
