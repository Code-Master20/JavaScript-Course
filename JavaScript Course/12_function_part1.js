
function addTwoNumbers1(number1, number2) {
   let result = number1 + number2
   return result;
}
const result1 = addTwoNumbers1(53,24);

console.log("result: ", result1) //result => 77


function addTwoNumbers2(number1, number2) {
   console.log(number1 + number2)
}
const result2 = addTwoNumbers2(53,24);

console.log("result: ", result2) //result => undefined as function is not returning anything


function loginUserMessage(username) {
 return `${username} just logged in`;
}

console.log(loginUserMessage("Sahidur")) // Sahidur just logged in


//passing a default value to the parameter and and overriding the default value by passing an argument
function whoLoggedIn(username='Sam') {
   if(!username) {
      console.lo('please enter an user name')
      return
   }
   return `${username} just logged In`
}

console.log(whoLoggedIn());  // default value print | result ==> Sam just logged In
console.log(whoLoggedIn("Sahidur Miah")); //default value overrided | result ==> Sahidur Miah just logged In


//Dealing With rest operator

function calculateCartPrice(...num) { //this function receives multiple arguments and return them bundling in an array by using rest operator concept
   return num;
}


console.log(calculateCartPrice(23,45,67,789)) //[ 23, 45, 67, 789 ]

//




