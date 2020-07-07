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
  let obj = {}
  let st = ""
  for(let i = 0;i<(+userInput[0]);i++){
      if(obj[temp[i]] === undefined){
          obj[temp[i]] = 1
          st += temp[i] + " "
      }
  }
  console.log(st.trim())
  //end-here
});
