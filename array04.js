// You are given a number with duplicate digits your task is to remove the immediate duplicate digits and print the result

// Input Description:
// You are given a long string of digits

// Output Description:
// Print the desired result print -1 if result length is 0

// Sample Input :
// 1331
// Sample Output :
// 11

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

    let arr = userInput[0].split("");

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] == arr[i + 1]) {
            arr.splice(i, 2);
        }
    }
    console.log(arr.join(""));

    //end-here
});