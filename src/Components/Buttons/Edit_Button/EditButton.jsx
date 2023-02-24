import React from 'react';
import { makeStyles } from '@mui/styles';
import { Fab } from '@mui/material';
import clsx from 'clsx';
import { ReactComponent as EditBigSvg } from '../../../Assets/svg/editBigSvg.svg';
import { ReactComponent as EditSmallSvg } from '../../../Assets/svg/editSmallSvg.svg';

const useStyles = makeStyles({
	customiseFabEditBigBtn: {
		'&.MuiFab-root': {
			width: '42px',
			height: '42px',
			minHeight: '42px',
			backgroundColor: '#F1F0ED',
			'&:hover': {
				backgroundColor: '#e0e0e0',
				'& svg': {
					//
				}
			}
		}
	},
	customiseFabEditSmallBtn: {
		'&.MuiFab-root': {
			width: '28px',
			height: '28px',
			minHeight: '28px',
			backgroundColor: '#F1F0ED',
			'&:hover': {
				backgroundColor: '#e0e0e0'
			}
		}
	}
});

const EditButton = (props) => {
	const { type, customclass,onClick = () => null} = props;
	const classes = useStyles();

	return (
		<>
			{type === 'big' && (
				<Fab className={clsx(classes.customiseFabEditBigBtn, customclass)} onClick={onClick}>
					<EditBigSvg />
				</Fab>
			)}
			{type === 'small' && (
				<Fab className={clsx(classes.customiseFabEditSmallBtn, customclass)} onClick={onClick}>
					<EditSmallSvg />
				</Fab>
			)}
		</>
	);
};

export default EditButton;
