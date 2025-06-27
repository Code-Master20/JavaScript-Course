//               ============================================= for of =====================================================


const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
    console.log(number);
}

console.log(`\n`)

// over string

const message = "Hello, World!";

for(const char of message) {
    console.log(char);
}

console.log(`\n`)


// over object in array

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];



for (const user of users) {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
}

console.log(`\n`)


//for of  over Map . note :- here the key is the first element and the value is the second element of the array.

const userMap = new Map(
[
    ['name', 'Sahidur Miah'],
    ['age', 25],
    ['city', 'New York']
]
);

for (const [key, value] of userMap) {
    console.log(`${key}: ${value}`);
}   
console.log(`\n`)

//if you want to assing multiple users inside a map, note:- user1, user2, etc. are the keys and the objects are the values.

const userMap2 = new Map(
    [
        ['user1', { name: 'Alice', age: 25 }],
        ['user2', { name: 'Bob', age: 30 }],
        ['user3', { name: 'Charlie', age: 35 }],
        ['user4', { name: 'David', age: 40 }]
    ],
)

for (const [key, user] of userMap2) {
    console.log(`Key: ${key}, Name: ${user.name}, Age: ${user.age}`);
}
console.log(`\n`)



const countryMap = new Map();
countryMap.set('IND', 'INDIA');
countryMap.set('USA', 'UNITED STATES OF AMERICA');
countryMap.set('UK', 'UNITED KINGDOM');
console.log(countryMap);                         /* Map(3) {
                                                            'IND' => 'INDIA',
                                                            'USA' => 'UNITED STATES OF AMERICA',
                                                            'UK' => 'UNITED KINGDOM'
                                                            }
                                                  */

console.log(`\n`)


// for of loop over object || to iterate over object's properties using for of loop, 
// you need to convert the object into an array of key-value pairs using Object.entries() method.
const games = {
    game1: 'Football',
    game2: 'Cricket',
    game3: 'Basketball'
}
console.log(Object.entries(games)); // Convert object to array of key-value pairs

for (const [key, value] of Object.entries(games)) {
    console.log(`${key}: ${value}`);
}


console.log(`\n`)

const compLanguages = {
    js: 'JavaScript',
    py: 'Python',
    java: 'Java',
    cpp: 'C++',
    csharp: 'C#'
}

const languagesArray = Object.entries(compLanguages);   // Convert object to array of key-value pairs

for (const [key, value] of languagesArray) {
    console.log(`${key}: ${value}`);
}

console.log(`\n`)

//               ============================================= for in =====================================================

const person = {
    name: 'John',
    age: 30,
    city: 'New York'
}

for(const key in person) {
    console.log(`${key} : ${person[key]}`); // Accessing the value using the key
}



console.log(`\n`)

//  for in loop over array


const fruits = ['apple', 'banana', 'cherry'];

for (const index in fruits) {
    console.log(`Index: ${index}, Fruit: ${fruits[index]}`);
}

console.log(`\n`)   

// for in loop over Map

const fruitMap = new Map([
    ['apple', 'red'],
    ['banana', 'yellow'],
    ['cherry', 'red']
]);

for (const key in fruitMap) {
    console.log(`Key: ${key}, Value: ${fruitMap[key]}`); // Note: This will not work as expected, use for...of instead
}

//               ============================================= for Each =====================================================

const numbersArray = [10, 20, 30, 40, 50];

numbersArray.forEach((number, index) => {
    console.log(`Number: ${number}`);
});


console.log(`\n`)
//another way

function printNumber(number) {
    console.log(`Number: ${number}`);
}

numbersArray.forEach(printNumber);


console.log(`\n`)

//note :- forEach receives three arguments: the current element, the index of the current element, and the array itself.



// Example of forEach with an array of objects

const userdata = [
    {
        name:'Sahidur Miah',
        age: 23,
        email: 'sahidurmiah@gmail.com',
    },
    {
        name:'John Doe',
        age: 30,
        email: 'jhon@gmail.com',
    },
    {
        name:'Jane Doe',
        age: 25,
        email: 'janedoe@gmail.com',
    }
];


userdata.forEach((user) => {
    console.log(`Name: ${user.name}, Age: ${user.age}, Email: ${user.email}`);
})

console.log(`\n`)

// to if forEach automatically return something;
const numbersList = [1, 2, 3, 4, 5];

