import React from 'react';
import MainRoutes from './Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

	return (
		<>
			<MainRoutes />
			<ToastContainer position="top-center" autoClose={3000} />
		</>
	);
};

export default App;
