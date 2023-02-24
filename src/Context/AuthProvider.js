import { createContext, useReducer } from 'react';

import { useNavigate } from 'react-router-dom';
// utils
// import { API_BASE_URLS } from 'utils/constant';
import { axiosInstance } from '../services/Axios/axios';
import ROUTES from '../utils/Contants_Data/Route.Constants';
// import { isValidToken, setSession } from '../utils/Validation/jwt';
// ----------------------------------------------------------------------
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { getAllUserInfo } from '../Redux/userData/userData.actions';
// import 'react-toastify/dist/ReactToastify.css';

const Types = {
	Login: 'LOGIN',
	Register: 'REGISTER',
	Logout: 'LOGOUT',
	Initialize: 'INITIALIZE'
	// Loading: 'LOADING'
};

const initialState = {
	isAuthenticated: false,
	user: null
	// isLoading: false
};

const JWTReducer = (state, action) => {
	switch (action.type) {
		case 'INITIALIZE': {
			return {
				...state,
				user: action.payload.user,
				isAuthenticated: true
			};
		}
		case 'LOGIN':
			return {
				...state,
				isAuthenticated: true,
				user: action.payload.user
			};
		case 'LOGOUT':
			return {
				...state,
				isAuthenticated: false,
				user: null
			};

		case 'REGISTER':
			return {
				...state,
				isAuthenticated: true,
				user: action.payload.user
			};
		// case 'LOADING':
		// 	return {
		// 		...state,
		// 		isLoading: action.payload
		// 	};

		default:
			return state;
	}
};

const AuthContext = createContext(null);

function AuthProvider({ children }) {
	const dispatchRedux = useDispatch();
	const navigate = useNavigate();
	const [state, dispatch] = useReducer(JWTReducer, initialState);
	// const [auth, //setAuth] = useState(null);

	// useEffect(() => {
	// 	onLoad();
	// }, []);


	const initialize = async (callback) => {
		// dispatchRedux({
		// 	type: 'LOADING',
		// 	payload: true
		// });
		let authToken = localStorage.getItem('accessToken');
		// let user = localStorage.getItem('user');
		if (authToken) {
			const responseLogin = await axiosInstance.get(`/auth/me`, {
				headers: { Authorization: authToken }
			});

			if (responseLogin?.data) {
				localStorage.setItem('user', JSON.stringify({ ...responseLogin?.data }));

				dispatch({
					type: Types.Login,
					payload: {
						user: { ...responseLogin?.data },
						isAuthenticated: true
					}
				});
				dispatchRedux(getAllUserInfo(responseLogin?.data));
				// dispatchRedux({
				// 	type: 'LOADING',
				// 	payload: false
				// });
				navigate(ROUTES.HOME);
				//setAuth({ user: responseLogin?.data, roles: [responseLogin?.data?.role] });
				callback?.();
				// navigate(ROUTES.HOME);
				// let UnAuthRoutes = [ROUTES.LOGIN];
				// UnAuthRoutes.indexOf(window.location.pathname) > -1 ? navigate(ROUTES.HOME);
			} else {
				// dispatchRedux({
				// 	type: 'LOADING',
				// 	payload: false
				// });
				navigate(ROUTES.LOGIN);
			}
		}
		else {
			// dispatchRedux({
			// 	type: 'LOADING',
			// 	payload: false
			// });
			navigate(ROUTES.LOGIN);
		}
	};

	const login = async ({ email, password }) => {
		const response = await axiosInstance.post(`/auth/login`, {
			email,
			password
		});
		if (response?.code === 'ERROR_CODE_ACCESS_DENIED') {
			toast.error('Invalid Credentials.!!');
		} else {
			toast.success('Login Successfully');
		}

		const { authToken } = response.data;

		localStorage.setItem('accessToken', authToken);
		await initialize();
		// localStorage.setItem('user', response.data);
		// dispatchRedux({
		// 	type: 'LOGIN', payload: {
		// 		user: response.data
		// 	}
		// })
		// navigate(ROUTES.HOME)
	};

	const register = async ({ email, password, firstname, lastname }) => {
		const response = await axiosInstance.post('auth/signup', {
			email,
			password,
			firstname,
			lastname
		});
		const { authToken, user } = response.data;
		//setAuth({ user: response?.data?.user });
		window.localStorage.setItem('accessToken', authToken);

		dispatch({
			type: Types.Register,
			payload: {
				user: { ...user },
				isAuthenticated: false
			}
		});
		navigate(ROUTES.OTP_VERIFY, { state: { email: user.email } });
	};

	const VerifyUser = async ({ email, otp }) => {
		const response = await axiosInstance.post('/verify_otp', {
			email,
			otp
		});

		navigate(ROUTES.ROLES, { state: { user_id: response?.data } });
	};

	const createRole = async ({ user_id, role }) => {
		const response = await axiosInstance.post('/add_user_role', {
			user_id,
			role
		});
		//setAuth({ ...auth, roles: [response?.data?.role] });
		toast.success('Acount created Successfully');
		if (response?.data?.role === 1) {
			navigate(ROUTES.TEACH_UNIVERSITY);
		} else if (response?.data?.role === 2) {
			navigate(ROUTES.UNIVERSITY);
		} else {
			navigate(ROUTES.FAVORITE);
		}
	};

	const forgotPassword = async ({ email }) => {
		const response = await axiosInstance.post('/forgot_password', {
			email
		});
		navigate(ROUTES.OTP_VERIFY, { state: { email: response?.data?.email, show: true } });
	};

	const VerifyEmail = async ({ email, otp }) => {
		await axiosInstance.post('/verify_otp', {
			email,
			otp
		});
		//setAuth({ email: email });
		navigate(ROUTES.SET_PASSWORD);
	};

	const changePassword = async ({ email, password }) => {
		await axiosInstance.post('/change_password', {
			email,
			password
		});
		navigate(ROUTES.LOGIN);
	};

	const knowledge = async () => {
		await axiosInstance.get('https://xg3n-4mh1-ngd5.n7.xano.io/api:w4ONEGEJ/knowledge_trees');
	};

	const logout = async () => {
		dispatch({ type: Types.Logout });
	};

	const treeData = async (id) => {
		// const response = await axiosInstance.get(`https://xg3n-4mh1-ngd5.n7.xano.io/api:w4ONEGEJ:v2/tree/${id}`);
		await axiosInstance.get('https://xg3n-4mh1-ngd5.n7.xano.io/api:w4ONEGEJ:v2/tree');
	};

	return (
		<AuthContext.Provider
			value={{
				...state,
				method: 'jwt',
				initialize,
				login,
				logout,
				register,
				knowledge,
				// auth,
				//setAuth,
				VerifyUser,
				createRole,
				forgotPassword,
				VerifyEmail,
				changePassword,
				treeData
			}}>
			{children}
		</AuthContext.Provider>
	);
}

export { AuthContext, AuthProvider };
