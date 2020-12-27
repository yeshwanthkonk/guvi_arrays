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
  let [n, k] = userInput[0].split(" ").map(x => +x);
  let arr = userInput[1].split(" ").map(x => +x);
  k = k%n;
  arr = arr.slice(n-k, n).concat(arr.slice(0, n-k));
  console.log(arr.join(" "));
  //end-here
});
