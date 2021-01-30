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
    let n = +userInput[0];
    let arr = userInput[1].split(" ").map(x => +x);
    let stack = [0];
    i = 1
    while(i<n){
        while(stack.length>0){
            let ind = stack[stack.length-1];
            if(arr[ind] > arr[i]){
                arr[ind] = arr[i];
                stack.pop();
            }
            else
                break;
        }
        stack.push(i)
        i++;
    }
    while(stack.length>0){
        let ind = stack[stack.length-1];
        arr[ind] = -1;
        stack.pop();
    }
    console.log(arr.join(" "));
  //end-here
});
