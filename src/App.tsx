import React from 'react';
import './App.css';
import ExpenseTracker from './containers/ExpenseTracker';
import firebase from './firebase';
import { register } from './serviceWorkerRegistration';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';

function App() {
	Notification.requestPermission()
		.then(() => {
			return firebase.messaging().getToken();
		})
		.then((token) => {
			console.log(`Token:\n${token}`);
		});
	return (
		<>
			<div className="App">
				<ExpenseTracker />
			</div>
		</>
	);
}

export default App;
