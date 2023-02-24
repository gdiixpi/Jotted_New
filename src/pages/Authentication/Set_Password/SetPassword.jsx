import React from 'react';
import { withStyles } from '@mui/styles';
import { Box, Grid, InputAdornment, IconButton, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import JottedButton from '../../../Components/Buttons/Jotted_Button/JottedButton';
import { ReactComponent as JottedBigLogo } from '../../../Assets/svg/jotted.svg';
import BackButton from '../../../Components/Buttons/Back_Button/BackButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import ROUTES from '../../../utils/Contants_Data/Route.Constants';
import { Form, FormikProvider, getIn, useFormik } from 'formik';
import * as yup from 'yup';
import useAuth from '../../../hooks/useAuth';

const styles = () => ({
	root: {
		width: '100%'
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
	headingBox: {
		fontFamily: 'Poppins-Regular',
		fontStyle: 'normal',
		fontWeight: '500',
		letterSpacing: '0.2px',
		// marginTop: '-41px',
		marginBottom: '30px',
		'& h2': {
			textAlign: 'center',
			color: '#6d4c44',
			fontSize: '30px',
			lineHeight: '30px'
		},
		'& p': {
			color: '#171312',
			opacity: '0.5',
			fontSize: '15px',
			lineHeight: '20px'
		}
	},
	passwordField: {
		'&.MuiFormControl-root': {
			marginBottom: '15px'
		}
	},
	formData: {
		width: '400px',
		maxWidth: '86%'
	},
	inputBox: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		'& .MuiTextField-root': {
			marginTop: '0px',
			marginBottom: '32px',
			width: '100%'
		}
	},
	'& .MuiInputBase-root': {
		'&.MuiInput-root': {
			margin: '15px auto'
			// minWidth: '414px'
		}
	},
	'& .MuiButton-root': {
		marginLeft: 'auto',
		marginRight: 'auto'
	},
	submitBtn: {
		margin: '40px auto !important'
	},

	//media query for 768px of screeen...

	'@media (max-width: 768px)': {
		headingBox: {
			'& h2': {
				fontSize: '27px'
			}
		}
	}
});

//..................................................................styling end >............................

const SetPassword = (props) => {
	const { classes } = props;
	const navigate = useNavigate();
	// const { state } ();
	// console.log('state: ', state);
	const { changePassword, auth } = useAuth();

	const [setPasswordPayload, setPasswordPayloadFn] = React.useState({
		password: '',
		confirmPassword: '',
		showPassword: false,
		showConfirmPassword: false
	});
	// console.log('payloadValues: ', payloadValues);

	// validation using formik....

	const defaultValue = {
		password: '',
		confirmpassword: ''
	};

	const validationSchema = yup.object().shape({
		password: yup
			.string()
			.required('please enter your password')
			.min(6, 'Password length too short')
			.max(20, 'Password length too lengthy')
			.matches(
				new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{6,20}$/),
				'Password must be contain at least 1 lowercase, 1 uppercase, 1 special character, and 1 number'
			),
		confirmpassword: yup
			.string()
			.oneOf([yup.ref('password')], "Password don't match")
			.required('Confirm password is required ')
	});

	const formik = useFormik({
		initialValues: defaultValue,
		validationSchema: validationSchema,
		onSubmit: async (values, { setSubmitting, resetForm }) => {}
	});

	const { errors, values, touched, getFieldProps, setFieldError, setTouched, handleSubmit } = formik;
	//.......................

	// const handleChange = (prop) => (event) => {
	// 	setPayloadValues({ ...payloadValues, [prop]: event.target.value });
	// };

	const handleClickShowPassword = () => {
		setPasswordPayloadFn({
			...setPasswordPayload,
			showPassword: !setPasswordPayload.showPassword
		});
	};

	const handleClickShowConfirmPassword = () => {
		setPasswordPayloadFn({
			...setPasswordPayload,
			showConfirmPassword: !setPasswordPayload.showConfirmPassword
		});
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const setPasswordBtnHandler = async () => {
		await changePassword({ email: auth?.email, password: values.password });
		// navigate(ROUTES.LOGIN, { replace: true });
	};

	const setPassbackBtnHandler = () => {
		navigate(ROUTES.LOGIN);
	};

	//
	return (
		<>
			<Box className={classes.root}>
				<Box style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '14px' }}>
					<BackButton onClick={setPassbackBtnHandler} />
				</Box>
				<Grid container className={classes.mainGrid}>
					<Grid item lg={1} xl={1} md={1} sm={1}></Grid>
					<Grid item lg={5} xl={5} md={12} sm={12} xs={12} className={classes.gridChildOne}>
						<JottedBigLogo />
					</Grid>
					<Grid item lg={5} xl={5} md={12} sm={12} xs={12} className={classes.gridChildTwo}>
						<Box className={classes.headingBox}>
							<h2>Set your password</h2>
						</Box>

						{/* formik */}
						<Box className={classes.formData}>
							<FormikProvider value={formik}>
								<Form onSubmit={handleSubmit}>
									<Box className={classes.inputBox}>
										<TextField
											label="Password"
											type={setPasswordPayload.showPassword ? 'text' : 'password'}
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
															{setPasswordPayload.showPassword ? <VisibilityOff /> : <Visibility />}
														</IconButton>
													</InputAdornment>
													//
												)
											}}
											error={Boolean(getIn(touched, `password`) && getIn(errors, `password`))}
											helperText={getIn(touched, `password`) && getIn(errors, `password`)}
										/>
										<TextField
											label="Confirm Password"
											type={setPasswordPayload.showConfirmPassword ? 'text' : 'password'}
											name="confirmpassword"
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
															{setPasswordPayload.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
														</IconButton>
													</InputAdornment>
													//
												)
											}}
											error={Boolean(getIn(touched, `confirmpassword`) && getIn(errors, `confirmpassword`))}
											helperText={getIn(touched, `confirmpassword`) && getIn(errors, `confirmpassword`)}
										/>
									</Box>
								</Form>
							</FormikProvider>
						</Box>

						{/* end of formik         */}

						<JottedButton
							type="primary"
							disabled={values.password && Object.keys(errors).length === 0 ? false : true}
							customclass={classes.submitBtn}
							onClick={setPasswordBtnHandler}>
							Submit
						</JottedButton>
					</Grid>
					<Grid item lg={1} xl={1} md={1} sm={1}></Grid>
				</Grid>
			</Box>
		</>
	);
};

export default withStyles(styles)(SetPassword);
