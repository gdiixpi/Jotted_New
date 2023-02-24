import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Box, Fab, Grid } from '@mui/material';
import clsx from 'clsx';
import { withStyles } from '@mui/styles';
import 'react-multi-carousel/lib/styles.css';
import ReactFlow, { Controls } from 'react-flow-renderer';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import topLineForHome from '../../Assets/images/topLineForHome.png';
import bottomLineForHome from '../../Assets/images/bottomLineForHome.png';
import { ReactComponent as Edit_Tree_Img } from '../../Assets/svg/edit_tree.svg';

const edgeOptions = {
	animated: false,
	style: {
		stroke: '#B3B3B3',
		strokeWidth: '2'
	}
};

const initialEdges = [
	{ id: 'ea-b', source: 'a', target: 'b' },
	{ id: 'ea-c', source: 'a', target: 'c' },
	{ id: 'eb-d', source: 'b', target: 'd' },
	{ id: 'ed-e', source: 'd', target: 'e', type: 'step' },
	{ id: 'ed-f', source: 'd', target: 'f', type: 'step' },
	{ id: 'ed-g', source: 'd', target: 'g', type: 'smoothstep' },
	{ id: 'eg-h', source: 'g', target: 'h', type: 'step' },
	{ id: 'eg-i', source: 'g', target: 'i', type: 'step' },
	{ id: 'ec-j', source: 'c', target: 'j', animated: true },
	{ id: 'ej-k', source: 'j', target: 'k', type: 'step' },
	{ id: 'ek-l', source: 'k', target: 'l', type: 'step' },
	{ id: 'ek-m', source: 'k', target: 'm', type: 'step' },
	{ id: 'ek-n', source: 'k', target: 'n', type: 'step' },
	{ id: 'en-o', source: 'n', target: 'o' }
];

const styles = () => ({
	rootBox: {
		'&.MuiBox-root': {
			// border:'1px solid black',
			backgroundColor: '#FFFFFF',
			width: '100%',
			height: 'fit-content',
			// height: '100%',
			// fontFamily: 'Poppins-Regular',
			// fontStyle: 'normal',
			overflowX: 'auto'
		}
	},
	'&.react-flow__handle.connectable': {
		disable: 'none'
	},
	headerBox: {
		'&.MuiBox-root': {
			padding: '14px 30px',
			display: 'flex',
			justifyContent: 'space-between'
		}
	},

	bodyBox: {
		'&.MuiBox-root': {
			// width: '97%',
			// height: 'calc( 100% - 70px )',
			display: 'flex',
			justifyContent: 'flex-start',
			marginTop: '20px',
			width: 'calc( 100% - 100px )',
			height: '100%',
			flexDirection: 'column',
			marginLeft: '60px',
			marginRight: '15px'
		}
	},

	mainContainBox: {
		'&.MuiBox-root': {
			// width: 'calc( 100% - 100px )',
			height: '100%',
			display: 'flex',
			flexDirection: 'column',
			padding: '10px'
		}
	},
	// disable: {
	// 	cursor: 'pointer',
	// 	'& *': {
	// 		pointerEvents: 'none !important'
	// 	}
	// },
	mainHeading: {
		'&.MuiBox-root': {
			// width: '100%',
			// width: 'calc( 100% - 100px )',

			maxWidth: '100%',
			height: 'auto',
			backgroundColor: '#F1F0ED',
			backgroundImage: `url(${topLineForHome}) ,url(${bottomLineForHome})`,
			backgroundRepeat: `no-repeat, no-repeat`,
			backgroundPosition: `right top , left  bottom `,
			borderRadius: '34px',
			marginBottom: '20px',
			padding: '10px',
			marginRight: '15px',
			'& h3': {
				fontWeight: '600',
				fontSize: '24px',
				lineHeight: '36px',
				margin: '0px 10px',
				color: '#171312',
				'& span': {
					fontWeight: '700',
					fontSize: '24px',
					lineHeight: '36px',
					color: '#C0D0C5'
				}
			},
			'& p': {
				fontWeight: '400',
				fontSize: '15px',
				lineHeight: '22px',
				marginLeft: '10px',
				color: '#684D45'
			}
		}
	},

	customiseFabIcon: {
		'&.MuiFab-root': {
			marginRight: '9px',
			width: '35px',
			height: '30px',
			marginLeft: '15px',
			backgroundColor: '#FFF',
			'&:hover': {
				backgroundColor: '#C0D0C5'
			}
		}
	},
	GridIcon: {
		position: 'absolute',
		right: 0,
		textAlign: 'right',
		margin: '10px 10px 0px 0px'
	},
	GridIconButton: {
		'&.MuiFab-root': {
			width: '35px',
			height: '35px'
		}
	},
	GridReactFlowBody: {
		backgroundColor: '#F1EFED',
		borderRadius: '34px',
		height: '100%',
		width: '100%'
	},
	GridReactFlowControls: {
		position: 'absolute',
		left: '20px ',
		top: '15px',
		boxShadow: 'unset'
	}
});

