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


//>>>>>>>>>>>>>> Array Data in Firebase <<<<<<<<<<<<<<<<<<
// firebase doesn't store data in array format..
// .push() 할때마다 컨텐츠 chunk가 notes에 리스트 처럼 추가됨. (not replaced, added)
// expenses - food | rent | clothing - 각 마다 desc,note, amount, createdAt 정보가 있음

database.ref('expenses').push({
    description: 'food',
    note: "restaurants, markets, january, 2018",
    amount: 100.00
    createdAt: '2018-01-01',
})

database.ref('expenses').push({
    description: 'rent',
    note: "january, 2018",
    amount: 1200.00
    createdAt: '2018-01-01',
})

database.ref('expenses').push({
    description: 'clothing',
    note: "online, offline, january, 2018",
    amount: 100.00
    createdAt: '2018-01-01',
})

//Make this above into array-ish database by using forEach method
// each list's long random string ID can be accessed via 'key' 
database.ref('expenses').on('value', (snapshot) => {
    const expenses = [];

        snapshot.forEach((childSnapshot)=> {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });
    console.log(expenses);
});

//>>>>>>>>>>>>>> Fetching data from FIREBASE <<<<<<<<<<<<<<
// reading database ref set that's already written on Realtime
// Database Firebase website to this

/** 
 * fetch one time. 
 * .once() returns a promise
 * snapshot - access to have data
 * snapshot.val()
 * returns data we requested
*/
database.ref()
  .once('value')
  .then( (snapshot) => {
    const val = snapshot.val();
    console.log(val);
  }).catch( (e) => {
      console.log('error fetching data ', e)
});

/** 
 * BUT .once() wouldn't be able to update based on changes in db...
 * thus, we choose .on() callback pattern
 * it reads the changed data at database instantly, which then should rerun
 * */
database.ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
});


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
    stressLevel: 6,
    job: {
        title: 'Software Developer',
        company: 'Google'
    }
    location: {
        city: 'Philadelphia',
        country: 'United States'
    }
}).then( ()=> {
    console.log('Data is saved.');
}).catch( (e) => {
    console.log('This failed.', e)
});
//>>>>>>>>>>>>>>>>>>>>>> Updating Data <<<<<<<<<<<<<<<<<<<<<<

database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
});
//you need slash and singlequote'../..' to access and change specific nested data, city,
// and avoid changing the whole location data which removes country data


//>>>>>>>>>>>>>>>>>>>>>> Removing data <<<<<<<<<<<<<<<<<<<<<<<<
// 1) using 'set' to wipe out the data
database.ref('isSingle').set(null);

// 2) using 'remove', which is more preferred and more explicit
database.ref('isSingle')
    .remove()
    .then( () => {
        console.log("isSingle Data removed");
    }).catch( (e) => {
        console.log("did not remove data, ", e);
    });


/**
 * ref() : reference
 * reference to a specific part of our database
 * you can set up various references..like tabs/menus
 * default ref() access the root of database
 * set(): set the value for that reference
 * */

 /*
database.ref().set('This is my date.');

 database.ref().set({
     age:27
 });
 */
//this will completely override the previous ref() root information above

//data.ref('age').set(28);
//data.ref('location/city').set('New York');

data.ref('attributes').set({
    height: 156,
    weight: 50
}).then( () => {
    console.log("seond set call worked.")
}).catch( (e)=> {
    console.log('Things didnt for the second error', e);
});

//console.log('Requested to change the data');
//To check if it actually updated data, ES6 promise is essential
