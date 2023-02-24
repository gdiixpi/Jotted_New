// import jwtDecode from 'jwt-decode';
// import { verify, sign } from 'jsonwebtoken';
import { axiosInstance } from '../../services/Axios/axios';
//
// import { AuthUser } from '../@customTypes/authentication';

// ----------------------------------------------------------------------
const jwtDecode = (accessToken) => {};
const isValidToken = (accessToken) => {
	if (!accessToken) {
		return false;
	}
	const decoded = jwtDecode(accessToken);
	const currentTime = Date.now() / 1000;

	return decoded.exp > currentTime;
};

const setSession = (accessToken, user) => {
	if (accessToken) {
		localStorage.setItem('accessToken', accessToken);
		localStorage.setItem('acc', JSON.stringify(user));
		axiosInstance.defaults.headers.common.Authorization = accessToken;
	} else {
		localStorage.removeItem('accessToken');
		localStorage.removeItem('acc');
		delete axiosInstance.defaults.headers.common.Authorization;
	}
};

export { isValidToken, setSession};
// , verify, sign 