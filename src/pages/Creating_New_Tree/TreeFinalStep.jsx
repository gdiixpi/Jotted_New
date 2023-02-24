import React, { useState } from 'react';
import { withStyles } from '@mui/styles';
import { Box, Paper, TextField } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import ROUTES from '../../utils/Contants_Data/Route.Constants';
import JottedButton from '../../Components/Buttons/Jotted_Button/JottedButton';
import JottedHeader from '../../Components/Header/JottedHeader';
import styles from './newtree.flow.style';
import { useDispatch } from 'react-redux';
// import { setNewTree } from '../../Redux/newTreeData/newTree.action';
// import useAuth from '../../hooks/useAuth';
import clsx from 'clsx';
import EditButton from '../../Components/Buttons/Edit_Button/EditButton';
// import MiniAddButton from '../../Components/Buttons/MiniAddButton/MiniAddButton';
import { isAuthenticated } from '../../utils/utils';
import { axiosPrivate } from '../../services/Axios/axios';

const TreeFinalStep = (props) => {
	const { classes } = props;
	const navigate = useNavigate();
	const { state } = useLocation();
	// const { auth } = useAuth();
	// const dispatch = useDispatch();

	const [showTF, setShowTF] = useState(true);
	const [isValid, setIsValid] = useState(true);

	const [treeInput, setTreeInput] = useState({
		name: state?.name || '',
		description: '',
		title: '',
		topic: '',
		rootNodeName: ''
	});

	const treeInputChangeHandler = (e) => {
		setTreeInput({
			...treeInput,
			[e.target.name]: e.target.value
		});
	};

	// back btn handler
	const FinalStepbackBtnHandler = () => {
		// needs to be redirected to the home ie. ROUTES.HOME
		navigate(ROUTES.ADDING_TAGS);
	};

	// edit btn ..
	const editBtnHandler = () => {
		setShowTF(false);
	};

	// mini
	// const miniaddbtnHandler = () => {
	// 	setIsValid(false);
	// };

	//next button..
	const FinalStepButtonHandler = async () => {
		// navigate(ROUTES.MAIN_TREE);

		// dispatch(setNewTree({ ...state, ...treeInput, user_id: isAuthenticated().user?.id }));
		// export const newTreeApiFn = async (payload) => {
		// console.log('STATE:', state);
		// return false;
		try {
			let { rootNodeName, ...restTreeInput } = treeInput;
			let payload = { ...state, ...restTreeInput, user_id: isAuthenticated().user?.id };
			const url = '/tree';
			const response = await axiosPrivate.post(url, payload);
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					type: 'default',
					label: rootNodeName,
					tree_id: response.data.id,
					position: {
						x: 100,
						y: 100
					}
				})
			};
			const responseNode = await fetch(`https://xg3n-4mh1-ngd5.n7.xano.io/api:w4ONEGEJ/naufeltree`, requestOptions);
			await responseNode.json();
			navigate(ROUTES.HOME);
		} catch (error) {
			console.error('ERROR:', error);
		}

		// return response;
		// };
	};
	// jsx code

	return (
		<Box className={classes.coverBox}>
			<JottedHeader onClick={FinalStepbackBtnHandler} />
			<Box className={classes.root}>
				<Box className={clsx(classes.ContainBox, classes.finalTreeContainBox)}>
					<p>Now for the final step!</p>
					<Box className={classes.Boxpara2}>
						<p>
							Edit your tree preview and <span>add your first topic.</span>
						</p>
					</Box>

					<Box className={classes.TreeFinalStepBox}>
						<Box className={classes.InputBox}>
							<Box className={classes.TextFieldBox}>
								<TextField
									fullWidth
									disabled={showTF ? true : false}
									onBlur={() => setShowTF(true)}
									className={classes.textField}
									placeholder="Tree Name"
									name="name"
									value={treeInput?.name}
									onChange={treeInputChangeHandler}
								/>
							</Box>

							<Box className={classes.TextFieldBox}>
								<TextField
									fullWidth
									className={classes.textField}
									placeholder="Type a description of the tree here.."
									id="outlined-start-adornment"
									multiline
									rows={2}
									name="description"
									value={treeInput?.description}
									onChange={treeInputChangeHandler}
								/>
							</Box>
						</Box>

						<Box className={classes.EditButtonPen}>
							<EditButton type="big" onClick={editBtnHandler} />
						</Box>
					</Box>

					<Paper elevation={1} className={classes.FinalStepPaper}>
						<Box className={classes.FinalStepPaperBody}>
							<Box className={classes.FinalStepPaperBox}>
								<TextField
									variant="standard"
									className={clsx(classes.textFieldFinalTree, classes.textFieldTextCenter)}
									placeholder="Root Node"
									id="outlined-start-adornment"
									name="rootNodeName"
									value={treeInput?.rootNodeName}
									onChange={treeInputChangeHandler}
								/>
							</Box>

							<Box className={classes.FinalStepLine}></Box>

							{/* <Box style={{ display: isValid ? 'block' : 'none' }}>
								<Tooltip title="Click the plus icon to add a topic branch to your tree." placement="left-start">
									<MiniAddButton onClick={miniaddbtnHandler} />
								</Tooltip>
							</Box> */}

							<Box className={classes.FinalStepLastBox}>
								<TextField
									// fullWidth
									className={clsx(classes.textField, classes.textField2finaltree)}
									style={{ display: isValid ? 'none' : 'block' }}
									placeholder="|Type Name "
									id="outlined-start-adornment"
									name="topic"
									value={treeInput?.topic}
									onChange={treeInputChangeHandler}
								/>
							</Box>
						</Box>
					</Paper>
					<br />
					<Box className={classes.JottedButtonBox}>
						<JottedButton type="primary" onClick={FinalStepButtonHandler}>
							Save and Finish
						</JottedButton>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default withStyles(styles)(TreeFinalStep);
