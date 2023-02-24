import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Box, Fab, Grid } from '@mui/material';
import { withStyles } from '@mui/styles';
import profileStyles from './profile.style';
import 'react-multi-carousel/lib/styles.css';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import JottedHeader from '../../Components/Header/JottedHeader';
import ReactFlow, { Controls } from 'react-flow-renderer';
// import ProfileNode from './ProfileNode';
// import Profileedge from './ProfileEdge';
// import { useCallback } from 'react';
// import IMG from '../../Assets/images/Profile_Image.png';
import Sidebar from '../../Components/Sidebar/Sidebar';

const ProfileEdge = [
	{ id: 'ea-b', source: 'a', target: 'b' },
	{ id: 'ea-d', source: 'a', target: 'd' },
	{ id: 'ea-c', source: 'a', target: 'c' },
	{ id: 'eb-e', source: 'a', target: 'e' },
	{ id: 'ee-f', source: 'a', target: 'f' },
	{ id: 'ee-f', source: 'a', target: 'g' },
	{ id: 'ee-f', source: 'a', target: 'h' },
	{ id: 'eh-i', source: 'a', target: 'i' },
	{ id: 'eh-j', source: 'a', target: 'j' },
	{ id: 'ei-k', source: 'a', target: 'k' },
	{ id: 'ec-l', source: 'a', target: 'l' },
	{ id: 'el-m', source: 'a', target: 'm' }
];

