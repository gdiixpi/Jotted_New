import Types from './newTree.type';

const initialState = {
	create_new_tree: null,
  get_tree:null
};

const treeDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case Types.setTreeData:
			return {
				...state,
				create_new_tree: action.payload
			}
      

		case Types.getTreeData:
			return {
				...state,
				get_tree: action.payload
			}
      

		default:
			return state;
	}
};

export default treeDataReducer;
