//Problem

// Print the First 3 multiples of the given number "N". (N is a positive integer)

// Note: print the characters with a single space between them.

// Input Description:
// A positive integer is provided to you as an input.

// Output Description:
// Print the First 3 multiples of the number with single spaces between them as an output.

// Sample Input :
// 2
// Sample Output :
// 2 4 6

// code

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    //start-here
    //Your code goes here … replace the below line with your code logic 

    var x = +userInput[0];
    for (var i = 1; i < 4; i++) {
        s += x * i + " ";
    }

    console.log(s.trim());

    //end-here
});