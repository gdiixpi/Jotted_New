import { Box, Fab } from '@mui/material';
import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import clsx from 'clsx';
import { ReactComponent as SmallAddLogoSvg } from '../../../Assets/svg/smallAddLogoSvg.svg';

const useStyles = makeStyles({
	root: {
		// backgroundColor: '#f5ebdd',
		// border: '1px solid black',
		width: '92px',
		height: '92px',
		border: 'none'
	},
	customiseFabAddLogo: {
		'&.MuiFab-root': {
			// marginRight: '9px',
			// border: '1px solid black',
			borderRadius: '50%',
			width: '92px',
			height: '92px',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			// backgroundColor: '#FBF9F8',
			backgroundColor: 'rgba(196, 196, 196, 0.15)',

			'& svg': {
				marginTop: '5px'
			},

			'& span': {
				fontFamily: 'Poppins-Regular',
				fontStyle: 'normal',
				fontWeight: '400',
				fontSize: '12px',
				lineHeight: '18px',
				display: 'flex',
				alignItems: 'center',
				letterSpacing: '0.2px',
				color: '#C4C4C4',
				marginTop: '12px'
			},
			//hover effect....

			'&:hover': {
				// backgroundColor: '#E8CD94'

				'& svg': {
					// fill: '#FBF9F8'
					filter: 'invert(100%) sepia(2%) saturate(144%) hue-rotate(172deg) brightness(112%) contrast(86%) !important'
				},
				'& span': {
					color: '#FBF9F8'
				},
				backgroundColor: '#E8CD94'
			}
		}
	},

	// css for the small Add icon button...
	SmallAddBtn: {
		// border: '1px solid black',
		width: '92px',
		height: '92px',
		border: 'none'
	},
	customiseFabsmallAddLogo: {
		'&.MuiFab-root': {
			borderRadius: '50%',
			width: '100%',
			height: '100%',

			'& svg': {
				marginTop: '5px'
			},

			'& span': {
				fontSize: '8px',
				lineHeight: '12px',
				marginTop: '8px'
			},

			'&:hover': {
				'& span': {},
				backgroundColor: '#C4C4C4'
			}
		}
	}
});

const NewTreeButton = (props) => {
	const { customclass, onClick, label = 'Add New' } = props;
	const classes = useStyles();

	return (
		<>
			<Box className={clsx(classes.SmallAddBtn, customclass)}>
				<Fab className={clsx(classes.customiseFabAddLogo, classes.customiseFabsmallAddLogo, customclass)} onClick={onClick}>
					<SmallAddLogoSvg />
					<span>{label}</span>
				</Fab>
			</Box>
		</>
	);
};

export default NewTreeButton;
