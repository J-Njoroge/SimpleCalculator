const display = document.querySelector('.display');
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

//Define function to handle button clicks and perform calculations.
const calculate = (btnValue) => {
    if (btnValue === "=" && output !== "") {
        //If output has '%' character, replace it with '/100' before evaluating.
        output = eval(output.replace("%", "/100"));
    }else if (btnValue === "AC") {
        output = "";

    }else if (btnValue === "DEL") {
        //if DEL button is pressed, remove the last character.
        output = output.toString().slice(0, -1);
    }else{
        //If output is empty and the button is a special character, then return
        
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
}

//Add event listeners to all buttons, call calculate() function on click.
buttons.forEach(button => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});