const value = numbersList.forEach((number) => {
    console.log(`Number: ${number}`);
});

console.log(value); // undefined, because forEach does not return anything, manually/automatically


const result = numbersList.forEach((number) => {
    return number;
});

console.log(result);  // undefined, because forEach does not return anything, manually/automatically

console.log(`\n`)


//               ============================================= filter =====================================================

//you can use filter to receive a returned array based on a condition.
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const RESULT = myNums.filter(num => {
    return num % 2 === 0; // Filter even numbers, if you use curly braces over code , you have to use return key word
});

console.log(RESULT); // [ 2, 4, 6, 8, 10 ]

// updated way without return keyword , if one line of code, no need to use return keyword
const evenNumbers = myNums.filter(num => num % 2 === 0);
console.log(evenNumbers); // [ 2, 4, 6, 8, 10 ];

// updated way wihthout return keyword, if you use paranthesis over code, no need to use return keyword,
//  note:- if you use paranthesis over code, don't put semicolon after code block
const evenNumbers2 = myNums.filter(num => (num % 2 === 0));
const oddNumbers = myNums.filter(num => (num % 2 !== 0));
console.log(oddNumbers); // [ 1, 3, 5, 7, 9 ]

// above same operation using forEach, receiving a returned array

const evenNums = [];

myNums.forEach(num => {
    if (num % 2 === 0) {
        evenNums.push(num);
    }
});

console.log(evenNums); // [ 2, 4, 6, 8, 10 ]
console.log(`\n`)


const books = [
    { title: 'Book A', author: 'Author 1', year: 2020, publish: 1982 },
    { title: 'Book B', author: 'Author 2', year: 2019, publish: 1995 },
    { title: 'Book C', author: 'Author 3', year: 2021, publish: 2000 },
    { title: 'Book D', author: 'Author 4', year: 2018, publish: 2010 },
    { title: 'Book E', author: 'Author 5', year: 2022, publish: 2015 },
    { title: 'Book F', author: 'Author 6', year: 2023, publish: 2020 },
    { title: 'Book G', author: 'Author 7', year: 2017, publish: 2018 }
]


const userBooks = books.filter(book =>
     (book.year > 2019) // Filter books published after 2019, note:- don't put semicolon after code blook,
     //  if you use paranthesis over code, instead of return keyword
    );

console.log(userBooks);


console.log(`\n`)



//               ============================================= map =====================================================

//map is used to create a new array by applying a function to each element of the original array.

const numbersArray2 = [1, 2, 3, 4, 5];

const doubledNumbers = numbersArray2.map(number => 
    (number * 2)
);

console.log(doubledNumbers); // [ 2, 4, 6, 8, 10 ]
console.log(`\n`)


//chaining methods

const newNumbers = numbersArray2
.map((num)=>(num * 10))
.map(num=> (num -10))
.filter(num => (num > 0));

console.log(newNumbers); // [ 10, 20, 30, 40 ]
console.log(`\n`)


// ============================================================================reduce====================================================================================
//reduce is used to reduce an array to a single value by applying a function to each element of the array.

const numbersArray3 = [1, 2, 3, 4, 5];
//accumulator is the first parameter-> an empty variable, currentValue is the second parameter, current element of the array
const initial = 0; // initial value of the accumulator
const sum = numbersArray3.reduce((accumulator, currentValue) => {
    console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`); // logging the accumulator and current value
    return accumulator + currentValue;
}, initial); // initial is the initial value of the accumulator

console.log(sum); // 15
console.log(`\n`)


const initialVal = 1; // initial value of the accumulator for multiplication
const product = numbersArray3.reduce((accumulator, currentValue) => 
    (   
        console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`), // logging the accumulator and current value
        accumulator * currentValue
    ), initialVal
);
console.log(product); // 120

console.log(`\n`);

// Example of reduce with an array of objects
const shoppingCart = [
    { item: 'Apple', price: 1.5, quantity: 3 },
    { item: 'Banana', price: 0.5, quantity: 6 },
    { item: 'Orange', price: 1.0, quantity: 4 }
]

const totalCost = shoppingCart.reduce((accumulator, currentValue) => (
    console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue.price * currentValue.quantity}`), // logging the accumulator and current value
    accumulator + (currentValue.price * currentValue.quantity)  
), 0)

console.log(`Total Cost: $${totalCost}`); // Total Cost: $11.5
console.log(`\n`)

