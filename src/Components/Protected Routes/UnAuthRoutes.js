import { Navigate, Outlet } from 'react-router-dom';
import ROUTES from '../../utils/Contants_Data/Route.Constants';
import { isAuthenticated } from '../../utils/utils';

const UnAuthRoutes = () => {

    return (
        <>
            {!isAuthenticated() ? <Outlet /> : <Navigate to={ROUTES.HOME} />}
        </>
    );
};

export default UnAuthRoutes;
