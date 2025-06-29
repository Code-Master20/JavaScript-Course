const buttons = document.querySelectorAll('.btn');
console.log(buttons) //this returns a nodeList of button elements

buttons.forEach((button) => {
    button.style.width = '100px';
    button.style.height = '30px';
    button.style.borderRadius = '10%';
    button.style.margin = '10px';
    button.style.textAlign = 'center';
    // button.style.alignItems = 'center';
})


const body = document.querySelector('body');


const colorChange = (buttons, body)=>{
    buttons.forEach((btn) => { // this will loop through each button and add an event listener to it
        btn.addEventListener("click",()=>{
            body.style.backgroundColor = btn.style.backgroundColor; // this will change the background color of the body to the color of the button clicked
        })
    })
}


colorChange(buttons, body)




