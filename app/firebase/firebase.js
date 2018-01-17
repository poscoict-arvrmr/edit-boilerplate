import * as firebase from 'firebase';


const config = {
  apiKey: 'AIzaSyDiUQoK0ujoBZiLZcmNDNSpuU0LfWaaJzY',
  authDomain: 'react-redux-firebase-b56b1.firebaseapp.com',
  databaseURL: 'https://react-redux-firebase-b56b1.firebaseio.com',
  projectId: 'react-redux-firebase-b56b1',
  storageBucket: 'react-redux-firebase-b56b1.appspot.com',
  messagingSenderId: '804440604367'
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth, };
