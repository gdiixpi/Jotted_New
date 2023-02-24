import React, { useState } from 'react';
import { withStyles } from '@mui/styles';
import { Box, TextField } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

import ROUTES from '../../utils/Contants_Data/Route.Constants';
import JottedButton from '../../Components/Buttons/Jotted_Button/JottedButton';
import styles from './Questions.style';
import clsx from 'clsx';
import JottedHeader from '../../Components/Header/JottedHeader';
import useAuth from '../../hooks/useAuth';
import { axiosInstance } from '../../services/Axios/axios';

const FavoriteQuestion = (props) => {
	const { classes } = props;
	const navigate = useNavigate();
	const { state } = useLocation();
	const { auth } = useAuth();

	const [favText, setFavText] = useState('');

	// back btn handler

	const FavoritebackBtnHandler = () => {
		navigate(ROUTES.UNIVERSITY);
	};
	// btn handler
	const nextFavBtnHandler = async () => {
		await axiosInstance.post('/add_school_fav_question', {
			user_id: auth?.user?.id,
			school_university: state?.school_university ? state?.school_university : '',
			question: favText ? favText : ''
		});

		navigate(ROUTES.HOME);
	};

	const skipFavBtnHandler = async () => {
		await axiosInstance.post('/add_school_fav_question', {
			user_id: auth?.user?.id,
			school_university: state?.school_university,
			question: ''
		});

		navigate(ROUTES.HOME);
	};

	// jsx code

	return (
		<>
			<Box className={classes.coverBox}>
				<JottedHeader onClick={FavoritebackBtnHandler} className={classes.HeaderBgColor} />
				<Box className={classes.root}>
					<Box className={classes.ContainBox}>
						<p>What is your favorite question?</p>
						<Box className={classes.Boxpara2}>
							<p>
								No worries if you can’t think of one yet, you can <br /> come back to this in your profile later!
							</p>
						</Box>

						<Box className={clsx(classes.InputBox, classes.FavInputBox)}>
							<TextField
								fullWidth
								className={classes.textField}
								placeholder="Type Here.."
								id="outlined-start-adornment"
								multiline
								rows={3}
								value={favText}
								onChange={(e) => {
									setFavText(e.target.value);
								}}
							/>

							<JottedButton type="primary" customclass={classes.NextBtn} onClick={nextFavBtnHandler}>
								Next
							</JottedButton>
							<JottedButton type="secondary" customclass={classes.NextBtn} onClick={skipFavBtnHandler}>
								Skip
							</JottedButton>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default withStyles(styles)(FavoriteQuestion);
