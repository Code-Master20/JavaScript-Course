"use strict"; //means treat all JS code as newer version

// alert("hello") we are using nodejs not browser that's why it gives error while running


let name = "Sahidur Miah" //String DataType
let age = 23 ; //Number DataType
let isLoggedIn = false; //boolean dataType


// Number => number range-- 2^53
// bifint for bigger number than 2^53.
// string => "" or ''
// boolean  => true / false
// null => standalone value  (let state = null;) type of null is object, is a historical demarit of JavaScript
// undefined => let state = "";
// symbol => unique


// object



//Primitive DataTypes
// 7 types: String, Number, Boolean, null, Symbol, BigInt

//Reference DataTypes (non-primitive)
// Array, Objects, Functions

const id = Symbol("123"); //both are different in a manner of JavaScript
const anotherId = Symbol("123");
console.log(id === anotherId);