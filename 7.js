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
 let w = +userInput[0].split(" ")[1]
  let arr = userInput[1].split(" ")
  let n = arr.length
  let i = 0
  let st = ""
  while(i<=(n-w)){
      for(let j=i;j<(i+w);j++){
          if(+arr[j] == 0){
              st += (j+1) + " "
              break;
          }
          if(j == (i+w-1)){
              st += "-1" + " "
          }
      }
      i++
  }
  console.log(st.trim())
  //end-here
});
