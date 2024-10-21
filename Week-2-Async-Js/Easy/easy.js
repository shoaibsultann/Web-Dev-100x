// function waitFor3S(resolve) {
//   setTimeout(resolve, 3000)
// }

// function main(){
//   console.log("main is called")
// }

// waitFor3S(main);


//------------------------------------------------//

// function random(){

// }

// let p = new Promise(random)
// console.log(p);

//------------------------------------------------//


const fs = require("fs");

function readThefile(sendTheFileValueHere){
  fs.readFile("a.txt", "utf-8", function(err, data){
    sendTheFileValueHere(data)
  })
}

function readFile(fileName){
  return new Promise(readThefile);
}
 
const p = readFile();

 function callback(contents){
  console.log(contents);
 }

 p.then(callback)