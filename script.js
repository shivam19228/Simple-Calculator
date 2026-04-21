let result = document.getElementById('result');

// Screen par number ya operator dikhane ke liye
function display(value) {
    result.value += value;
}

// Screen clear karne ke liye
function clearScreen() {
    result.value = "";
}

// Ek-ek karke delete karne ke liye (Backspace)
function deleteLast() {
    result.value = result.value.slice(0, -1);
}

// Calculation logic
function calculate() {
    try {
        // eval() function string ko math expression ki tarah solve karta hai
        if (result.value !== "") {
            result.value = eval(result.value);
        }
    } catch (error) {
        alert("Invalid Input");
        clearScreen();
    }
}