import React, { useEffect, useState } from 'react';
import { Box, Button, Fab, Grid } from '@mui/material';
import { withStyles } from '@mui/styles';
import 'react-multi-carousel/lib/styles.css';
import JottedHeader from '../../Components/Header/JottedHeader';
import clsx from 'clsx';
// import EditIcon from '@mui/icons-material/Edit';
// import SaveIcon from '@mui/icons-material/Save';
import Sidebar from '../../Components/Sidebar/Sidebar';
import topLineForHome from '../../Assets/images/topLineForHome.png';
import bottomLineForHome from '../../Assets/images/bottomLineForHome.png';
import { axiosInstance } from '../../services/Axios/axios';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { ReactComponent as EditTreeImg } from '../../Assets/svg/edit_tree.svg';
import IMG from '../../Assets/images/Profile_Image.png';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate, useParams } from 'react-router-dom';

// import treeDemoPic1 from '../../Assets/images/treeDemoPic1.png';
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ROUTES from '../../utils/Contants_Data/Route.Constants';
import StarIcon from '@mui/icons-material/Star';
import CustomTree from '../../Components/CustomTree';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { getLocalStorageData, isAuthenticated } from '../../utils/utils';
import Icon_Resource from '../../Assets/images/Icon_Resource.png';
import NewTreeButton from '../../Components/Buttons/New_tree_Btn/NewTreeButton';
import { TREE_API } from '../../services/API/Tree.api';
import { toast } from 'react-toastify';

// const onInit = (reactFlowInstance) => console.log('flow loaded:', reactFlowInstance);

