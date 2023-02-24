// import { createContext, ReactNode, useEffect, useReducer } from 'react';
// // utils
// import { API_BASE_URLS } from 'utils/constant';
// import axios from '../utils/axios';
// import { isValidToken, setSession } from '../utils/jwt';
// // ----------------------------------------------------------------------

// const initialState = {
// 	isAuthenticated: false,
// 	user: null
// };

// const JWTReducer = (state, action) => {
// 	switch (action.type) {
// 		case 'LOGIN':
// 			return {
// 				...state,
// 				isAuthenticated: true,
// 				user: action.payload.user
// 			};
// 		case 'LOGOUT':
// 			return {
// 				...state,
// 				isAuthenticated: false,
// 				user: null
// 			};

// 		case 'REGISTER':
// 			return {
// 				...state,
// 				isAuthenticated: true,
// 				user: action.payload.user
// 			};

// 		default:
// 			return state;
// 	}
// };

// const AuthContext = createContext(null);

// function AuthProvider({ children }) {
// 	const [state, dispatch] = useReducer(JWTReducer, initialState);
// 	// useEffect(() => {
// 	// 	const initialize = async () => {
// 	// 		try {
// 	// 			const accessToken = window.localStorage.getItem('accessToken');
// 	// 			const user = window.localStorage.getItem('acc');

// 	// 			if (accessToken && user && isValidToken(accessToken)) {
// 	// 				setSession(accessToken, JSON.parse(user));

// 	// 				// const response = await axios.get('/api/account/my-account');
// 	// 				// const { user } = response.data;
// 	// 				dispatch({
// 	// 					type: Types.Initial,
// 	// 					payload: {
// 	// 						isAuthenticated: true,
// 	// 						user: JSON.parse(user)
// 	// 					}
// 	// 				});
// 	// 			} else {
// 	// 				try {
// 	// 					const tempUser = JSON.parse(localStorage.getItem('acc') || '');
// 	// 					const response = await axios.post(`${API_BASE_URLS.user}/users/refresh`, {
// 	// 						username: tempUser.email,
// 	// 						refreshToken: tempUser.refreshToken
// 	// 					});

// 	// 					const user = {
// 	// 						accessToken: response.data.accessToken,
// 	// 						displayName: tempUser.displayName,
// 	// 						email: tempUser.email,
// 	// 						refreshToken: response.data.refreshToken,
// 	// 						userSub: response.data.username
// 	// 					};

// 	// 					setSession(user.accessToken, user);
// 	// 					dispatch({
// 	// 						type: Types.Initial,
// 	// 						payload: {
// 	// 							isAuthenticated: true,
// 	// 							user
// 	// 						}
// 	// 					});
// 	// 				} catch (err) {
// 	// 					console.error(err);
// 	// 					dispatch({
// 	// 						type: Types.Initial,
// 	// 						payload: {
// 	// 							isAuthenticated: false,
// 	// 							user: null
// 	// 						}
// 	// 					});
// 	// 				}
// 	// 				// dispatch({
// 	// 				//   type: Types.Initial,
// 	// 				//   payload: {
// 	// 				//     isAuthenticated: false,
// 	// 				//     user: null
// 	// 				//   }
// 	// 				// });
// 	// 			}
// 	// 		} catch (err) {
// 	// 			console.error(err);
// 	// 			dispatch({
// 	// 				type: Types.Initial,
// 	// 				payload: {
// 	// 					isAuthenticated: false,
// 	// 					user: null
// 	// 				}
// 	// 			});
// 	// 		}
// 	// 	};

// 	// 	// CALL this API to fetch account details on login for roles, elements etc
// 	// 	initialize();
// 	// }, []);

// 	const login = async ({ email, password }) => {
// 		const response = await axios.post(`${API_BASE_URLS.user}/users/login`, {
// 			email: email,
// 			password
// 		});

// 		console.log('Login DATA:', response);

// 		// const { accessToken, name, familyName, idToken, refreshToken, email } = response.data.message;
// 		// const user = {
// 		// 	accessToken,
// 		// 	displayName: `${name} ${familyName}`,
// 		// 	idToken,
// 		// 	refreshToken,
// 		// 	userSub: username,
// 		// 	email: response.data.message.email
// 		// };
// 		// setSession(accessToken, user);
// 		// dispatch({
// 		// 	type: Types.Login,
// 		// 	payload: {
// 		// 		user
// 		// 	}
// 		// });
// 	};

// 	const register = async ({ email, password, firstName, lastName, role }) => {
// 		const response = await axios.post('/api/account/register', {
// 			email,
// 			password,
// 			firstName,
// 			lastName,
// 			role
// 		});
// 		// const { accessToken, user } = response.data.message;



// 		// window.localStorage.setItem('accessToken', accessToken);
// 		// dispatch({
// 		//   type: Types.Register,
// 		//   payload: {
// 		//     user
// 		//   }
// 		// });
// 	};

// 	// const activate = async (email, temporaryPassword, password) => {
// 	// 	const url = `${process.env.REACT_APP_API_URL_ADMIN}/${API_BASE_URLS.activateUser}/admin/users/activate`;

// 	// 	const response = await axios.post(url, {
// 	// 		username: email,
// 	// 		oldPassword: temporaryPassword,
// 	// 		newPassword: password
// 	// 	});

// 	// 	const { accessToken, name, familyName, idToken, refreshToken, username, profile } = response.data.message;
// 	// 	const user = {
// 	// 		accessToken,
// 	// 		displayName: `${name} ${familyName}`,
// 	// 		idToken,
// 	// 		refreshToken,
// 	// 		userSub: username
// 	// 	};
// 	// 	if (profile === 'Merchant') {
// 	// 		setSession(accessToken, user);
// 	// 		dispatch({
// 	// 			type: Types.Login,
// 	// 			payload: {
// 	// 				user
// 	// 			}
// 	// 		});
// 	// 	}
// 	// };

// 	const logout = async () => {
// 		// setSession(null, null);
// 		dispatch({ type: Types.Logout });
// 	};

// 	// const resetPassword = async (email) => {
// 	// 	const response = await axios.post(`${API_BASE_URLS.user}/users/password/forget`, {
// 	// 		username: email
// 	// 	});
// 	// };

// 	// const updateProfile = () => {};

// 	return (
// 		<AuthContext.Provider
// 			value={{
// 				...state,
// 				method: 'jwt',
// 				login,
// 				logout,
// 				register,
// 				// resetPassword,
// 				// updateProfile,
// 				// activate
// 			}}>
// 			{children}
// 		</AuthContext.Provider>
// 	);
// }

// export { AuthContext, AuthProvider };
