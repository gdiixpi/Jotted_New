import React, { useState } from 'react';
import { withStyles } from '@mui/styles';
import { Box, InputAdornment, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../utils/Contants_Data/Route.Constants';
import JottedButton from '../../Components/Buttons/Jotted_Button/JottedButton';
import JottedHeader from '../../Components/Header/JottedHeader';
import { ReactComponent as SearchLogoSvg } from '../../Assets/svg/searchLogoSvg.svg';
import CloseIcon from '@mui/icons-material/Close';
import styles from './Questions.style';
import clsx from 'clsx';
import useAuth from '../../hooks/useAuth';
// import { axiosInstance } from '../../services/Axios/axios';

const TeachUniversity = (props) => {
	// const { auth } = useAuth();

	const { classes } = props;
	const navigate = useNavigate();

	const [teachText, setTeachText] = useState('');

	// btn handler
	const teachUniversitybackBtnHandler = () => {
		navigate(ROUTES.ROLES);
	};

	const NextBtnHandler = async () => {
		// const responseTeach = await axiosInstance.post('/add_school_fav_question',{
		//   user_id:auth?.user?.id ? auth?.user?.id : '',
		//   school_university:teachText
		// })
		// console.log('responseTeach: ', responseTeach);
		navigate(ROUTES.FAVORITE, { state: { school_university: teachText } });
	};
	const SkipBtnHandler = () => {
		navigate(ROUTES.FAVORITE);
	};
	// jsx code
	return (
		<>
			<Box className={classes.coverBox}>
				<JottedHeader onClick={teachUniversitybackBtnHandler} className={classes.HeaderBgColor} />
				<Box className={classes.root}>
					<Box className={clsx(classes.ContainBox, classes.ContainBoxTeachUniversity)}>
						<p>Tell us a little bit about yourself . . .</p>
						<Box className={clsx(classes.Boxpara2, classes.Box2para2teach)}>
							<p>Which school or university do you currently teach at?</p>
						</Box>

						<Box className={clsx(classes.InputBox, classes.INPUTbox2)}>
							<TextField
								fullWidth
								className={classes.textField}
								placeholder="Type Here.."
								id="outlined-start-adornment"
								value={teachText}
								onChange={(e) => {
									setTeachText(e.target.value);
								}}
								InputProps={{
									startAdornment: !teachText && (
										<InputAdornment position="start">
											<SearchLogoSvg style={{ marginLeft: '20px' }} />
										</InputAdornment>
									),
									endAdornment: teachText && (
										<InputAdornment position="end">
											<CloseIcon onClick={() => setTeachText('')} />
										</InputAdornment>
									)
								}}
							/>

							<JottedButton type="primary" customclass={classes.NextBtn} onClick={NextBtnHandler}>
								Next
							</JottedButton>
							<JottedButton type="secondary" customclass={classes.NextBtn} onClick={SkipBtnHandler}>
								Skip
							</JottedButton>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default withStyles(styles)(TeachUniversity);
