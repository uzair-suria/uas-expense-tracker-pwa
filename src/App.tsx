import React from 'react';
import './App.css';
import ExpenseTracker from './containers/ExpenseTracker';

function App() {
	Notification.requestPermission();
	return (
		<>
			<div className="App">
				<ExpenseTracker />
			</div>
		</>
	);
}

export default App;
