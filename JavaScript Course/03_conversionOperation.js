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



// ******************************************************** Operations *****************************************************

let value = 33;
let negValue = -value;
console.log(negValue);

console.log(2+2)
console.log(2*5)
console.log(2**8) // 2^8
console.log(2/2)
console.log(4%3); // remainder if 4 divided by 3 => 1




console.log(1 + 2) //3
console.log("1" + "2"); // 12 
console.log(1 + "2"); //12
console.log("1" + 2); //12
console.log("1" + 2 + 2) // 122
console.log(1 + 2 + "2"); // 32


console.log(true) // true
console.log(+true) //1
console.log(+"") //0
console.log(+false) //0

let num1, num2, num3;
num1 = num2 = num3 = 2+3;

let gameCounter = 100;
gameCounter++;
console.log(gameCounter); //101

console.log(null > 0) //false
console.log(null == 0); //false
console.log(null >= 0) //true

/*
1. null > 0 → false
- In this relational comparison (>), JavaScript tries to convert both operands to numbers.
- null becomes 0.
- So this becomes: 0 > 0 → false.

2. null == 0 → false
- This is a loose equality check (==), but null is only loosely equal to undefined, not to 0.
- Therefore: null == 0 → false.


3. null >= 0 → true
- This is where it gets weird.
- JavaScript converts null to 0, just like in the first comparison.
- It becomes: 0 >= 0 → true.


But why the inconsistency?
Because >= and > use numeric comparison rules, while == uses different abstract equality rules.
In other words:
- null >= 0 and null > 0 follow similar coercion rules but produce different results based on the numeric values.
- null == 0 bypasses number conversion and uses a special internal logic where null is not considered equal to 0.
*/

console.log(undefined == 0) //false
console.log(undefined > 0 )  //false
console.log(undefined >= 0) //false
