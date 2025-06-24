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



const newArr = [4,5,6,8,9,3,8,7]

function arrOperation(newArr) {
    if(newArr.includes(8)){
        console.log(`index of element 8: ${newArr.indexOf(8)}`)
    } else {
        console.log(`this element does not contain in newarr`)
    }
}

console.log(arrOperation(newArr))


