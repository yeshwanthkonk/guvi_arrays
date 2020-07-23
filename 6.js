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
  let arr = userInput[1].split(' ')
  let n = arr.length
  let win = +userInput[2]
  let st=""
  for(let i=0;i<=n-win;i = i+1){
      for(let j = i;j<i+win;j++){
          if(arr[j]<0){
              st += arr[j] + " "
              break;
          }
          if(j == (i+win-1)){
          	st += "0" + " "
          }
      }
  }
  console.log(st.trim())
  //end-here
});
