import { makeStyles, Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import Transaction from './Transaction';

const useStyles = makeStyles({
	historyTitle: {
		borderBottom: `${grey[800]} solid 1px`,
		paddingBottom: '5px',
	},
	transactionList: {
		listStyleType: 'none',
		padding: 0,
		'& li': {
			backgroundColor: '#fff',
			padding: '10px 5px',
			borderRadius: `3px`,
			boxShadow: `1px 2px 5px 1px ${grey[600]}`,
			position: 'relative',
			display: 'flex',
			justifyContent: 'space-between',
			marginBottom: 12,
		},
		'& li button': {
			transition: '0.5s',
		},
		'& li:hover button': {
			opacity: 1,
		},
	},
});

const TransactionHistory = () => {
	const { transactions } = useContext(GlobalContext);
	const styles = useStyles();
	return (
		<>
			<Typography variant="h5" component="h3" className={styles.historyTitle}>
				History
			</Typography>
			<ul className={`${styles.transactionList}`}>
				{transactions.map((transaction) => (
					<Transaction key={transaction.id} transaction={transaction} />
				))}
			</ul>
		</>
	);
};

export default TransactionHistory;
