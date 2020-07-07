
const readline = require("readline");

var ui = []

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
  ui.push(data)
});

inp.on('close', () => {
    let obj = {}
    let re = 0
    let temp = ui[1].split(" ")
    for(let i = 0;i<(+ui[0]);i++){
        if(obj[temp[i]] === undefined){
            obj[temp[i]] = 1
        }
        else{
            obj[temp[i]]++
            if(obj[temp[i]] == 2){
                re = temp[i]
            }
        }
    }
    console.log(re)
})
