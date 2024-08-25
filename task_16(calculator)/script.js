document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');

    document.addEventListener('keydown', function(event) {
        const key = event.key;
        if (key >= '0' && key <= '9') {
            appendToDisplay(key);
        } else if (key === 'Enter' || key === '=') {
            calculateResult();
        } else if (key === 'Backspace') {
            clearLastCharacter();
        } else if (key === 'Escape') {
            clearDisplay();
        } else if (['+', '-', '*', '/', '(', ')', '.'].includes(key)) {
            appendToDisplay(key);
        }
    });
});

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function clearLastCharacter() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        alert('Invalid expression');
        clearDisplay();
    }
}