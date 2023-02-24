import { Box } from '@mui/material';
import { withStyles } from '@mui/styles';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import JottedButton from '../../Components/Buttons/Jotted_Button/JottedButton';
import JottedHeader from '../../Components/Header/JottedHeader';
import ROUTES from '../../utils/Contants_Data/Route.Constants';
import styles from './opensource.flow.style';

const OpenAddResource = (props) => {
	const { classes } = props;
	const navigate = useNavigate();

	// const [categoryName, setCategoryName] = React.useState(0);

	// const menuProps = {
	// 	classes: {
	// 		list: classes.list,
	// 		paper: classes.paper
	// 	}
	// };

	// drop down handler...

	// const DescribehandleChange = (event) => {
	// 	setCategoryName(event.target.value);
	// };

	// back btn handler
	const DescribeNxtBtnHandler = () => {
		navigate(ROUTES.OPEN_DISCIPLINE);
	};

	return (
		<>
			<Box className={classes.coverBox}>
				<JottedHeader />

				<Box className={classes.root}>
					<Box className={classes.ContainBox}>
						<p>Choose a Cateogry</p>
						<Box className={classes.Boxpara2}>
							<p>Which category would you like to contribute to?</p>
						</Box>
						<Box className={classes.InputBox}>
							{/* <FormControl fullWidth className={classes.selectDropdownItems}>
								<Select labelId="demo-simple-select-label" id="demo-simple-select" value={categoryName} onChange={DescribehandleChange} MenuProps={menuProps}>
									<MenuItem value={0} className={classes.displayNone}>
										Category Name
									</MenuItem>
									<MenuItem value="Education">Education </MenuItem>
									<MenuItem value="Entertainment">Entertainment</MenuItem>
									<MenuItem value="Career">Career</MenuItem>
									<MenuItem value="Other">Other</MenuItem>
								</Select>
							</FormControl> */}
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

export default withStyles(styles)(OpenAddResource);
