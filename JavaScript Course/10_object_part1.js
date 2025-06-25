//there are two ways to define object: literal and constructor (Object.create())
//singleton:if you use constructor method to create object, the object itself is one complete singleton object


//Object Literal
const user1 = {
    name : "Sahidur Miah",
    age : 23,
    "Mobile-No" : "9366369724",
    email: 'sahidurmiah201920@gmail.com',
    isLoggedIn : false,
    lastLoggedIn: ["Monday", "Saturday"],
}




//ways to access object's value
console.log(user1.email) //sahidurmiah201920@gmail.com
console.log(user1["email"]) //sahidurmiah201920@gmail.com


//use symbol as a key in object and show it to do console log

const mySymbol1 = Symbol('key1')

const user2 = {
    name : "Rakibul Miah",
    age : 21,
    "Mobile-No" : "9365868224",
    email: "rakibulmiah2930@gmail.com",
    isLoggedIn : false,
    lastLoggedIn : ["Tuesday", "Wednessday"],
    [mySymbol1] : 'myKey1', //this the  only way for symbol
}

console.log(user2[mySymbol1]); //accessing way specially for sumbol


 Object.freeze(user1) //This method ensures that no one alters an object's properties.
 user1.email = "hsghd@gmail.com" // this will not bring any change to user1-object

 console.log(user1) /*  result => {
                                    name: 'Sahidur Miah',
                                    age: 23,
                                    'Mobile-No': '9366369724',
                                    email: 'sahidurmiah201920@gmail.com', ==>you can see no alteration in email
                                    isLoggedIn: false,
                                    lastLoggedIn: [ 'Monday', 'Saturday' ]
                                   }
                    */





//adding a function in object-user2

user2.greeting = function(string) { // anonymous function
    console.log(`hello JS users, ${string} ${this.name}`)
}

console.log(user2.greeting('I am Mr.')) // hello JS users, I am Mr. Rakibul Miah.