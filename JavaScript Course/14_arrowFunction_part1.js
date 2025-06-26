// how this inside function and object works
const user = {
    userName : 'Sahidur Miah',
    price : 4746,
    welcomeMessage : function() {
        console.log(`Mr. ${this.userName} welcome on our website`);
        console.log(this) //note :- here this refers to the current context[object's properties], only inside an object
    }
}

user.welcomeMessage();  //Mr. Sahidur Miah welcome on our website  
/*
 result ==> 
Mr. Sahidur Miah welcome on our website
{
  userName: 'Sahidur Miah',
  price: 4746,
  welcomeMessage: [Function: welcomeMessage]
}

*/

user.userName = "Sam Sen";

user.welcomeMessage(); // Mr Sam Sen welcome on our website
/*
result ==> 
Mr. Sam Sen welcome on our website
{
  userName: 'Sam Sen',
  price: 4746,
  welcomeMessage: [Function: welcomeMessage]
}

*/

console.log(this) //note: inside nodejs environment this refers to an empty object || result ==> {} if not inside any code, written

//if we console "this" inside a function which not stored inside an object, we can see a globalobject for nodejs environment only

function chai(){
    const userName = 'Rakibul'
    console.log(this)
    console.log(this.userName) // result ==> undefined, as the function is not inside an object
}





chai()  // result ==> we can see a globalobject for nodejs environment only
/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
}

*/

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++Arrow Function ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const chaiCode  = () =>  {
    let userName = "Sahidur Miah"
    console.log(this); // result ==> {} | note :- inside an arrow function this prints an empty object, 
    // cannot print the global object for NodeJs unlike inside the normal function
    console.log(this.userName) // result ==> undefined
}

chaiCode()  //note :- inside an arrow function this prints an empty object, cannot print the global object for NodeJs unlike inside the normal function



//not:- for one line of function with more than one parameters no return keyword needed
const addTwo = (num1, num2) => num1 + num2; 

console.log(addTwo(23,45))

//note:- if you wrap code with paranthesis no return keyword needed
const addThree = (num1, num2) => (num1 + num2)  //note :- specially used while code in reactJs

console.log(addThree(45, 78))

//if one parameter no need to wrap parameter in paranthesis
const addNum = num => (num**num)

console.log(addNum(7))

//to return an object using function
// const objFunc = (user, id) => {userName:user, userId:id} //you must wrap abject inside a paranthesis, see correct code below
const objFun = (user, id) => ({userName : user, userId: id})

console.log(objFun("Sahidur Miah", 345)) // result ==> { userName: 'Sahidur Miah', userId: 345 }

