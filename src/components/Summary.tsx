import { Card, makeStyles, Typography } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const useStyles = makeStyles({
	root: {
		padding: '10px',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		margin: '10px 0px',
		'& div': {
			flexGrow: 1,
			textAlign: 'center',
			textTransform: 'uppercase',
		},
		'& div:first-child': {
			borderRight: 'black solid 2px',
		},
	},
});

const Summary = () => {
	const { transactions } = useContext(GlobalContext);
	const amounts = transactions.map((tr) => tr.amount);
	const totalIncome = amounts
		.filter((am) => am >= 0)
		.reduce((acc, am) => (acc += am), 0);
	const totalExpense = amounts
		.filter((am) => am < 0)
		.reduce((acc, am) => (acc += am), 0);
	const styles = useStyles();
	return (
		<>
			<Card className={styles.root} raised={true}>
				<div>
					<Typography
						variant="h6"
						component="h4"
						style={{ color: green['A400'] }}
					>
						Income
					</Typography>
					<Typography variant="body1">${totalIncome}</Typography>
				</div>
				<div>
					<Typography
						variant="h6"
						component="h4"
						style={{ color: red['A400'] }}
					>
						Expense
					</Typography>
					<Typography variant="body1">${Math.abs(totalExpense)}</Typography>
				</div>
			</Card>
		</>
	);
};

export default Summary;
