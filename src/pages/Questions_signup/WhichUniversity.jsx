import React, { useEffect, useState } from 'react';
import { withStyles } from '@mui/styles';
import { Box, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../utils/Contants_Data/Route.Constants';
import JottedButton from '../../Components/Buttons/Jotted_Button/JottedButton';
// import { ReactComponent as SearchLogoSvg } from '../../Assets/svg/searchLogoSvg.svg';
// import CloseIcon from '@mui/icons-material/Close';
import styles from './Questions.style.js';
import JottedHeader from '../../Components/Header/JottedHeader';
import useAuth from '../../hooks/useAuth';
// import { axiosInstance } from '../../services/Axios/axios';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';

const WhichUniversity = (props) => {
	// const { auth } = useAuth();
	const { classes } = props;
	const navigate = useNavigate();

	const [suggestion, setSuggestion] = useState([]);
	// console.log('suggestion: ', suggestion);

	const [UniversityText, setUniversityText] = useState('');
	// console.log('text: ', UniversityText);

	// back btn handler

	const UniversitybackBtnHandler = () => {
		navigate(ROUTES.ROLES);
	};
	// nxt btn handler
	const nextBtnHandler = () => {
		// 	const responseApi = await axiosInstance.post('/add_school_fav_question', {
		// 		user_id: auth?.user?.id,
		// 		school_university: UniversityText
		// 	});
		// 	console.log('responseApi: ', responseApi);
		navigate(ROUTES.FAVORITE, { state: { school_university: UniversityText } });
	};

	useEffect(() => {
		UniversityText && loadData(UniversityText);
	}, [UniversityText]);

	// let count = 1;
	// const getSuggestions = function (fn, delay) {
	// 	let timer;
	// 	return function () {
	// 		let context = this,
	// 			args = arguments;
	// 		clearTimeout(timer);
	// 		timer = setTimeout(() => {
	// 			fn.apply(context, arguments);
	// 		}, delay);
	// 	};
	// };

	// const getData = (val) => {
	// 	console.log('Val:', val);
	// };
	const loadData = async (val) => {
		const response = await axios.get('http://universities.hipolabs.com/search', { params: { name: val, country: 'france' } });
		setSuggestion(response?.data?.slice(0, 5));
	};

	useEffect(() => {}, [suggestion]);

	// jsx code
	return (
		<>
			<Box className={classes.coverBox}>
				<JottedHeader onClick={UniversitybackBtnHandler} className={classes.HeaderBgColor} />
				<Box className={classes.root}>
					<Box className={classes.ContainBox}>
						<p>Tell us a little bit about yourself . . .</p>
						<Box className={classes.Boxpara2}>
							<p>Where do you currently attend school or university?</p>
						</Box>

						<Box className={classes.InputBox}>
							{/* <TextField
								fullWidth
								className={classes.textField}
								placeholder="Type Here.."
								id="outlined-start-adornment"
								value={UniversityText}
								onChange={(e) => {
									setUniversityText(e.target.value);
								}}
								InputProps={{
									// classes: { input: classes.PLACEHOLDER },
									startAdornment: !UniversityText && (
										<InputAdornment position="start">
											<SearchLogoSvg style={{ marginLeft: '20px' }} />
										</InputAdornment>
									),
									endAdornment: UniversityText && (
										<InputAdornment position="end">
											<CloseIcon onClick={() => setUniversityText('')} />
										</InputAdornment>
									)
								}}
							/> */}

							<Autocomplete
								style={{ width: '100%' }}
								disablePortal
								loading={true}
								id="combo-box-demo"
								// openOnFocus={true}
								options={suggestion}
								// options={[{ name: 'Rishabh' }, { name: 'Kunal' }]}
								getOptionLabel={(option) => option.name}
								// renderOption={(option) => option?.name}
								sx={{ width: 300 }}
								onChange={(e) => setUniversityText(e.target.value)}
								// inputValue={UniversityText}
								onInputChange={(e, val) => {
									setUniversityText(val);
									// console.log('VAKFJF:', val);
									// getSuggestions(getData(val), 500);
									// loadData(val);
									// setUniversityText(e);
								}}
								// inputValue={UniversityText}
								renderInput={(params) => (
									<TextField
										className={classes.textField}
										placeholder="Type Here.."
										{...params}
										// InputProps={{
										//   // classes: { input: classes.PLACEHOLDER },
										//   startAdornment: !UniversityText && (
										//     <InputAdornment position="start">
										//       <SearchLogoSvg style={{ marginLeft: '20px' }} />
										//     </InputAdornment>
										//   ),
										//   endAdornment: UniversityText && (
										//     <InputAdornment position="end">
										//       <CloseIcon onClick={() => setUniversityText('')} />
										//     </InputAdornment>
										//   )
										// }}
									/>
									// <TextField
									// 	{...params}
									// 	fullWidth
									// 	className={classes.textField}
									// 	placeholder="Type Here.."
									// 	id="outlined-start-adornment"
									// 	// value={UniversityText}
									// 	// onChange={(e) => {
									// 	// 	setUniversityText(e.target.value);
									// 	// }}
									// 	InputProps={{
									// 		// classes: { input: classes.PLACEHOLDER },
									// 		startAdornment: !UniversityText && (
									// 			<InputAdornment position="start">
									// 				<SearchLogoSvg style={{ marginLeft: '20px' }} />
									// 			</InputAdornment>
									// 		),
									// 		endAdornment: UniversityText && (
									// 			<InputAdornment position="end">
									// 				<CloseIcon onClick={() => setUniversityText('')} />
									// 			</InputAdornment>
									// 		)
									// 	}}
									// />
								)}
							/>

							<JottedButton type="primary" customclass={classes.NextBtn} onClick={nextBtnHandler}>
								Next
							</JottedButton>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default withStyles(styles)(WhichUniversity);
