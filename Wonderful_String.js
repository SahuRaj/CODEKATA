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
  let obj = new Object();
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = 0;
  }
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]]++;
  }
  var count = Object.keys(obj).length;
  if (count == 3)
    console.log("Wonder")
  else
    console.log("-1");
  //end-here
});