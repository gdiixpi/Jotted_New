import { Box, Fab } from '@mui/material';
import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import clsx from 'clsx';
import { ReactComponent as BackImg } from '../../../Assets/svg/backArrow.svg';

const useStyles = makeStyles({
	root: {
		width: '200px',
		height: '42px',
		border: 'none',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		'& span': {
			fontFamily: 'Poppins-Regular',
			fontWeight: '300',
			fontSize: '11px',
			lineHeight: '16.5px',
			color: '#684D45',
			letterSpacing: '0.2px',
			fontStyle: 'normal'
		}
	},
	customiseFabIcon: {
		'&.MuiFab-root': {
			marginRight: '9px',
			width: '42px',
			height: '42px',

			backgroundColor: '#F5EBDD',
			'&:hover': {
				backgroundColor: '#E8CD94'
			}
		}
	},

	//media query for 768px of screeen...

	'@media (max-width: 768px)': {
		root: {
			width: '120px'
		},
		customiseFabIcon: {
			'&.MuiFab-root': {
				marginRight: '9px',
				width: '35px',
				height: '27px'
			}
		}
	}
});

const BackButton = ({ customclass, onClick = () => null }) => {
	const classes = useStyles();

	return (
		<>
			<Box className={clsx(classes.root, customclass)} onClick={onClick}>
				<Fab className={clsx(classes.customiseFabIcon, customclass)}>
					<BackImg />
				</Fab>
				<span>Go back</span>
			</Box>
		</>
	);
};

export default BackButton;
