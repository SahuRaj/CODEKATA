// You are given an array. Your task is to sort the array in given manner. Print the elements in increasing order of the frequency. If frequency is same print smaller one first.

// Input Description:
// You are given a number ‘n’. Then in next line n space separated numbers.

// Output Description:
// Print the array as mentioned

// Sample Input :
// 4
// 1 1 3 2
// Sample Output :
// 2 3 1


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

    let arr = userInput[1].split(" ");

    let frequency = {};
    for (let i = 0; i < arr.length; i++) {
        frequency[arr[i]] = (frequency[arr[i]] || 0) + 1;
    }

    let sortable = [];
    for (let x in frequency) {
        sortable.push([x, frequency[x]]);
    }
    sortable.sort(function (a, b) {
        return a[1] - b[1];
    });

    // To get key values from object
    let ar = [];
    let s;
    for (let i = 0; i < sortable.length; i++) {
        s = sortable[i];
        ar.push(s[0]);
    }


    console.log(ar.join(" "));
    //end-here
});