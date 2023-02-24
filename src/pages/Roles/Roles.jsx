import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { ROLES } from '../../utils/Contants_Data/MainApp.Constants';
import { withStyles } from '@mui/styles';
import { Box, Grid } from '@mui/material';
import BackButton from '../../Components/Buttons/Back_Button/BackButton';
import EducatorPng from '../../Assets/images/roles/Educator.png';
import StudentPng from '../../Assets/images/roles/Student.png';
import IndLearnerPng from '../../Assets/images/roles/Independent.png';
// import ROUTES from '../../utils/Contants_Data/Route.Constants';

const styles = () => ({
	root: {
		width: '100%',
		height: '100%'
	},
	backBtnBox: {
		marginTop: '14px',
		display: 'flex',
		justifyContent: 'flex-end'
	},
	backBtn: {},
	MainBox: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		fontFamily: 'Poppins-Regular',
		fontStyle: 'normal',
		fontWeight: '500',
		letterSpacing: '0.2px'
	},
	paraOne: {
		fontSize: '30px',
		lineHeight: '45px',
		color: '#171312'
	},
	paraTwo: {
		fontSize: '24px',
		lineHeight: '36px',
		color: '#171312',
		opacity: '0.5'
	},
	GridContainerRoot: {
		'& p': {
			fontWeight: '400',
			fontSize: '24px',
			lineHeight: '36px',
			letterSpacing: '0.2px',
			color: '#171412',
			opacity: '0.5'
		},
		'&.MuiGrid-root': {
			'& .MuiGrid-item': {
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				'& p:hover': {
					fontWeight: '700',
					color: '#000000',
					opacity: '0.5'
				}
			}
		}
	},

	boxOne: {
		width: '380px',
		height: '380px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'transparent',
		transition: 'backgroundColor .7s ease-out',
		borderRadius: '50%',
		'&:hover': {
			backgroundColor: '#e8cd94',
			backgroundRepeat: `no-repeat`,
			transition: 'backgroundColor .7s ease-out'
		}
	},
	ImgOne: {
		width: '300px',
		height: '300px',
		borderRadius: '50%',
		transition: 'all .7s ease-out',
		'&:hover': {
			transform: 'scale(1.2)'
		}
	},

	//media query for 768px of screeen...

	'@media (max-width: 768px)': {
		MainBox: {
			'& p': {
				fontSize: '25px',
				margin: '0px 10px'
			}
		},
		boxOne: {
			width: '260px',
			height: '260px'
		},
		ImgOne: {
			width: '200px',
			height: '200px'
		}
	}
});
// end of the styling........

const Roles = (props) => {
	const { state } = useLocation();
	const navigate = useNavigate();
	const { createRole } = useAuth();
	// const { firstname, lastname, email, password } = state; // Read values passed on state
	const { classes } = props;

	const studentHandler = async () => {
		await createRole({ user_id: state.user_id.id, role: Number(ROLES.Student) });
	};
	//..
	const educatorHandler = async () => {
		await createRole({ user_id: state.user_id.id, role: Number(ROLES.Educator) });
	};
	//...
	const independentLearner = async () => {
		await createRole({ user_id: state.user_id.id, role: Number(ROLES.Learner) });
	};

	const backBTnHandler = () => {
		navigate(-1);
	};

	return (
		<>
			<Box className={classes.root}>
				<Box className={classes.backBtnBox}>
					<BackButton customclass={classes.backBtn} onClick={backBTnHandler} />
				</Box>
				<Box className={classes.MainBox}>
					<p className={classes.paraOne}>Tell us a little bit about yourself . . .</p>

					<p className={classes.paraTwo}>Which of these best describe you?</p>

					<Grid container className={classes.GridContainerRoot}>
						<Grid item xs={12} sm={12} md={4} lg={4} xl={4} style={{}}>
							<Box className={classes.boxOne} onClick={educatorHandler}>
								<img src={EducatorPng} alt="educator" className={classes.ImgOne} />
							</Box>
							<p>Educator</p>
						</Grid>
						<Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
							<Box className={classes.boxOne} onClick={studentHandler}>
								<img src={StudentPng} alt="educator" className={classes.ImgOne} />
							</Box>
							<p>Student</p>
						</Grid>
						<Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
							<Box className={classes.boxOne} onClick={independentLearner}>
								<img src={IndLearnerPng} alt="educator" className={classes.ImgOne} />
							</Box>
							<p>Independent learner</p>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</>
	);
};

export default withStyles(styles)(Roles);
