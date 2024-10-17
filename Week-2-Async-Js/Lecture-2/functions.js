// function sum(a,b){
//   return a + b;
// }

// let ans = sum(3,9)
// console.log(ans);

// => Write a function to sum n numbers

// function sum(n){
//   let ans = 0;
//   for(let i=1; i<n; i++){
//     ans = ans + i;
//   }
//   return ans;
// }

// const ans = sum(6);
// console.log(ans);


// => Reading a file (Path error)

// const fs = require('fs');

// const data = fs.readFileSync('a.txt', 'utf8');
// console.log(data);

// =>  setTimeout

// function run() {
// 	console.log("I will run after 1s");
// }

// setTimeout(run, 1000);
// console.log("I will run immedietely");

// => Call Stack

function first() {
  console.log("First");
}
function second() {
  first();
  console.log("Second");
}
second();

