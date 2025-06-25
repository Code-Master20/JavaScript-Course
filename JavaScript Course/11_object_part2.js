//Object Singleton
const tinderUser = new Object() //singleton
const tinderUser1 = {} //literal

tinderUser.id = '123abc'
tinderUser.name = 'Sahidur Miah'
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    email: "regularmiah@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Sahidur",
            lastName : "Miah"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName)


//We can cobmbine objects just like arrays
const obj1 = {
    name : "xyz miah",
    email : "xyz@gmail.com",
}

const obj2 = {
    age : 23,
    'Mobile-No' : "97453384564"
}
const obj3 = {
    "Father's Name" : "abc miah",
    "Mother's Name" : "def khatun",
}

const completeInformation = { // not preferable way
    obj1, obj2, obj3
}

 console.log(completeInformation) /*result ==>    {
                                                obj1: { name: 'xyz miah', email: 'xyz@gmail.com' },
                                                obj2: { age: 23, 'Mobile-No': '97453384564' },
                                                obj3: { "Father's Name": 'abc miah', "Mother's Name": 'def khatun' }
                                             }
                                 */



  const fullInformation = Object.assign(obj1,obj2, obj3)         //This is not a preferable way
  console.log(fullInformation)     /*                          {
                                                                name: 'xyz miah',
                                                                email: 'xyz@gmail.com',
                                                                age: 23,
                                                                'Mobile-No': '97453384564',
                                                                "Father's Name": 'abc miah',
                                                                "Mother's Name": 'def khatun'
                                                                }
                                        */

const full_information = Object.assign({}, obj1, obj2, obj3)           //this is preferable way
console.log(full_information)          /*                          {
                                                                name: 'xyz miah',
                                                                email: 'xyz@gmail.com',
                                                                age: 23,
                                                                'Mobile-No': '97453384564',
                                                                "Father's Name": 'abc miah',
                                                                "Mother's Name": 'def khatun'
                                                                }
                                        */

const Full_Information = {...obj1, ...obj2, ...obj3}  //spread operator method , this is also preferable way

console.log(Full_Information);     /*   result ==> {
                                                    name: 'xyz miah',
                                                    email: 'xyz@gmail.com',
                                                    age: 23,
                                                    'Mobile-No': '97453384564',
                                                    "Father's Name": 'abc miah',
                                                    "Mother's Name": 'def khatun'
                                                    } */


//when Data comes from database | data from DataBase usually comes like this , shown in the below,

const users = [
    {
        id : 123,
        email : "sahidurmiah@gmail.com",
    },

    {
        id : 124,
        email : "sahidurfah@gmail.com",
    },
    {
        id : 125,
        email : "sahdiah@gmail.com",
    }
]

console.log(users[0].email) // way to access value when data comes from DataBase// result => sahidurmiah@gmail.com

//to print keys/values of objects
console.log(Object.keys(tinderUser)) //this returns an array that contains all keys of Object->tinderUser | resuilt => [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)) //this returns an array that contains all values of Object->tinderUser | resuilt => [ '123abc', 'Sahidur Miah', false ]
console.log(Object.entries(tinderUser)) //this method converts each [key-value]-pairs into array--> array for each [key-value]-pairs 
// first create an array, then create array for each [key-value]-pairs and then store those arrays into a single array
 /* result => [
  [ 'id', '123abc' ],
  [ 'name', 'Sahidur Miah' ],
  [ 'isLoggedIn', false ]
]
 */


//suppose you are using loop over an array to iterate a value, if value not existed, app may crush
//to ask an object about an specific key
console.log(tinderUser.hasOwnProperty("isLoggedIn")) //result => true, as tinderUser has a key named isLoggedIn




//                                                          Object Destructuring

const course = {
    courseName : 'Js in Hindi',
    price : 999,
    courseInstructor : 'Sahidur Miah',
}

const {courseInstructor:instructor, courseName, price} = course;

console.log(`Course Name : ${courseName} \nCourse Instructor : ${instructor} \nCourse Price : ${price}`)



//Values come from outside usually Through APIs in jSON form [keys in string form] values data types are reserved


/*

{
    "name" : "Sahidur Miah",
    "courseName" : "JS in Hindi",
    "price" : "free",
    "isLoggedIn" : true,
    "id" : 234,
}

*/