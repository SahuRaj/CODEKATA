// You are given with an array. For each element present in the array your task is to print the next smallest than that number. If it is not smallest print -1

// Input Description:
// You are given a number ‘n’ representing size of array. And n space separated numbers.

// Output Description:
// Print the next smallest number present in array and -1 if no smallest is present

// Sample Input :
// 7
// 10 7 9 3 2 1 15
// Sample Output :
// 7 3 3 2 1 -1 -1


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

    let s = "";
    let flag = 1;

    for (let i = 0; i < n - 1; i++) {
        flag = 1;
        for (let j = i + 1; j < n; j++) {
            if (+arr[i] > +arr[j]) {
                s += arr[j] + " ";
                flag = 0;
                break;
            }
        }
        if (flag === 1)
            s += -1 + " ";
    }

    //For last index which is always -1
    s += -1;

    console.log(s.trim());
    //end-here
});