import { getnewTreeApiFn, newTreeApiFn } from '../../services/API/Authenication.api';
import Types from './newTree.type';

export const setNewTreeData = (payload) => {
	return {
		type: Types.setTreeData,
		payload
	};
};
export const getNewTreeData = (payload) => {
	return {
		type: Types.getTreeData,
		payload
	};
};

export const setNewTree = (payload) => {
	return (dispatch) => {
		newTreeApiFn(payload)
			.then((res) => {
				dispatch(setNewTreeData(res?.data));
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

export const getNewTree = (payload) => {
	return (dispatch) => {
		getnewTreeApiFn(payload)
			.then((res) => {
				dispatch(getNewTreeData(res?.data));
			})
			.catch((err) => {
				console.log(err);
			});
	};
};
