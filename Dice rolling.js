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
    let s = "";
    num = Math.pow(6, n) - Math.pow(5, n);
    s += num;

    let denom = " " + Math.pow(6, n);
    s += denom;

    console.log(s);

    //end-here
});