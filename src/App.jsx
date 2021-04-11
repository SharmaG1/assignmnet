import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import DetailPage from './DetailPage';

export default function App() {
	return (
		<React.Fragment>
			<div>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/users/:id" element={<DetailPage />} />
				</Routes>
			</div>
		</React.Fragment>
	);
}
