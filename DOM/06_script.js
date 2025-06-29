const BMI_WEIGHT = document.querySelector(".BMI-WEIGHT");
const BMI_HEIGHT = document.querySelector(".BMI-HEIGHT");


const BMI_BTN = document.querySelector(".BMI-BTN");
const BMI_RESULT = document.createElement("div");
BMI_RESULT.classList.add("BMI-RESULT");
BMI_RESULT.innerHTML = "BMI Result will be displayed here <br>";
document.body.appendChild(BMI_RESULT);

BMI_BTN.addEventListener("click", function () {
    const result = BMI_WEIGHT.value/(BMI_HEIGHT.value * BMI_HEIGHT.value);
    console.log(result);

    if(result < 18.5){
        const nodeText = document.createTextNode("You are underweight, your BMI is " + result);
        BMI_RESULT.appendChild(nodeText);
    } else if(result >= 18.5 && result < 24.9){
        const nodeText = document.createTextNode("You are normal weight, your BMI is " + result);
        BMI_RESULT.appendChild(nodeText);
    } else if(result >= 25 && result < 29.9){
        const nodeText = document.createTextNode("You are overweight, your BMI is " + result);
        BMI_RESULT.appendChild(nodeText);
    } else {
        const nodeText = document.createTextNode("You are obese, your BMI is " + result);
        BMI_RESULT.appendChild(nodeText);
    }
})



