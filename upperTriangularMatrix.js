//Problem Statement
// The population of North Korea and South Korea are represented in a square matrix, with the upper triangular 
// elements(including the diagonal) representing North Korea and lower Triangular elements(excluding the diagonal) representing South Korea. Kim Jong-un  asks you to inform him the current population figures of his country. Note: The elements are in a scale of 1000. 1 means 1000, 2 means 2000 and so on.
 

// Input Description:
// Dimensions of the matrix followed by the elements of the matrix

// Output Description:
// Sum of upper triangular elements



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
    let n = +num[0];
    var sum = 0;
    function totalsum(str) {
        for (let i = 0; i < str.length; i++) {
            sum += +str[i];
        }
    }
    for (let i = 1; i <= n; i++) {
        let arr = userInput[i].split(" ");
        let str = arr.slice(i - 1);
        totalsum(str);
    }
    console.log(sum * 1000)
    //end-here
});