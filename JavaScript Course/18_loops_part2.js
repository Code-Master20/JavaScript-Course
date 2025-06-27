//                  =========== WHILE LOOP ===========


let index = 0;
while (index < 20) {
    console.log(`Current index is: ${index}`);
    index+= 2;
}

//                  =========== WHILE LOOP WITH ARRAY ===========

let myArray = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

let i = 0;

while( i < myArray.length) {
    console.log(`Current fruit is: ${myArray[i]}`);
    i++;
}


//                  =========== WHILE LOOP WITH OBJECTS ===========

const userDetails = [
    {
         name: 'Alice',
         age: 25,
         email: 'alice@gmail.com'
    },
    { 
        name: 'Bob', 
        age: 30,
        email: 'bob@gmail.com',
    },
    {
        name: 'Charlie', 
        age: 35,
        email: 'charlie@gmail.com'
    },
    {
        name: 'David', 
        age: 28,
        email: 'david@gmail.com'
    },
]

let n = 0;
while (n < userDetails.length) {
    console.log(`Name: ${userDetails[n].name}, Age: ${userDetails[n].age}, Email: ${userDetails[n].email}`);
    n++;
}


//                  =========== DO WHILE LOOP ===========
let z = 0;
do {
    console.log(`Current index is: ${z}`);
    z += 2;
} while (z < 30);

