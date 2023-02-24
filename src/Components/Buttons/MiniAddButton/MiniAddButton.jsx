import React from 'react';
import { makeStyles } from '@mui/styles';
import { Fab } from '@mui/material';
import clsx from 'clsx';
import { ReactComponent as MiniAddBtnSvg } from '../../../Assets/svg/miniAddBtn.svg';


const useStyles = makeStyles({
	customiseFabMiniAddBtn: {
		'&.MuiFab-root': {
			width: '20px',
			height: '20px',
			minHeight: '20px',
			backgroundColor: '#F1F0ED',
			'&:hover': {
				backgroundColor: '#e0e0e0',
				'& svg': {
					//
				}
			}
		}
	},
	
});

const MiniAddButton = (props) => {
	const {  customclass,onClick = () => null} = props;
	const classes = useStyles();

	return (
		<>
			
				<Fab className={clsx(classes.customiseFabMiniAddBtn, customclass)} onClick={onClick}>
					<MiniAddBtnSvg />
				</Fab>
			
		</>
	);
};

export default MiniAddButton;
