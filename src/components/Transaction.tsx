import { IconButton, makeStyles, Typography } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';
import { DeleteOutline } from '@material-ui/icons';
import React, { useContext } from 'react';
import { GlobalContext, TransactionItem } from '../context/GlobalContext';

const sideBorder = 5;
const useStyles = makeStyles({
	deleteBtn: {
		opacity: 0,
		position: 'absolute',
		top: 0,
		left: 0,
		padding: 0,
		transform: `translate(-100%, 40%)`,
	},
	expense: {
		borderRight: `${sideBorder}px solid ${red['A400']}`,
	},
	income: {
		borderRight: `${sideBorder}px solid ${green['A400']}`,
	},
});

type TransactionProp = {
	transaction: {
		id: number;
		description: string;
		amount: number;
	};
};

const Transaction = ({ transaction }: TransactionProp) => {
	const { deleteTransaction } = useContext(GlobalContext);
	const styles = useStyles();

	const handleDeleteClick = (transaction: TransactionItem) => {
		if (deleteTransaction) {
			deleteTransaction(transaction);
		}
	};

	const transactionType =
		transaction.amount >= 0 ? styles.income : styles.expense;
	const sign = transaction.amount >= 0 ? '+' : '-';
	return (
		<li className={`${transactionType}`}>
			<div>
				<Typography>
					{transaction.description}
					<IconButton
						style={{ color: red['800'] }}
						className={styles.deleteBtn}
						onClick={() => handleDeleteClick(transaction)}
					>
						<DeleteOutline />
					</IconButton>
				</Typography>
			</div>
			<div>
				<Typography>
					{sign}${Math.abs(transaction.amount)}
				</Typography>
			</div>
		</li>
	);
};

export default Transaction;
