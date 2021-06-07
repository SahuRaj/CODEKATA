// Find the first 0 in window of size k. You  are given n numbers and window size ‘w’

// Your task is to print the first index which has 0

// Input Description:
// You are given two numbers ‘n’ and ‘w’ n representing size of array and ‘w’ size of window

// Output Description:
// Print the index of first 0(1 basedindexing),if there is no index with 0 print -1

// Sample Input :
// 7 2
// 1 0 6 7 4 0 9
// Sample Output :
// 2 2 -1 -1 6 6

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
    let num = userInput[0].split(" ");
    let arr = userInput[1].split(" ");
    let a = [];
    let i;
    let s = "";

    /* Process first k (or first window) elements of array */
    for (i = 0; i < +num[1]; i++) {
        if (+arr[i] === 0) {
            a.push(i + 1);

        }
    }


    // Process rest of the elements, i.e., from arr[k] to arr[n-1]
    for (i = +num[1]; i < +num[0]; i++) {
        // if a is not empty then the element at the
        // front of the queue is the first negative integer
        // of the previous window
        if (a.length !== 0) {
            s += a[0] + " ";
        }
        // else the window does not have a
        // negative integer
        else
            s += -1 + " ";

        // Remove the elements which are out of this window
        while (a.length !== 0 && a[0] < i - +num[1] + 2)
            a.shift();

        // Add current element at the rear of Di
        // if it is a negative integer    
        if (+arr[i] === 0) {
            a.push(i + 1);
        }

    }

    // For the first negative
    // integer of last window
    if (a.length !== 0)
        s += a.shift() + " ";
    else
        s += -1 + " ";


    console.log(s.trim());
    //end-here
});