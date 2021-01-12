import { Typography } from '@material-ui/core';
import React from 'react';

const TransactionHistory = () => {
	return (
		<>
			<Typography variant="h5" component="h3">
				History
			</Typography>
			<ul>
				<li>
					Cash <span>-$400</span>
					<button>X</button>
				</li>
			</ul>
		</>
	);
};

export default TransactionHistory;
