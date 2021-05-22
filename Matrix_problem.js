//Problem statement
// You are given an N by N matrix M. M[i, j] = '.', means that there is a plant at that cell and M[i, j] = '#' means
// that there is a weed at that cell. Find the number of plants and weeds on the boundary of the Matrix.

// Input Description:
// The first line contains an integer N denoting the matrix dimension Then read an N x N matrix

// Output Description:
// Print two space separated integers denoting the number of plants and the number of weeds respectively.


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
    let s = userInput[1];
    let plant = 0, weed = 0;

    if (n == 1) {
        if (s == ".")
            plant++;
        else
            weed++;
    }
    else {
        let sn = userInput[n];
        let sx;

        for (let i = 0; i < n; i++) {
            if (s[i] == ".")
                plant++;
            else
                weed++;
        }
        for (let i = 0; i < n; i++) {
            if (sn[i] == ".")
                plant++;
            else
                weed++;
        }

        for (let i = 2; i < n; i++) {
            sx = userInput[i];
            if (sx[0] == ".")
                plant++;
            else
                weed++;

            if (sx[n - 1] == ".")
                plant++;
            else
                weed++;
        }
    }
    
    console.log(plant + " " + weed);
    //end-here
});