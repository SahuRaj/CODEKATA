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

    let str = userInput[0].split("");
    let count = 0;
    let max = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "0") {
            count = 0;
        }
        else {
            count++;
            max = (max > count) ? max : count;
        }
    }
    if (max == 0)
        console.log("-1");
    else
        console.log(max);

    //end-here
});