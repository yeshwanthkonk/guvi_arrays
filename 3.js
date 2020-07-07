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
  let temp = userInput[1].split(" ")
  let max = +temp[0]
  let min = +temp[0]
  let max_in = 0, min_in = 0;
  for(let i=1;i<(+userInput[0]);i++){
      if(max < +temp[i]){
          max_in = i;
          max = +temp[i]
      }
      if(min > +temp[i]){
          min_in = i
          min = +temp[i]
      }
  }
  console.log(max_in - min_in)
  //end-here
});
