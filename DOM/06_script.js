const BMI_WEIGHT = document.querySelector(".BMI-WEIGHT");
const BMI_HEIGHT = document.querySelector(".BMI-HEIGHT");


const BMI_BTN = document.querySelector(".BMI-BTN");
const BMI_RESULT = document.createElement("div");
BMI_RESULT.classList.add("BMI-RESULT");
BMI_RESULT.innerHTML = "BMI Result will be displayed here <br>";
document.body.appendChild(BMI_RESULT);

BMI_BTN.addEventListener("click", function () {
    const bmi_weightInNumber = Number(BMI_WEIGHT.value);
    const bmi_heightInNumber = Number(BMI_HEIGHT.value);
    const result = bmi_weightInNumber / (bmi_heightInNumber * bmi_heightInNumber);
    

    const resultInString = String(result.toFixed(3));

    if(resultInString < 18.5){
        const nodeText = document.createTextNode("You are underweight, your BMI is " + resultInString);
        BMI_RESULT.appendChild(nodeText);
    } else if(resultInString >= 18.5 && resultInString < 24.9){
        const nodeText = document.createTextNode("You are normal weight, your BMI is " + resultInString);
        BMI_RESULT.appendChild(nodeText);
    } else if(resultInString >= 25 && resultInString < 29.9){
        const nodeText = document.createTextNode("You are overweight, your BMI is " + resultInString);
        BMI_RESULT.appendChild(nodeText);
    } else {
        const nodeText = document.createTextNode("You are obese, your BMI is " + resultInString);
        BMI_RESULT.appendChild(nodeText);
    }
})



