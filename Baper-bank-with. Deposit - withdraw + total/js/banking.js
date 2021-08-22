function getInputValue(inputId) {
  const input = document.getElementById(inputId + '-input');
  const inputValue = parseFloat(input.value);
  input.value = '';
  return inputValue;
}
function updateFieldTextValues(fieldId, inputValue) {
  const field = document.getElementById(fieldId + '-total');
  const fieldAmount = parseFloat(field.innerText);
  field.innerText = fieldAmount + inputValue;
  updateTotalBalance()
}
function updateTotalBalance() {
  const totalBalance = document.getElementById('balance-total');
  const totalBalanceAmount = 1233;
  const depositAmount = parseFloat(document.getElementById('deposit-total').innerText);
  const withdrawAmount = parseFloat(document.getElementById('withdraw-total').innerText);
  const newTotal = totalBalanceAmount + depositAmount - withdrawAmount;
  totalBalance.innerText = newTotal.toFixed(2);
  return parseFloat(totalBalance.innerText);
}
document.getElementById('deposit-button').addEventListener('click', function () {
  const inputValue = getInputValue('deposit');
  if (inputValue > 0) {
    updateFieldTextValues('deposit', inputValue);
  }
})
document.getElementById('withdraw-button').addEventListener('click', function () {
  const inputValue = getInputValue('withdraw');
  const totalBalance = updateTotalBalance();
  if(inputValue > 0 && inputValue <= totalBalance)
  updateFieldTextValues('withdraw', inputValue);
})