const input = document.querySelectorAll(".input");
const button = document.querySelector(".button");
const output = document.querySelector(".output");


function calculateArea(input){
    const base = Number(input[0].value);
    const height = Number(input[1].value);
    const sum = (base*height)/2;
    return sum;
}
function showMessage(msg,color="black"){
    output.innerText = msg;
    output.style.color = color;
}

function sumOfArea(){
    const base = Number(input[0].value);
    const height = Number(input[1].value);   

    if(base === 0 && height === 0){
        showMessage("All fields are required","red");
    }else if(base < 0 || height < 0){
        showMessage("Negtive values are not allowed", "red");
    }else if(base > 0 && height > 0){
        const area = calculateArea(input); 
        showMessage("Area is : "+area);  
    }else{
        showMessage("All the fields must be greater than 0", "red")
    }
}

button.addEventListener("click", sumOfArea);