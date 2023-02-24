import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROLES } from './utils/Contants_Data/MainApp.Constants';
import ProtectedRoutes from './Components/Protected Routes/ProtectedRoutes';
import ROUTES from './utils/Contants_Data/Route.Constants';
//  path import start
import Layout from './Pages/Layout/Layout';
import Welcome from './Pages/Welcome/Welcome';
import Registration from './Pages/Authentication/Registration/Registration';
import Login from './Pages/Authentication/Login/Login';
import ForgotPassword from './Pages/Authentication/Forgot _Password/ForgotPassword';
import SetPassword from './Pages/Authentication/Set_Password/SetPassword';
import PageNotFound from './Pages/Page_Not_Found/PageNotFound';
import Home from './Pages/Home_Page/Home';
import Community from './Pages/Community/Community';
import ThankYouPage from './Pages/Thank_you_page/ThankYouPage';
import UserProfile from './Pages/User_Info/UserProfile';
import Unauthorized from './Pages/UnAuthorized/UnAuthorized';
import Roles from './Pages/Roles/Roles';
import Admin from './Pages/Admin/Admin';
import VerifyOtp from './Pages/Authentication/Verify_otp_screen/VerifyOtp';
import Sidebar from './Components/Sidebar/Sidebar';
import WhichUniversity from './Pages/Questions_signup/WhichUniversity';
import FavoriteQuestion from './Pages/Questions_signup/FavoriteQuestion';
import TeachUniversity from './Pages/Questions_signup/TeachUniversity';
import NewTree from './Pages/Creating_New_Tree/NewTree';
import DescribeTree from './Pages/Creating_New_Tree/DescribeTree';
import Discipline from './Pages/Creating_New_Tree/Discipline';
import AgeGroupInput from './Pages/Creating_New_Tree/AgeGroupInput';
import AddingTags from './Pages/Creating_New_Tree/AddingTags';
import TreeFinalStep from './Pages/Creating_New_Tree/TreeFinalStep';
import BlankPage from './Pages/BlankPage/BlankPage';
import OpenCateogry from './Pages/OpenSource/OpenCateogry';
import OpenDiscipline from './Pages/OpenSource/OpenDiscipline';
import OpenAddResource from './Pages/OpenSource/OpenAddResource';
import PortfolioTree from './Pages/Profile_Page/PortfolioTree';
import KnowledgeTree from './Pages/Knowledge_Tree/KnowledgeTree';
import SavePopup from './Components/Popup/SavePopup';
import CommunityProvider from './Pages/Community/CommunityProvider';
import UnAuthRoutes from './Components/Protected Routes/UnAuthRoutes';

// path import ends .....

const MainRoutes = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					{/* public routes */}
					<Route element={<UnAuthRoutes />}>
						<Route path={ROUTES.WELCOME} element={<Welcome />} />
						<Route path={ROUTES.LOGIN} element={<Login />} />
						<Route path={ROUTES.REGISTRATION} element={<Registration />} />
						<Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
						<Route path={ROUTES.SET_PASSWORD} element={<SetPassword />} />
						<Route path={ROUTES.UNAUTHORIZED} element={<Unauthorized />} />
						<Route path={ROUTES.OTP_VERIFY} element={<VerifyOtp />} />
					</Route>
					<Route element={<ProtectedRoutes allowedRoles={[ROLES.Educator, ROLES.Student, ROLES.Learner, ROLES.Admin]} />}>
						<Route path={ROUTES.COMMUNITY} element={<Community />} />
						<Route path={ROUTES.ROLES} element={<Roles />} />

						{/* // needs to be in protected routes */}
						<Route path={ROUTES.SIDEBAR} element={<Sidebar />} />
						<Route path={ROUTES.UNIVERSITY} element={<WhichUniversity />} />
						<Route path={ROUTES.FAVORITE} element={<FavoriteQuestion />} />
						<Route path={ROUTES.TEACH_UNIVERSITY} element={<TeachUniversity />} />
						<Route path={ROUTES.NEW_TREE} element={<NewTree />} />
						<Route path={ROUTES.DESCRIBE_TREE} element={<DescribeTree />} />
						<Route path={ROUTES.DISCIPLINE} element={<Discipline />} />
						<Route path={ROUTES.AGE_INPUT} element={<AgeGroupInput />} />
						<Route path={ROUTES.ADDING_TAGS} element={<AddingTags />} />
						<Route path={ROUTES.TREE_FINAL_STEP} element={<TreeFinalStep />} />
						<Route path={ROUTES.BLANK_PAGE} element={<BlankPage />} />
						<Route path={ROUTES.OPEN_CATEOGRY} element={<OpenCateogry />} />
						<Route path={ROUTES.OPEN_DISCIPLINE} element={<OpenDiscipline />} />
						<Route path={ROUTES.OPEN_ADD_RESOURCE} element={<OpenAddResource />} />
						<Route path={ROUTES.PORTFOLIO_TREE} element={<PortfolioTree />} />
						<Route path={ROUTES.KNOWLEDGE_TREE} element={<KnowledgeTree />} />
						<Route path={ROUTES.SAVE_POPUP} element={<SavePopup />} />
					</Route>
					{/* we want to protect these routes */}

					<Route element={<ProtectedRoutes allowedRoles={[ROLES.Educator]} />}>
						<Route path={ROUTES.HOME} element={<Home />} />
						<Route path={ROUTES.COMMUNITYPROVIDER} element={<CommunityProvider />} />
					</Route>

					<Route element={<ProtectedRoutes allowedRoles={[ROLES.Student]} />}>
						<Route path={ROUTES.HOME} element={<Home />} />
						<Route path={ROUTES.USER_PROFILE} element={<UserProfile />} />
					</Route>

					<Route element={<ProtectedRoutes allowedRoles={[ROLES.Learner]} />}>
						<Route path={ROUTES.HOME} element={<Home />} />
						<Route path={ROUTES.THANK_YOU} element={<ThankYouPage />} />
					</Route>

					<Route element={<ProtectedRoutes allowedRoles={[ROLES.Admin]} />}>
						<Route path={ROUTES.ADMIN} element={<Admin />} />
					</Route>
				</Route>

				{/* catch all */}
				<Route path={ROUTES.PAGE_NOT_FOUND} element={<PageNotFound />} />
			</Routes>
		</>
	);
};

export default MainRoutes;
