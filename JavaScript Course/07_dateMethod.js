let date  = new Date();
console.log(date.toLocaleDateString('en-IN'))

const hours = date.getHours() + 5;

function thelveForm(hours) {
    if(hours > 12) {
        return (hours =  hours - 12);
    }
}

const newHours = thelveForm(hours);
const minutes = date.getMinutes() + 30;
const seconds = date.getSeconds();
const milliSeconds  = date.getMilliseconds();

console.log(`Current-Time: ${newHours}:${minutes}:${seconds}:${milliSeconds}`)




/*

let date = new Date();
console.log(date.toLocaleDateString('en-IN'));

date.setHours(date.getHours() + 5);
date.setMinutes(date.getMinutes() + 30);

let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let milliSeconds = date.getMilliseconds();

function formatWithAmPm(h) {
    const period = h >= 12 ? 'PM' : 'AM';
    const hour = h % 12 || 12; // Convert to 12-hour format and replace 0 with 12
    return { hour, period };
}

let { hour: formattedHours, period } = formatWithAmPm(hours);

console.log(`Current-Time: ${formattedHours}:${minutes}:${seconds}:${milliSeconds} ${period}`);

*/


let myTimeStamp = Date.now();

console.log(myTimeStamp); //this returns current time in milliseconds
console.log(date.getTime()); //this returns current time in milliseconds
console.log(Math.floor(myTimeStamp/1000)) // this returns current time in seconds

