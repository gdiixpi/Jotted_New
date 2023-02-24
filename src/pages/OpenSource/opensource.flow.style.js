const styles = () => ({
	coverBox: {
		backgroundColor: '#fff',
		width: '100%',
		height: '100%'
	},
	root: {
		height: 'calc(100vh - 56px)',
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center'
	},

	ContainBox: {
		// border: '1px solid red',
		height: '70%',
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
			marginTop: '-45px',
			color: '#171312',
			fontSize: '30px',
			lineHeight: '45px'
		}
	},
	Boxpara2: {
		'& p': {
			// border: '1px solid black',
			margin: '0px',
			opacity: '0.5',
			fontSize: '24px',
			lineHeight: '36px'
		}
	},
	InputBox: {
		// border: '1px solid black',
		padding: '10px',
		width: '90%',
		// height: '15vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
		// marginBottom: '5vh'
	},

	textField: {
		'&.MuiTextField-root': {
			background: '#F1F0ED',
			border: 'none',
			borderRadius: '18px',
			marginBottom: '42px',

			'& .MuiOutlinedInput-root': {
				borderRadius: '18px',
				'& .MuiOutlinedInput-notchedOutline': {
					//
					border: 'none'
				}
			},
			'& .Mui-focused ': {
				fontFamily: 'Poppins-Regular',
				fontStyle: 'normal',
				fontWeight: '400',
				fontSize: '20px',
				// color: '#E8CD94',
				//
				border: '2px solid #684D45',
				borderRadius: '18px'
			},

			'& ::placeholder': {
				fontFamily: 'Poppins-Regular',
				fontStyle: 'italic',
				fontWeight: '400',
				fontSize: '20px',
				lineHeight: '30px',
				color: '#171312',
				letterSpacing: '0.2px',
				opacity: '0.5',
				textAlign: 'center'
			}
		}
	},
	textfieldError: {
		'& .MuiFormHelperText-root': {
			'&.Mui-error': {
				position: 'absolute',
				top: '95px',
				fontSize: '16px',
				left: '10px',
				// '& .MuiTextField-root': {
				'&.MuiOutlinedInput-root': {
					// borderRadius: '18px',
					border: 'none',
					'&.MuiOutlinedInput-notchedOutline': {
						//
						border: 'none'
					}
				},
				'&.Mui-focused ': {
					border: 'none',
					top: '100px'
				}
				// }
			}
		}
	},
	displayNone: {
		display: 'none !important'
	},

	selectDropdownItems: {
		'& .MuiSelect-select': {
			fontFamily: 'Poppins-Regular',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '16px',
			lineHeight: '24px',
			color: '#848180',
			opacity: '1',
			backgroundColor: '#F1F0ED',
			borderRadius: '18px',
			border: 'none'
		},
		'& .MuiOutlinedInput-root': {
			borderRadius: '18px',
			'& .MuiOutlinedInput-notchedOutline': {
				border: 'none'
			}
		},
		'& .Mui-focused ': {
			borderRadius: '18px',
			border: 'none'
		},
		'& .MuiSelect-icon': {
			color: '#684D45'
		}
	},
	paper: {
		'&.MuiPaper-root': {
			width: '40%',
			marginTop: '20px',
			background: '#F1F0ED',
			opacity: '0.5',
			borderRadius: '18px'
		}
		// border: '1px solid red'
	},
	list: {
		borderRadius: '18px',

		// backgroundColor: 'green',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		fontFamily: 'Poppins-Regular',
		fontStyle: 'italic',
		fontWeight: '300',
		fontSize: '20px',
		lineHeight: '30px',
		color: '#171312',
		opacity: '0.5',
		letterSpacing: '0.2px',
		width: '100%',
		// opacity: '0.1',

		'& li': {
			borderBottom: ' 1.3px solid #684D45',
			width: '90%',
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'center',
			'&:last-child': {
				borderBottom: 'none'
			}
		},
		'& li.Mui-selected': {
			color: '#171312',
			opacity: '0.9'
			// background: '#6EC177'
		},
		'& li.Mui-selected:hover': {
			// background: '#6EC177'
		}
	},

	// .................describe tree css....

	//..................discipline css.........

	// /.................age input css..........
	AgeDropdownStyle: {},
	// adding tags css................................
	AddTagRoot: {
		flexDirection: 'column'
	},
	AddTagcontainBox: {
		// display: 'flex',
		// flexDirection: 'column',
		// justifyContent: 'space-between',
		// alignItems: 'center',
		// alignContent: 'center',
		height: '30%',
		margin: '0px'
	},
	AddTagTextField: {
		'&.MuiTextField-root': {
			height: '40px',
			width: '50%',
			marginTop: '10px',
			border: 'none',
			'& .MuiOutlinedInput-root': {
				border: 'none',
				'& .MuiOutlinedInput-notchedOutline': {
					border: 'none'
				}
			},
			'& .Mui-focused ': {
				border: 'none'
			}
		}
		// edit text field here css..
	},
	AddTagPaper: {
		'&.MuiPaper-root': {
			// border:'1px solid black',
			background: '#F1F0ED',
			borderRadius: '18px',
			width: '70%',
			height: '30%',
			// wordWrap: ' break-word',
			// paddingLeft:'10%',
			// paddingRight:'10%',
			// paddingTop:'5%',
			// padding:'4%',

			'& p': {
				// border:'1px solid black',
				fontFamily: 'Poppins',
				fontStyle: 'normal',
				fontWeight: '400',
				fontSize: '20px',
				lineHeight: '30px',
				color: '#171312',
				opacity: '0.5'
			}
		}
	},
	nxtButton: {
		'&.MuiButton-root': {
			marginTop: '20px'
		}
	},

	// final step tree css ...........................................................................
	finalTreeContainBox: {
		// border:'1px solid red',
		height: 'calc(100vh- 70px)',
		width: '80%',
		justifyContent: 'center'
	},
	FinalStepPaper: {
		'&.MuiPaper-root': {
			width: '100%',
			height: '50%',
			// border:'1px solid black',
			backgroundColor: '#F1F0ED',
			borderRadius: '18px',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		}
	},
	textFieldFinalTree: {
		'&.MuiTextField-root': {
			// fontSize:'14px',
			// height: '20px',
			// width:'100px',
			// // marginTop:'20px',
			border: 'none',
			// backgroundColor: '#F1F0ED',

			'& .MuiOutlinedInput-root': {
				// 	fontSize:'14px',
				// 	backgroundColor: '#F1F0ED',
				// 	height: '20px',

				// width:'100px',
				border: 'none',
				'& .MuiOutlinedInput-notchedOutline': {
					// 		fontSize:'14px',
					border: 'none'
					// 		height: '20px',
					// width:'100px',

					// backgroundColor: '#F1F0ED',
				}
			},
			// '& .Mui-focused ': {
			// 	// backgroundColor: '#F1F0ED',
			// 	fontSize:'14px',
			// 	height: '20px',
			// width:'100px',
			// 	border: 'none',

			// },

		}

	},
	textFieldTextCenter: {
		background: 'red !important',
		'& .MuiInputBase-input': {
			textAlign: 'center',
			"&::placeholder": {
				// textAlign: 'center',
				color: 'red'
			}
		}
	},
	textField2finaltree: {
		'&.MuiTextField-root': {
			background: '#F1F0ED',
			border: 'none',
			borderRadius: '18px',
			height: '20px',
			// marginBottom: '42px',

			'& .MuiOutlinedInput-root': {
				borderRadius: '18px',
				border: '1px solid #684D45',
				// borderRadius: '18px',
				// border: 'none',
				'& .MuiOutlinedInput-notchedOutline': {
					//
					// border: '1px solid #684D45',
					borderRadius: '18px'
					// border: 'none'
				}
			},
			'& .Mui-focused ': {
				fontFamily: 'Poppins-Regular',
				fontStyle: 'normal',
				fontWeight: '400',
				fontSize: '14px',
				// color: '#E8CD94',
				//
				border: '1px solid #684D45',
				borderRadius: '18px'
			},

			'& ::placeholder': {
				fontFamily: 'Poppins-Regular',
				fontStyle: 'italic',
				fontWeight: '400',
				fontSize: '14px',
				lineHeight: '30px',
				color: '#171312',
				letterSpacing: '0.2px',
				opacity: '0.5',
				textAlign: 'center'
			}
		}
	},

	//media query for 768px of screeen...

	'@media (max-width: 768px)': {
		ContainBox: {
			width: '90%'
		}
	}
});

export default styles;
