/*
Q: Write code that
    - logs Hi after 1 second
    - logs Hello 3 seconds after step 1
    - logs Hello There 5 seconds after step 2
*/


setTimeout (function(){
    console.log("Hi")
    setTimeout(function(){
        console.log("Hello")
        setTimeout(() => {
            console.log("Hello There")
        }, 5000);
    },3000);
}, 1000);

console.log("From Outside the Callback Hell");

/*
// Doesn't have callback hell

function step3Done() {
  console.log("Hello There");
}

function step2Done() {
  console.log("Hello");

  setTimeout(step3Done, 5000);
}

function step1Done() {
  console.log("Hi");
  
  setTimeout(step2Done, 3000);
}

setTimeout(step1Done, 1000);
*/