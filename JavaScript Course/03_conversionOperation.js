let score = "33ad";

console.log(typeof (score));
console.log(typeof score);

let valueInNumber = Number(score); // this converts the above score dataType from string to number

console.log(typeof valueInNumber); //this gives dataTypes as number
console.log(valueInNumber) //this gives output NaN as score stores not a number.

//"33" => 33
// "33asc" => NaN
// true => 1; false => 0


//To convert into Boolean dataType
let isLoggedIn = "sdfg";

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);

// 1 => true
// 0 => false
// "" => false
// "xyz" => true

//To convert into string
let someNumber = 53;
let stringNumber = String(someNumber);
console.log( typeof stringNumber);