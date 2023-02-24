import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { withStyles } from '@mui/styles';
import { Box, Grid } from '@mui/material';
// import jottedLogo from '../../../Assets/images/jotted.png';
import JottedButton from '../../../Components/Buttons/Jotted_Button/JottedButton';
// import thankyoutopline from '../../../Assets/images/thankyoutopline.png';
// import thankyoubottomline from '../../../Assets/images/thankyoubottomline.png';
import BackButton from '../../../Components/Buttons/Back_Button/BackButton';
import { ReactComponent as JottedBigLogo } from '../../../Assets/svg/jotted.svg';
import useAuth from '../../../hooks/useAuth';
import ROUTES from '../../../utils/Contants_Data/Route.Constants';

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
		alignItems: 'center'
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
		height: '50%',
		display: 'flex',
		flexDirection: 'column',
		textAlign: 'center',
		justifyContent: 'space-evenly',
		'&.MuiTextField-root': {
			width: '100%'
		},
		'&.MuiBox-root': {
			'&:hover': {
				border: 'none'
			}
		}
	},
	headingBox: {
		fontFamily: 'Poppins-Regular',
		fontStyle: 'normal',
		fontWeight: '500',
		letterSpacing: '0.2px',
		marginTop: '-41px',
		'& h2': {
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
	inputBoxfield: {
		margin: '40px 10px',
		width: '45px',
		height: '45px',
		fontSize: '30px',
		fontWeight: '700',
		fontStyle: 'normal',
		fontFamily: 'Poppins-Regular',
		textAlign: 'center',
		color: '#6d4c44'
	},
	verifyBtn: {
		margin: '0px auto !important'
	},
	//media query for 768px of screeen...

	'@media (max-width: 768px)': {
		inputBoxfield: {
			width: '35px',
			height: '35px'
		}
	}
});

const VerifyOtp = (props) => {
	const { classes } = props;
	const navigate = useNavigate();
	const { VerifyUser, VerifyEmail } = useAuth();
	const { state } = useLocation();

	const [otp, setOtp] = useState({
		code1: '',
		code2: '',
		code3: '',
		code4: ''
		// code5: '',
		// code6: ''
	});

	const handleOtpInput = (e, item, i) => {
		const CurrentElement = document.getElementById(item);

		if (CurrentElement?.value?.length === 1) {
			const NextElement = document.getElementById(item.replace(item.charAt(item.length - 1), (i + 2).toString()));

			NextElement?.focus();
		}

		if (e.key === 'Backspace') {
			const PreviousElement = document.getElementById(item.replace(item.charAt(item.length - 1), i.toString()));

			PreviousElement?.focus();
		}
	};

	const verifyOtpBtnHandler = async () => {
		const { code1, code2, code3, code4 } = otp;
		const otpPayload = Number(code1 + code2 + code3 + code4);
		// api call to verify otp...

		if (state?.show) {
			await VerifyEmail({ email: state.email, otp: otpPayload });
		} else {
			await VerifyUser({ email: state.email, otp: otpPayload });
		}
	};

	const verifyOtpBackBtnHandler = () => {
		navigate(ROUTES.LOGIN);
	};

	return (
		<>
			<Box className={classes.root}>
				<Box style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '14px' }}>
					<BackButton onClick={verifyOtpBackBtnHandler} />
				</Box>
				<Grid container className={classes.mainGrid}>
					<Grid item lg={1} xl={1} md={1} sm={1}></Grid>
					<Grid item lg={5} xl={5} md={12} sm={12} xs={12} className={classes.gridChildOne}>
						<JottedBigLogo />
					</Grid>
					<Grid item lg={5} xl={5} md={12} sm={12} xs={12} className={classes.gridChildTwo}>
						<Box className={classes.boxData}>
							<Box className={classes.headingBox}>
								<h2>Verify your OTP</h2>
								<Box>
									{Object.keys(otp).map((item, i) => (
										<input
											key={item}
											type="text"
											autoComplete="off"
											className={classes.inputBoxfield}
											value={otp[item]}
											maxLength={1}
											id={item}
											onChange={(e) => {
												let temp = { ...otp };
												temp[item] = e.target.value;
												setOtp(temp);
											}}
											onKeyUp={(e) => {
												handleOtpInput(e, item, i);
											}}
										/>
									))}
								</Box>
							</Box>

							<JottedButton type="primary" onClick={verifyOtpBtnHandler} customclass={classes.verifyBtn}>
								Verify Otp
							</JottedButton>
						</Box>
					</Grid>
					<Grid item lg={1} xl={1} md={1} sm={1}></Grid>
				</Grid>
			</Box>
		</>
	);
};

export default withStyles(styles)(VerifyOtp);
