import React from 'react';
import './App.css';
import ExpenseTracker from './containers/ExpenseTracker';
// import firebase from './firebase';
// import { register } from './serviceWorkerRegistration';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';

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
