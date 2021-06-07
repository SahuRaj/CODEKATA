// A person saves his monthly saving according to given schema. He saves same amount of money which is equal to the money saved in immediate previous two months. Assume, initially he saved 1000 rupees and in first month he saved another 1000. Your task is to tell how much he had totally saved at the end of ‘n’ months

// Input Description:
// You will be given a number ‘n’->No. of months

// Output Description:
// Print the total savings at the end of ‘n’ months

// Sample Input :
// 1
// Sample Output :
// 2000


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
    let arr = [1000, 1000];
    let sum_till_now = arr[0] + arr[1]; //0th month + 1st month

    //for n months from 2nd month onwards->
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
        sum_till_now += arr[i];
    }
    console.log(sum_till_now);

});