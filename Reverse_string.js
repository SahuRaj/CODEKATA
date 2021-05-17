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
    let l = arr.length;
    for (let i = 0; i < l / 2; i++) {
        a = arr[i];
        arr[i] = arr[l - i - 1];
        arr[l - i - 1] = a;
    }
    let string = arr.join("");
    string = string[0].toUpperCase() +
        string.slice(1);
    console.log(string);

    //end-here
});