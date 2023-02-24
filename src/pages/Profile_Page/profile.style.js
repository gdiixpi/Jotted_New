import topLineForHome from '../../Assets/images/topLineForHome.png';
import bottomLineForHome from '../../Assets/images/bottomLineForHome.png';
// import treeDemoPic from '../../Assets/images/treeDemoPic.png';

const profileStyles = (theme) => ({
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
	disable: {
		cursor: 'pointer',
		'& *': {
			pointerEvents: 'none !important'
		}
	},
	ReactFlowBox: {
		height: '667px'
	},
	ProfileBox: {
		backgroundColor: '#F1EFED',
		borderRadius: '34px',
		height: '100%',
		width: '100%'
	},
	bodyBox: {
		'&.MuiBox-root': {
			width: '97%',
			height: 'calc( 100% - 70px )',
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
	mainHeading: {
		'&.MuiBox-root': {
			width: '100%',
			maxWidth: '100%',
			height: 'auto',
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
	GridBody: {
		background: '#FFFFFF',
		border: '1.3px solid rgba(188, 188, 188, 0.22)',
		boxShadow: '0px 4px 26px rgba(0, 0, 0, 0.04)',
		borderRadius: '34px',
		margin: '0px 30px 0px 0px '
	},
	GridBodyIcon: {
		textAlign: 'right',
		padding: '10px 10px 0px 0px'
	},
	IconButton: {
		'&.MuiFab-root': {
			width: '35px',
			height: '35px'
		}
	},
	GridBodyHeader: {
		padding: '50px 0px ',
		textAlign: 'center',
		'& h3': {
			textAlign: 'center',
			fontFamily: 'Poppins',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '20px',
			lineHeight: '30px',
			letterSpacing: '0.2px',
			textDecoration: 'underline'
		}
	},
	GridBodyImg: {
		borderRadius: '15px',

		'& img': {
			borderRadius: '10px',
			// width: '100%',
			// height: '100%'
			width: '123px',
			height: '127px'
		}
	},
	// GridBodyTextField: {
	// 	textAlign: 'center',
	// 	marginTop: '66px',
	// 	'& .MuiTextField-root': {
	// 		color: 'green',
	// 		'& .Mui-focused': {},
	// 		'& ::placeholder': {
	// 			fontFamily: 'Poppins-Regular',
	// 			fontStyle: 'italic',
	// 			fontWeight: '400',
	// 			fontSize: '15px',
	// 			lineHeight: '30px',
	// 			color: '#171312',
	// 			letterSpacing: '0.2px',
	// 			opacity: '0.5',
	// 			textAlign: 'right'
	// 		}
	// 	}
	// },
	GridBodyTextField: {
		textAlign: 'center',
		margin: '33px 0px',
		'& .MuiTextField-root': {
			'& fieldset': {
				borderRadius: '8px',
				border: '0.5px solid #684D45'
			},
			'& .Mui-focused fieldset': {
				borderColor: '#684D45'
			},
			'& ::placeholder': {
				fontFamily: 'Poppins-Regular',
				fontStyle: 'italic',
				fontWeight: '400',
				fontSize: '15px',
				lineHeight: '30px',
				color: '#171312',
				letterSpacing: '0.2px',
				opacity: '0.5',
				textAlign: 'right'
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
	},
	GridBodyPara: {
		textAlign: 'center',
		color: '#8a8282',
		fontSize: '15px',
		lineHeight: '22px',
		fontStyle: 'italic',
		marginTop: '53px'
	},
	ReactFlowBody: {
		backgroundColor: '#F1EFED',
		borderRadius: '34px',
		height: '100%',
		width: '100%'
	},
	ReactFlowIcon: {
		textAlign: 'right',
		padding: '10px 10px 0px 0px'
	},
	ReactFlowButton: {
		'&.MuiFab-root': {
			width: '35px',
			height: '35px'
		}
	},
	ReactFlowControls: {
		position: 'absolute',
		left: '20px ',
		top: '15px',
		boxShadow: 'unset'
	},
	'@media (max-width: 768px)': {
		GridBody: {
			margin: '0px 0px 10px 0px'
		}
	}
});
export default profileStyles;
