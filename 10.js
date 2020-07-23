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
  let arr1 = userInput[1].split(" ")
  let arr2 = userInput[2].split(" ")
  arr1.sort()
  arr2.sort((a,b) => b-a)
  console.log(arr1.join(" ")+" "+arr2.join(" "))
  //end-here
});
