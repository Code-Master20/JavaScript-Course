const random_number_holder = document.querySelector(".random-number-holder");


const randomNumberGenerator = () => {
    const randomNumber = Math.random() * 5 + 1; // Generates a random number between 1 and 6 (exclusive of 6)
    const roundedNumber = Math.round(randomNumber); // Rounds the number to the nearest integer
    random_number_holder.value = roundedNumber; // Sets the text content of the element to the rounded number
}

const btn = document.querySelectorAll(".btn");


btn.forEach((btn, index)=>{
    btn.addEventListener("click", ()=>{
        randomNumberGenerator();
        if ((index + 1) == Number(random_number_holder.value)) {
            const randomStringValue = String(random_number_holder.value);
            const div = document.createElement("div");
            const nodeText = document.createTextNode(btn.innerText + ' - ' + randomStringValue + '\n' + 'Match');
            div.appendChild(nodeText);
           document.querySelector(".random-number").appendChild(div);
        }
    })
})