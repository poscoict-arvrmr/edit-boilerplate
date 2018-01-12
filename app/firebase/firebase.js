import * as firebase from 'firebase';
//firebase module


//the object that is equivalent to the password
const config = {
    apiKey: "AIzaSyDiUQoK0ujoBZiLZcmNDNSpuU0LfWaaJzY",
    authDomain: "react-redux-firebase-b56b1.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-b56b1.firebaseio.com",
    projectId: "react-redux-firebase-b56b1",
    storageBucket: "react-redux-firebase-b56b1.appspot.com",
    messagingSenderId: "804440604367"
  };
  
firebase.initializeApp(config);

const database = firebase.database();

/**
 * This line allows the access to database related features
 * Import firebase in index.js to check if this shows up
 * to check if firebase is working right. you can see this
 * on your google-firebase-project webpage 'realtime database' tab
 * */
database.ref().set({
    name: 'Testing',
    isSingle: 'false',
    age: 26,
    location: {
        city: 'Philadelphia',
        country: 'United States'
    }
});

/**
 * ref() : reference
 * reference to a specific part of our database
 * you can set up various references..like tabs/menus
 * default ref() access the root of database
 * set(): set the value for that reference
 * */

//database.ref().set('This is my date.');

 database.ref().set({
     age:27
 });
//this will completely override the previous ref() root information above

data.ref('age').set(28);
data.ref('location/city').set('New York');

data.ref('attributes').set({
    height: 156,
    weight: 50
});

console.log('Requested to change the data');

//to check if it actually updated data, ES6 promise is essential
