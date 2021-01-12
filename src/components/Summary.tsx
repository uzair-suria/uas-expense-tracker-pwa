import { Card, Typography } from '@material-ui/core';
import React from 'react';

const Summary = () => {
	return (
		<div className="summary-box">
			<Card>
				<div>
					<Typography variant="h5" component="h4">
						Income
					</Typography>
					<Typography variant="body1">$0.00</Typography>
				</div>
				<div>
					<Typography variant="h5" component="h4">
						Expense
					</Typography>
					<Typography variant="body1">$0.00</Typography>
				</div>
			</Card>
		</div>
	);
};

export default Summary;