const Edit_Tree = (props) => {
	const { classes } = props;
	const { auth, setAuth } = useAuth();
	const navigate = useNavigate();
	const { state } = useLocation();

	const params = useParams();
	const [treeEditable, setTreeEditable] = useState(false);

	const initialNodes = [
		{
			id: 'a',
			type: 'input',
			data: { label: `Math ${params.id}` },
			position: { x: 299, y: 46 },
			style: {
				width: '110px',
				height: '110px',
				fontWeight: ' 600',
				fontSize: ' 15px',
				lineHeight: ' 32px',
				color: '#FFFFFF',
				backgroundColor: '#C0D0C5',
				borderRadius: '50%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}
		},

		{
			id: 'b',
			data: { label: `Topic ${params.id}` },
			position: { x: 180.907, y: 211.48 },
			style: {
				width: '123.43px',
				height: '71.21px',
				borderRadius: '34px',
				fontWeight: ' 400',
				fontSize: ' 15px',
				lineHeight: ' 32px',
				color: '#FFFFFF',
				backgroundColor: '#C0D0C5',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}
		},
		{
			id: 'c',
			data: { label: `Topic ${params.id}` },
			position: { x: 378.052, y: 211.48 },
			Animation: 'true',
			style: {
				width: '123.43px',
				height: '71.21px',
				borderRadius: '34px',
				fontWeight: ' 400',
				fontSize: ' 15px',
				lineHeight: ' 32px',
				color: '#FFFFFF',
				backgroundColor: '#C0D0C5',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}
		},
		{
			id: 'd',
			data: { label: `Topic ${params.id}` },
			position: { x: 179.972, y: 326.27 },
			parentNode: '',
			extent: 'parent',
			// target: 'e',
			style: {
				width: '123.43px',
				height: '71.21px',
				borderRadius: '34px',
				fontSize: '13px'
			}
		},
		{
			id: 'e',
			type: 'output',
			data: { label: `Topic ${params.id}` },
			position: { x: 158.783, y: 430.071 },
			parentNode: '',
			style: {
				width: '72px',
				height: '70px',
				borderRadius: '57px',
				fontSize: '10px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}
		},
		{
			id: 'f',
			type: 'output',
			data: { label: `Topic ${params.id}` },
			position: { x: 249.5, y: 430.071 },
			parentNode: '',
			style: {
				width: '72px',
				height: '70px',
				borderRadius: '57px',
				fontSize: '10px',
				// overflow: "hidden",
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}
		},
		{
			id: 'g',
			data: { label: `Topic ${params.id}` },
			position: { x: -17.5566, y: 326.27 },
			parentNode: '',
			// extent: 'parent',
			style: {
				width: '123.43px',
				height: '71.21px',
				borderRadius: '34px',
				fontSize: '10px',
				// overflow: "hidden",
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}
		},
		{
			id: 'h',
			type: 'output',
			data: { label: `Topic ${params.id}` },
			position: { x: -39.388, y: 430.071 },
			parentNode: '',
			style: {
				width: '72px',
				height: '70px',
				borderRadius: '57px',
				fontSize: '10px',
				// overflow: "hidden",
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}
		},
		{
			id: 'i',
			type: 'output',
			data: { label: `Topic ${params.id}` },
			position: { x: 57.9867, y: 430.071 },
			parentNode: '',
			style: {
				width: '72px',
				height: '70px',
				borderRadius: '57px',
				fontSize: '10px',
				// overflow: "hidden",
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}
		},
		{
			id: 'j',
			data: { label: `Topic ${params.id}` },
			position: { x: 377.325, y: 381.153 },
			parentNode: '',
			style: {
				width: '123.43px',
				height: '71.21px',
				borderRadius: '34px',
				fontSize: '10px',
				// overflow: "hidden",
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}
		},
		{
			id: 'k',
			data: { label: `Topic ${params.id}` },
			position: { x: 521, y: 381.153 },
			parentNode: '',
			style: {
				width: '123.43px',
				height: '71.21px',
				borderRadius: '34px',
				fontSize: '10px',
				// overflow: "hidden",
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}
		},
		{
			id: 'l',
			type: 'output',
			data: { label: `Topic ${params.id}` },
			position: { x: 500.31, y: 495.216 },
			parentNode: '',
			style: {
				width: '72px',
				height: '70px',
				borderRadius: '57px',
				fontSize: '10px',
				backgroundColor: '#C0D0C5',
				// overflow: "hidden",
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}
		},
		{
			id: 'm',
			type: 'output',
			data: { label: `Topic ${params.id}` },
			position: { x: 592.27, y: 495.216 },
			parentNode: '',
			style: {
				width: '72px',
				height: '70px',
				borderRadius: '57px',
				fontSize: '10px',
				// backgroundColor: '#C0D0C5',
				// overflow: "hidden",
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}
		},
		{
			id: 'n',
			data: { label: `Topic ${params.id}` },
			position: { x: 694.192, y: 381.153 },
			parentNode: '',
			style: {
				width: '123.43px',
				height: '71.21px',
				borderRadius: '34px',
				fontSize: '10px',
				// backgroundColor: '#C0D0C5',
				// overflow: "hidden",
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}
		},
		{
			id: 'o',
			type: 'output',
			data: { label: `Derivatives ${params.id}` },
			position: { x: 719, y: 495.216 },
			parentNode: '',
			style: {
				backgroundColor: '#D9D9D9',
				width: '72px',
				height: '70px',
				borderRadius: '57px'
			}
		}
	];

	return (
		<>
			<Box className={classes.rootBox}>
				{/* <Box className={classes.bodyBox}> */}
				<Box className={classes.bodyBox}>
					<Box className={classes.mainHeading} style={{ backgroundSize: `53% 55%, 56% 22%` }}>
						<h3>
							Main Tree
							<Fab className={clsx(classes.customiseFabIcon)}>
								<Edit_Tree_Img />
							</Fab>
							<span>Category Title</span>
						</h3>
						<p>
							Add a description for your Subject Tree. ‘This tree covers topics relating to ASU Calculus 1, including topics such as derivatives, functions, intervals and limits.{' '}
						</p>
					</Box>
					{/* <button style={{ width: '150px', marginBottom: '20px' }}>Edit DATA</button> */}
					<Box className={classes.mainContainBox}>
						<Grid container justifyContent="center" alignItems="center" direction="row">
							<Grid md={12} xs={12} sx={{ position: 'relative' }}>
								<div className={classes.GridIcon}>
									<Fab className={classes.GridIconButton}>
										{treeEditable ? <SaveIcon onClick={() => setTreeEditable(false)} /> : <EditIcon onClick={() => setTreeEditable(true)} />}
									</Fab>
								</div>
								<div
									className={!treeEditable ? classes.disable : ''}
									style={{
										height: '84vh'
									}}>
									<ReactFlow
										defaultNodes={initialNodes}
										defaultEdges={initialEdges}
										defaultEdgeOptions={edgeOptions}
										panOnScroll={false}
										zoomOnScroll={false}
										fitView
										className={classes.GridReactFlowBody}
										// connectionLineStyle={connectionLineStyle}
									>
										<Controls className={classes.GridReactFlowControls} />
										{/* <Background /> */}
									</ReactFlow>
								</div>
							</Grid>
						</Grid>
					</Box>
				</Box>
				{/* </Box> */}
			</Box>
		</>
	);
};

export default withStyles(styles)(Edit_Tree);
