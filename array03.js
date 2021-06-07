// You are given with an array of numbers, Your task is to print the difference of indices of largest and smallest number.All number are unique.

// Input Description:
// First line contains a number ‘n’. Then next line contains n space separated numbers.

// Output Description:
// Print the difference of indices of largest and smallest array

// Sample Input :
// 5
// 1 6 4 0 3
// Sample Output :
// -2

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

    let n = +userInput[0];
    let arr = userInput[1].split(" ");
    let min = 100000;
    let max = -100000;
    let smallindex;
    let bigindex;

    for (let i = 0; i < n; i++) {
        if (+arr[i] < min) {
            min = +arr[i];
            smallindex = i;
        }

        if (+arr[i] > max) {
            max = +arr[i];
            bigindex = i;
        }
    }


    console.log(bigindex - smallindex);
    //end-here
});