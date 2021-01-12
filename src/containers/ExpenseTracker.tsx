import { Paper } from '@material-ui/core';
import React from 'react';
import AddTransaction from '../components/AddTransaction';
import Balance from '../components/Balance';
import Header from '../components/Header';
import Summary from '../components/Summary';
import TransactionHistory from '../components/TransactionHistory';

const ExpenseTracker = () => {
	return (
		<div>
			<Paper>
				<Header />
				<Balance />
				<Summary />
				<TransactionHistory />
				<AddTransaction />
			</Paper>
		</div>
	);
};

export default ExpenseTracker;
