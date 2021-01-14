import {
	Box,
	Button,
	makeStyles,
	TextField,
	Typography,
} from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import React, { FormEvent, useContext, useState } from 'react';
import { GlobalContext, TransactionItem } from '../context/GlobalContext';

const useStyles = makeStyles({
	newTransactionTitle: {
		borderBottom: `${grey[800]} solid 1px`,
	},
	inputFields: {
		display: 'block',
		width: '100%',
	},
	addTransactionBtn: {
		margin: '0 auto',
	},
});

const AddTransaction = () => {
	const { addTransaction } = useContext(GlobalContext);
	const [description, setDescription] = useState('');
	const [amount, setAmount] = useState('');

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (addTransaction) {
			const newTransaction: TransactionItem = {
				id: Math.floor(Math.random() * 100000000),
				description,
				amount: Number(amount),
			};
			if (isNaN(newTransaction.amount)) {
				alert('Please enter a number in Amount Field');
			} else {
				setAmount('');
				setDescription('');
				addTransaction(newTransaction);
			}
		}
	};

	const styles = useStyles();
	return (
		<>
			<Typography
				variant="h5"
				component="h3"
				className={styles.newTransactionTitle}
			>
				Add New Transaction
			</Typography>
			<form onSubmit={handleSubmit} autoComplete="off">
				<TextField
					id="description"
					label="Description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					fullWidth
				/>
				<TextField
					id="amount"
					label="Amount in Numbers"
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
					type="number"
					fullWidth
				/>
				<Box textAlign="center" marginTop="20px">
					<Button
						variant="contained"
						color="primary"
						type="submit"
						onClick={handleSubmit}
						fullWidth
					>
						Add Transaction
					</Button>
				</Box>
			</form>
		</>
	);
};

export default AddTransaction;
