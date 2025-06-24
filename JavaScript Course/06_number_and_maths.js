const score = 400

//to insure score should be always in number in case of datatypes

const userScore = new Number(4000);
console.log(userScore)

//to convert into string
console.log(userScore.toString()); //4000
//to fixe point decimal upto expected 
console.log(userScore.toFixed(2)); //4000.00

const anotherNumber = 23.45365

const containerForAnotherNumber = anotherNumber.toPrecision(3) //the number of significant digit must be
//  between 1-21 and it returns value in string form
console.log(containerForAnotherNumber)


const num1 = 1000000
const IntoLocalString = num1.toLocaleString('en-IN'); //10,00,000  result into string according to Indian numbering

console.log(IntoLocalString)

//****************************************************************************** Maths**************************************************************

console.log(Math);
console.log(Math.abs(-4))  //Math.abs-->math.absolute is used to convert negative number into positive //result->4
console.log(Math.round(4.69)) //it gives round off value result-> 5
console.log(Math.ceil(4.3)) // always round off the number to higher value // result->5 
console.log(Math.floor(4.9)) //always round off the number to lower value // result ->4


console.log(Math.max(4,6,8,9,5,9,6,)) //9
console.log(Math.min(2,4,6,8,9,32,45)); //2