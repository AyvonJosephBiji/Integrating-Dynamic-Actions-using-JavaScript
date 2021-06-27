function add() {
    var num1 = document.getElementById('t1').value;
    var num2 = document.getElementById('t2').value;
    var result = parseInt(num1) + parseInt(num2);
    document.getElementById('result').value = Math.round(result * 100) / 100;
}

function subtract() {
    var num1 = document.getElementById('t1').value;
    var num2 = document.getElementById('t2').value;
    var result = parseInt(num1) - parseInt(num2);
    document.getElementById('result').value = Math.round(result * 100) / 100;
}

function multiply() {
    var num1 = document.getElementById('t1').value;
    var num2 = document.getElementById('t2').value;
    var result = parseInt(num1) * parseInt(num2);
    document.getElementById('result').value = Math.round(result * 100) / 100;
}

function divide() {
    var num1 = document.getElementById('t1').value;
    var num2 = document.getElementById('t2').value;
    var result = parseInt(num1) / parseInt(num2);
    document.getElementById('result').value = Math.round(result * 100) / 100;
}

function clearFields() {
    var list = document.querySelectorAll("input[type='text']");
    list.forEach((e) => {
        e.value = '';
    });
}