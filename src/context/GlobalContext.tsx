import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

export type TransactionItem = {
	id: number;
	description: string;
	amount: number;
};

export type State = {
	transactions: TransactionItem[];
	deleteTransaction?: (transaction: TransactionItem) => void;
	addTransaction?: (transaction: TransactionItem) => void;
};

export type Action = {
	type: string;
	payload: TransactionItem;
};

const getLocalData = () => {
	const jsonData = localStorage.getItem('transactionData');
	if (jsonData !== null) {
		const data = JSON.parse(jsonData).transactions;
		return data;
	} else {
		return [];
	}
};

// Initial State
const initialState: State = {
	transactions: [
		...getLocalData(),
		// { id: 1, description: 'Flower', amount: -20 },
		// { id: 2, description: 'Movies', amount: -5 },
		// { id: 3, description: 'Salary', amount: 384.52 },
		// { id: 4, description: 'Groceries', amount: -8.5 },
	],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }: any) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	// Actions
	const deleteTransaction = (transaction: TransactionItem) => {
		dispatch({
			type: 'DELETE_TRANSACTION',
			payload: transaction,
		});
	};

	const addTransaction = (transaction: TransactionItem) => {
		dispatch({
			type: 'ADD_TRANSACTION',
			payload: transaction,
		});
	};

	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions,
				deleteTransaction,
				addTransaction,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
