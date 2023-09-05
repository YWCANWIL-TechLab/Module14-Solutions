// * PROMISE EXERCISES

// Promises allow us to run and manage asynchronous code without stopping other code from executing
// They also allow us to do something with the result when it becomes available
// Promises let us avoid using regular callback functions, which can be very hard to debug
// ! All of these exercises should use Promises unless otherwise specified

/**
 * Given a String, message, and a Number, n, display the message after n number
 * of seconds. It should display on the p element with an id of "p1".
 * 
 * * When we do this, it uses an anonymous function as a callback.
 * * Do not use a promise for this one.
 * 
 * @param {String} message 
 * @param {Number} n 
 */
function displayAfterN(message, n) {
    setTimeout(() => {
        document.getElementById('p1').innerHTML = message;
    }, n * 1000);
}


/**
 * Given a String, message, and a Number, n, display the message after n number
 * of seconds, but this time use a promise to do so. It should display on the p
 * element with an id of "p2".
 * 
 * @param {String} message 
 * @param {Number} n 
 */
function displayAfterNWithPromise(message, n) {
    const displayAfterN = new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, n * 1000);
    }).then((result) => {
        document.getElementById('p2').innerHTML = result;
    });
}


/**
 * Given a Number, n, representing a number of milliseconds, return a promise.
 * The promise should reject with an error message after the specified delay.
 * 
 * * Note: You can use either then() with an anonymous/arrow function for both
 * * resolve and reject, or you can catch the error using the catch() method of
 * * the promise.
 * 
 * @param {Number} n 
 * @returns {Promise}
 */
function errorAfterN(n) {

    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('Uh oh!'));
        }, n * 1000);
    }).catch((error) => {
        console.log(error.name + " " + error.message);
    });

    return myPromise;

}


/**
 * Given an array of Numbers, numberArray, return a promise that resolves with 
 * the sum of the array of elements.
 * 
 * * Note: There should only be Numbers in the array, but we do not know for 
 * * sure. When you are summing the elements, throw a TypeError for any element
 * * that is not a Number.
 * 
 * @param {Number[]} numberArray 
 * @returns {Promise}
 */
function sumOfArrayWithPromise(numberArray) {
    const sumOfArray = new Promise(function(resolve, reject) {
        //! Producing Code
        let sum = 0;
        for(let num of numberArray) {
            if(isNaN(num)) {
                reject(new TypeError("Element is not a number"));
            }
            sum += num;
        }
        resolve(sum);
    }).then(function(result) {
        document.getElementById('p1').innerHTML = result;
    }, function(error) {
        document.getElementById('p1').innerHTML = error.message;
    })
}

/**
 * Given a File object, file, return a promise that will resolve after a random
 * delay (between 1 and 5 seconds) to simulate a file upload. Print out the line
 * "File Uploaded after" followed by how ever many seconds your random number 
 * will wait for.
 * 
 * Note: We'll learn more about how you would actually do this when we talked about 
 * AJAX, JSON, and the Fetch API.
 * 
 */
function simulateFileUpload() {
    const upload = new Promise((resolve, reject) => {
        let random = Math.floor(Math.random() * 5) + 1;

        setTimeout(() => {
            resolve(random);
        }, random * 1000);
    }).then((result) => {
        console.log(`Uploaded after ${result} seconds`);
    });
}


/**
 * Given an Array of Strings, stringArr, return a promise that resolves with the
 * average length of the Strings in the array.
 * 
 * @param {String[]} stringArr 
 * @returns {Promise}
 */
function findMeanStringLength(stringArr) {

    const meanPromise = new Promise((resolve, reject) => {

        let sum = 0;

        for(let str of stringArr) {
            sum += str;
        }

        resolve(sum);
    });
    return meanPromise;

}
