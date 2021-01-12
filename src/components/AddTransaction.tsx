import { Button, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';

const AddTransaction = () => {
	const [description, setDescription] = useState('');
	const [amount, setAmount] = useState('');
	return (
		<>
			<Typography variant="h5" component="h3">
				Add Transaction
			</Typography>
			<form autoComplete="off">
				<TextField
					id="description"
					label="Description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<TextField
					id="amount"
					label="Amount in Numbers"
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
				/>
				<Button>Add Transaction</Button>
			</form>
		</>
	);
};

export default AddTransaction;
