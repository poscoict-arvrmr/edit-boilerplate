const promise = new Promise( (resolve, reject) => {
    setTimeout(() => {
        //resolve('1. This is my resolved data');
        //resolve('2. This is my resolved data');
        resolve({
            name: 'Andrew',
            age: 26
        });
    }, 1500);
});

const promise = new Promise( (resolve, reject) => {
    setTimeout(() => {
        reject('Something went wrong');
    }, 1500);
});

/**144.ES6 Promises tutorials
 * Promise: sync-up async operation
 * It either resolves or rejects. 
 * if resolved once, won't resolve again.
 * so if you have two resolve(); inside the Promise,
 * it won't resolve the second one. 
 * As a solution, you resolve the object {}
 */

console.log('before');

//register callbacks - .then() does that 
//console.log prints out after 1500 sec
promise.then((data) => {
    console.log('1',data);
}).catch( (error) => {
    console.log('error: ', error);
});
//you add .catch to show something to user about the error


console.log('after');

