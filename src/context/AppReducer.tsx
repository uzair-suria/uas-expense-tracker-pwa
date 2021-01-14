import { Action, State, TransactionItem } from './GlobalContext';

const AppReducer = (state: State, action: Action) => {
	switch (action.type) {
		case 'DELETE_TRANSACTION':
			let reducedData = {
				...state,
				transactions: state.transactions.filter(
					(tr: TransactionItem) => tr.id !== action.payload.id
				),
			};
			localStorage.setItem('transactionData', JSON.stringify(reducedData));
			return reducedData;
		case 'ADD_TRANSACTION':
			let addedData = {
				...state,
				transactions: [...state.transactions, action.payload],
			};
			localStorage.setItem('transactionData', JSON.stringify(addedData));
			return addedData;
		default:
			return state;
	}
};

export default AppReducer;
