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
  let k = parseInt(userInput[0].split(" ")[1])
  let arr = userInput[1].split(" ")
  let st = ""
  for(let i=0;i<(arr.length - 1);i++){
      if(Math.abs(arr[i] - arr[i+1])>k){
          st += 1 + " "
      }
      else{
          st += 0 + " "
      }
  }
  if(Math.abs(arr[0] - arr[arr.length - 1])>k){
          st += 1 + " "
      }
      else{
          st += 0 + " "
      }
    
    console.log(st.trim())
  //end-here
});
