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
  let parties = userInput[2].split(" ");
  let years = userInput[1].split(" ").map(x => +x);
  let final = [];
  for(let i=0;i<n;i++){
      final[i] = [years[i], parties[i]];
  }
  final.sort((a, b)=>a[0]-b[0]);
  for(let i=0;i<n-1;i++){
      if(final[i][1] != final[i+1][1]){
          console.log(final[i+1][0])
      }
  }
  
  //end-here
});
