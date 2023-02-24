const styles = (theme) => ({
	buttonprimary: {
		'&.MuiButton-root': {
			backgroundColor: '#E8CD94',
			color: '#FFF',
			padding: '14px 12px',
			minHeight: '64px',
			border: '2px solid #E8CD94',
			fontSize: '24px',
			fontWeight: '600',
			textTransform: 'none',
			fontFamily: 'Poppins-Regular',
			fontStyle: 'normal',
			letterSpacing: ' 0.2px',
			textAlign: 'center',
			lineHeight: '36px',
			// boxShadow: ,
			width: '249px',
			maxWidth: '100%',
			height: '64px',
			// boxSizing: 'border-box',
			borderRadius: '8px',

			'&:hover': {
				backgroundColor: '#fff',
				color: '#E8CD94'
			}
		}
	},
	buttonsecondary: {
		'&.MuiButton-root': {
			backgroundColor: '#FFFFFF',
			color: '#684D45',
			border: 'none',
			fontSize: '15px',
			fontWeight: '400',
			textTransform: 'none',
			fontFamily: 'Poppins-Regular',
			fontStyle: 'normal',
			textAlign: 'center',
			lineHeight: '22px',
			letterSpacing: '0.2px',
			// boxShadow:
			width: '188px',
			minHeight: '48px ',
			height: '48px',
			// boxSizing: 'border-box',
			borderRadius: '8px',
			'&:hover': {
				backgroundColor: '#FFFFFF',
				border: 'none',
				color: '#E8CD94'
			}
		}
	},

	buttonnormal: {
		'&.MuiButton-root': {
			backgroundColor: '#FFFFFF',
			color: '#684D45',
			padding: '5px 12px',
			minHeight: '45px',
			border: '0.5px solid #684D45',
			fontSize: '12px',
			fontWeight: '400',
			textTransform: 'none',
			fontFamily: 'Actor-Regular',
			fontStyle: 'normal',
			textAlign: 'center',
			lineHeight: '35px',
			letterSpacing: '0.2px',
			// boxShadow:
			width: '188px',
			height: '45px',
			// boxSizing: 'border-box',
			borderRadius: '8px',

			'&:hover': {
				backgroundColor: '#fff'
			}
		}
	},

	buttonsvgtype: {
		'&.MuiButton-root': {
			color: '#FFFFFF',
			padding: '15px 20px',
			width: '188px',
			height: '55px',
			minHeight: '55px',
			border: 'none',
			fontSize: '15px',
			fontWeight: '600',
			textTransform: 'none',
			fontFamily: 'Poppins-Regular',
			fontStyle: 'normal',
			letterSpacing: ' 0.2px',
			textAlign: 'center',
			lineHeight: '22px',
			// boxShadow: ,
			// boxSizing: 'border-box',
			borderRadius: '8px',
			backgroundColor: '#E8CD94',
			'& span': {
				display: 'flex',
				justifyContent: 'flex-start',
				alignItems: 'center',

				'& svg': {
					marginLeft: '0px',
					marginRight: '10px'
				}
			},

			'&:hover': {
				backgroundColor: '#FFFFFF',
				border: 'none',
				color: '#E8CD94',
				'& svg': {
					'& path': {
						fill: '#E8CD94'
					}
				}
			}
		}
	},
	// for <See More button> special mode being created name buttonlight..............
	buttonlight: {
		'&.MuiButton-root': {
			backgroundColor: '#F1EFED',
			color: '#8D8B8A',
			padding: '13px 28px',
			width: '131px',
			height: '36px',
			minHeight: '36px',
			border: 'none',
			fontSize: '15px',
			fontWeight: '600',
			textTransform: 'none',
			fontFamily: 'Poppins-Regular',
			fontStyle: 'normal',
			letterSpacing: ' 0.2px',
			textAlign: 'center',
			lineHeight: '22px',
			// boxShadow: ,
			// boxSizing: 'border-box',
			borderRadius: '8px',

			'&:hover': {
				border: 'none',
				backgroundColor: '#F1EFED',
				color: '#DBD9D8'
			}
		}
	},
	//media query for 768px of screeen...

	'@media (max-width: 768px)': {
		buttonprimary: {
			'&.MuiButton-root': {
				width: '160px',
				height: '50px',
				fontSize: '15px',
				minHeight: '50px',
				padding: '0px'
			}
		}
	}
});

export default styles;
