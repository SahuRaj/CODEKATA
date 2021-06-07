// Assume you are a student studying in school.You are given a task to find first negative integer for each and every window of size k.

// Input Description:
// First line contains an integer n denoting the size of the array. The next line contains n space separated integers forming the array. The last line contains the window size k.

// Output Description:
// Print the first negative integer in that window.If all the numbers are positive print 0

// Sample Input :
// 7
// 1 -2 -3 -4 5 6 -7
// 3
// Sample Output :
// -2 -2 -3 -4 -7


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
    let k = +userInput[2];

    let a = [];
    let i;
    let s = "";
     /* Process first k (or first window) elements of array */
    for (i = 0; i < k; i++) {
        // Add current element at the rear of a[]
        // if it is a negative integer
        if (+arr[i] < 0) {
            a.push(i);
        }
    }

// Process rest of the elements, i.e., from arr[k] to arr[n-1]
    for (; i < n; i++) {
        // if a is not empty then the element at the
        // front of the queue is the first negative integer
        // of the previous window
        if (a.length !== 0) {
            s += arr[a[0]] + " ";
        }
        // else the window does not have a
        // negative integer
        else
            s += 0 + " ";

        // Remove the elements which are out of this window    
        while (a.length !== 0 && a[0] < i - k + 1)
            a.shift();
        // Add current element at the rear of a
        // if it is a negative integer
        if (+arr[i] < 0) {
            a.push(i);
        }

    }

// For the first negative
    // integer of last window
    if (a.length !== 0)
        s += arr[a[0]] + " ";
    else
        s += 0 + " ";

    console.log(s.trim());
    //end-here
});