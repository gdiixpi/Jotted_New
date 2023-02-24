export const getButtonClass = (type, classes) => {
	switch (type) {
		case 'primary':
			return classes.buttonprimary;
		case 'secondary':
			return classes.buttonsecondary;
		case 'normal':
			return classes.buttonnormal;
		case 'svgtype':
			return classes.buttonsvgtype;
		case 'light':
			return classes.buttonlight;
		default:
			return null;
	}
};
