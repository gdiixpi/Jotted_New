export const ProfileNode = [
	{
		id: 'a',
		type: 'input',
		data: { label: 'Brinlee Kidd ' },
		position: { x: 450, y: 25 },
		style: {
			backgroundColor: '#F6F6F6',
			borderRadius: '20px'
		}
	},
	{
		id: 'b',
		data: { label: 'geography and places' },
		position: { x: 315, y: 150 },
		style: {
			width: '100px',
			height: '60px',
			borderRadius: '20px',
			fontSize: '13px'
		}
	},
	{
		id: 'c',
		data: { label: 'social sciences and society' },
		position: { x: 475, y: 200 },
		style: {
			width: '100px',
			height: '80px',
			borderRadius: '20px',
			fontSize: '13px'
		}
	},
	{
		id: 'd',
		data: { label: 'health and fitness' },
		position: { x: 315, y: -150 },
		parentNode: '',
		extent: 'parent',
		target: 'e',
		style: {
			width: '100px',
			height: '60px',
			borderRadius: '20px',
			fontSize: '13px'
		}
	},
	{
		id: 'e',
		data: { label: 'history and events' },
		position: { x: 620, y: -140 },
		parentNode: '',
		extent: 'parent',
		target: 'e',
		style: {
			width: '100px',
			height: '60px',
			borderRadius: '20px',
			fontSize: '13px'
		}
	},
	{
		id: 'f',
		data: { label: 'natural sciences and nature' },
		position: { x: 475, y: -180 },
		style: {
			width: '72px',
			height: '72px',
			borderRadius: '50%',
			fontSize: '10px',
			textOverflow: 'ellipsis',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
			// overflow: "hidden",
			// display: 'flex',
			// alignItems: 'center',
			// justifyContent: 'center'
		}
	},
	{
		id: 'g',
		data: { label: 'technology and applied sciences' },
		position: { x: 200, y: -70 },
		style: {
			width: 154,
			height: 215,
			borderRadius: '15px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		}
	},
	{
		id: 'h',
		data: { label: 'mathematics and abstractions' },
		position: { x: 615, y: 150 },
		style: {
			width: 50,
			height: 50,
			borderRadius: '50%',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		}
	},
	{
		id: 'i',
		data: { label: 'philosophy and thinking' },
		position: { x: 750, y: -70 },
		style: {
			width: 50,
			height: 30,
			borderRadius: '20px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		}
	},
	{
		id: 'j',
		data: { label: 'religion and spirituality' },
		position: { x: 750, y: 80 },
		style: {
			width: '100px',
			height: '80px',
			borderRadius: '20px',
			fontSize: '13px'
		}
	},
	{
		id: 'k',
		data: { label: 'art and culture' },
		position: { x: 200, y: 80 },
		style: {
			width: '100px',
			height: '60px',
			borderRadius: '20px',
			fontSize: '13px'
		}
	},

	// {
	// 	id: 'b',
	// 	data: { label: 'Skill' },
	// 	position: { x: 147.5, y: 140 },
	// 	style: {
	// 		width: '75px',
	// 		height: '46px',
	// 		borderRadius: '20px',
	// 		fontSize: '13px'
	// 	}
	// },
	// {
	// 	id: 'c',
	// 	data: { label: 'Learning' },
	// 	position: { x: 425.5, y: 140 },
	// 	style: {
	// 		width: '75px',
	// 		height: '46px',
	// 		borderRadius: '20px',
	// 		fontSize: '13px'
	// 	}
	// },
	// {
	// 	id: 'd',
	// 	data: { label: 'Media' },
	// 	position: { x: 288.34, y: 140 },
	// 	parentNode: '',
	// 	extent: 'parent',
	// 	target: 'e',
	// 	style: {
	// 		width: '75px',
	// 		height: '46px',
	// 		borderRadius: '20px',
	// 		fontSize: '13px'
	// 	}
	// },
	// {
	// 	id: 'e',
	// 	data: { label: 'HTML' },
	// 	position: { x: 149, y: 215 },
	// 	parentNode: '',
	// 	extent: 'parent',
	// 	style: {
	// 		width: '72px',
	// 		height: '72px',
	// 		borderRadius: '50%',
	// 		fontSize: '10px',
	// 		display: 'flex',
	// 		alignItems: 'center',
	// 		justifyContent: 'center'
	// 	}
	// },
	// {
	// 	id: 'f',
	// 	type: 'output',
	// 	data: { label: 'project Managment' },
	// 	position: { x: 149, y: 331 },
	// 	parentNode: '',
	// 	extent: 'parent',
	// 	style: {
	// 		width: '72px',
	// 		height: '72px',
	// 		borderRadius: '50%',
	// 		fontSize: '10px',
	// 		textOverflow: 'ellipsis'
	// 		// overflow: "hidden",
	// 		// display: 'flex',
	// 		// alignItems: 'center',
	// 		// justifyContent: 'center'
	// 	}
	// },
	// {
	// 	id: 'g',
	// 	type: 'group',
	// 	data: null,
	// 	position: { x: 249.1, y: 218 },
	// 	parentNode: '',
	// 	// extent: 'parent',
	// 	style: {
	// 		width: 154,
	// 		height: 215,
	// 		borderRadius: '15px'
	// 	}
	// },
	// {
	// 	id: 'h',
	// 	// type: 'input',
	// 	data: { label: '' },
	// 	position: { x: 53, y: 25 },
	// 	parentNode: 'g',
	// 	extent: 'parent',
	// 	style: {
	// 		width: 50,
	// 		height: 50,
	// 		borderRadius: '50%'
	// 	}
	// },
	// {
	// 	id: 'i',
	// 	// type: 'output',
	// 	data: { label: '' },
	// 	position: { x: 20, y: 90 },
	// 	parentNode: 'g',
	// 	extent: 'parent',
	// 	style: {
	// 		width: 50,
	// 		height: 30,
	// 		borderRadius: '20px'
	// 	}
	// },
	// {
	// 	id: 'j',
	// 	// type: 'output',
	// 	data: { label: '' },
	// 	position: { x: 90, y: 90 },
	// 	parentNode: 'g',
	// 	extent: 'parent',
	// 	style: {
	// 		width: 50,
	// 		height: 30,
	// 		borderRadius: '20px'
	// 	}
	// },
	// {
	// 	id: 'k',
	// 	// type: 'output',
	// 	data: { label: '' },
	// 	position: { x: 20, y: 140 },
	// 	parentNode: 'g',
	// 	extent: 'parent',
	// 	style: {
	// 		width: 50,
	// 		height: 30,
	// 		borderRadius: '20px'
	// 	}
	// },
	// {
	// 	id: 'l',
	// 	data: { label: '' },
	// 	position: { x: 427.5, y: 215 },
	// 	parentNode: '',
	// 	extent: 'parent',
	// 	style: {
	// 		width: '72px',
	// 		height: '72px',
	// 		borderRadius: '50%'
	// 	}
	// },
	// {
	// 	id: 'm',
	// 	data: { label: '' },
	// 	position: { x: 427.5, y: 331 },
	// 	parentNode: '',
	// 	extent: 'parent',
	// 	style: {
	// 		width: '72px',
	// 		height: '72px',
	// 		borderRadius: '50%'
	// 	}
	// }
];
