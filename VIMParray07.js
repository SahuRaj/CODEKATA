// You are given an array of non-negative integers representing height of walls at index i as Ai and the width of each block is 1. Compute how much air can be encapsulated between the walls of chamber.



// Input Description:
// Each line contains an integer ‘N’ denoting the size of the array Next line contains N space separated numbers to be stored in array.

// Output Description:
// Output the total unit of Air encapsulated between the walls of chamber.

// Sample Input :
// 3
// 7 4 9
// Sample Output :
// 3

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

    let left = Array(n);
    let right = Array(n);

    let max1 = -Infinity;
    let max2 = -Infinity;

    // left[i] contains height of tallest bar to the
    // left of i'th bar including itself
    for (let i = 0; i < n; i++) {
        if (+arr[i] > max1)
            max1 = +arr[i];
        left[i] = max1;
    }

    // Right [i] contains height of tallest bar to
    // the right of ith bar including itself
    for (let i = n - 1; i >= 0; i--) {
        if (+arr[i] > max2)
            max2 = +arr[i];
        right[i] = max2;
    }

    //  Calculate the accumulated water element by element
    // consider the amount of air on i'th bar, the
    // amount of air accumulated on this particular
    // bar will be equal to min(left[i], right[i]) - arr[i] .
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += Math.min(left[i], right[i]) - arr[i];
    }
    
    console.log(sum);
    //end-here
});