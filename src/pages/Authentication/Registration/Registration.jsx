import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import makeStyles from '@mui/styles/makeStyles';
import { Box, Grid, TextField, InputAdornment, IconButton } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import BackButton from '../../../Components/Buttons/Back_Button/BackButton';
import JottedButton from '../../../Components/Buttons/Jotted_Button/JottedButton';
import GoogleIcon from '../../../Assets/images/googleIcon.png';
// import FacebookIcon from '../../../Assets/images/facebookIcon.png';
import { ReactComponent as JottedBigLogo } from '../../../Assets/svg/jotted.svg';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import ROUTES from '../../../utils/Contants_Data/Route.Constants';
import { Form, FormikProvider, getIn, useFormik } from 'formik';
import * as yup from 'yup';

// import { ReactComponent as CrossEyeIcon } from '../../../Assets/svg/crossEye.svg';
// import BackButton from '../../common/BackButton';

const useStyles = makeStyles({
	root: {
		width: '100%'
	},
	googleImg: {
		'&.MuiButton-root': {
			margin: '0px auto',
			border: '1px solid rgba(0, 0, 0, 0.2)',
			'&:hover': {
				backgroundColor: '#F5EBDD',
				border: '1px solid black'
			}
		},
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
		display: 'flex',
		'&.MuiGrid-root': {
			flexDirection: 'column',
			justifyContent: 'center',
			alignContent: 'center',
			alignItems: 'center'
		}
	},
	inputBox: {
		width: '414px',
		maxWidth: '86%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignContent: 'center',
		'& .MuiTextField-root': {
			width: '100%',
			marginTop: '0px',
			marginBottom: '32px'
		}
	},
	passwordField: {
		'&.MuiFormControl-root': {
			width: '100%',
			marginBottom: '32px'
		}
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
			marginBottom: '15px'
		}
	},
	logintext: {
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

// styling on the registration ends ...............................................................................................................

const Registration = (props) => {
	const classes = useStyles();
	const navigate = useNavigate();
	const { register } = useAuth();

	const [registerPayload, setRegisterPayload] = React.useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
		showPassword: false,
		showConfirmPassword: false
	});

	// formik validation......

	const defaultValue = {
		name: '',
		email: '',
		password: '',
		confirmpassword: ''
	};

	const validationSchema = yup.object().shape({
		name: yup
			.string()
			.required('please enter your name')
			.matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field '),
		email: yup.string().required('please enter your email').email('please enter valid email'),
		password: yup
			.string()
			.required('please enter your password')
			.min(6, 'Password length too short')
			.max(20, 'Password length too lengthy')
			.matches(
				new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{6,20}$/),
				'Password must contain at least 1 lowercase, 1 uppercase, 1 special character, and 1 number'
			),
		confirmpassword: yup
			.string()
			.oneOf([yup.ref('password')], "Password don't match")
			.required('Confirm password is required ')
	});

	const formik = useFormik({
		initialValues: defaultValue,
		validationSchema: validationSchema,
		onSubmit: async (values, { setSubmitting, resetForm }) => {
			// console.log('values: ', values);
		}
	});

	const { errors, values, touched, getFieldProps, setFieldError, setTouched, handleSubmit } = formik;
	// console.log('errors: ', errors);

	// event handler ---......

	// const handleChange = (prop) => (event) => {
	// 	setRegisterPayload({ ...registerPayload, [prop]: event.target.value });
	// };

	const handleClickShowPassword = () => {
		setRegisterPayload({
			...registerPayload,
			showPassword: !registerPayload.showPassword
		});
	};

	const handleClickShowConfirmPassword = () => {
		setRegisterPayload({
			...registerPayload,
			showConfirmPassword: !registerPayload.showConfirmPassword
		});
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const createBtnHandler = async () => {
		// try {
		await register({
			firstname: values.name.split(' ').slice(0, -1).join(' '),
			lastname: values.name.split(' ').slice(-1).join(' '),
			email: values.email,
			password: values.password
		});

		// navigate(ROUTES.OTP_VERIFY)

		// navigate(ROUTES.ROLES, { state: { firstname: values.name.split(' ').slice(0, -1).join(' '), lastname: values.name.split(' ').slice(-1).join(' '), email: values.email, password: values.password } });
	};

	const backBTnHandler = () => {
		// console.log('clicked');
		navigate(ROUTES.WELCOME);
	};

	return (
		<>
			<Box className={classes.root}>
				{/* <Container> */}
				<Box style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '14px' }}>
					<BackButton onClick={backBTnHandler} />
				</Box>
				<Grid container className={classes.mainGrid}>
					<Grid item lg={1} xl={1} md={1} sm={1}></Grid>
					<Grid item lg={5} xl={5} md={12} sm={12} xs={12} className={classes.gridChildOne}>
						<JottedBigLogo />
					</Grid>
					<Grid item lg={5} xl={5} md={12} sm={12} xs={12} className={classes.gridChildTwo}>
						<Box>
							<JottedButton type="normal" isimg={GoogleIcon} customclass={classes.googleImg}>
								Login with Google
							</JottedButton>
							{/* <JottedButton type="normal" isimg={FacebookIcon} customclass={classes.facebookImg}>
								Login with Facebook
							</JottedButton> */}
						</Box>

						<span className={classes.spanText}>- OR -</span>

						<Box className={classes.inputBox}>
							<FormikProvider value={formik}>
								<Form onSubmit={handleSubmit}>
									{/* // fullname */}
									<TextField
										label="Full Name"
										autoComplete="off"
										type="text"
										variant="standard"
										{...getFieldProps('name')}
										onKeyPress={() => {
											setFieldError({ ...errors, name: false });
											setTouched({ ...touched, name: false });
										}}
										error={Boolean(getIn(touched, `name`) && getIn(errors, `name`))}
										helperText={getIn(touched, `name`) && getIn(errors, `name`)}
									/>
									{/* // email  */}
									<TextField
										label="Email"
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
									{/* // password ..  */}

									<TextField
										label="Password"
										type={registerPayload.showPassword ? 'text' : 'password'}
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
														{registerPayload.showPassword ? <VisibilityOff /> : <Visibility />}
													</IconButton>
												</InputAdornment>
												//
											)
										}}
										error={Boolean(getIn(touched, `password`) && getIn(errors, `password`))}
										helperText={getIn(touched, `password`) && getIn(errors, `password`)}
									/>

									{/* // confirm password .. */}

									<TextField
										label="Confirm Password"
										type={registerPayload.showConfirmPassword ? 'text' : 'password'}
										variant="standard"
										{...getFieldProps('confirmpassword')}
										onKeyPress={() => {
											setFieldError({ ...errors, confirmpassword: false });
											setTouched({ ...touched, confirmpassword: false });
										}}
										InputProps={{
											endAdornment: (
												//

												<InputAdornment position="end">
													<IconButton aria-label="toggle password visibility" onClick={handleClickShowConfirmPassword} onMouseDown={handleMouseDownPassword}>
														{registerPayload.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
													</IconButton>
												</InputAdornment>
												//
											)
										}}
										error={Boolean(getIn(touched, `confirmpassword`) && getIn(errors, `confirmpassword`))}
										helperText={getIn(touched, `confirmpassword`) && getIn(errors, `confirmpassword`)}
									/>
								</Form>
							</FormikProvider>
						</Box>
						<JottedButton type="primary" customclass={classes.createAccount} onClick={createBtnHandler} disabled={values.name && Object.keys(errors).length === 0 ? false : true}>
							Create Account
						</JottedButton>

						<Box className={classes.logintext}>
							Already have an account?
							<Link to="/login" replace className={classes.linkTag}>
								Log in
							</Link>
						</Box>
					</Grid>
					<Grid item lg={1} xl={1} md={1} sm={1}></Grid>
				</Grid>
				{/* </Container> */}
			</Box>
		</>
	);
};

export default Registration;
