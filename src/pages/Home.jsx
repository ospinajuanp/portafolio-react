import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<>
		<div>
			<h1>Hello World!</h1>
			<Link to='/PageName'>Go Page Name</Link>
		</div>
		</>
	);
}

export default Home;
