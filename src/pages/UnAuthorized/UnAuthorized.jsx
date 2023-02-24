import { Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh'
	},
	BackButton: {
		'&.MuiBox-root': {
			borderColor: 'black',
			'& .MuiButton-root': {
				borderColor: '#E8CD94',
				color: '#fff',
				backgroundColor: '#E8CD94',
				marginTop: '20px',
				padding: '10px 30px'
			}
		}
	}
});

const Unauthorized = () => {
	const classes = useStyles();
	const navigate = useNavigate();

	const goBack = () => navigate(-1);

	return (
		<>
			<Box className={classes.root}>
				<Box className={classes.UnauthorizedBox}>
					<h1>Unauthorized</h1>
					<p>You do not have access to the requested page.</p>
					<Box className={classes.BackButton}>
						<Button variant="outlined" onClick={goBack} className={classes.backBtn}>
							Go Back
						</Button>
						{/* <BackButton onClick={goBack} customclass={classes.backBtn} /> */}
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default Unauthorized;
