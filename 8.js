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
  let arr = userInput[1].split(" ")
  let n = arr.length
  let obj = {}
  for(let i=0;i<n;i++){
      if(obj[arr[i]] === undefined){
          obj[arr[i]] = 1
      }
      else{
          obj[arr[i]]++
      }
  }
  let arr_sort = []
  for(let key in obj){
      if(arr_sort.length == 0){
          arr_sort.push([key,obj[key]])

      }
      else if(obj[key]<arr_sort[0][1]){
          arr_sort = []
          arr_sort.push([key,obj[key]])
      }
      else if(obj[key] == arr_sort[0][1]){
          arr_sort.push([key,obj[key]])
      }
      
  }
  let st = ""
  arr_sort.sort(function(a,b){return b[0]-a[0]})
  for(let i=0;i<arr_sort.length;i++){
      st += arr_sort[i][0] + " "
  }
  console.log(st.trim())
  //end-here
});
