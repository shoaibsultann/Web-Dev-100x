//Assignment # 1
var isStudent = true;
console.log(isStudent);
isStudent = "Shoaib"
isStudent = 5;

console.log(isStudent)


function sum(a,b){
  total = a +b;
  return total;
}

let firstTotal = sum(10, 16)
let secondTotal = sum("15", "40")
console.log(firstTotal)
console.log(secondTotal)



//Assignment # 2

function canVote(age){
  if(age>18){
    return true;
  }
  else{
    return false;
  }
}
let ans = canVote(15);
console.log(ans)


//Assignment # 3

function canVote(age){
  if(age>=18){
    console.log("You are eligible to vote")
  }
  else{
    console.log("You are not eligible to vote")
  }
}
canVote(55);


//Assignment # 4 (For Loop)

// initiation section
//condition section
//incrementation section

let users = ["Shoaib", "Zeeshan", "Ali", "Ahmed", "Ubaid"];

let totalUsers = users.length;

for (i=0; i < totalUsers  ; i++){
  console.log(users[i])
}

//Assignment # 5

// Question # 1: Write a function called sum that finds the sum from 1 to a number

function sum(number){
  let total = 0;
  for (i=0; i < number; i++){
    total += i;
  }
  return total;
}

let result = sum(5);
console.log(result);



