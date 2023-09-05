// * ASYNCHRONOUS EXERCISES

/**
 * Example
 * 
 * Starts a counter that increments by one each second.
 */
function countTo5() {
    let counter = 0;
    const id = setInterval(function() {
        if(counter > 5) {
            console.log('Count Finished');
            clearInterval(id);
            return;
        }
        console.log(counter);
        counter += 1;
    }, 1000)
}




/**
 * Given a number, num, create a countdown timer that will print out each number
 * from num to 0. When the countdown reaches 0, print out the message "Countdown
 * finished!" to the console. This must be done using setInterval()
 * 
 * @param {Number} num 
 */
function countDownTimer(num) {
    // TODO Finish the function

    const id = setInterval(function() {

        if(num < 0) {
            console.log("Countdown finished!");
            clearInterval(id);
            return;
        }

        console.log(num);
        num--;
    }, 1000);
}

/**
 * Given a String, message, and a Number, timesToRepeat, print out the message
 * in the console the number of times represented by timesToRepeat. You must
 * do this using setInterval()
 * 
 * @param {String} message 
 * @param {Number} timesToRepeat 
 */
function repeatMessage(message, timesToRepeat) {
    const id = setInterval(function() {

        if(timesToRepeat === 0) {
            clearInterval(id);
            return;
        }

        console.log(message);
        timesToRepeat--;

    }, 1000);
}



/**
 * Given two Numbers, start and end, use setInterval() to continuously calculate
 * the sum of numbers from start to end. Print the sum to the console every 
 * second until the interval is complete.
 * 
 * @param {Number} start 
 * @param {Number} end 
 */
function intervalSum(start, end) {

    let sum = 0;
    let current = start;

    const id = setInterval(() => {
        if(current > end) {
            clearInterval(id);
            return;
        }

        sum += current;
        console.log(`The current number is ${current} and the sum is ${sum}`);
        current++;

    }, 1000);
}


/**
 * Given three numbers, min - the minimum number a random number can be, max - 
 * the highest number a random number can be, and timeToRun - a number of SECONDS,
 * Generate a random number between the min and max every second for the number
 * of seconds indicated in timeToRun. Write this function using setTimeout() and
 * setInterval().
 * 
 * @param {Number} min 
 * @param {Number} max 
 * @param {Number} timeToRun 
 */
function randomNumbers(min, max, timeToRun) {
        
}

/**
 * Given a String, stringToAnimate, display the string one character at a time
 * with a 200 ms delay between each character. You can do this using the DOM,
 * setTimeout(), and setInterval().
 * 
 * @param {String} stringToAnimate 
 */
function animateTyping(stringToAnimate) {
    // TODO
    let index = 0;
    let current = "";
    const intervalId = setInterval(() => {
        if(index === stringToAnimate.length) {
            clearInterval(intervalId);
            return;
        }
        current += stringToAnimate[index];
        document.getElementById('p1').innerHTML = current;
    }, 200);
}

// function animateTyping2(string) {
//     let index = 0;
//     let current = "";
//     const element = document.getElementById('p1');
//     const intervalId = setInterval(() => {
//         if(index === string.length) {
//             clearInterval(intervalId);
//             return; // break
//         }
//         current += string[index];
//         element.innerText = current;
//         index++;
//     }, 2);
// }


/**
 * The hacker typing animation plays out by changing all characters randomly 
 * each ms. Every second, we change one letter of the animation to a correct 
 * letter of the String to the correct character. We should repeat this until 
 * the entire string has been figured out.
 * 
 * @param {String} string 
 */
function hackerTypingAnimation(string) {
    let random;
    let index = 0;
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let current = "";
    const element = document.getElementById("p");
    current = randomizeString(string);

    // Sets correct letters each second
    // (Could|Should be its own function)
    const intervalIdCorrectLetters = setInterval(() => {
        if(index === string.length) {
            clearInterval(intervalIdCorrectLetters);
            return;
        }
        current = string[index];
        element.innerText = current;
    }, 1000);

    // Set random letters each ms
    const intervalIdRandomLetters = setInterval(() => {
        if(index === string.length) {
            clearInterval(intervalIdRandomLetters);
            return;
        }

        current[index] = randomLetter();
        index++;

    }, 10);
}

/**
 * Sets up a random String with a random character at each index.
 * 
 * @param {String} string 
 * @returns {String}
 */
function randomizeString(string) {
    let result = "";   // The string to randomize
    for(let i = 0; i < string.length; i++) {
        // Adds random letters to each index
        result += randomLetter();
    }
    return result;
}


/**
 * Generates a random lowercase letter.
 * 
 * @returns {String}
 */
function randomLetter() {
    let letters = "abcdefghijklmnopqrstuvwxyz"; // Letters to choose from
    return letters[Math.floor(Math.random() * 26)];
}
