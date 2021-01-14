import firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyDTs4H6CDBaOFJK0fb8whDTgcD49gP92LQ',
	authDomain: 'uas-expense-tracker-pwa.firebaseapp.com',
	projectId: 'uas-expense-tracker-pwa',
	storageBucket: 'uas-expense-tracker-pwa.appspot.com',
	messagingSenderId: '173628882845',
	appId: '1:173628882845:web:a9dda3241514c2e2ae3974',
};

firebase.initializeApp(config);

export default firebase;
