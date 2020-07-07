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

 
  let arr = [1000];
  let sum = 1000
  for(let i=1;i<=(+userInput[0]);i++){
      if(i==1){
          arr.push(1000)
          sum += 1000
      }
      else{
      	let cur = arr[i-1] + arr[i-2]
          sum += (cur)
          arr.push(cur)
      }
      
  }
  console.log(sum)

  //end-here
});
