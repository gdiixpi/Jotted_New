import React from 'react';
import { withStyles } from '@mui/styles';
import { Box, Grid, TextField } from '@mui/material';
import { ReactComponent as JottedBigLogo } from '../../../Assets/svg/jotted.svg';
import JottedButton from '../../../Components/Buttons/Jotted_Button/JottedButton';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../../Components/Buttons/Back_Button/BackButton';
import ROUTES from '../../../utils/Contants_Data/Route.Constants';
import { Form, FormikProvider, getIn, useFormik } from 'formik';
import * as yup from 'yup';
import useAuth from '../../../hooks/useAuth';
// import { useSnackbar } from 'notistack';
// import thankyoutopline from '../../../Assets/images/thankyoutopline.png';
// import thankyoubottomline from '../../../Assets/images/thankyoubottomline.png';

const styles = () => ({
	root: {
		// border: '1px solid red'
		width: '100%'
		// height: '100%',
		// display: 'flex',
		// justifyContent: 'space-around',
		// alignItems: 'center',
		// backgroundImage: `url(${thankyoutopline}) ,url(${thankyoubottomline})`,
		// backgroundRepeat: `no-repeat, no-repeat`,
		// backgroundPosition: `left top , left bottom`,
		// backgroundSize: `97% 55%, 100% 33%`
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
	boxData: {
		padding: '5px 10px',
		height: '100%',
		width: '414px',
		maxWidth: '85%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-evenly',
		'& .MuiTextField-root': {
			minWidth: '100%',
			'& .MuiInputBase-root': {
				'&.MuiInput-root:after': {
					borderBottom: '2px solid brown'
				}
			}
		}
		// '&.MuiBox-root': {
		// 	'&:hover': {
		// 		// border: 'none'
		// 	}
		// }
	},
	headingBox: {
		fontFamily: 'Poppins-Regular',
		fontStyle: 'normal',
		fontWeight: '500',
		letterSpacing: '0.2px',
		'& h2': {
			color: '#6d4c44',
			marginBottom: '50px',
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
	submitBtn: {
		margin: '40px auto !important'
	},
	//media query for 768px of screeen...

	'@media (max-width: 768px)': {
		boxData: {
			width: '414px',
			maxWidth: '80%'
		},
		headingBox: {
			'& h2': {
				marginBottom: '30px',
				fontSize: '25px'
			}
		}
	}
});

//.............................end of the styling..............................

const ForgotPassword = (props) => {
	const { classes } = props;
	const navigate = useNavigate();
	const { forgotPassword } = useAuth();

	// formik........
	const defaultValue = {
		email: ''
	};

	const validationSchema = yup.object().shape({
		email: yup.string().required('please enter your email').email('please enter valid email')
	});

	const formik = useFormik({
		initialValues: defaultValue,
		validationSchema: validationSchema,
		onSubmit: async (values, { setSubmitting, resetForm }) => {
			// console.log('values: ', values);
		}
	});

	const { errors, values, touched, getFieldProps, setFieldError, setTouched, handleSubmit } = formik;

	// events handler........
	const forgotPasswordBtnHandler = async () => {
		await forgotPassword({ email: values.email });
		// navigate(ROUTES.SET_PASSWORD, { replace: true });
	};

	// back btn code...
	const forgotPasswordBackBtnHandler = () => {
		navigate(ROUTES.LOGIN);
	};

	return (
		<>
			{/* <Box className={classes.root}>
				<Box>
					<img src={jottedLogo} alt="jotted" />
				</Box>
			
			</Box> */}

			<Box className={classes.root}>
				<Box style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '14px' }}>
					<BackButton onClick={forgotPasswordBackBtnHandler} />
				</Box>
				<Grid container className={classes.mainGrid}>
					<Grid item lg={1} xl={1} md={1} sm={1}></Grid>
					<Grid item lg={5} xl={5} md={12} sm={12} xs={12} className={classes.gridChildOne}>
						<JottedBigLogo />
					</Grid>
					<Grid item lg={5} xl={5} md={12} sm={12} xs={12} className={classes.gridChildTwo}>
						<Box className={classes.boxData}>
							<Box className={classes.headingBox}>
								<h2>Forgot your password</h2>
								<p>Please enter the email address you'd like your password reset information sent to</p>
							</Box>
							<FormikProvider value={formik}>
								<Form onSubmit={handleSubmit}>
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
									<JottedButton
										type="primary"
										disabled={values.email && Object.keys(errors).length === 0 ? false : true}
										customclass={classes.submitBtn}
										onClick={forgotPasswordBtnHandler}>
										Submit
									</JottedButton>
								</Form>
							</FormikProvider>
						</Box>
					</Grid>
					<Grid item lg={1} xl={1} md={1} sm={1}></Grid>
				</Grid>
			</Box>
		</>
	);
};

export default withStyles(styles)(ForgotPassword);
