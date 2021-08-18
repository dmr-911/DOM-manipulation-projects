function inputUpdate(inputId, isTrue) {
    const productInput = document.getElementById(inputId + '-input');
    let inputValue = productInput.value;
    if (isTrue) {
       inputValue = parseInt(inputValue) + 1;
    }
    else if (inputValue > 0) {
       inputValue = parseInt(inputValue) - 1;
    }
    productInput.value = inputValue;
    totalProductPriceUpdate(inputId, productInput.value);
    totalPriceUpdate();
}
function totalProductPriceUpdate(inputId, inputValue) {
    const totalPrice = document.getElementById(inputId + '-total-price');
    if (inputId == 'phone') {
        totalPrice.innerText = inputValue * 1219;
    }
    else if (inputId == 'case') {
        totalPrice.innerText = inputValue * 59;
    }
}
function getPriceValue(priceId) {
    const productTotalPrice = document.getElementById(priceId + '-total-price').innerText;
    return productTotalPrice;
}
function totalPriceUpdate() {
    const totalPhonePrice = getPriceValue("phone");
    const totalCasePrice = getPriceValue("case");
    const subTotal = document.getElementById('sub-total');
    const updateSubTotal = parseFloat(totalPhonePrice) + parseFloat(totalCasePrice);
    subTotal.innerText = updateSubTotal;
    const tax = document.getElementById('tax');
    const taxAmount = updateSubTotal / 10;
    tax.innerText = taxAmount;
    const total = document.getElementById('total');
    const totalAmount = updateSubTotal + taxAmount;
    total.innerText = totalAmount;
}
document.getElementById('phone-plus-button').addEventListener('click', function () {
     inputUpdate("phone", true);
})
document.getElementById('phone-minus-button').addEventListener('click', function () {
     inputUpdate("phone", false);
})
document.getElementById('case-plus-button').addEventListener('click', function () {
     inputUpdate("case", true);
})
document.getElementById('case-minus-button').addEventListener('click', function () {
     inputUpdate("case", false);
})