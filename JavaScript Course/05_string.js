let firstString = "Sahidur Miah"
let repoCount = 50;

console.log(firstString + repoCount + "Sahidur Miah") //concatination


console.log(`Hello My Name is ${firstString} and My RepoCount is ${repoCount}`) //Modern concatination

const gameName = new String("RahuGame") //Another way to define string, here String is an object
console.log(typeof gameName)
console.log(gameName)
console.log(gameName[3]); //u  to see character at index 3
console.log(gameName.charAt(3)) //u to see character at index 3
console.log(gameName.indexOf("G")) //to see index of a specific character
console.log(gameName.__proto__); //to see methods in prototype
console.log(gameName.toUpperCase()) //RAHUGAME

const newString = gameName.substring(0,4)
console.log(newString); //Rahu ,  last index is not included

const anotherString = gameName.slice(-8, 6); //note you can pass negative index to start from reverse, last index not included
console.log(anotherString)


const Name = "      Sahidur Miah       ";
console.log(Name)
console.log(Name.trim()); //This remove blank space from the beginning and the ending
//  (trim(), trimStart(), trimEnd())


//replace method 

const url = "https://www.sahidur.com/sahidur%20miah"

let updateUrl = url.replace("%20", "-")
console.log(updateUrl) //https://www.sahidur.com/sahidur-miah

//to check if a specific character included
const includeCheck = url.includes("sahidur");
console.log(includeCheck); // true

// to convert string into arrays bassed on specific character
const myString = new String("sahidur-miah-pizza-water")

const arrayOfMyString = myString.split("-"); //split('seperator', 'limits')

console.log(arrayOfMyString) //['sahidur', 'miah', 'pizza', 'water']