import thankyoutopline from '../../Assets/images/thankyoutopline.png';
import thankyoubottomline from '../../Assets/images/thankyoubottomline.png';

const styles = () => ({
	root: {
		fontFamily: 'Poppins-Regular',
		fontStyle: 'normal',
		fontWeight: '500',
		letterSpacing: '0.2px',
		//
		height: '90%',
		backgroundImage: `url(${thankyoutopline}) ,url(${thankyoubottomline})`,
		backgroundRepeat: `no-repeat, no-repeat`,
		backgroundPosition: `left top , left bottom`,
		backgroundSize: `97% 55%, 100% 33%`,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		// alignSelf: 'center',
		textAlign: 'center'
	},
	boxText: {
		marginTop: '60px'
	},
	paraOne: {
		color: '#171312',
		fontSize: '30px',
		lineHeight: '45px',
		marginBottom: '70px'
	},
	paraTwo: {
		color: '#171312',
		opacity: '0.5',
		fontSize: '24px',
		lineHeight: '36px',
		marginBottom: '90px'
	},

	HomeBtn: {
		width: '196px !important'
	}
});

export default styles;
