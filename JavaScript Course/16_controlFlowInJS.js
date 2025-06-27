//CONTROL LOGIC / CONTROL FLOW

// < , > , <= , >= , != , === , !== , && , || , use inside if else statement for defining control flow


//one line if-else statement

const balance = 3000

if(balance > 2500) console.log('You can apply for the job');


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ switch-Cases ++++++++++++++++++++++++++++++++++++++++++++++++++++

// switch(key){
//     case value:
//         break;
//     default:
//         break;
// }


const month = 3

switch (month) {
    case 1:
        console.log('January')
        break;
    case 2:
        console.log('February')
        break;
    case 3:
        console.log('March')
        break;
    default:
        console.log('Default case match')
        break;
}

// Truthy and falsy values


const userEmail = 'sahidurmiah@gmail.com';  //userEmail = sahidurmiah@gmail.com /'';
//we didn't check like this userEmail === true, we just assumed that userEmail is true so this is called truthy value

if (userEmail) {
    console.log('GOT user email')
} else {
    console.log('please enter user email')
}

// falsy values => false, 0, -0, BigInt 0n, "", null, undefined, NaN,
//Remaining all are truthy values, some example => '0', 'false', ' ' ->space added inside empty string, [], {}, function(){},

//how to check Arrays and Objects
const userDetails = [];

if (userDetails.length === 0) {
    console.log('empty array')
}

const user_details = {};

if(Object.keys(user_details).length === 0){
    console.log('empty object')
}


//Nullish Coalescing Operator(??) : null / undefined

let val1;
val1 = 5 ?? 10 ;  // result ==> 5
val2 = null ?? 10 ; // result ==> 10
val3 = undefined ?? 15 ; // result ==> 15

val4 = null ?? 10 ?? 20 ; // result ==> 10
console.log(val4)

//Ternary operator

// condition ? true : false;

const iceTeaPrice = 100
iceTeaPrice < 100 ? console.log('price is less than 100') : console.log(`price is ${iceTeaPrice}`)