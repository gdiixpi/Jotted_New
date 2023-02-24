import React from 'react';
import { Box, Stack } from '@mui/material';
import { withStyles } from '@mui/styles';
import { ReactComponent as WorkingLady } from '../../Assets/svg/workinglady.svg';
import topLinePng from '../../Assets/images/toplinePng.png';
import bottomLinePng from '../../Assets/images/bottomPng.png';
import JottedButton from '../../Components/Buttons/Jotted_Button/JottedButton';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../utils/Contants_Data/Route.Constants';

const styles = () => ({
	root: {
		height: '99%',
		backgroundImage: `url(${topLinePng}) ,url(${bottomLinePng})`,
		backgroundRepeat: `no-repeat, no-repeat`,
		backgroundPosition: `left top , left bottom`
	},

	mainGrid: {
		display: 'flex'
	},
	svgCont: {
		height: '70vh',
		width: '50vw'
	},

	welcomeText: {
		width: '50vw',
		textAlign: 'center',
		letterSpacing: '0.2px',
		fontFamily: 'Poppins-Regular',
		fontStyle: 'normal',
		'& p': {
			fontWeight: '500',
			fontSize: '22px',
			lineHeight: '33px',
			color: '#171312 ',

			'& span': {
				fontWeight: 600,
				fontSize: '40px',
				lineHeight: '60px',
				color: '#684D45'
			},
			'&.lastchild': {
				fontWeight: '300',
				fontSize: '15px',
				lineHeight: '22px',
				color: 'rgba(23, 19, 18, 0.46)'
			}
		}
	},
	jottedBTn: {
		width: '100%'
	},

	//media query for 768px of screeen...

	'@media (max-width: 768px)': {
		svgCont: {
			width: '70vw',
			marginTop: '50px'
		},
		welcomeText: {
			width: '80vw'
		}
	}
});

const Welcome = (props) => {
	const { classes } = props;
	const navigate = useNavigate();

	const buttonHandler = () => {
		navigate(ROUTES.LOGIN);
	};

	return (
		<>
			<Stack
				spacing={{ xs: 2, sm: 3, md: 7, lg: 10 }}
				justifyContent="center"
				alignItems="center"
				direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }}
				className={classes.root}
				style={{ backgroundSize: `90% 45%, 100% 33%` }}>
				<Stack className={classes.svgCont}>
					<WorkingLady width="100%" height="100%" />
				</Stack>
				<Stack>
					<Box className={classes.welcomeText}>
						<p>
							Hello! Welcome to
						</p>
						<p><span>jotted</span></p>
						<p>We’re glad to see you!</p>
						{/* <p className={'lastchild'}>Help us build the world’s first open education K-12 curriculum!</p> */}
						<JottedButton type="primary" customclass={classes.jottedBTn} onClick={buttonHandler}>
							Let’s Go!
						</JottedButton>
					</Box>
				</Stack>
			</Stack>
		</>
	);
};

export default withStyles(styles)(Welcome);
