function inputUpdate(inputId, isTrue) {
    const input = document.getElementById(inputId+ "-input");
    let inputValue = input.value;
    if (isTrue) {
        inputValue = parseFloat(inputValue) + 1;
    }
    else if(isTrue != 'true' && inputValue > 0){
        inputValue = parseFloat(inputValue) - 1;
    }
    input.value = inputValue;
    const phoneTotalPrice = document.getElementById(inputId + '-total-price');
    if (inputId == 'phone') {
        phoneTotalPrice.innerText = 1219 * inputValue;
    }
    else if (inputId == 'case') {
        phoneTotalPrice.innerText = 59 * inputValue;
    }
    updateTotals();
}
function updateTotals() {
    const phoneTotalPrice = document.getElementById('phone-total-price').innerText;
    const caseTotalPrice = document.getElementById('case-total-price').innerText;
    const subTotal = document.getElementById('sub-total');
    const subTotalAmount = parseFloat(phoneTotalPrice) + parseFloat(caseTotalPrice);
    subTotal.innerText = subTotalAmount;
    const tax = document.getElementById('tax');
    const taxAmount = subTotalAmount / 10;
    tax.innerText = taxAmount;
    const total = document.getElementById('total');
    total.innerText = subTotalAmount + taxAmount;
}

document.getElementById('phone-plus').addEventListener('click', function () {
    inputUpdate('phone', true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    inputUpdate('phone', false);
})
document.getElementById('case-plus').addEventListener('click', function () {
    inputUpdate('case', true);
})
document.getElementById('case-minus').addEventListener('click', function () {
    inputUpdate('case', false);
})