import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularLoader() {
	return (
		<Box sx={{ background: '#00000017', display: 'flex', width: '100vw', height: '100vh', position: 'absolute', top: 0, left: 0, justifyContent: 'center', alignItems: 'center' }}>
			<CircularProgress size={100} style={{ color: '#dfd6c9' }} />
		</Box>
	);
}
