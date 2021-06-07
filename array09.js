// you are given with array of numbers.you have to find whether array is beautiful or not. A beautiful array is an array whose sum of all numbers is divisible by 2, 3 and 5

// Input Description:
// You are given a number ‘n’ denoting the size of array.Next line contains n space separated numbers.

// Output Description:
// Print 1 if array is beautiful and 0 if it is not

// Sample Input :
// 5
// 5 25 35 -5 30
// Sample Output :
// 1



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

    let num = +userInput[0];
    let arr = userInput[1].split(" ");
    let sum = 0;
    for (let i = 0; i < num; i++) {
        arr[i] = parseInt(arr[i]);
        sum += arr[i];
    }

    if (sum % 30 === 0) {
        console.log("1");
    }
    else
        console.log("0");

        
    //end-here
});