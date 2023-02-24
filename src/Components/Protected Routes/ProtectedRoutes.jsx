import { Navigate, Outlet } from 'react-router-dom';
import ROUTES from '../../utils/Contants_Data/Route.Constants';
import { isAuthenticated } from '../../utils/utils';

const ProtectedRoutes = ({ allowedRoles }) => {
	const { user } = isAuthenticated();

	let authenticated = allowedRoles.indexOf(user?.role) > -1;

	return (
		<>
			{!!user && (authenticated ? <Outlet /> : <Navigate to={ROUTES.ROLES} />)}
			{!user && <Navigate to="/welcome" />}
		</>
	);
};

export default ProtectedRoutes;
