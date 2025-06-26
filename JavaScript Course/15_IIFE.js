// Immediately Invoked Function Expressions (IIFE), note:- semicolon mendatory at the end of IIFE

(function chai() { //Named IIFE
    console.log('DB connected');
})();



((name)=>{ //Un-Named IIFE
    console.log(`User Name : ${name}`)
})("Sahidur Miah");


(name=>{ //Un-Named IIFE
    console.log(`User Name : ${name}`)
})("Sahidur Miah");