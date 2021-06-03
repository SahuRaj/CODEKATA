// Using the method of looping, write a program to print the table of 9 till N in the format as follows:
// (N is input by the user)

// 9 18 27...

// Print NULL if 0 is input

// Input Description:
// A positive integer is provided as an input.

// Output Description:
// Print the table of nine with single space between the elements till the number that is input.

// Sample Input :
// 3
// Sample Output :
// 9 18 27


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

    let x = +userInput[0];
    let s = "";
    if (x === 0)
        console.log("NULL");
    else
        for (let i = 1; i <= x; i++) {
            s += 9 * i + " ";
        }

    console.log(s.trim());
    //end-here
});