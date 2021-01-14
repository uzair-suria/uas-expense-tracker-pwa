import { makeStyles } from '@material-ui/core';
import React from 'react';
import AddTransaction from '../components/AddTransaction';
import Balance from '../components/Balance';
import Header from '../components/Header';
import Summary from '../components/Summary';
import TransactionHistory from '../components/TransactionHistory';
import { GlobalProvider } from '../context/GlobalContext';

const useStyles = makeStyles({
	root: {
		margin: '0px',
		padding: '0px',
	},
	container: {
		maxWidth: '360px',
		margin: '0 auto',
		padding: '20px',
	},
});

const ExpenseTracker = () => {
	const styles = useStyles();
	return (
		<GlobalProvider>
			<div className={styles.container}>
				{/* <Paper className={styles.container}> */}
				<Header />
				<Balance />
				<Summary />
				<TransactionHistory />
				<AddTransaction />
				{/* </Paper> */}
			</div>
		</GlobalProvider>
	);
};

export default ExpenseTracker;
