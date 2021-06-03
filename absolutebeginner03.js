// You will be provided with a number. Print the number of days in the month corresponding to that number.

// Note: In case the input is February, print 28 days. If the Input is not in valid range print "Error".

// Input Description:
// The input is in the form of a number.

// Output Description:
// Find the days in the month corresponding to the input number. Print Error if the input is not in a valid range.

// Sample Input :
// 8
// Sample Output :
// 31

//code

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
    let x = parseInt(userInput[0]);
    if (x > 0 && x < 13) {
        if (x == 1)
            console.log("31");
        else if (x == 2)
            console.log("28");
        else if (x == 3)
            console.log("31");
        else if (x == 4)
            console.log("30");
        else if (x == 5)
            console.log("31");
        else if (x == 6)
            console.log("30");
        else if (x == 2)
            console.log("28");
        else if (x == 7)
            console.log("31");
        else if (x == 8)
            console.log("31");
        else if (x == 9)
            console.log("30");
        else if (x == 10)
            console.log("31");
        else if (x == 11)
            console.log("30");
        else
            console.log("31");
    }
    else
        console.log("Error");



    //end-here
});