const ProfileNode = [
	{
		id: 'a',
		type: 'input',
		data: { label: 'Brinlee Kidd ' },
		position: { x: 450, y: 25 },
		style: {
			backgroundColor: '#F6F6F6',
			borderRadius: '20px'
		}
	},
	{
		id: 'b',
		data: { label: 'geography and places' },
		position: { x: 315, y: 150 },
		style: {
			width: '100px',
			height: '60px',
			borderRadius: '20px',
			fontSize: '13px'
		}
	},
	{
		id: 'c',
		data: { label: 'social sciences and society' },
		position: { x: 475, y: 200 },
		style: {
			width: '100px',
			height: '80px',
			borderRadius: '20px',
			fontSize: '13px'
		}
	},
	{
		id: 'd',
		data: { label: 'health and fitness' },
		position: { x: 315, y: -150 },
		parentNode: '',
		extent: 'parent',
		target: 'e',
		style: {
			width: '100px',
			height: '60px',
			borderRadius: '20px',
			fontSize: '13px'
		}
	},
	{
		id: 'e',
		data: { label: 'history and events' },
		position: { x: 620, y: -140 },
		parentNode: '',
		extent: 'parent',
		target: 'e',
		style: {
			width: '100px',
			height: '60px',
			borderRadius: '20px',
			fontSize: '13px'
		}
	},
	{
		id: 'f',
		data: { label: 'natural sciences and nature' },
		position: { x: 475, y: -180 },
		style: {
			width: '72px',
			height: '72px',
			borderRadius: '50%',
			fontSize: '10px',
			textOverflow: 'ellipsis',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
			// overflow: "hidden",
			// display: 'flex',
			// alignItems: 'center',
			// justifyContent: 'center'
		}
	},
	{
		id: 'g',
		data: { label: 'technology and applied sciences' },
		position: { x: 200, y: -70 },
		style: {
			width: 154,
			height: 215,
			borderRadius: '15px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		}
	},
	{
		id: 'h',
		data: { label: 'mathematics and abstractions' },
		position: { x: 615, y: 150 },
		style: {
			width: 50,
			height: 50,
			borderRadius: '50%',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		}
	},
	{
		id: 'i',
		data: { label: 'philosophy and thinking' },
		position: { x: 750, y: -70 },
		style: {
			width: 50,
			height: 30,
			borderRadius: '20px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		}
	},
	{
		id: 'j',
		data: { label: 'religion and spirituality' },
		position: { x: 750, y: 80 },
		style: {
			width: '100px',
			height: '80px',
			borderRadius: '20px',
			fontSize: '13px'
		}
	},
	{
		id: 'k',
		data: { label: 'art and culture' },
		position: { x: 200, y: 80 },
		style: {
			width: '100px',
			height: '60px',
			borderRadius: '20px',
			fontSize: '13px'
		}
	}

	// {
	// 	id: 'b',
	// 	data: { label: 'Skill' },
	// 	position: { x: 147.5, y: 140 },
	// 	style: {
	// 		width: '75px',
	// 		height: '46px',
	// 		borderRadius: '20px',
	// 		fontSize: '13px'
	// 	}
	// },
	// {
	// 	id: 'c',
	// 	data: { label: 'Learning' },
	// 	position: { x: 425.5, y: 140 },
	// 	style: {
	// 		width: '75px',
	// 		height: '46px',
	// 		borderRadius: '20px',
	// 		fontSize: '13px'
	// 	}
	// },
	// {
	// 	id: 'd',
	// 	data: { label: 'Media' },
	// 	position: { x: 288.34, y: 140 },
	// 	parentNode: '',
	// 	extent: 'parent',
	// 	target: 'e',
	// 	style: {
	// 		width: '75px',
	// 		height: '46px',
	// 		borderRadius: '20px',
	// 		fontSize: '13px'
	// 	}
	// },
	// {
	// 	id: 'e',
	// 	data: { label: 'HTML' },
	// 	position: { x: 149, y: 215 },
	// 	parentNode: '',
	// 	extent: 'parent',
	// 	style: {
	// 		width: '72px',
	// 		height: '72px',
	// 		borderRadius: '50%',
	// 		fontSize: '10px',
	// 		display: 'flex',
	// 		alignItems: 'center',
	// 		justifyContent: 'center'
	// 	}
	// },
	// {
	// 	id: 'f',
	// 	type: 'output',
	// 	data: { label: 'project Managment' },
	// 	position: { x: 149, y: 331 },
	// 	parentNode: '',
	// 	extent: 'parent',
	// 	style: {
	// 		width: '72px',
	// 		height: '72px',
	// 		borderRadius: '50%',
	// 		fontSize: '10px',
	// 		textOverflow: 'ellipsis'
	// 		// overflow: "hidden",
	// 		// display: 'flex',
	// 		// alignItems: 'center',
	// 		// justifyContent: 'center'
	// 	}
	// },
	// {
	// 	id: 'g',
	// 	type: 'group',
	// 	data: null,
	// 	position: { x: 249.1, y: 218 },
	// 	parentNode: '',
	// 	// extent: 'parent',
	// 	style: {
	// 		width: 154,
	// 		height: 215,
	// 		borderRadius: '15px'
	// 	}
	// },
	// {
	// 	id: 'h',
	// 	// type: 'input',
	// 	data: { label: '' },
	// 	position: { x: 53, y: 25 },
	// 	parentNode: 'g',
	// 	extent: 'parent',
	// 	style: {
	// 		width: 50,
	// 		height: 50,
	// 		borderRadius: '50%'
	// 	}
	// },
	// {
	// 	id: 'i',
	// 	// type: 'output',
	// 	data: { label: '' },
	// 	position: { x: 20, y: 90 },
	// 	parentNode: 'g',
	// 	extent: 'parent',
	// 	style: {
	// 		width: 50,
	// 		height: 30,
	// 		borderRadius: '20px'
	// 	}
	// },
	// {
	// 	id: 'j',
	// 	// type: 'output',
	// 	data: { label: '' },
	// 	position: { x: 90, y: 90 },
	// 	parentNode: 'g',
	// 	extent: 'parent',
	// 	style: {
	// 		width: 50,
	// 		height: 30,
	// 		borderRadius: '20px'
	// 	}
	// },
	// {
	// 	id: 'k',
	// 	// type: 'output',
	// 	data: { label: '' },
	// 	position: { x: 20, y: 140 },
	// 	parentNode: 'g',
	// 	extent: 'parent',
	// 	style: {
	// 		width: 50,
	// 		height: 30,
	// 		borderRadius: '20px'
	// 	}
	// },
	// {
	// 	id: 'l',
	// 	data: { label: '' },
	// 	position: { x: 427.5, y: 215 },
	// 	parentNode: '',
	// 	extent: 'parent',
	// 	style: {
	// 		width: '72px',
	// 		height: '72px',
	// 		borderRadius: '50%'
	// 	}
	// },
	// {
	// 	id: 'm',
	// 	data: { label: '' },
	// 	position: { x: 427.5, y: 331 },
	// 	parentNode: '',
	// 	extent: 'parent',
	// 	style: {
	// 		width: '72px',
	// 		height: '72px',
	// 		borderRadius: '50%'
	// 	}
	// }
];

const edgeOptions = {
	animated: false,
	style: {
		stroke: '#B3B3B3',
		strokeWidth: '2'
	}
};

const Home = (props) => {
	const { classes } = props;

	// const { auth, setAuth } = useAuth();
	// const navigate = useNavigate();
	const [treeEditable, setTreeEditable] = useState(false);
	// const dispatch = useDispatch();

	// const userData = useSelector((state) => state.userData);
	// console.log('userData: ', userData);

	// const treeData = useSelector((state) => state?.treeData?.create_new_tree);
	// console.log('treeData: ', treeData);

	return (
		<>
			<Box className={classes.rootBox}>
				<Box>
					<JottedHeader />
				</Box>
				<Box className={classes.bodyBox}>
					<Box>
						<Sidebar />
					</Box>
					<Box className={classes.mainContainBox}>
						<Box className={classes.mainHeading} style={{ backgroundSize: `53% 55%, 56% 22%` }}>
							<h3>
								jotted Tree | <span>Brinlee Kidd-Student-ASU</span>
							</h3>
							<p>find and relearn anything within your personal network of knowledge!</p>
						</Box>

						<Grid container justifyContent="center" alignItems="center" direction="row">
							{/* <Grid md={6} xs={12}>
								<div className={classes.GridBody}>
									<div className={classes.GridBodyIcon}>
										<Fab className={classes.IconButton}>
											<EditIcon />
										</Fab>
									</div>
									<div className={classes.GridBodyHeader}>
										<h3>About</h3>
										<div className={classes.GridBodyImg}>
											<img src={IMG} />
										</div>
										<div className={classes.GridBodyTextField}>
											<TextField id="outlined-basic" label="Email" placeholder="teamjotted@gmail.com" variant="outlined" sx={{ width: '70%' }} />
										</div>
										<div className={classes.GridBodyTextField}>
											<TextField id="outlined-basic" label="Instituion" variant="outlined" sx={{ width: '70%' }} placeholder="Arizona State University" />
										</div>
										<div className={classes.GridBodyTextField}>
											<TextField id="outlined-basic" label="Account Type" variant="outlined" sx={{ width: '70%' }} placeholder="Student" />
										</div>
										<p className={classes.GridBodyPara}>Favorite question here.</p>
									</div>
								</div>
	</Grid>*/}
							<Grid md={6} xs={12}>
								<div className={classes.ProfileBox}>
									<div className={classes.ReactFlowIcon}>
										<Fab className={classes.ReactFlowButton}>
											{treeEditable ? <SaveIcon onClick={() => setTreeEditable(false)} /> : <EditIcon onClick={() => setTreeEditable(true)} />}
										</Fab>
									</div>
									<div className={!treeEditable ? classes.disable : ''}>
										<div className={classes.ReactFlowBox}>
											<ReactFlow
												defaultNodes={ProfileNode}
												defaultEdges={ProfileEdge}
												defaultEdgeOptions={edgeOptions}
												panOnScroll={false}
												zoomOnScroll={false}
												fitView
												// style={reactFlowStyle}
												className={classes.ReactFlowBody}
												// connectionLineStyle={connectionLineStyle}
											>
												<Controls className={classes.ReactFlowControls} />
												{/* <Background /> */}
											</ReactFlow>
										</div>
									</div>
								</div>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default withStyles(profileStyles)(Home);
