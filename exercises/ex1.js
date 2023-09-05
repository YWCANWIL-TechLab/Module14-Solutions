// * CALLBACK EXERCISES
// ! Call each function when you are finished to be sure it works. 

/**
 * Given two numbers, num1 and num2, and a callback function, mathCallback,
 * write a callback function for addition, subtract, multiplication, and 
 * division. Each callback function should return the result of the operation.
 * The callback functions you write will be passed as the mathCallback 
 * parameter. 
 * 
 * This will allow your mathOperation function to add, subtract, multiply, or 
 * divide.
 * 
 * @param {Number} num1 
 * @param {Number} num2 
 * @param {Function} mathCallback 
 * @returns {Number}
 */
function mathOperation(num1, num2, mathCallback) {
    return mathCallback(num1, num2);
}

console.log(mathOperation(10, 10, add));    // 20
console.log(mathOperation(10, 10, subtract));   // 0
console.log(mathOperation(10, 10, multiply));   // 100
console.log(mathOperation(10, 10, divide));     // 1

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function printYourName(first, middle, last, callback) {
    callback();     // Runs a function
    console.log(`I am ${first} ${middle} ${last}`);
}

function printNumbers() {
    for(let i = 1; i <= 1000; i++) {
        console.log(`I am number: ${i}`);
    }
}

function sayHi() {
    console.log("Hi");
}

// document.getElementById('p1').innerHTML = "Hello World!";

function printAfter3() {
    // setTimeout(function() {
    //     console.log("I waited to run!");
    // }, 1000 * Math.floor(Math.random() * 10));
    setTimeout(() => console.log('I waited to run!'), 3000);
}

function stopTimeout() {

    const timeoutId = setTimeout(() => {
        console.log('All done!');

    }, 5000);

    clearTimeout(timeoutId);
}

function clock() {

    const intervalId = setInterval(() => {
        let now = new Date();

        let currentTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}:${now.getMilliseconds()}`;

        document.getElementById('h1').innerHTML = currentTime;
    }, 1);

}


function bakeCake() {

    const cakePromise = new Promise(function(resolve, reject) {
        // ! PRODUCING CODE 
        let cake = null;

        console.log("Put the cake in the oven");
        setTimeout(() => {
            cake = "Cake!";
            resolve(cake);
        }, 5000);

    }).then(function(result) {
        // ! CONSUMING CODE
        console.log(result);
        console.log("Time to frost it!");
    });
    return cakePromise;

}