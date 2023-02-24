const styles = (theme) => ({
	// which university css.....
	coverBox: {
		backgroundColor: '#F5EBDD',
		width: '100%',
		height: '100vh'
	},
	root: {
		height: 'calc(100vh - 42px)',
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center'
	},
	ContainBox: {
		width: '50%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		textAlign: 'center',
		letterSpacing: '0.2px',
		fontFamily: 'Poppins-Regular',
		fontStyle: 'normal',
		fontWeight: '500',

		'& p': {
			margin: '0px',
			marginBottom: '30px',
			color: '#171312',
			fontSize: '30px',
			lineHeight: '45px'
		}
	},

	Boxpara2: {
		'& p': {
			// border:'1px solid black',
			opacity: '0.5',
			fontSize: '24px',
			lineHeight: '36px',
			margin: '0px'
		}
	},
	InputBox: {
		// border: '1px solid black',
		padding: '20px',
		marginTop: '50px',
		width: '90%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},

	textField: {
		'&.MuiTextField-root': {
			backgroundColor: '#FEFDFE',
			border: 'none',
			borderRadius: '18px',
			marginBottom: '42px',

			'& .MuiOutlinedInput-root': {
				borderRadius: '18px',
				'& .MuiOutlinedInput-notchedOutline': {
					border: 'none'
				}
			},
			'& .Mui-focused ': {
				fontFamily: 'Poppins-Regular',
				fontStyle: 'normal',
				fontWeight: '400',
				fontSize: '20px',
				backgroundColor: '#FEFDFE',
				border: '2px solid #684D45',
				borderRadius: '18px'
			},

			'& ::placeholder': {
				fontFamily: 'Poppins-Regular',
				fontStyle: 'italic',
				fontWeight: '300',
				fontSize: '20px',
				lineHeight: '30px',
				color: '#171312',
				letterSpacing: '0.2px',
				opacity: '0.5',
				textAlign: 'center'
			}
		}
	},

	NextBtn: {
		'&.MuiButton-root': {
			width: '196px',
			height: '64px',
			fontSize: '24px',
			marginBottom: '30px'
		}
	},
	//.............................................teach university css....

	//....................................Favorite Question............................

	FavInputBox: {
		// height:'50%',
		// border:'1px solid black',
		// paddingTop:'100px'
	},
	//media query for 768px of screeen...

	'@media (max-width: 768px)': {
		ContainBox: {
			width: '90%',
			marginTop: '90px',
			'& p': {
				marginBottom: '10px',
				fontSize: '22px'
			}
		},
		Boxpara2: {
			'& p': {
				fontSize: '20px'
			}
		}
	}
});
export default styles;
