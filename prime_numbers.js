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
    function setall(prime) {
        for (let i = 0; i < prime.length; i++) {
            prime[i] = true;
        }
    }
    let num = userInput[0].split(" ");
    let l = +num[0];
    let r = +num[1];
    r++;
    let count = 0;
    var prime = new Array(r)

    setall(prime);
    for (let p = 2; p * p <= r; p++) {
        if (prime[p] == true) {
            for (let i = p * p; i <= r; i += p)
                prime[i] = false;
        }
    }
    for (let p = l; p <= r; p++)
        if (prime[p])
            count++;

    console.log(count);
    //end-here
});