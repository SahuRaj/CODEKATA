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
    let str = "";
    let MenNo = 1;
    let Ann = {
        JANUARY: 1,
        FEBRUARY: 2,
        MARCH: 3,
        APRIL: 4,
        MAY: 5,
        JUNE: 6,
        JULY: 7,
        AUGUST: 8,
        SEPTEMBER: 9,
        OCTOBER: 10,
        NOVEMBER: 11,
        DECEMBER: 12,
        January: 1,
        February: 2,
        March: 3,
        April: 4,
        May: 5,
        June: 6,
        July: 7,
        August: 8,
        September: 9,
        October: 10,
        November: 11,
        December: 12
    };
    let values = {
        JANUARY: 31,
        FEBRUARY: 28,
        MARCH: 31,
        APRIL: 30,
        MAY: 31,
        JUNE: 30,
        JULY: 31,
        AUGUST: 31,
        SEPTEMBER: 30,
        OCTOBER: 31,
        NOVEMBER: 30,
        DECEMBER: 31,
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



    for (let i = 0; i < arr.length; i += 3) {
        if (+arr[i + 2] <= 1987 &&
            Ann[arr[i + 1]] != 2 &&
            values[arr[i + 1]] % 2 == 1
        ) {
            if (Ann[arr[i + 1]] > 7 && arr[i + 2] == 1987) {
                MenNo++;
                continue;
            }
            if (arr[i] > 22 && Ann[arr[i + 1]] == 7 && arr[i + 2] == 1987) {
                MenNo++;
                continue;
            }
            str += MenNo + " ";
            MenNo++;
        }
        else {
            MenNo++;
        }
    }
    if (str.length == 0)
        console.log("-1");
    else
        console.log(str.trim());

    //end-here
});