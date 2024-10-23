const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button'); // Select all buttons regardless of class

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id === 'clear') {
            display.innerText = ''; // Clear the display
        } else if (item.id === 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substring(0, string.length - 1); // Remove last character
        } else if (display.innerText !== '' && item.id === 'equal') {
            try {
                display.innerText = eval(display.innerText); // Evaluate the expression
            } catch {
                display.innerText = 'Error'; // Handle errors gracefully
                setTimeout(() => (display.innerText = ''), 2000); // Clear after 2 seconds
            }
        } else if (display.innerText === '' && item.id === 'equal') {
            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText = ''), 2000); // Clear after 2 seconds
        } else {
            display.innerText += item.id; // Append button ID (number/operator) to display
        }
    };
});

const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
let isDark = true;

themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark'); // Toggle dark mode
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
};
