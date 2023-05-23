const side = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputE1 = document.querySelector("#output");

function calculateSumOfSquares(a,b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypotenuse(){
    const sumOfSquares = calculateSumOfSquares(Number(side[0].value),Number(side[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputE1.innerText = "The length of hypotenuse is : "+lengthOfHypotenuse    
}

hypotenuseBtn.addEventListener("click",calculateHypotenuse);