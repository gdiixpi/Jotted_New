import { Box, Button, Fab, Stack } from '@mui/material';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactFlow, { addEdge, Background, Controls, useEdgesState, useNodesState, useReactFlow } from 'react-flow-renderer';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import { axiosInstance } from '../services/Axios/axios';
import html2canvas from 'html2canvas';
import { TREE_API } from '../services/API/Tree.api';

const onInit = (reactFlowInstance) => console.log('flow loaded:', reactFlowInstance);

const TreeComp = ({
	treeid = null,
	editable = true,
	style = {},
	onNodeClick = () => null,
	onEdit = () => null,
	onSave = () => null,
	treeEditable = false,
	onBlurNode = () => null,
	...props
}) => {
	const { classes } = props;
	const { project } = useReactFlow();
	const reactFlowWrapper = useRef(null);
	const connectingNodeId = useRef(null);
	const [nodes, setNodes, onNodesChange] = useNodesState([]);
	const [edges, setEdges, onEdgesChange] = useEdgesState([]);
	const [popUpValues, setPopUpValues] = useState(null);
	// const [image, setImage] = useState(null);

	const TREE_API_OBJ = new TREE_API();

	const createEdgeOnServer = (newEdge) => {
		axiosInstance
			.post(`/edges`, newEdge)
			.then((eResponse) => {
				// let resEdge = eResponse;
				setNodes([]);
				setEdges([]);
				setPopUpValues(null);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const createNodeOnServer = async (position, data) => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				type: 'default',
				label: data.label,
				tree_id: treeid,
				position: {
					x: position.x,
					y: position.y
				}
			})
		};
		const response = await fetch(`https://xg3n-4mh1-ngd5.n7.xano.io/api:w4ONEGEJ/naufeltree`, requestOptions);
		const json = await response.json();
		return json;
	};

	const onConnect = (edge) => {
		setEdges((eds) => addEdge(edge, eds));
		let newEdge = { source: edge.source, target: edge.target, tree_id: treeid };
		createEdgeOnServer(newEdge);
	};
	const onConnectStart = useCallback((_, { nodeId }) => {
		connectingNodeId.current = nodeId;
	}, []);

	const onConnectStop = useCallback(
		(event) => {
			const targetIsPane = event.target.classList.contains('react-flow__pane');

			if (targetIsPane) {
				const { top, left } = reactFlowWrapper.current.getBoundingClientRect();

				const newNode = {
					position: project({ x: event.clientX - left - 75, y: event.clientY - top }),
					data: { label: '' }
				};
				setPopUpValues({ currentName: '', newName: '', newNode: newNode });
			}
		},
		[project]
	);

	const handleNodeClick = (e, node) => {
		!treeEditable && onNodeClick(e, node);
		treeEditable &&
			setPopUpValues({
				currentName: node.label || node.data.label,
				newName: '',
				newNode: node
			});
	};

	const handleNodeBlur = () => {
		onBlurNode();
	};

	const handleDragStop = (e, node, nodeArr) => {
		handleUpdate(node);
	};

	const handleCreate = () => {
		createNodeOnServer(popUpValues?.newNode.position, popUpValues?.newNode.data).then((response) => {
			let newEdge = { source: connectingNodeId.current, target: response.id, tree_id: treeid };
			createEdgeOnServer(newEdge);
		});
	};

	const handleUpdate = (node, label) => {
		let payload = {
			type: 'default',
			label: label || node.label || node.data.label,
			tree_id: treeid,
			position: node.position
		};
		axiosInstance
			.post(`/naufeltree/${node.id}`, payload)
			.then((response) => {
				setEdges([]);
				setNodes([]);
				setPopUpValues(null);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handlePopupSubmit = () => {
		popUpValues?.currentName ? popUpValues.newNode.data.label && handleUpdate(popUpValues.newNode, popUpValues.newNode.data.label) : handleCreate();
	};

	const handleSave = () => {
		onSave();
		setTimeout(() => {
			captureFullScreen();
		}, 600);
	};

	const captureFullScreen = () => {
		html2canvas(reactFlowWrapper.current).then(async (canvas) => {
			let a = document.createElement('a');
			a.download = 'ss.png';
			a.href = canvas.toDataURL('image/png');
			// a.click();
			// setImage(a.href);
			let payload = {
				id: treeid,
				snapshot: JSON.stringify(a.href)
			};
			try {
				await TREE_API_OBJ.updateTree(payload);
			} catch (error) {
				console.log('SNAPSHOT ERROR:', error);
			}
		});
	};

	useEffect(() => {
		const getNodesByTreeId = async () => {
			try {
				const response = await fetch(`https://xg3n-4mh1-ngd5.n7.xano.io/api:w4ONEGEJ:v2/naufeltree-details/${treeid}`);
				const json = await response.json();
				setNodes(json.map((obj) => ({ ...obj, data: { label: obj.label } })));
			} catch (error) {
				console.log('error', error);
			}
		};

		const Edges_Get_All_Data = async () => {
			try {
				const response = await fetch(`https://xg3n-4mh1-ngd5.n7.xano.io/api:w4ONEGEJ:v2/edges-details/${treeid}`);
				const json = await response.json();
				setEdges(json);
			} catch (error) {
				console.log(error);
			}
		};
		if (nodes.length === 0) {
			getNodesByTreeId();
			Edges_Get_All_Data();
		}
	}, [nodes.length, treeid, setEdges, setNodes]);

	const PopupName = () => (
		<Box className={classes.Popuproot}>
			<Box className={classes.PopupmainBox}>
				<span onClick={() => setPopUpValues(null)}>
					<CloseIcon />
				</span>
				<Stack className={classes.popUpTextField} spacing={1}>
					{popUpValues?.currentName && <input placeholder="Current Name" className="" value={popUpValues?.currentName ?? ''} autoComplete="off" disabled />}
					<input
						placeholder="New Name"
						className=""
						value={popUpValues?.newNode.data.label || ''}
						onChange={(e) => {
							setPopUpValues({ ...popUpValues, newNode: { ...popUpValues.newNode, data: { label: e.target.value } } });
						}}
						autoComplete="off"
						onKeyUp={(e) => e.key === 'Enter' && handlePopupSubmit()}
					/>
				</Stack>
				<Box className={classes.popupBtn}>
					<Button variant="contained" className={classes.PopupSaveBtn} onClick={handlePopupSubmit}>
						Save
					</Button>
				</Box>
			</Box>
		</Box>
	);

	return (
		<>
			{editable && (
				<div className={classes.GridIcon}>
					<Fab className={classes.GridIconButton}>{treeEditable ? <SaveIcon onClick={handleSave} /> : <EditIcon onClick={onEdit} />}</Fab>
				</div>
			)}
			<div>
				<div className="wrapper" ref={reactFlowWrapper}>
					<ReactFlow
						style={{ height: 635, width: '100%', visibility: 'visible', ...style }}
						nodes={nodes}
						edges={edges}
						onNodesChange={onNodesChange}
						onEdgesChange={onEdgesChange}
						onConnect={onConnect}
						onInit={onInit}
						nodesDraggable={treeEditable ? true : false}
						onNodeDragStop={handleDragStop}
						onNodeClick={handleNodeClick}
						fitView
						attributionPosition="top-right"
						onConnectStart={treeEditable ? onConnectStart : false}
						onConnectStop={onConnectStop}
						onPaneClick={handleNodeBlur}>
						<Controls style={{ position: 'absolute', top: '5px', left: '5px', boxShadow: 'none' }} />
						<Background color="#aaa" gap={16} />
					</ReactFlow>
				</div>
			</div>
			{popUpValues && PopupName()}
		</>
	);
};

const CustomTree = (props) => {
	return props.treeid ? TreeComp(props) : <></>;
};

export default CustomTree;
