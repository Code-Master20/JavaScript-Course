const marvel_heroes = ['thor', 'ironman', 'spiderman']

const dc_heroes = ['superman', 'flash', 'batman']

// marvel_heroes.push(dc_heroes); // it helps to push complete one array into an existing array and 
// treats that array into the existing array as a complete one element

// console.log(marvel_heroes); // result => [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

//who to access elements of that array which is being treated as a complete one element
//  console.log(marvel_heroes[3][2]) // result => batman

 //**************************************************************************concat*********************************************************************************

 const concatedResult = marvel_heroes.concat(dc_heroes); //this method add array's element into an existing array at the last and 
 // returns  a new resulted array after storing into a new variable 
 console.log(concatedResult)



 //Dealing with spread operator, similar to concat but we can pass multiple arrays using spread operator unlike concat method
 const woman_name = ['Parul', 'Puja', 'Priya', 'Susmita']
 const man_name = ['Sahidur', 'Rakibul', 'Rufil', 'Yearosul']

 const all_candidates = [...woman_name, ...man_name];
 console.log(all_candidates) //result => ['Parul','Puja','Priya','Susmita','Sahidur','Rakibul','Rufil','Yearosul']

 //How to deal with the below situation

 const array_trush = [1,2,3,[4,5,6],7, [6,7, [4, 5]]]

 const clean_array = array_trush.flat(2) //this method Returns a new array with all sub-array elements
 //  concatenated into it recursively up to the specified depth.

 console.log(clean_array)  //result => [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


 //
 console.log(Array.isArray('Sahidur Miah')) // to check if Sahidur is in array formed
 console.log(Array.from('Sahidur')) // this create an array using the given values inside the Array.from method

 console.log(Array.from({name:'Sahidur Miah'})) //it will returns an empty array as it could 
 // not interpret that which part  should be made array  [keys or values], you have to tell which part(key or value)  should be converted into array
 

 let score1 = 100
 let score2 = 200
 let score3 = 300;

 console.log(Array.of(score1,score2, score3)) //it returns a new array from set of elements
 //result => [ 100, 200, 300 ]

 let user1 = {
    name: 'Sahidur Miah',
    age : 23,
    ["mobile-No"]: '9366369724',
 }
 let user2 = {
    name: 'Rakibul Miah',
    age : 21,
    ["Mobile-No"] : '9355623945',
 }
 

 console.log(Array.of(user1, user2)) //it returns a new array from set of elements
 //result=> [ { name: 'Sahidur Miah', age: 23, 'mobile-No': '9366369724' }, { name: 'Rakibul Miah', age: 21, 'Mobile-No': '9355623945' }]
