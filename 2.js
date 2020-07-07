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
  let obj = {}
  let temp = userInput[1].split(" ")
  for(let i=0;i<(+userInput[0]);i++){
      if(obj[temp[i]] === undefined){
          obj[temp[i]] = 1
      }
      else{
          obj[temp[i]]++
      }
  }
  let arr = []
  for(let key in obj){
      arr.push([+key, obj[key]])
  }
  let comp = function(a,b){
  	if(a[1]==b[1]){
  		return a[0] - b[0]
  	}
  	else{
  		return a[1] - b[1]
  	}
  }
  arr.sort(comp)
  let st = ""
  for(let i=0;i<arr.length;i++){
  	st += arr[i][0] + " "
  }
  console.log(st.trim())
});
