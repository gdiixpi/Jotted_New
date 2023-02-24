import topLineForHome from '../../Assets/images/topLineForHome.png';
import bottomLineForHome from '../../Assets/images/bottomLineForHome.png';
// import treeDemoPic from '../../Assets/images/treeDemoPic.png';

const homeStyles = (theme) => ({
	// which university css.....
	rootBox: {
		'&.MuiBox-root': {
			// border:'1px solid black',
			backgroundColor: '#FFFFFF',
			width: '100%',
			height: 'fit-content',
			// height: '100%',
			fontFamily: 'Poppins-Regular',
			fontStyle: 'normal',
			letterSpacing: '0.2px',
			overflowX: 'hidden'
		}
	},
	headerBox: {
		'&.MuiBox-root': {
			padding: '14px 30px',
			display: 'flex',
			justifyContent: 'space-between'
		}
	},
	LogoutButton: {
		borderRadius: '50% !important',
		backgroundColor: '#F5EBDD !important',
		'&.MuiFab-root ': {
			width: '45px',
			height: '45px'
		}
	},
	bodyBox: {
		'&.MuiBox-root': {
			width: '97%',
			height: 'calc( 100% - 70px )',
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'flex-start'
		}
	},
	sidebarRoot: {
		'&.MuiBox-root': {
			width: '100px'
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
	mainHeading: {
		'&.MuiBox-root': {
			width: '100%',
			maxWidth: '80%',
			height: 'auto',
			backgroundColor: '#F1F0ED',
			borderRadius: '34px',
			marginBottom: '20px',
			padding: '10px',
			backgroundImage: `url(${topLineForHome}) ,url(${bottomLineForHome})`,
			backgroundRepeat: `no-repeat, no-repeat`,
			backgroundPosition: `right top , left  bottom `,
			display: 'flex',
			flexWrap: 'wrap',
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			'& h3': {
				fontWeight: '600',
				fontSize: '24px',
				lineHeight: '36px',
				marginLeft: '10px',
				color: '#171312'
			},

			'& .MuiTextField-root': {
				'& .MuiOutlinedInput-input': {
					padding: '4px 10px',
					fontSize: '15px',
					fontWeight: 500
				},
				'& fieldset': {
					borderRadius: '8px',
					padding: '0px !important',
					border: '0.5px solid #684D45'
				},
				'& .Mui-focused fieldset': {
					borderColor: '#684D45'
				},
				'& ::placeholder': {
					fontFamily: 'Poppins-Regular',
					fontWeight: '500',
					fontSize: '15px',
					lineHeight: '30px',
					color: '#171312',
					letterSpacing: '0.2px',
					opacity: '0.5',
					textAlign: 'left'
				},
				'& .MuiFormLabel-root': {
					fontFamily: 'Poppins',
					fontStyle: 'normal',
					fontWeight: '400',
					fontSize: '15px',
					lineHeight: '22px',
					letterSpacing: '0.2px',
					color: '#684D45'
				}
			}
		}
	},
	knowlegdeTextField: {
		'&.MuiTextField-root': {
			marginRight: '30px',
			width: '266px',
			height: '30px',
			fontSize: '10px',
			backgroundColor: '#FFFFFF',
			border: '0.5px solid #684D45',
			borderRadius: '8px',

			'& .MuiOutlinedInput-root': {
				// width: '100%',
				// height: '22px',
				borderRadius: '8px',
				'& .MuiOutlinedInput-notchedOutline': {
					border: 'none'
				}
			},
			'& .Mui-focused ': {
				width: '100%',
				// height: '22px',
				height: '30px',
				fontFamily: 'Poppins-Regular',
				fontStyle: 'normal',
				fontWeight: '400',
				fontSize: '10px',
				lineHeight: '15px',
				backgroundColor: '#FFFFFF',
				borderRadius: '8px'
			},

			'& ::placeholder': {
				// height: '22px',
				height: '30px',
				width: '100%',
				fontFamily: 'Poppins-Regular',
				fontStyle: 'normal',
				fontWeight: '400',
				fontSize: '10px',
				lineHeight: '15px',
				color: 'rgba(104, 77, 69, 0.5)',
				letterSpacing: '0.2px',
				textAlign: 'center',
				alignItems: 'center'
			}
		}
	},
	CarouselOne: {
		marginBottom: '65px',
		'& h3': {
			fontStyle: 'italic',
			fontWeight: '500',
			fontSize: '20px',
			lineHeight: '30px',
			marginBottom: '45px',
			textDecoration: 'underline',
			color: '#8D8B8A'
		}
	},
	CarouselTwo: {
		'& h3': {
			fontStyle: 'italic',
			fontWeight: '500',
			fontSize: '20px',
			lineHeight: '30px',
			marginBottom: '45px',
			textDecoration: 'underline',
			color: '#8D8B8A'
		}
	},
	starredBox: {
		'& .react-multiple-carousel__arrow': {
			backgroundColor: 'rgb(245, 235, 221)',
			border: '0.5px solid rgba(188, 188, 188, 0.66)'
		},
		'& .react-multiple-carousel__arrow::before': {
			color: 'rgba(188, 188, 188, 0.66)',
			fontWeight: 'bold'
		},
	},
	showtreePicBox: {
		height: '332px',
		width: '263px',
		backgroundColor: '#FFFFFF',
		border: '2px solid rgba(188, 188, 188, 0.66)',
		borderRadius: '11px',
		// display: 'flex',
		// justifyContent: 'center',
		// alignItems: 'center',
		cursor: 'pointer',
		padding: '15px 0px',
		textAlign: 'center',
		'&:hover': {
			// height: '337px',
			// width: '268px',
			// backgroundColor: '#e8cd94',
			border: '2px solid #e8cd94',
			backgroundRepeat: `no-repeat`,
			transition: 'backgroundColor .7s ease-out'
		},
		'& hr': {
			margin: '0px 20px'
		}
	},

	NewTreeBox: {
		'&.MuiBox-root': {
			display: 'flex',
			backgroundColor: 'white',
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			width: '100%',
			margin: '50px 0px'
		}
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
	rightSideBox: {
		'&.MuiBox-root': {
			backgroundColor: 'white',
			padding: '50px 0px',
			width: '60px',
			height: '100vh',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-evenly',
			alignItems: 'center'
		}
	},

	RightArrowSvgCss: {
		'&.MuiFab-root': {
			width: '35px',
			height: '35px',

			backgroundColor: '#F1F0ED',
			'&:hover': {
				backgroundColor: '#e0e0e0',
				'& svg': {
					//
				}
			}
		}
	},

	//media query for 768px of screeen...

	'@media (max-width: 768px)': {
		mainContainBox: {
			marginLeft: '0px !important',
			marginRight: '0px !important'
		},
		mainHeading: {
			'&.MuiBox-root': {
				maxWidth: '90%',
				'& h3': {
					marginLeft: '10px'
				}
			}
		},
		knowlegdeTextField: {
			marginLeft: '10px',
			'&.MuiTextField-root': {
				'& .MuiOutlinedInput-root': {}
			}
		}
	}
});
export default homeStyles;
