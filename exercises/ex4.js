// * ASYNC/AWAIT EXERCISES

// Async and Await both make it easier to write promises.
// Async: makes a function return a Promise
// Await: makes a function wait for a Promise to resolve before continuing
// They help us stop code from executing so quickly that our Promises cannot resolve in time
// ! All of these problems should use Promises unless otherwise specified


/**
 * Given an array of Numbers, arr, create a promise that resolves with the sum
 * of the numbers in the array. Display the output of the promise on the p tag
 * with an id of "p3". You should display the result after the promise resolves
 * and you should await the promise's output.
 * 
 * @param {Number[]} arr 
 */
async function findSumOfArray(arr) {
    // TODO Finish the function
    const sumPromise = new Promise((resolve, reject) => {
        let sum = 0;
        for(let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        resolve(sum);
    });

    document.getElementById('p3').innerHTML = await sumPromise;
}


/**
 * Given a String, message, and a Number, seconds, display the resolution of a 
 * Promise on the p element with an id of 'p4'. The promise should resolve with
 * the String message after a number of seconds represented by the Number seconds.
 * 
 * ! Do not use async/await on this one. It will not output correctly, but that
 * ! is the point of the exercise
 * 
 * @param {String} message 
 * @param {Number} seconds 
 */
async function displayAfterSeconds(message, seconds) {

    const displayPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);

        }, seconds * 1000);
    }).then((result) => {
        document.getElementById('p4').innerHTML = result;
    })

}


/**
 * Given a String, message, and a Number, seconds, display the resolution of a 
 * Promise on the p element with an id of 'p4'. The promise should resolve with
 * the String message after a number of seconds represented by the Number seconds.
 * 
 * * You should use async and await. Specifically, await the output of the promise
 * * when you go to display it. You will get a different output than the
 * 
 * @param {String} message 
 * @param {Number} seconds 
 */
async function displayAfterSecondsWithAwait(message, seconds) {
    const displayPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, seconds * 1000);
    });

    document.getElementById('p4').innerHTML = await displayPromise;
}

/**
 * A factorial of a Number is the value of a Number multiplied by every number
 * between it and 0 (exclusive, it does not get multiplied by 0).
 * 
 * Ex: 5! (5 factorial) = 5 * 4 * 3 * 2 * 1 = 120
 * Ex: 10! (10 factorial) = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 = 3628800
 * 
 * Given a Number, number, create a promise that resolves with the Factorial of
 * number. Await the resolution of the promise, then display that value in the
 * p element with an id of "p1"
 * 
 * @param {Number} number 
 */
async function findFactorialOfNumber(number) {
    const factorialPromise = new Promise((resolve, reject) => {

        let factorial = 1;

        for(let i = 1; i <= number; i++) {
            factorial *= i;
        }

        resolve(factorial);
    });

    document.getElementById('p1').innerHTML = await factorialPromise;
}


/**
 * Given an array of Number, numArr, square every element of the array inside of 
 * a Promise. The Promise should resolve with the sum of every squared element. 
 * Display the value of the resolved promise the in p element with an id of 'p2'.
 * 
 * @param {Number[]} numArr 
 */
async function squareAllNumbers(numArr) {
    // TODO Finish the function
    const squareAll = new Promise((resolve, reject) => {
        let sumOfSquares = 0;
        for(let num of numArr) {
            sumOfSquares += num ** 2;
        }
        resolve(sumOfSquares);
    });

    document.getElementById('p2').innerHTML = await squareAll;
}


/**
 * Given a Number, number, find the nth fibonacci Number and display it. The way
 * we know how to find fibonacci numbers (iteratively) can take a relatively long
 * time, so you will want to await the result of the fibonacci number before you
 * display it.
 * 
 * Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, etc.
 * 
 * ! Don't worry about creating a Promise in this one. You can just display the 
 * ! result.
 * 
 * * Note: It may be a good idea to write a "helper function", which is a separate
 * * you write outside of the function, to simply your main function's logic.
 */
async function displayNthFibonacciNumber(number) {
    if (number < 0) {
      console.log("Invalid input: Please enter a non-negative number.");
      return;
    }
  
    if (number === 0) {
      console.log(0);
      return;
    }
  
    if (number === 1) {
      console.log(1);
      return;
    }
  
    let fib0 = 0;
    let fib1 = 1;
  
    for (let i = 2; i <= number; i++) {
      const temp = fib0 + fib1;
      fib0 = fib1;
      fib1 = temp;
    }
  
    console.log(fib1);
  }
  
