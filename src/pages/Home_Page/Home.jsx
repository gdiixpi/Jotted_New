import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NewTreeButton from '../../Components/Buttons/New_tree_Btn/NewTreeButton';
import Sidebar from '../../Components/Sidebar/Sidebar';
import useAuth from '../../hooks/useAuth';
import ROUTES from '../../utils/Contants_Data/Route.Constants';
import { Box, Fab, TextField } from '@mui/material';
import { withStyles } from '@mui/styles';
import homeStyles from './home.style';
import JottedAvtarLogo from '../../Components/Jotted_Avtaar_Logo/JottedAvtarLogo';
// import treeDemoPic from '../../Assets/images/treeDemoPic.png';
// import treeDemoPic1 from '../../Assets/images/treeDemoPic1.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import LogoutIcon from '@mui/icons-material/Logout';
import { axiosInstance } from '../../services/Axios/axios';
import StarIcon from '@mui/icons-material/Star';
import IMAGE_NOT_AVAILABLE from '../../Assets/images/image_not_available.jpg';
import CircularLoader from '../../Components/Loader/CircularLoader';

const Home = (props) => {
	const { classes } = props;
	// const { treeData } = useAuth();
	// const [id, setId] = useState();
	const [treeAllData, setTreeAllData] = useState([]);
	const navigate = useNavigate();
	const [search, setSearch] = useState();
	const [favouriteTrees, setFavouriteTrees] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	// const dispatch = useDispatch();

	const logoutBtnHandler = () => {
		localStorage.clear();
		navigate(ROUTES.LOGIN);
	};

	const newTreebtnHandler = () => {
		navigate(ROUTES.NEW_TREE);
	};
	const TreebtnHandler = async () => {
		setIsLoading(true);
		await axiosInstance
			.get('https://xg3n-4mh1-ngd5.n7.xano.io/api:w4ONEGEJ:v2/tree')
			.then(async (response) => {
				let treeData = response?.data || [];
				await axiosInstance.get(`/favourite_tree`).then((res) => {
					let favTrees = res.data?.map((fav) => fav.tree_id) || [];
					setTreeAllData(treeData);
					setFavouriteTrees(favTrees);
					localStorage.setItem('favouriteTrees', favTrees);
				});
				// return response.data;
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};
	useEffect(() => {
		TreebtnHandler();
	}, []);

	const handleClick = (e, id) => {
		e.preventDefault();
		navigate(`/community/${id}`);
	};

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1300 },
			items: 4,
			slidesToSlide: 3 // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1299, min: 990 },
			items: 3,
			slidesToSlide: 2 // optional, default to 1.
		},
		mobile2: {
			breakpoint: { max: 990, min: 700 },
			items: 2,
			slidesToSlide: 1 // optional, default to 1.
		},
		mobile1: {
			breakpoint: { max: 700, min: 0 },
			items: 1,
			slidesToSlide: 1 // optional, default to 1.
		}
	};

	// Search Data::>>
	const handlesearch = (e) => {
		setSearch(e.target.value);
	};
	const filtered = !search ? treeAllData : treeAllData.filter((tree) => tree?.name?.toLowerCase().includes(search.toLowerCase()));
	const sorted = [...treeAllData.slice(0, 5)].sort((x, y) => {
		if (x.last_viewed < y.last_viewed) {
			return 1;
		}
		if (x.last_viewed > y.last_viewed) {
			return -1;
		}
		return 0;
	});

	return (
		<>
			<Box className={classes.rootBox}>
				<Box className={classes.headerBox}>
					<JottedAvtarLogo />
					<Fab type="primary" className={classes.LogoutButton} onClick={logoutBtnHandler}>
						<LogoutIcon />
					</Fab>
				</Box>
				<Box className={classes.bodyBox}>
					<Box className={classes.sidebarRoot}>
						<Sidebar />
					</Box>
					{isLoading ? (
						<CircularLoader />
					) : (
						<Box className={classes.mainContainBox}>
							<Box className={classes.mainHeading} style={{ backgroundSize: `77% 89%, 55% 30%` }}>
								<h3>My Knowledge Trees</h3>
								<TextField placeholder="Search..." className={classes.knowlegdeTextField} autoComplete="off" onChange={handlesearch} />
							</Box>

							<Box className={classes.CarouselOne}>
								<h3>Starred</h3>
								<Box className={classes.starredBox}>
									<Carousel
										swipeable={true}
										draggable={false}
										showDots={false}
										arrows={true}
										responsive={responsive}
										ssr={true} // means to render carousel on server-side.
										infinite={false}
										// autoPlay={this.props.deviceType !== 'mobile' ? true : false}
										autoPlaySpeed={1000}
										keyBoardControl={true}
										customTransition="all 1s"
										transitionDuration={500}
										containerClass="carousel-container"
										customLeftArrow={null}
										// removeArrowOnDeviceType={['tablet', 'mobile']}
										// deviceType={this.props.deviceType}
										dotListClass="custom-dot-list-style"
										itemClass="carousel-item-padding-40-px">
										{filtered?.map((row, i) => (
											<Box
												key={row.id}
												style={{
													position: 'relative',
													display: 'flex',
													flexDirection: 'column'
												}}
												className={classes.showtreePicBox}
												//  onClick={() => TreebtnHandler(1)}
												onClick={(e) => handleClick(e, row?.id)}>
												<Box
													style={{
														width: '100%',
														height: '70%'
													}}>
													<img
														src={(row.snapshot && JSON.parse(row.snapshot)) || IMAGE_NOT_AVAILABLE}
														alt="broken"
														style={{
															height: '100%'
														}}
													/>
												</Box>
												<hr />
												{/* <h3>{row?.title}</h3> */}
												<Box>
													<h3 style={{ margin: 10 }}>{row?.name}</h3>
													<p style={{ margin: 10 }}>{row?.description}</p>
													{favouriteTrees.indexOf(row.id) > -1 && (
														<span
															style={{
																position: 'absolute',
																top: 10,
																left: 10,
																color: '#E8CD94'
															}}>
															<StarIcon />
														</span>
													)}
												</Box>
											</Box>
										))}
									</Carousel>
								</Box>
							</Box>

							<Box className={classes.CarouselTwo}>
								<h3>Recently Viewed</h3>
								<Box className={classes.starredBox}>
									<Carousel
										swipeable={true}
										draggable={false}
										showDots={false}
										arrows={true}
										responsive={responsive}
										ssr={true} // means to render carousel on server-side.
										infinite={false}
										// autoPlay={this.props.deviceType !== 'mobile' ? true : false}
										autoPlaySpeed={1000}
										keyBoardControl={true}
										customTransition="all 1s"
										transitionDuration={500}
										containerClass="carousel-container"
										customLeftArrow={null}
										// removeArrowOnDeviceType={['tablet', 'mobile']}
										// deviceType={this.props.deviceType}
										dotListClass="custom-dot-list-style"
										itemClass="carousel-item-padding-40-px">
										{sorted?.map((row, i) => (
											<Box
												key={row.id}
												style={{
													position: 'relative',
													display: 'flex',
													flexDirection: 'column'
												}}
												className={classes.showtreePicBox}
												//  onClick={() => TreebtnHandler(1)}
												onClick={(e) => handleClick(e, row?.id)}>
												<Box
													style={{
														width: '100%',
														height: '70%'
													}}>
													<img
														src={(row.snapshot && JSON.parse(row.snapshot)) || IMAGE_NOT_AVAILABLE}
														alt="broken"
														style={{
															height: '100%'
														}}
													/>
												</Box>
												<hr />
												{/* <h3>{row?.title}</h3> */}
												<Box>
													<h3 style={{ margin: 10 }}>{row?.name}</h3>
													<p style={{ margin: 10 }}>{row?.description}</p>
													{favouriteTrees.indexOf(row.id) > -1 && (
														<span
															style={{
																position: 'absolute',
																top: 10,
																left: 10,
																color: '#E8CD94'
															}}>
															<StarIcon />
														</span>
													)}
												</Box>
											</Box>
										))}
									</Carousel>
								</Box>
							</Box>

							<Box className={classes.NewTreeBox}>
								<NewTreeButton type="big" label="New Tree" customclass={classes.addTreeBtn} onClick={newTreebtnHandler} />
							</Box>
						</Box>
					)}
				</Box>
			</Box>
		</>
	);
};

export default withStyles(homeStyles)(Home);
