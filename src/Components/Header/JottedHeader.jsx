import React from 'react';
import { withStyles } from '@mui/styles';
import { Box } from '@mui/material';
import BackButton from '../Buttons/Back_Button/BackButton';
import JottedAvtarLogo from '../Jotted_Avtaar_Logo/JottedAvtarLogo';

const styles = () => ({
	HeaderBoxRoot: {
		// border: '1px solid blue',
		// backgroundColor: '#fff',
		width: '100%',
		paddingTop: '14px',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center'
	},

	BoxAvatar: {
		'&.MuiBox-root': {
			// border:'1px solid red',

			paddingLeft: '30px',
			width: '50%',

			display: 'flex',
			justifyContent: 'start'
		}
	},

	BoxBackButton: {
		'&.MuiBox-root': {
			width: '50%',
			// border: '1px solid black',
			display: 'flex',
			justifyContent: 'end'
		}
	},

	//media query for 768px of screeen...

	'@media (max-width: 768px)': {
		BoxAvatar: {
			paddingLeft: '15px !important'
		}
	}
});

const JottedHeader = (props) => {
	const { classes, onClick } = props;

	// jsx code
	return (
		<>
			<Box className={classes.HeaderBoxRoot}>
				<Box className={classes.BoxAvatar}>
					<JottedAvtarLogo />
				</Box>
				<Box className={classes.BoxBackButton}>
					<BackButton onClick={onClick} />
				</Box>
			</Box>
		</>
	);
};

export default withStyles(styles)(JottedHeader);
