import React from 'react';
import { withStyles } from '@mui/styles';
import { Box, FormControl, MenuItem, Select } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

import ROUTES from '../../utils/Contants_Data/Route.Constants';
import JottedButton from '../../Components/Buttons/Jotted_Button/JottedButton';

import JottedHeader from '../../Components/Header/JottedHeader';
import styles from './opensource.flow.style';

const DISCIPLINE_DATA_ARRAY = [
	'Art & Culture',
	'Geography & places',
	'Health & fitness',
	'History & events',
	'Mathematics & abstractions',
	'Natural sciences & nature',
	'Philosophy & thinking',
	'Religion & spirituality',
	'Social sciences & society',
	'Technology & applied sciences',
	'Other'
];

const OpenDiscipline = (props) => {
	const { classes } = props;
	const navigate = useNavigate();

	// const { state } = useLocation();

	// age state need to be deleted sooner..
	const [disciplineName, setDisciplineName] = React.useState(0);

	const menuProps = {
		classes: {
			list: classes.list,
			paper: classes.paper
		}
	};
	// drop down handler...

	const DisciplinehandleChange = (event) => {
		setDisciplineName(event.target.value);
	};

	// back btn handler

	const DisciplinebackBtnHandler = () => {
		// needs to be redirected to the home ie. ROUTES.HOME
		navigate(ROUTES.OPEN_CATEOGRY);
	};
	// next button handler..
	const nextButtonDisciplineHandler = () => {
		navigate(ROUTES.OPEN_ADD_RESOURCE);
	};

	// jsx code
	return (
		<>
			<Box className={classes.coverBox}>
				<JottedHeader onClick={DisciplinebackBtnHandler} />
				<Box className={classes.root}>
					<Box className={classes.ContainBox}>
						<p>
							Now just a few quick questions to
							<br /> get your tree setup!
						</p>
						<Box className={classes.Boxpara2}>
							<p>Which Discipline best describes your tree?</p>
						</Box>

						<Box className={classes.InputBox}>
							<FormControl fullWidth className={classes.selectDropdownItems}>
								<Select labelId="demo-simple-select-label" id="demo-simple-select" value={disciplineName} onChange={DisciplinehandleChange} MenuProps={menuProps}>
									<MenuItem value={0} className={classes.displayNone}>
										Discipline Name
									</MenuItem>
									{DISCIPLINE_DATA_ARRAY.map((item, i) => (
										<MenuItem value={item} key={i + 1}>
											{item}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</Box>

						<JottedButton type="primary" onClick={nextButtonDisciplineHandler}>
							Next
						</JottedButton>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default withStyles(styles)(OpenDiscipline);
