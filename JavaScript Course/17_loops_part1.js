//For loop
for (let i = 0; i < 10; i++) {
    if(i === 5) {
        // console.log("Halfway there!");
    }
    // console.log(i);
}

//loop inside a loop
for (let i = 0; i <= 10; i++) {
     console.log(`Outer loop iteration: ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log(`Inner loop iteration: ${j}`);
    }
}

console.log(`\n \n`);

for (let i = 0; i <= 10; i++) {
     console.log(`Outer loop iteration: ${i}`);
    for (let j = 0; j <= 10; j++) {
         if(i === j){
            console.log(`outer loop:${i} = inner loop:${j}`);
         }
    }
}

console.log(`\n \n`);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ for loop  through an array ++++++++++++++++++++++++++++++++++++++++++++++++++++++
//loop through an array

const fruits = ["apple", "banana", "cherry", "date"];

for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit at index ${i}: ${fruits[i]}`);
}

console.log(`\n \n`);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ use cases of break and continue in loops ++++++++++++++++++++++++++++++++++++++++++++++++++++++

function square(num) {
    // const IntoNumber = new Number(num); //this insures that value should be always a number data type
     return Math.pow(num, 2);
}


//note :- all console will be done upto 5 index and then break will be executed and print the square of 6 and exit the loop
for (let i = 0; i < 10; i++) {
    if(i === 6){
        console.log(`iterator reached at 6 index`);
        console.log(square(i));
        break; //no execution after iterator reached at index 6
    }
    console.log(`iterator is at index ${i}`);
}



//note :- all console will be done upto 5 index and then continue will skip the index 6 and print the remainig indices
for (let i = 0; i < 10; i++) {
    if(i === 6){
        console.log(`iterator reached at 6 index and this will not be printed`);
        continue;
    }
    console.log(`iterator is at index ${i}`);
}
