import React from 'react';
import { withStyles } from '@mui/styles';
import { Box, FormControl, MenuItem, Select } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import ROUTES from '../../utils/Contants_Data/Route.Constants';
import JottedButton from '../../Components/Buttons/Jotted_Button/JottedButton';
import JottedHeader from '../../Components/Header/JottedHeader';
import styles from './newtree.flow.style';
import clsx from 'clsx';

const AGE_INPUT_DATA_ARRAY = ['0 - 5', '5 - 9', '9 - 13', '14 - 18', '19 - 22', '23 - 27', '28 - 33'];

const AgeGroupInput = (props) => {
	const { classes } = props;
	const navigate = useNavigate();
	const { state } = useLocation();

	const [age, setAge] = React.useState(4);

	const menuProps = {
		classes: {
			list: classes.list,
			paper: classes.paper
		}
	};

	// drop down handler...

	const AgeInputHandleChange = (event) => {
		setAge(event.target.value);
	};

	// back btn handler
	const AgeInputbackBtnHandler = () => {
		// needs to be changed redirection
		navigate(ROUTES.DISCIPLINE);
	};

	// next button handler..
	const nextButtonAgeInputHandler = () => {
		navigate(ROUTES.ADDING_TAGS, { state: { ...state, age_group: age } });
	};

	// jsx code

	return (
		<>
			<Box className={classes.coverBox}>
				<JottedHeader onClick={AgeInputbackBtnHandler} />
				<Box className={classes.root}>
					<Box className={classes.ContainBox}>
						<p>Which age group is your tree most relevant to?</p>
						<Box className={classes.Boxpara2}>
							<p>
								{' '}
								Now just a few quick questions to <br />
								get your tree setup!
							</p>
						</Box>

						<Box className={classes.InputBox}>
							<FormControl fullWidth className={clsx(classes.selectDropdownItems, classes.AgeDropdownStyle)}>
								<Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} onChange={AgeInputHandleChange} MenuProps={menuProps}>
									<MenuItem value={4} className={classes.displayNone}>
										19-23
									</MenuItem>
									{AGE_INPUT_DATA_ARRAY.map((item, i) => (
										<MenuItem value={item} key={i + 1}>
											{item}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</Box>

						<JottedButton type="primary" onClick={nextButtonAgeInputHandler}>
							Next
						</JottedButton>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default withStyles(styles)(AgeGroupInput);
