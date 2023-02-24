import React from 'react';
import { withStyles } from '@mui/styles';

import { Box } from '@mui/material';
import JottedButton from '../../Components/Buttons/Jotted_Button/JottedButton';
import styles from './thankyou.style';

const ThankYouPage = (props) => {
	const { classes } = props;

	return (
		<>
			<Box className={classes.root}>
				<Box className={classes.boxText}>
					<p className={classes.paraOne}>
						Thank you for sharing your knowledge
						<br />
						with the jotted community!
					</p>

					<p className={classes.paraTwo}>
						Your contribution is furthering jotted’s mission to <br /> democratize education!
					</p>

					<JottedButton type="primary" customclass={classes.HomeBtn}>
						Home
					</JottedButton>
				</Box>
			</Box>
		</>
	);
};

export default withStyles(styles)(ThankYouPage);
