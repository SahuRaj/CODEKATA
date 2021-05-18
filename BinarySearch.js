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

    let a = userInput[0].split(" ");
    var n = +a[0];
    var k = +a[1];
    let arr1 = userInput[1].split(" ");
    function binarysearch(arr1, l, r, k) {
        var flag = 0;
        while (l <= r) {
            var m = Math.round((l + r) / 2);
            if (arr1[m] == k) {
                flag = 1;
                console.log("yes");
                break;
            }
            else if (arr1[m] > k)
                r = m - 1;
            else
                l = m + 1;
        }
        if (!flag)
            console.log("no")
    }

    binarysearch(arr1, 0, n - 1, k);

    //end-here
});