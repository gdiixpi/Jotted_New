import React from 'react';
import { ReactFlowProvider } from 'react-flow-renderer';
import Community from './Community';

const CommunityProvider = () => {
	return (
		<ReactFlowProvider>
			<Community />
		</ReactFlowProvider>
	);
};

export default CommunityProvider;
