import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Box, Grid, TextField, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import BackButton from '../../../Components/Buttons/Back_Button/BackButton';
import JottedButton from '../../../Components/Buttons/Jotted_Button/JottedButton';
import GoogleIcon from '../../../Assets/images/googleIcon.png';
// import FacebookIcon from '../../../Assets/images/facebookIcon.png';
// import BackButton from '../../common/BackButton';
import { ReactComponent as JottedBigLogo } from '../../../Assets/svg/jotted.svg';
// import { ReactComponent as CrossEyeIcon } from '../../../Assets/svg/crossEye.svg';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import ROUTES from '../../../utils/Contants_Data/Route.Constants';
import { Form, FormikProvider, getIn, useFormik } from 'formik';
import * as yup from 'yup';
import useAuth from '../../../hooks/useAuth';
import { axiosInstance } from '../../../services/Axios/axios';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { toast } from 'react-toastify';

//.................................................................

const useStyles = makeStyles({
	root: {
		width: '100%'
	},

	googleImg: {
		'&.MuiButton-root': {
			margin: '0px auto'
		},
		'& img': {
			margin: '11px 17px 12px 0px'
		}
	},
	googleLoginBtn: {
		backgroundColor: '#E8CD94',
		color: '#FFF',
		padding: '14px 12px',
		minHeight: '64px',
		border: '2px solid #E8CD94',
		fontSize: '24px',
		fontWeight: '600',
		textTransform: 'none',
		fontFamily: 'Poppins-Regular',
		fontStyle: 'normal',
		letterSpacing: ' 0.2px',
		textAlign: 'center',
		lineHeight: '36px',
		width: '249px',
		maxWidth: '100%',
		height: '64px',
		borderRadius: '8px',
		margin: '0px auto',
		paddingRight: '27px',
		'& img': {
			margin: '11px 17px 12px 0px'
		}
	},

	mainGrid: {
		height: '100%',
		minHeight: 'calc(100vh - 56px)',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignContent: 'center'
	},
	gridChildOne: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		'& svg': {
			transitionDuration: '0.5s',
			'&:hover': {
				transform: 'scale(0.9)'
			}
		}
	},
	gridChildTwo: {
		'&.MuiGrid-root': {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignContent: 'center',
			alignItems: 'center'
		}
	},
	respoForm: {
		width: '400px',
		maxWidth: '86%'
	},
	inputBox: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignContent: 'center',
		'& .MuiTextField-root': {
			marginTop: '0px',
			marginBottom: '32px'
		}
		// '& label.Mui-focused': {
		// 	color: '#6d4c44'
		// },
	},
	spanText: {
		width: '62px',
		height: '35px',
		margin: '37px auto 15px',
		fontFamily: 'Poppins-Regular',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '18px',
		linHeight: '35px',
		letterSpacing: '0.2px',
		color: '#A3A3A3'
	},
	createAccount: {
		'&.MuiButton-root': {
			marginTop: '25px',
			marginBottom: '15px',
			marginLeft: 'auto',
			marginRight: 'auto'
		}
	},
	logintext: {
		textAlign: 'center',
		height: '35px',
		fontFamily: 'Poppins-Regular',
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '16px',
		linHeight: '35px',
		letterSpacing: '0.2px',
		color: '#6B6A6A'
	},
	linkTag: {
		textDecoration: 'none',
		color: '#6B6A6A',
		'&:hover': {
			color: '#6d4c44'
		}
	}
});
//.........................................................................styling ends ......................................................................

