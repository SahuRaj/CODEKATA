// You are provided with the radius of a circle "A". Find the length of its circumference.

// Note: In case the output is coming in decimal, roundoff to 2nd decimal place. In case the input is a negative number, print "Error".

// Input Description:
// The Radius of a circle is provided as the input of the program.

// Output Description:
// Calculate and print the Circumference of the circle corresponding to the input radius up to two decimal places.

// Sample Input :
// 2
// Sample Output :
// 12.57


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


    let r = +userInput[0];
    let ans = 2 * 22 / 7 * r;

    console.log(ans.toFixed(2));
    //end-here
});