const styles = () => ({
	mainRootBox: {
		'&.MuiBox-root': {
			backgroundColor: '#FFFFFF',
			width: '100%',
			height: 'auto',
			fontStyle: 'normal',
			letterSpacing: '0.2px'
		}
	},
	bodyBox: {
		'&.MuiBox-root': {
			width: '97%',
			height: 'auto',
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'flex-start',
			marginTop: '20px'
		}
	},
	mainContainBox: {
		'&.MuiBox-root': {
			width: 'calc( 100% - 100px )',
			height: '100%',
			display: 'flex',
			flexDirection: 'column',
			marginLeft: '60px',
			marginRight: '15px'
		}
	},
	disable: {
		cursor: 'pointer',
		'& *': {
			pointerEvents: 'none !important'
		}
	},
	mainHeading: {
		'&.MuiBox-root': {
			width: '100%',
			maxWidth: '100%',
			height: 'auto',
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'space-between',
			backgroundColor: '#F1F0ED',
			backgroundImage: `url(${topLineForHome}) ,url(${bottomLineForHome})`,
			backgroundRepeat: `no-repeat, no-repeat`,
			backgroundPosition: `right top , left  bottom `,
			borderRadius: '34px',
			marginBottom: '20px',
			padding: '10px',
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
				lineHeight: '22px',
				marginLeft: '10px',
				color: '#684D45'
			}
		}
	},
	leftHeading: {},
	LeftIcon: {
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		'& p': {
			marginRight: '20px'
		}
	},
	RightHeading: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center'
	},
	RightHeadingBox: {
		borderRight: '1px solid rgba(104, 77, 69, 0.33)',
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'column',
		alignItems: 'end',
		'& span': {
			opacity: 0.53,
			'& svg': {
				marginRight: '10px',
				width: '22px',
				height: '22px'
			}
		},
		'& p': {
			marginRight: '15px'
		}
	},
	RightHeadingButton: {
		'&.MuiBox-root': {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'space-around',
			marginLeft: '40px',
			marginRight: '30px'
		}
	},
	saveBtn: {
		'&.MuiButton-root': {
			background: ' #E8CD94',
			borderRadius: '8px',
			width: '180px',
			height: '35px',
			fontWeight: '600',
			fontSize: '15px',
			lineHeight: '22px',
			color: '#FFFFFF'
		},
		'&:hover': {
			background: '#FFFFFF !important',
			color: '#E8CD94'
		}
	},
	resourcesBtn: {
		'&.MuiButton-root': {
			background: '#FFFFFF',
			border: '0.5px solid #684D45',
			borderRadius: '8px',
			width: '180px',
			height: '35px',
			fontWeight: '400',
			fontSize: '14px',
			lineHeight: '22px',
			color: '#684D45'
		},
		'&:hover': {
			background: '#684D45 !important',
			color: '#FFFFFF',
			border: '1px solid #684D45 !important'
		}
	},
	ImgIcon: {
		display: 'flex',
		alignItems: 'center',
		'& img': {
			width: '30px',
			height: '30px',
			borderRadius: '50%'
		}
	},
	customiseFabIcon: {
		'&.MuiFab-root': {
			marginRight: '9px',
			zIndex: 0,
			width: '35px',
			height: '30px',
			minWidth: '35px',
			marginLeft: '15px',
			backgroundColor: '#FFF',
			'&:hover': {
				backgroundColor: '#C0D0C5'
			}
		}
	},
	GridMainBox: {
		display: 'flex',
		// flexWrap: 'wrap',
		justifyContent: 'space-between'
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
			height: '35px',
			minWidth: '35px'
		}
	},
	GridCarouselBox: {
		marginTop: '77px',
		width: '74%',
		visibility: 'visible',
		opacity: '1',
		transition: 'visibility 0.5s, opacity 0.5s,width 0.5s linear'
	},
	GridCarouselEditBox: {
		width: '0%',
		// display: 'none',
		// transition: 'width 0.5s , display 0.5s'
		visibility: 'hidden',
		opacity: '0',
		transition: 'visibility 0.5s, opacity 0.5s,width 0.5s linear'
	},
	GridTreeBox: {
		width: '26%',
		marginTop: '20px',
		backgroundColor: '#F1F0ED',
		borderRadius: '10px',
		transition: 'width 0.5s linear'
	},
	GridTreeEditBox: {
		width: '100%',
		marginTop: '35px',
		backgroundColor: '#F1F0ED',
		borderRadius: '10px',
		transition: 'width 0.5s linear'
	},

	//popup CSS

	Popuproot: {
		width: '100%',
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
		position: 'fixed',
		top: 0,
		right: 0,
		zIndex: '99999',
		'& span': {
			textAlign: 'end',
			width: '100%',
			marginTop: '-10px',
			'& svg': {
				width: '20px',
				height: '30px',
				color: '#684D45'
			}
		}
	},

	PopupmainBox: {
		'&.MuiBox-root': {
			width: '150px',
			height: 'auto',
			maxWidth: '90%',
			borderRadius: '18px',
			display: 'flex',
			justifyContent: 'center',
			flexDirection: 'column',
			alignItems: 'center',
			background: '#FFFFFF',
			boxShadow: '0px 4px 26px 20px rgba(75, 75, 75, 0.15)',
			textAlign: 'center',
			padding: '10px',
			position: 'absolute',
			top: '15rem',
			right: '19rem'
		}
	},
	PopupSaveBtn: {
		'&.MuiButton-root': {
			borderRadius: '2px',
			width: '75px',
			height: '25px',
			fontWeight: '600',
			fontSize: '20px',
			lineHeight: '36px',
			color: '#FFFFFF',
			background: '#E8CD94'
			// marginRight: '20px'
		},
		'&:hover': {
			background: '#FFFFFF !important',
			color: '#E8CD94'
		}
	},
	popUpTextField: {
		textAlign: 'center',
		margin: '15px 0px',
		width: '100%'
	},

	//Tree Carousel CSS START
	CarouselOne: {
		marginBottom: '65px'
	},
	SimpleDiv: {
		display: 'flex',
		alignItems: 'center',
		'& div': {
			width: '20px',
			height: '20px',
			minWidth: '20px',
			borderRadius: '50%',
			background: '#C0C0C0'
		},
		'& h3': {
			fontStyle: 'normal',
			fontWeight: '500',
			fontSize: '20px',
			lineHeight: '30px',
			color: '#171312',
			marginLeft: '10px'
		}
	},
	starIconBody: {
		position: 'absolute',
		top: 5,
		left: -25,
		color: '#E8CD94',
		cursor: 'pointer'
	},
	starredBox: {
		'& .react-multiple-carousel__arrow': {
			backgroundColor: '#F1F0ED',
			border: '0.5px solid rgba(188, 188, 188, 0.66)'
		},
		'& .react-multiple-carousel__arrow::before': {
			color: 'rgba(188, 188, 188, 0.66)',
			fontWeight: 'bold'
		}
	},
	showtreePicBox: {
		height: '118px',
		width: '169px',
		backgroundColor: '#FFFFFF',
		border: '2px solid transparent',
		borderRadius: '11px',
		cursor: 'pointer',
		padding: '15px 0px',
		marginBottom: '62px !important',
		marginRight: '62px !important',
		textAlign: 'center',
		background: '#FFFFFF',
		boxShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.25)',
		'& iframe': {
			'& #document': {
				'& html': {
					'& body': {
						overflow: 'hidden',
						zoom: '30%'
					}
				}
			}
		},
		'&:hover': {
			border: '2px solid #e8cd94',
			backgroundRepeat: `no-repeat`,
			transition: 'backgroundColor .7s ease-out'
		},
		'& hr': {
			margin: '0px 16px',
			color: 'rgba(104, 77, 69, 0.45)'
		}
	},
	topicBox: {
		position: 'relative',
		'& img': {
			width: '42.1px',
			height: '42.1px'
		},
		'& h3': {
			margin: '10px 0px 0px 0px',
			fontFamily: 'Poppins',
			fontStyle: ' normal',
			fontWeight: ' 400',
			fontSize: ' 15px',
			lineHeight: ' 20px',
			textAlign: ' center',
			letterSpacing: ' 0.2px',
			color: '#171412'
		},
		'& p': {
			margin: '0',
			fontFamily: 'Poppins',
			fontStyle: ' normal',
			fontWeight: ' 400',
			fontSize: ' 10px',
			lineHeight: ' 15px',
			textAlign: ' center',
			letterSpacing: ' 0.2px',
			color: '#8D8B8A'
		}
	},
	addTreeBtn: {
		margin: 'auto'
	},
	addResourseBox: {
		position: 'absolute',
		top: '40%',
		right: '40%',
		height: 'auto',
		width: '300px',
		borderRadius: '20px',
		// background: '#f1f0ed',
		background: '#FFF',
		textAlign: 'center',
		padding: '10px 0px',
		borderRopRightRadius: 0,
		zIndex: 10,
		boxShadow: '0px 4px 26px 20px rgba(75, 75, 75, 0.15)',
		'& input': {
			fontSize: '16px',
			height: '28px',
			marginTop: '33px',
			width: '80%',
			borderRadius: '5px',
			border: 'none',
			outline: 'none',
			padding: '3px 6px',
			marginBottom: '6px',
			background: '#f1f0ed',
			'&::placeholder': {
				fontFamily: 'Poppins',
				fontStyle: ' italic',
				fontWeight: ' 400',
				fontSize: ' 20px',
				lineHeight: ' 30px',
				textAlign: ' center',
				letterSpacing: ' 0.2px'
			}
		},
		'& img': {
			position: 'absolute',
			left: '-16px',
			top: '-12px'
		}
	},
	addResourseIcon: {
		position: 'absolute',
		right: '4px',
		top: '4px',
		height: '17px',
		cursor: 'pointer',
		'& svg': {
			fontSize: '22px'
		}
	},
	addResourseButton: {
		background: '#E8CD94',
		cursor: 'pointer',
		padding: '10px 20px',
		margin: '10px 0px',
		borderRadius: '12px',
		fontWeight: '700',
		color: '#fff',
		border: 'none'
	},
	//Tree Carousel CSS END

	'@media (max-width: 992px)': {
		mainContainBox: {
			'&.MuiBox-root': {
				width: '80%',
				marginLeft: '15px'
			}
		},
		addResourseBox: {
			top: ' 64%',
			right: '49%',
			width: '278px'
		}
	},
	'@media (max-width: 768px)': {
		mainContainBox: {
			'&.MuiBox-root': {
				width: '82%',
				marginLeft: '15px'
			}
		},
		GridCarouselBox: {
			width: '100%'
		},
		GridTreeBox: {
			width: '100%'
		},
		showtreePicBox: {
			width: '250px'
		},
		addResourseBox: {
			top: ' 64%',
			right: '49%',
			width: '278px'
		}
	},
	'@media (max-width: 556px)': {
		mainContainBox: {
			'&.MuiBox-root': {
				width: '69%',
				marginLeft: '15px'
			}
		},
		RightHeadingBox: {
			alignItems: 'center'
		},
		RightHeadingButton: {
			'&.MuiBox-root': {
				margin: '0'
			}
		},
		saveBtn: {
			'&.MuiButton-root': {
				marginBottom: '10px'
			}
		},
		showtreePicBox: {
			width: '250px'
		},
		GridMainBox: {
			display: 'flex',
			flexDirection: 'column !important'
		},
		addResourseBox: {
			top: '69%',
			right: '3%',
			width: '276px'
		}
	}
});

