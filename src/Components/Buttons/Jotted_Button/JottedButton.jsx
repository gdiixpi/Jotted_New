import React from 'react';
import { withStyles } from '@mui/styles';
import styles from './button.style';
import { getButtonClass } from './button.utils';
import clsx from 'clsx';
import { Button } from '@mui/material';
import PropType from 'prop-types';

const JottedButton = (props) => {
	const { classes, children, isimg, type, customclass } = props;

	const buttonClass = getButtonClass(type, classes);

	return (
		<Button
			variant={type === 'primary' ? 'contained' : 'outlined'}
			// color="primary"
			className={clsx(buttonClass, customclass)}
			{...props}>
			{isimg && <img src={isimg} alt={isimg} className={classes.imgMargin} />}
			<span>{children}</span>
		</Button>
	);
};

JottedButton.defaultProps = {
	isimg: null,
	customclass: null
	// type:null
};

JottedButton.propTypes = {
	classes: PropType.object.isRequired,
	children: PropType.string.isRequired,
	type: PropType.string.isRequired,
	// type: PropType.string,
	isimg: PropType.string,
	customclass: PropType.string
};

export default withStyles(styles)(JottedButton);
