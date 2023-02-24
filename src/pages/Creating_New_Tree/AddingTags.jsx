import React, { useState } from 'react';
import { withStyles } from '@mui/styles';
import { Box, Paper, TextField } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import ROUTES from '../../utils/Contants_Data/Route.Constants';
import JottedButton from '../../Components/Buttons/Jotted_Button/JottedButton';
import JottedHeader from '../../Components/Header/JottedHeader';
import styles from './newtree.flow.style';
import clsx from 'clsx';

const AddingTags = (props) => {
	const { classes } = props;
	const navigate = useNavigate();

	const { state } = useLocation();

	// age state need to be deleted sooner..

	const Tag = (tagName) => (
		<span
			style={{
				height: 30,
				background: '#E8CD94',
				marginInline: 3,
				padding: '6px 15px',
				borderRadius: 34,
				color: '#000000',
				marginLeft: '33px',
				marginTop: '35px'
			}}>
			{tagName}
		</span>
	);

	const [value, setValue] = useState('');
	const [tags, setTags] = useState([]);
	console.log(value, 'value', tags, 'tags');

	const handleTagFormation = () => {
		// let tempValue = value.replace(/ /g, " #");
		// console.log("VALUEARR1:", tempValue);
		let valueArr = value.split(' ').reduce((prev, next) => [...prev, `#${next}`], []);
		setTags([...tags, ...valueArr]);
		setValue('');
	};
	// const menuItem1 = useRef(null);

	// drop down handler...

	// const AddingTagshandleChange = (event) => {

	// 	setAge(event.target.value);
	// };

	// back btn handler

	const addTagBackBtnHandler = () => {
		// needs to be redirected to the home ie. ROUTES.HOME
		navigate(ROUTES.AGE_INPUT);
	};
	// next button handler
	const addTagNextButtonHandler = () => {
		navigate(ROUTES.TREE_FINAL_STEP, { state: { ...state, tags: value.split(' ') } });
		console.log(value, 'hello', tags, 'tags');
	};
	// jsx code//
	return (
		<>
			<Box className={classes.coverBox}>
				<JottedHeader onClick={addTagBackBtnHandler} />
				<Box className={clsx(classes.root, classes.AddTagRoot)}>
					<Box className={clsx(classes.ContainBox, classes.AddTagcontainBox)}>
						<p>
							Now just a few quick questions to
							<br /> get your tree setup!
						</p>
						<Box className={classes.Boxpara2}>
							<p>Add some tags!</p>
						</Box>

						{/* <Box className={classes.InputBox}>
					<TextField fullWidth className={classes.textField} placeholder="Add some tags!" />
				</Box> */}
					</Box>
					<Paper elevation={1} className={classes.AddTagPaper}>
						<TextField
							fullWidth
							autoComplete="off"
							className={clsx(classes.textField, classes.AddTagTextField)}
							placeholder="Type Tags here"
							value={value}
							onChange={(e) => {
								setValue(e.target.value);
							}}
							onKeyUp={(e) => {
								(e.key === 'Enter' || !e.key) && handleTagFormation();
							}}
							inputProps={{ maxLength: 25 }}
						/>

						<Box style={{ marginTop: 20, width: '100%', height: '20%', wordWrap: ' break-word' }}>
							<Box style={{ border: '1px soid black' }}>{tags.map((obj) => Tag(obj))}</Box>
						</Box>
					</Paper>

					<JottedButton type="primary" onClick={addTagNextButtonHandler} customclass={classes.nxtButton}>
						Next
					</JottedButton>
				</Box>
			</Box>
		</>
	);
};

export default withStyles(styles)(AddingTags);