const Login = (props) => {
	const classes = useStyles();
	const navigate = useNavigate();
	const { auth, setAuth } = useAuth();

	const { login } = useAuth();

	const [loginPayload, setLoginPayload] = React.useState({
		email: '',
		password: '',
		showPassword: false
	});

	// console.log('loginPayload: ', loginPayload);
	// textfields validations..........

	const defaultValue = {
		// email: 'sharma30@mailinator.com',
		// password: 'Pass@1234'
		email: '',
		password: ''
	};

	const validationSchema = yup.object().shape({
		email: yup.string().required('please enter your email').email('please enter valid email'),
		password: yup
			.string()
			.required('please enter your password')
			.min(6, 'Password length too short')
			.max(20, 'Password length too lengthy')
			.matches(
				new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{6,20}$/),
				'Password must contain at least 1 lowercase, 1 uppercase, 1 special character, and 1 number'
			)
	});

	const formik = useFormik({
		initialValues: defaultValue,
		validationSchema: validationSchema,
		onSubmit: async (values, { setSubmitting, resetForm }) => {
			// console.log('values: ', values);
		}
	});

	const handleClickShowPassword = () => {
		setLoginPayload({
			...loginPayload,
			showPassword: !loginPayload.showPassword
		});
	};

	const { errors, values, touched, getFieldProps, setFieldError, setTouched, handleSubmit } = formik;

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const loginBtnHandler = async () => {
		// api call
		try {
			await login({ email: values.email, password: values.password });
			navigate(ROUTES.HOME);
		} catch (error) {
			console.log(error);
		}
	};

	// back button handler...
	const LoginbackButtonHandler = () => {
		navigate(ROUTES.WELCOME);
	};

	// const handlecallback = (e) => {
	// 	console.log(e['origin'], document.location.origin, e['data'], e['data']['type'], 'eee');
	// };

	const googleLogin = useGoogleLogin({
		onSuccess: async (tokenResponse) => {
			try {
				const googleResponse = await axios.get('https://xg3n-4mh1-ngd5.n7.xano.io/api:U0aE1wpF:v2/oauth/google/continue', {
					params: { tokenn: tokenResponse.access_token }
				});

				const responseLogin = await axiosInstance.get(`/auth/me`, {
					headers: { Authorization: googleResponse?.data?.token }
				});
				if (responseLogin) {
					if (responseLogin?.data?.role === 0) {
						setAuth({ user: responseLogin?.data, roles: [responseLogin?.data?.google_oauth?.role] });
						toast.success('Successfully Account created');
						navigate(ROUTES.ROLES, { state: { user_id: responseLogin?.data } });
					} else {
						toast.success('Successfully Google Login');
						setAuth({ user: responseLogin?.data, roles: [responseLogin?.data?.role] });
						navigate(ROUTES.HOME, { state: { data: auth } });
					}
				}
			} catch (err) {
				console.log(err);
			}
		},
		onError: (errorResponse) => console.log(errorResponse)
	});

	return (
		<>
			<Box className={classes.root}>
				<Box style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '14px' }}>
					<BackButton onClick={LoginbackButtonHandler} />
				</Box>
				<Grid container className={classes.mainGrid}>
					<Grid item lg={1} xl={1} md={1} sm={1}></Grid>
					<Grid item lg={5} xl={5} md={12} sm={12} xs={12} className={classes.gridChildOne}>
						<JottedBigLogo />
					</Grid>
					<Grid item lg={5} xl={5} md={12} sm={12} xs={12} className={classes.gridChildTwo}>
						<Box>
							<JottedButton type="normal" isimg={GoogleIcon} customclass={classes.googleImg} onClick={googleLogin}>
								Login with Google
							</JottedButton>
						</Box>

						<span className={classes.spanText}>- OR -</span>
						<Box className={classes.respoForm}>
							<FormikProvider value={formik}>
								<Form onSubmit={handleSubmit}>
									<Box className={classes.inputBox}>
										<TextField
											label="Email address"
											type="email"
											autoComplete="off"
											variant="standard"
											{...getFieldProps('email')}
											onKeyPress={() => {
												setFieldError({ ...errors, email: false });
												setTouched({ ...touched, email: false });
											}}
											error={Boolean(getIn(touched, `email`) && getIn(errors, `email`))}
											helperText={getIn(touched, `email`) && getIn(errors, `email`)}
										/>
										<TextField
											label="Password"
											type={loginPayload.showPassword ? 'text' : 'password'}
											variant="standard"
											{...getFieldProps('password')}
											onKeyPress={() => {
												setFieldError({ ...errors, password: false });
												setTouched({ ...touched, password: false });
											}}
											InputProps={{
												endAdornment: (
													//

													<InputAdornment position="end">
														<IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
															{loginPayload.showPassword ? <VisibilityOff /> : <Visibility />}
														</IconButton>
													</InputAdornment>
													//
												)
											}}
											error={Boolean(getIn(touched, `password`) && getIn(errors, `password`))}
											helperText={getIn(touched, `password`) && getIn(errors, `password`)}
										/>

										<JottedButton
											type="primary"
											customclass={classes.createAccount}
											onClick={loginBtnHandler}
											disabled={values.email && Object.keys(errors).length === 0 ? false : true}>
											Login
										</JottedButton>
									</Box>
								</Form>
							</FormikProvider>
						</Box>

						<Box className={classes.logintext}>
							<Link to={ROUTES.REGISTRATION} className={classes.linkTag}>
								Wanna Sign Up?{'  '}&nbsp;&nbsp;
							</Link>{' '}
							<Link className={classes.linkTag} to={ROUTES.FORGOT_PASSWORD}>
								{' '}
								Forgot Password?
							</Link>
						</Box>
					</Grid>
					<Grid item lg={1} xl={1} md={1} sm={1}></Grid>
				</Grid>
			</Box>
		</>
	);
};

export default Login;
