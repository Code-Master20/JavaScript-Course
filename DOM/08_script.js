const imageContainer = document.querySelector(".image-container");
const ul_image_container = document.querySelector(".ul-image-container");
const animals_image = document.querySelector("#animals-image");
const bridge_image = document.querySelector("#bridge-image");
const buildings_image = document.querySelector("#buildings-image");
const cars_image = document.querySelector("#cars-image");
const ocean_image = document.querySelector("#ocean-image");
const people_talking_image = document.querySelector("#people-talking-image");
const train_image = document.querySelector("#train-image");
const waterfall_image = document.querySelector("#waterfall-image");



// bridge_image.onclick = (e) => {
//     alert("bridge image clicked")
// }

// attachEventListener

// jQuery -> on

// bridge_image.addEventListener('click', (e) => {
//     console.log('bridge image clicked')
// }, false)


// what to read ? :-
//type, timeStamp, defaultPrevented
//target, toElement, srcElement, currentTarget,
//clientX, clientY, screenX, screenY
//altKey, ctrlKey, shiftKey, keyCode



// what is event propagation ? :-

ul_image_container.addEventListener("click", (event) =>{
    console.log("Clicked on ul-element");
}, false)

cars_image.addEventListener("click", (event) => {
    console.log("car image clicked")
    event.stopPropagation(); //  this will stop event bubbling
}, false)

//You saw in console when you clicked on ul-element ---> result  "Clicked on ul-element"
// you saw in console when you clicked on car-image ---> result  "car image clicked" , "Clicked on ul-element"
//so the above two statements implying that when "false" as parameter in addEventListener, event "bubbling" occurs from below-side[inner-side] to upper-side[outer-side];


// ul_image_container.addEventListener("click", (event) =>{
//     console.log("Clicked on ul-element");
// }, true)

// animals_image.addEventListener("click", (event) => {
//     console.log("animals image clicked");
// }, true)

//You saw in console when you clicked on ul-element ---> result  "Clicked on ul-element"
// you saw in console when you clicked on car-image ---> result   "Clicked on ul-element"  , "car image clicked" 
//so the above two statements implying that when "true" as parameter in addEventListener, event "capturing" occurs from upper-side[outer-side] to below-side[inner-side];

//so this flowing of event triggering is called event propagation



