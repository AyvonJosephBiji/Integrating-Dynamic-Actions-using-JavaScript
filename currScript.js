var factor = [
    [1, 72.78, 105.9],
    [0.014, 1, 1.45],
    [0.0094, 0.69, 1],
];

function update() {
    var amount = parseFloat(document.getElementById('amount').value);
    var from = parseInt(document.getElementById('from').value);
    var to = parseInt(document.getElementById('to').value);
    result = amount * factor[from - 1][to - 1];
    document.getElementById('result').value = Math.round(result * 100) / 100;
}

function reset() {
    var list1 = document.querySelectorAll("input[type='text']");
    list1.forEach((e) => {
        e.value = '';
    });
    var list2 = document.querySelectorAll('select');
    list2.forEach((e) => {
        e.value = '';
    });
}