const Community = (props) => {
	const { classes } = props;
	const navigate = useNavigate();
	const params = useParams();
	const [filterValues, setFilterValues] = useState({ nodeId: '' });
	const [attachments, setAttachment] = useState([]);
	const [treeEditable, setTreeEditable] = useState(false);
	const [treeDetails, setTreeDetails] = useState(null);
	const [isFavourite, setIsFavourite] = useState(false);
	const [resourcePopup, setResourcePopup] = useState(false);
	const [url, setUrl] = useState('');

	const TREE_API_OBJ = new TREE_API();

	const BackBtnHandler = () => {
		// needs to be redirected to the home ie. ROUTES.HOME
		navigate(ROUTES.HOME);
	};

	const getNodeAttachments = async () => {
		try {
			let response = await fetch(
				`https://xg3n-4mh1-ngd5.n7.xano.io/api:w4ONEGEJ:v2/node_attatchments-details?${filterValues.nodeId ? `node_id=${filterValues.nodeId}` : `tree_id=${params.id}`}`
			);
			let json = await response.json();
			setAttachment(json);
		} catch (error) {
			console.log('ERROR:', error);
		}
	};

	const Tree_Get_By_Id = async () => {
		const response = await fetch(`https://xg3n-4mh1-ngd5.n7.xano.io/api:w4ONEGEJ:v2/tree/${params.id}`);
		const json = await response.json();
		setTreeDetails(json);
	};

	const markFavourite = async () => {
		setIsFavourite(true);
		try {
			let payload = {
				user_id: isAuthenticated().user.id,
				tree_id: params.id
			};
			let response = await axiosInstance.post(`/favourite_tree`, payload);
			if (response.data) {
				let tempArr = getLocalStorageData('favouriteTrees');
				tempArr = [...tempArr, payload.tree_id];
				localStorage.setItem('favouriteTrees', tempArr);
			} else {
				setIsFavourite(true);
			}
		} catch (error) {
			setIsFavourite(false);
			console.error('FAVOURITE ERROR:', error);
		}
	};

	const removeFavourite = async () => {
		setIsFavourite(false);
		try {
			let response = await axiosInstance.delete(`/favourite_tree/${params.id}/${isAuthenticated().user.id}`);
			if (!response.data) {
				let tempArr = getLocalStorageData('favouriteTrees');
				let filteredArr = tempArr.filter((obj) => obj !== params.id);
				localStorage.setItem('favouriteTrees', filteredArr);
				setIsFavourite(false);
			} else {
				setIsFavourite(true);
			}
		} catch (error) {
			setIsFavourite(true);
			console.error('FAVOURITE ERROR:', error);
		}
	};

	const handleAddLink = () => {
		if (!url) return false;
		let payload = {
			user_id: isAuthenticated().user.id,
			tree_id: params.id,
			node_id: filterValues.nodeId,
			query: '',
			src: url,
			topic: filterValues?.text
		};
		try {
			TREE_API_OBJ.addLinkToNode(payload);
			setUrl('');
			setFilterValues({ nodeId: '', text: '' });
			setResourcePopup(false);
		} catch (error) {
			console.error('ADD Link Error:', error);
		}
	};

	useEffect(() => {
		Tree_Get_By_Id();
	}, []);

	useEffect(() => {
		let favTrees = getLocalStorageData('favouriteTrees');
		if (favTrees.indexOf(params.id) > -1) {
			setIsFavourite(true);
		}
	}, [params.id]);

	useEffect(() => {
		getNodeAttachments();
	}, [filterValues, treeEditable]);

	const Add_RESOURSE_POPUP = () => (
		<Box className={classes.addResourseBox}>
			<img src={Icon_Resource} alt="icon" />
			<span className={classes.addResourseIcon} onClick={() => setResourcePopup(null)}>
				<CloseIcon />
			</span>
			<input type="text" autoComplete="off" variant="standard" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Place url here" />
			<button className={classes.addResourseButton} onClick={handleAddLink}>
				Upload
			</button>
		</Box>
	);

	return (
		<Box className={classes.mainRootBox}>
			<Box className={classes.rootBox}>
				<Box>
					<JottedHeader onClick={BackBtnHandler} />
				</Box>
				<Box className={classes.bodyBox}>
					<Box>
						<Sidebar />
					</Box>
					<Box className={classes.mainContainBox}>
						<Box className={classes.mainHeading} style={{ backgroundSize: `53% 55%, 56% 22%`, position: 'relative' }}>
							<Box className={classes.leftHeading}>
								<h3>{treeDetails?.name}</h3>
								<div className={classes.LeftIcon}>
									<Fab className={clsx(classes.customiseFabIcon)}>
										<EditTreeImg />
									</Fab>
									<p>{treeDetails?.category}</p>
									<p>{treeDetails?.title}</p>
									<p>{treeDetails?.description}</p>
								</div>
							</Box>
							<Box className={classes.RightHeading}>
								<Box className={classes.RightHeadingBox}>
									<span>
										<TwitterIcon />
										<FacebookRoundedIcon />
										<PinterestIcon />
									</span>
									{/* <p>00 favorites, 00 views, 00 shares</p> */}
									<div className={classes.ImgIcon}>
										<img src={IMG} alt={IMG} />
										<p>{`${treeDetails?.user?.firstname} ${treeDetails?.user?.lastname}`}</p>
									</div>
								</Box>
								<Box className={classes.RightHeadingButton}>
									<Button variant="contained" className={classes.saveBtn}>
										Save Map
									</Button>
									{/* <Button variant="outlined" className={classes.resourcesBtn}>
										View Resources
									</Button> */}
								</Box>
							</Box>
							<span className={classes.starIconBody}>{isFavourite ? <StarIcon onClick={removeFavourite} /> : <StarBorderIcon onClick={markFavourite} />}</span>
						</Box>
						<Grid className={classes.GridMainBox}>
							<Grid xs={6} className={!treeEditable ? classes.GridCarouselBox : classes.GridCarouselEditBox}>
								<Box>
									<Box className={classes.CarouselOne}>
										<Box className={classes.starredBox}>
											<Grid container>
												{attachments.map((obj) => (
													<Grid item className={classes.showtreePicBox} xs={12} sm={6} md={6} lg={3} onClick={() => window.open(obj.src)}>
														<div className={classes.topicBox}>
															<img src={Icon_Resource} alt={obj.topic} />
															<hr className={classes.hrLine} />
															<h3>{obj.topic}</h3>
															<p>Description</p>
														</div>
													</Grid>
												))}
												<Grid item style={{ justifyContent: 'center' }} xs={12} sm={6} md={6} lg={3}>
													<Box className={classes.NewTreeBox}>
														<NewTreeButton
															type="big"
															customclass={classes.addTreeBtn}
															onClick={() => {
																console.log('FILTR:', filterValues);
																filterValues.nodeId ? setResourcePopup(true) : toast.error('Node not selected');
															}}
														/>
													</Box>
												</Grid>
											</Grid>
										</Box>
									</Box>
								</Box>
							</Grid>
							<Grid xs={6} className={!treeEditable ? classes.GridTreeBox : classes.GridTreeEditBox}>
								<Grid md={12} xs={12} sx={{ position: 'relative' }}>
									{
										<CustomTree
											treeid={params.id}
											onNodeClick={(e, node) => setFilterValues({ nodeId: node.id, text: node.label || node.data.label })}
											classes={classes}
											onEdit={() => setTreeEditable(true)}
											onSave={() => setTreeEditable(false)}
											onBlurNode={() => setFilterValues({ nodeId: '' })}
											treeEditable={treeEditable}
										/>
									}
								</Grid>
								{resourcePopup && Add_RESOURSE_POPUP()}
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default withStyles(styles)(Community);
