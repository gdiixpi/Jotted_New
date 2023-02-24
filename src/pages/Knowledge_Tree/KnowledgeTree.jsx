import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Box, Button, Fab, Grid } from '@mui/material';
import clsx from 'clsx';
import { withStyles } from '@mui/styles';
import ReactFlow, { Controls } from 'react-flow-renderer';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import topLineForHome from '../../Assets/images/topLineForHome.png';
import bottomLineForHome from '../../Assets/images/bottomLineForHome.png';
import { ReactComponent as EditTreeImg } from '../../Assets/svg/edit_tree.svg';
import LanguageIcon from '@mui/icons-material/Language';
// import { height } from '@mui/system';
import NewTreeButton from '../../Components/Buttons/New_tree_Btn/NewTreeButton';
import ROUTES from '../../utils/Contants_Data/Route.Constants';
import Community_Img from '../../Assets/images/Community_Img.png';

const edgeOptions = {
	animated: false,
	style: {
		stroke: '#B3B3B3',
		strokeWidth: '2'
	}
};

const initialEdges = [{ id: 'ea-b', source: 'a', target: 'b' }];

const styles = () => ({
	rootBox: {
		'&.MuiBox-root': {
			// border:'1px solid black',
			backgroundColor: '#FFFFFF',
			width: '100%',
			height: 'fit-content',
			// height: '100%',
			// fontFamily: 'Poppins-Regular',
			// fontStyle: 'normal',
			overflowX: 'auto'
		}
	},

	bodyBox: {
		'&.MuiBox-root': {
			// width: '97%',
			// height: 'calc( 100% - 70px )',
			display: 'flex',
			flexWrap: 'wrap',
			marginTop: '20px',
			width: 'calc( 100% - 100px )',
			height: '100%',
			marginLeft: '60px',
			marginRight: '15px'
		}
	},

	// disable: {
	// 	cursor: 'pointer',
	// 	'& *': {
	// 		pointerEvents: 'none !important'
	// 	}
	// },

	//Left Side box Css........

	mainHeadingBox: {
		padding: '10px',
		marginRight: '41px',
		marginBottom: '20px'
	},

	customiseFabIcon: {
		'&.MuiFab-root': {
			marginRight: '9px',
			width: '35px',
			height: '30px',
			marginLeft: '15px',
			backgroundColor: '#FFF',
			'&:hover': {
				backgroundColor: '#C0D0C5'
			}
		}
	},

	mainHeading: {
		'&.MuiBox-root': {
			maxWidth: '100%',
			// width: '752.13px',
			width: '100%',
			// height: '134px',
			borderRadius: '34px',
			padding: '10px',
			backgroundColor: '#F1F0ED',
			backgroundImage: `url(${topLineForHome}) ,url(${bottomLineForHome})`,
			backgroundRepeat: `no-repeat, no-repeat`,
			backgroundPosition: `right top , left  bottom `,

			'& h3': {
				fontWeight: '600',
				fontSize: '24px',
				lineHeight: '36px',
				margin: '0px 10px',
				color: '#171312',
				'& span': {
					fontWeight: '700',
					fontSize: '24px',
					lineHeight: '36px',
					color: '#C0D0C5'
				}
			},
			'& p': {
				fontWeight: '400',
				fontSize: '15px',
				fontFamily: 'Poppins-regular',
				lineHeight: '22px',
				marginLeft: '10px',
				color: '#684D45'
			}
		}
	},

	TreeBox: {
		display: 'flex',
		// flexWrap: 'wrap',
		alignItems: 'center',
		'& div': {
			width: '20px',
			height: '20px',
			minWidth: '20px',
			borderRadius: '50%',
			background: '#C0C0C0'
		},
		'& p': {
			fontFamily: 'Poppins-regular',
			fontStyle: ' normal',
			fontWeight: ' 400',
			fontSize: ' 22px',
			marginLeft: '12px',
			lineHeight: ' 33px',
			letterSpacing: ' 0.2px',
			color: ' #171312'
		}
	},
	TreeBoxMain: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	TreeBoxTopic: {
		display: 'flex',
		flexWrap: 'wrap',
		'& div': {
			width: '2px',
			height: '1555.05px',
			margin: '-32px 0px 0px 9px',
			background: '#C0C0C0'
		}
	},
	NewTreeBox: {
		marginLeft: '40px'
	},
	addTreeBtn: {
		'&.MuiFab-root': {
			'&:hover': {
				webkitTransform: 'scale(0.8)',
				transform: 'scale(0.8)',
				transition: 'transform .5s ease-out'
			}
		}
	},

	//Righ Side box css........

	mainContainBox: {
		// marginRight: '60px'
	},

	mainContain: {
		'&.MuiBox-root': {
			width: '445px',
			borderRadius: '34px',
			height: '1044px',
			justifyContent: 'space-around',
			backgroundColor: '#F1F0ED',
			display: 'flex',
			flexWrap: 'wrap',
			flexDirection: 'column'
		}
	},
	mainContainTopic: {
		textAlign: 'center',
		'& h5': {
			fontWeight: '600',
			fontSize: '24px',
			fontFamily: 'Poppins-regular',
			lineHeight: '36px',
			color: '#171312',
			margin: '70px 0px 32px 0px'
		},
		'& p': {
			padding: '0px 47px',
			fontFamily: 'Poppins-regular',
			fontStyle: ' normal',
			fontWeight: ' 300',
			fontSize: ' 15px',
			lineHeight: ' 22px',
			letterSpacing: '0.2px',
			margin: '0px'
		}
	},
	CategoryBox: {
		backgroundColor: '#F1F0ED',
		borderRadius: '34px',
		marginTop: '35px',
		width: '451px',
		height: '513.88px',
		textAlign: 'center'
	},
	CategoryTopic: {
		padding: '44px 52px',
		textAlign: 'center',
		margin: 'auto',
		'& p': {
			fontWeight: ' 500',
			fontSize: ' 20px',
			lineHeight: ' 30px',
			fontFamily: 'Poppins-ragular',
			color: '#171312',
			letterSpacing: '0.2px',
			marginLeft: '20px',
			margin: '0',
			textAlign: 'Left',
			'& span': {
				fontWeight: ' 700',
				fontSize: ' 24px',
				lineHeight: ' 36px',
				color: '#684D45'
			}
		},
		'& img': {
			width: '272.22px',
			height: '230.88px',
			margin: '31px 0px !important'
		}
	},

	// ReactFlow CSS/........

	ReactFlowBox: {
		margin: '100px 0px'
	},

	GridIcon: {
		position: 'absolute',
		right: 0,
		textAlign: 'right',
		margin: '10px 10px 0px 0px'
	},
	GridIconButton: {
		'&.MuiFab-root': {
			width: '35px',
			height: '35px'
		}
	},
	GridReactFlowBody: {
		backgroundColor: '#F1EFED',
		borderRadius: '34px',
		height: '100%',
		width: '100%'
	},
	GridReactFlowControls: {
		position: 'absolute',
		left: '20px ',
		top: '15px',
		boxShadow: 'unset'
	},
	HeadingButton: {
		'&.MuiBox-root': {
			display: 'flex',
			flexWrap: 'wrap',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'space-around',
			// marginLeft: '40px',
			// marginRight: '30px',
			margin: '0px 30px 30px 40px'
		}
	},
	shareBtn: {
		'&.MuiButton-root': {
			background: ' #E8CD94',
			borderRadius: '8px',
			width: '188px',
			height: '55px',
			fontWeight: '600',
			fontSize: '15px',
			lineHeight: '22px',
			color: '#FFFFFF',
			'& svg': {
				marginRight: '10px',
				color: '#FFFFFF',
				width: '25px',
				height: '25px'
			}
		},
		'&:hover': {
			background: '#E8CD94 !important',
			color: '#FFF'
		}
	},

	GoBtn: {
		'&.MuiButton-root': {
			borderRadius: '8px',
			width: '188px',
			height: '48px',
			fontWeight: '400',
			fontSize: '15px',
			lineHeight: '22px',
			color: '#684D45',
			background: '#FFFFFF'
		},
		'&:hover': {
			background: '#FFFFFF !important',
			color: '#684D45'
		}
	},

	'@media (max-width: 768px)': {
		mainHeadingBox: {
			margin: '0px'
		}
	}
});

