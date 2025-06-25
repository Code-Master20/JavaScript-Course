// const myArr = [0, 1, 2, 3, 4, 5, 6];

// myArr[1] = 9; // to change element of an array
// const updateArray = [...myArr, 79] //appending element to an array using spread operator, at last
// const superUpdateArray = [89, ...myArr] //appending element to an array using spread operator, at the beginning
// console.log(superUpdateArray)
// console.log(updateArray)
// console.log(myArr)


//modern way to declare an array
// let newarr = new Array(2,4,6,9,3,);
// console.log(newarr) // [2,4,6,9,3]
// console.log(newarr.length) //5

// newarr.push(9,67); //appending element to an array at the last using push method.
// console.log(newarr)

// newarr.unshift(50) // appending element to an array at the beginning using unshift method.
// console.log(newarr)
// const refreshArray = newarr.pop() // to remove last element from an array
// console.log(newarr)
// const newRefreshArray = newarr.shift(); // to remove the commencing element from an array
// console.log(newarr)
// console.log(`removed element: ${refreshArray}`);



// const newArr = [4,5,6,8,9,3,8,7]

// function arrOperation(newArr) {
//     if(newArr.includes(8)){
//         console.log(`index of element 8: ${newArr.indexOf(8)}`)
//     } else {
//         console.log(`this element does not contain in newarr`)
//     }
// }


// console.log(arrOperation(newArr))


//learning join method in array
// const array1 = [6,5,7,8,9,3,76,82,1]
const array2 = [98,45,25,67,29,80,90,2]

const array1 = array2.join(); //this method helps to store array's element into another variable into the form of string, 
// result=> 98,42,25,67,29,80,90,2

console.log(array2) // result [98,42,25,67,29,80,90,2]
console.log(array1); // result=> 98,42,25,67,29,80,90,2

//Dealing with Slice method
 const scoreArray = [3,4,5,6,7,8,9,2]

 const sectionOfArray = scoreArray.slice(0,4); //last count not included, this method returns a copy of a section of an array,
 // original array not affected

 console.log(scoreArray) //result => [3,4,5,6,7,8,9,2]
 console.log(sectionOfArray) //result => [3,4,5,6]

 //Dealing with splice Method
 const productCount = [1,2,3,4,5,6,7,8,9,10]
 const sectionOfProductCount = productCount.splice(2,8) //last count included, this method cuts 
 //  a section of an array and returns it,original array is also  affected

 console.log(productCount) //remaining elements in array->productCount => [1,2]
 console.log(sectionOfProductCount) // result => [3,4,5,6,7,8,9,10]

