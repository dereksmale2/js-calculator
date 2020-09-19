let answer = document.querySelector('#answer');
let decimal = false;
let display = '';

function clearAnswer() {
    answer.value = ' ';
    decimal = false; 
    display = '';
}

function updateDisplay(keyPressed) {
    if ((!isNaN(keyPressed) || (keyPressed === '.' && decimal === false)) ||
        (display.length > 0 && !isNaN(display.substr(display.length-1)) )) {

        if (keyPressed !== '.' || ((keyPressed === '.') && !decimal)) {
            display = display + keyPressed;
            answer.value = display;
        }
        if (keyPressed === '.') {
            decimal = true;
        } else if (isNaN(keyPressed)) {
            decimal = false;
        }
    }
} 

function displayTotal() {
    if (display !== '') {
        let total = eval(display);
        display = total.toString();
        answer.value = total;
    }
}