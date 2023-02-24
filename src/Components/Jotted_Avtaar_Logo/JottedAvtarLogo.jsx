import { Box, Fab } from '@mui/material';
import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import clsx from 'clsx';
import { ReactComponent as JottedAvatarLogoSvg } from '../../Assets/svg/jottedAvatarLogoSvg.svg';

const useStyles = makeStyles({
	root: {
		height: '42px',
		border: 'none',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	customiseFabJottedLogo: {
		'&.MuiFab-root': {
			width: '42px',
			height: '42px',
			backgroundColor: '#FBF9F8',
			'&:hover': {
				backgroundColor: '#E8CD94'
			}
		}
	}
});

const JottedAvtarLogo = ({ customclass }) => {
	const classes = useStyles();

	return (
		<>
			<Box className={classes.root}>
				<Fab className={clsx(classes.customiseFabJottedLogo, customclass)}>
					<JottedAvatarLogoSvg />
				</Fab>
			</Box>
		</>
	);
};

export default JottedAvtarLogo;
