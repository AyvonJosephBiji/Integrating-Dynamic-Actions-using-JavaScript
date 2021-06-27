function update() {
    var weight = parseInt(document.getElementById('t1').value);
    var height = parseInt(document.getElementById('t2').value) / 100;
    var result = weight / height ** 2;
    document.getElementById('result').value = Math.round(result * 100) / 100;
    var remark = document.getElementById('remark');
    if (result < 18) remark.innerHTML = 'Underweight BMI';
    else if (result < 25) remark.innerHTML = 'Normal BMI';
    else if (result < 30) remark.innerHTML = 'Overweight BMI';
    else remark.innerHTML = 'Obese BMI';
}

function clearFields() {
    var list = document.querySelectorAll("input[type='text']");
    list.forEach((e) => {
        e.value = '';
    });
}