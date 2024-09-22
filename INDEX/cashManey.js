document.getElementById('btn-primary-cash-out')
  .addEventListener('click', function (event) {
  event.preventDefault();

  const cashOutInput = getInputFieldValueById('show-cash-out-input');
    const showCashOutInput = getInputFieldValueById('show-cash-out-pin');
  

    if (showCashOutInput === 1234) {
    const mainTotalBalance = getTextFieldValueById('show-add-amount-balance');
    const newTotalBalanceValue = mainTotalBalance - cashOutInput;
    document.getElementById('show-add-amount-balance').innerText = newTotalBalanceValue;
   
  }
  else {
    alert('Failed your information....')
  }
})