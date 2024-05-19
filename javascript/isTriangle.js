const inputs = document.querySelectorAll(".input");
const button = document.querySelector(".button");
const output = document.querySelector(".output");

function calculateSum(inputs){
    const a = Number(inputs[0].value);
    const b = Number(inputs[1].value);
    const c = Number(inputs[2].value);
    const totalSum = a+b+c;
    return totalSum;
}

function showMessage(msg,color = "black"){
   output.innerText = msg;
   output.style.color = color;
}

function isTriangle(){
    const totalSum = calculateSum(inputs);
    const side1 = Number(inputs[0].value);
    const side2 = Number(inputs[1].value);
    const side3 = Number(inputs[2].value);

    
    if (side1 === 0 && side2 === 0 && side3 === 0) {
        showMessage("All fields are required", "red");
    } else if (side1 < 0 || side2 < 0 || side3 < 0) {
        showMessage("Negative values are not allowed", "red");
    } else if (side1 > 0 && side2 > 0 && side3 > 0) {
        if (totalSum === 180) {
            showMessage("Yes, it forms a Triangle.");
        } else {
            showMessage("No, it is not a Triangle.");
        }
    } else {
        showMessage("All fields must be greater than 0", "red");
    }
}

button.addEventListener("click",isTriangle);