import { useContext, useDebugValue } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const useAuth = () => {
	const { user } = useContext(AuthContext);
	useDebugValue(user, (user) => (user ? 'Logged In' : 'Logged Out'));
	return useContext(AuthContext);
};

export default useAuth;
