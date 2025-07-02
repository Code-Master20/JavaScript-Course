
// ======================================================= what to read ? ==============================================
// constructor function
//prototypes
//Classes
//instances (new, this)

// 4 pillars
//Abstraction
//Encapsulation
//inheritance
//Polymorphism



// ======================================================== OBJECT LITERAL ==================================================
const user = {
    userName : "Sahidur Miah",
    loginCount: 8,
    signIn: true,
    getUserDetaile: function(){
        console.log("Got user details from database");
        console.log("userName : ", this.userName)
        console.log(this)
    }
}

console.log(user.getUserDetaile());


// ===========================================CONSTRUCTOR FUNCTION====================================================

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = ()=>{
        console.log("hello", this.username)
    }
    // return this;  // note:- if i would not write "return this", although no alteration occurred
}

const userOne =  User("Sahidur Miah", 12, true);
const userTwo =  User("Rakibul Miah", 32, false); // this will override the value of the above-userOne

console.log(userOne)   //    {username: 'Rakibul Miah', loginCount: 32,  isLoggedIn: false }
                          
                         
// to avoid overriding we use "new" key word to create each time, a new instance || new is called constructor function

const user1 =  new User("Suriya Sen", 27, true);
const user2 = new User("Priya Sen", 15, false);
console.log(user1) // { username: 'Suriya Sen', loginCount: 27, isLoggedIn: true, greeting: [function (anonymous)] }
console.log(user2) // { username: 'Priya Sen', loginCount: 15, isLoggedIn: false, greeting: [function (anonymous)] }
console.log(user1.greeting()); // hello Suriya Sen
console.log(user1.constructor) // [Function: User] note:- this returning a function named "User",
// here "user1.constructor" is reference of the User function we defined

console.log(user1 instanceof User) // yes useri-object is an instance of User function/ User class--> true


// ====================================================================== new keyword =====================================================================
//at very first, whenever we write new , an empty object generates---> {}
//second: for new keyword, a constructor function is called[invoked]
//third: whatsoever values comes as arguments, by using this-keyword, we store those values to specific variable in object which defined by new-keyword
