import { Typography } from '@material-ui/core';
import React from 'react';

const Balance = () => {
	return (
		<>
			<Typography variant="h5" component="h4">
				Your Balance
			</Typography>
			<Typography variant="h4" component="h2">
				$0.00
			</Typography>
		</>
	);
};

export default Balance;
