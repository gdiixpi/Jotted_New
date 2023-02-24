import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MainAppThemes from './theme/index';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Context/AuthProvider';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import store from './Redux/rootReducer';

ReactDOM.render(
	<React.StrictMode>
		<GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
			<Provider store={store}>
				<BrowserRouter>
					<ThemeProvider theme={MainAppThemes}>
						<AuthProvider>
							<Routes>
								<Route path="/*" element={<App />} />
							</Routes>
						</AuthProvider>
					</ThemeProvider>
				</BrowserRouter>
			</Provider>
		</GoogleOAuthProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

//..................................................................................................................................................................
