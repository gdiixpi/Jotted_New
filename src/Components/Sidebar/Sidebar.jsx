import React, { useState } from 'react';
import { withStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { ReactComponent as HouseSvg } from '../../Assets/svg/houseSvg.svg';
import { ReactComponent as CommunitySvg } from '../../Assets/svg/communitySvg.svg';
import { ReactComponent as ProfileSvg } from '../../Assets/svg/profileSvg.svg';
import MenuIcon from '@mui/icons-material/Menu';
import clsx from 'clsx';

const styles = () => ({
	root: {
		width: '85px',
		backgroundColor: 'white',
		height: '100%',
		color: 'white'
	},

	menu: {
		paddingTop: '160px',
		width: '85px !important',
		borderTopRightRadius: '60px',
		borderBottomRightRadius: '60px',
		minHeight: '65vh',
		background: '#F5EBDD',
		padding: '40px 0 40px 0px',
		listStyleType: 'none',
		position: 'relative',
		marginTop: '0px',
		display: 'flex',
		flexDirection: 'column',
		transition: '0.5s',
		'&.open': {
			width: '200px !important',
			zIndex: '99',
			'& > li': {
				'&:last-child': {
					textAlign: 'left',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}
			},
			'& > li > a': {
				textAlign: 'left',
				display: 'flex',
				alignItems: 'center'
				// width: '100%'
			},
			'& > li > a > svg': {
				marginRight: '25px',
				marginTop: '0px !important',
				color: '#684D45'
			},
			'& >li > a > span ': {
				display: 'block'
			}
		},
		'& >li > a > span ': {
			display: 'none'
		},
		/////////////
		'& > li': {
			marginBottom: '30px',
			marginLeft: '-10px',
			textAlign: 'center',
			padding: '5px',
			cursor: 'pointer',
			position: 'relative'
		},
		'& > li > a > svg': {
			color: '#684D45'
		},
		'& > li:hover::before': {
			backgroundColor: 'red',
			content: '',
			position: 'absolute',
			top: '-80px',
			right: '-1px',
			height: '80px',
			width: '40px',
			borderBottomRightRadius: '80px',
			boxShadow: '0 40px 0 0 #FFE2AC',
			mozBorderBottomRightRadius: '80px',
			webkitBorderBottomRightRadius: '80px',
			webkitBoxShadow: '0 40px 0 0 #FFE2AC',
			mozBoxShadow: '0 40px 0 0 #FFE2AC'
		},
		'& > li:hover::after': {
			content: '',
			position: 'absolute',
			top: '160px',
			right: '-1px',
			height: '80px',
			width: '11px',
			borderTopRightRadius: '80px',
			mozBorderTopRightRadius: '80px',
			boxShadow: '0 -40px 0 0 #FFE2AC',
			webkitBorderTopRightRadius: '80px',
			webkitBoxShadow: '0 -40px 0 0 #FFE2AC',
			mozBoxShadow: '0 -40px 0 0 #FFE2AC'
		},
		'& > li:hover': {
			backgroundColor: 'white',
			left: '20px',
			borderRadius: '60px 0px 0px 60px'
		},
		'& > li > a': {
			padding: '10px 25px',
			fontFamily: 'Poppins-Regular',
			color: '#000',
			textDecoration: 'none'
		},
		'& > li:hover > a': {
			color: '#FFA90A'
		}
	}
});

const Sidebar = (props) => {
	const { classes, customclass } = props;
	const [open, setOpen] = useState('');

	const openClickHandler = () => {
		setOpen((prev) => {
			return prev === '' ? 'open' : '';
		});
	};

	return (
		<>
			<div className={clsx(classes.root, customclass)}>
				<ul className={clsx(classes.menu, customclass) + ` ${open}`}>
					<li>
						<Link to="/">
							<HouseSvg style={{ marginTop: '4px' }} />
							<span>Home</span>
						</Link>
					</li>
					<li>
						<Link to="#">
							<CommunitySvg style={{ marginTop: '4px' }} />
							<span>Community</span>
						</Link>
					</li>
					<li>
						<Link to="/portfoliotree">
							<ProfileSvg style={{ marginTop: '4px' }} />
							<span>Profile</span>
						</Link>
					</li>
					<li style={{ marginTop: 'auto' }}>
						<Link to="#" onClick={openClickHandler}>
							<MenuIcon />
						</Link>
					</li>
				</ul>
				<div></div>
			</div>
		</>
	);
};

export default withStyles(styles)(Sidebar);
