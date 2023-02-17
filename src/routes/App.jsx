import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import PageName from '../pages/PageName';
import NotFound from '../pages/NotFound';
import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState'
import '../styles/resetStyle.scss'

const App = () => {
	const initialState = useInitialState();
	return (
		<AppContext.Provider value={initialState}>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path='/PageName' element={<PageName/>} />
						<Route path="*" element={<NotFound />} /> 
					</Routes>
				</Layout>
			</BrowserRouter>
		</AppContext.Provider>
	);
}

export default App;
