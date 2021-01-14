import { Box, makeStyles, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const useStyles = makeStyles({
	componentTitle: {
		textTransform: 'uppercase',
	},
	balance: {
		fontWeight: 'bolder',
	},
});

const Balance = () => {
	const { transactions } = useContext(GlobalContext);

	const amounts = transactions.map((transaction) => transaction.amount);
	const total = amounts.reduce((acc, amount) => (acc += amount), 0);

	const styles = useStyles();
	return (
		<>
			<Typography variant="h5" component="h4" className={styles.componentTitle}>
				Your Balance
			</Typography>
			<Typography variant="h4" component="h2">
				<Box fontWeight={900}>
					{total >= 0 ? '' : '-'}${Math.abs(total).toFixed(2)}
				</Box>
			</Typography>
		</>
	);
};

export default Balance;
