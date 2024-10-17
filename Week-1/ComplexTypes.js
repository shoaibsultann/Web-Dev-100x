// Objects
// An object in JavaScript is a collection of key-value pairs, 
// where each key is a string and each value can be any valid JavaScript data type, including another object.


// Assignment #1
// Write a function that takes a user as an input and greets them with their name and age.

function greet(user){
  console.log(" Hi " + user.name + " your age is: " + user.age)
}

let user = {
  name: "Shoaib",
  age: 25
}

greet(user);


// Assignment # 2
/* Write a function that takes a new object as input which has name , 
age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)  */


function greets (user2){
  console.log("Hi " + user2.gender+ " "+ user2.name + " your age is " + user2.age)
} 

let user2 = {
  name: "ubaid",
  age: 20,
  gender: "Mr."
}

greets(user2)


/* Assignment # 3

create a function that takes an array of objects as input, and return the users whose age is > 18 and male */

const users1 = [{
  name: "Abdul Mohiz",
  age: 19,
  gender: "male"
},
{
  name:"Zainab Noor",
  age: 10,
  gender: "female"
},
{
  name: "Sara",
  age:25,
  gender: "female"
}]

function canVote(usersX) {
  //use the filter function inside an array
  // initialize a new array , push to new array
  usersX.forEach( usersX =>{
    if(usersX.age > 18){
      console.log(usersX.name + " age is " + usersX.age + " & can do a vote")
    } else {
      console.log( usersX.name + " age is " + usersX.age + " & not allowed to take part in voting" )
    }
    
  });
}

canVote(users1);
