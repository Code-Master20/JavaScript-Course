

// In Primitive Stack memory is useDebugValue, Heap memory used in non-primitive cases


let ageOfPrson1  = 23;
let ageOfPerson2 = ageOfPrson1;
ageOfPerson2 = 25;
//after chanding ageOfPerson2 , ageOfPerson1 is not effected as ageOfPerson2 stored copied verson of ageOfPerson1.
console.log(ageOfPerson2); //25
console.log(ageOfPrson1) //23


let myDetails = {
    name: "Sahidur Miah",
    email: "sahidurmiah201920@gmail.com",
}

let yourDetails = myDetails;

yourDetails["email"] = "rakibulmiah@gmail.com";

//after making any alteration in yourDetails, myDetails is also affected as yourDetails stored a reference value of myDetails, 
// if any change makes to yourDetails it goes to myDetails with the reference value and makes a change there.

console.log(myDetails) // name : Sahidur Miah email : rakibulmiah@gmail.com
console.log(yourDetails) // name : Sahidur Miah email : rakibulmiah@gmail.com