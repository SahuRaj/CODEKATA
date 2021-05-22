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

    let s = userInput[0].split(" ");
    let month = s[0];
    let year = +s[1];
    var Ann = {
        January: 31,
        February: 28,
        March: 31,
        April: 30,
        May: 31,
        June: 30,
        July: 31,
        August: 31,
        September: 30,
        October: 31,
        November: 30,
        December: 31
    };
    if (year % 4 === 0 && month == "February") {
        console.log(countprimes(29));
    }
    else {
        console.log(countprimes(Ann[month]));
    }



    function countprimes(num) {
        let count = 0;
        for (let i = 2; i <= num; i++) {
            if (checkprime(i)) {
                count++;
            }
        }
        return count;
    }
    function checkprime(num) {
        let flag = 0;
        for (let i = 2; i <= num / 2; i++) {
            if (num % i === 0) {
                flag = 1;
                break;
            }
        }
        if (flag)
            return false;
        else
            return true;
    }

});