function one(){
    const userName = 'Sahidur'

    function two(){
        const website = 'youtube';
        // console.log(userName)
    }
    two()
    // console.log(website)
    
}


one()

//userName can be accessible inside function two as userName defined inside function one is treated as global variable for function one 
//website defined inside function two is not accessible in function one as website defined inside function one is bound with function blook scope for function one




// similar erros (situations) occurs with if else nested loops

if(true) {
    const userName = 'Sahidur Miah'
    if(userName === 'Sahidur Miah'){
        const website = 'youtube'
        // console.log( userName + website) //userName can be accessible inside loop-nested two as userName defined
        //  inside loop-nested one is treated as global variable for loop-nesteed two 
    }

    // console.log(website)  //website defined inside loop-nested two is not accessible in loop-nested one as
    // //  website defined inside loop-nested two is bound with loop-blook scope for loop-nested two

}


//  Different ways to write functions
addOneNumber(4);
function addOneNumber(num1){ //first way, normal way to define a function, note:-after defining function with 
// this way we can call this function any where if it is defined globally, as it runs asynchronously
    return num1 + 2
}




const addTwoNumber = function(num1){ //second way,standard way to define a function, sometimes it is called expression, 
// note:-we have to call this function only below after defining to run erroslessly
    return num1 +2
}

addTwoNumber(4);