const KnowledgeTree = (props) => {
	const { classes } = props;
	// const { auth, setAuth } = useAuth();
	const navigate = useNavigate();
	// const { state } = useLocation();

	const params = useParams();
	const [treeEditable, setTreeEditable] = useState(false);

	const newTreebtnHandler = () => {
		navigate(ROUTES.NEW_TREE);
	};
	const initialNodes = [
		{
			id: 'a',
			type: 'input',
			data: { label: 'Calc 1' },
			position: { x: 180, y: 111 },
			style: {
				backgroundColor: '#C0D0C5',
				borderRadius: '75px',
				width: '118.81px',
				height: '118.81px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				border: 'none'
			}
		},

		{
			id: 'b',
			type: 'output',
			data: { label: `Topic ${params.id}` },
			position: { x: 183, y: 281 },
			style: {
				width: '114.33px',
				height: '63.55px',
				borderRadius: '34px',
				border: '1.3px solid #C0D0C5',
				fontSize: '13px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}
		}
	];

	return (
		<>
			<Box className={classes.rootBox}>
				<Box className={classes.bodyBox}>
					<Box className={classes.mainHeadingBox}>
						<Box className={classes.mainHeading} style={{ backgroundSize: `55% 43%, 56% 22%` }}>
							<h3>
								Main Tree
								<Fab className={clsx(classes.customiseFabIcon)}>
									<EditTreeImg />
								</Fab>
								<span>Category Title</span>
							</h3>
							<p>
								Add a description for your Subject Tree. ‘This tree covers topics relating to ASU Calculus 1, including topics such as derivatives, functions, intervals and limits.{' '}
							</p>
						</Box>
						<Box className={classes.TreeBox}>
							<div></div>
							<p>Type new query here</p>
						</Box>
						<Box className={classes.TreeBoxMain}>
							<Box className={classes.TreeBoxTopic}>
								<div></div>
							</Box>
							<Box className={classes.NewTreeBox}>
								<NewTreeButton type="big" customclass={classes.addTreeBtn} onClick={newTreebtnHandler} />
							</Box>
						</Box>
					</Box>
					<Box className={classes.mainContainBox}>
						<Box className={classes.mainContain}>
							<Box className={classes.mainContainTopic}>
								<h5>Tree Name</h5>
								<p>Add a short description of the previewed Open Source project tree displayed below</p>
							</Box>
							<Box className={classes.ReactFlowBox}>
								<Grid container justifyContent="center" alignItems="center" direction="row">
									<Grid md={12} xs={12} sx={{ position: 'relative' }}>
										<div className={classes.GridIcon}>
											<Fab className={classes.GridIconButton}>
												{treeEditable ? <SaveIcon onClick={() => setTreeEditable(false)} /> : <EditIcon onClick={() => setTreeEditable(true)} />}
											</Fab>
										</div>
										<div
											className={!treeEditable ? classes.disable : ''}
											style={{
												height: '500px'
											}}>
											<ReactFlow
												defaultNodes={initialNodes}
												defaultEdges={initialEdges}
												defaultEdgeOptions={edgeOptions}
												panOnScroll={false}
												zoomOnScroll={false}
												// fitView
												className={classes.GridReactFlowBody}>
												<Controls className={classes.GridReactFlowControls} />
												{/* <Background /> */}
											</ReactFlow>
										</div>
									</Grid>
								</Grid>
							</Box>
							<Box className={classes.HeadingButton}>
								<Button variant="contained" className={classes.shareBtn}>
									<LanguageIcon />
									Share Tree
								</Button>
							</Box>
						</Box>
						<Box className={classes.CategoryBox}>
							<Box className={classes.CategoryTopic}>
								<p>
									View similar trees that user’s in the <span>jotted</span> community created in this category{' '}
								</p>
								<img src={Community_Img} alt="community" />
								<Button variant="contained" className={classes.GoBtn}>
									Go
								</Button>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default withStyles(styles)(KnowledgeTree);
