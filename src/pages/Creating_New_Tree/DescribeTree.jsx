import React from 'react';
import { withStyles } from '@mui/styles';
import { Box, FormControl, MenuItem, Select } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import ROUTES from '../../utils/Contants_Data/Route.Constants';
import JottedButton from '../../Components/Buttons/Jotted_Button/JottedButton';
import JottedHeader from '../../Components/Header/JottedHeader';
import styles from './newtree.flow.style';

const DescribeTree = (props) => {
	const { classes } = props;
	const navigate = useNavigate();
	const { state } = useLocation();

	const [categoryName, setCategoryName] = React.useState(0);

	const menuProps = {
		classes: {
			list: classes.list,
			paper: classes.paper
		}
	};

	// drop down handler...

	const DescribehandleChange = (event) => {
		setCategoryName(event.target.value);
	};

	// back btn handler

	const DescribebackBtnHandler = () => {
		// needs to be redirected to the home ie. ROUTES.HOME
		navigate(ROUTES.NEW_TREE);
	};
	//next button..
	const DescribeNxtBtnHandler = () => {
		navigate(ROUTES.DISCIPLINE, { state: { ...state, category: categoryName } });
	};
	// jsx code
	return (
		<>
			<Box className={classes.coverBox}>
				<JottedHeader onClick={DescribebackBtnHandler} />
				<Box className={classes.root}>
					<Box className={classes.ContainBox}>
						<p>
							Now just a few quick questions to <br />
							get your tree setup!
						</p>
						<Box className={classes.Boxpara2}>
							<p>Which Category best describes your tree?</p>
						</Box>

						<Box className={classes.InputBox}>
							{/* <TextField fullWidth className={classes.textField} placeholder="Type Tree name" /> */}

							<FormControl fullWidth className={classes.selectDropdownItems}>
								<Select labelId="demo-simple-select-label" id="demo-simple-select" value={categoryName} onChange={DescribehandleChange} MenuProps={menuProps}>
									<MenuItem value={0} className={classes.displayNone}>
										Category Name
									</MenuItem>
									<MenuItem value="Education">Education </MenuItem>
									<MenuItem value="Entertainment">Entertainment</MenuItem>
									<MenuItem value="Career">Career</MenuItem>
									<MenuItem value="Other">Other</MenuItem>
								</Select>
							</FormControl>
						</Box>

						<JottedButton type="primary" onClick={DescribeNxtBtnHandler}>
							Next
						</JottedButton>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default withStyles(styles)(DescribeTree);
