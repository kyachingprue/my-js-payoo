document.getElementById('btn-primary-add-money')
  .addEventListener('click', function(event) {
  event.preventDefault();
  
    const showAddMoney = getInputFieldValueById('show-add-money-input');
    const showPinCode = getInputFieldValueById('show-pin-code-input');

    if (showPinCode === 1234) {
      const balanceAmount = getTextFieldValueById('show-add-amount-balance');
      const totalAmountBalance = balanceAmount + showAddMoney;
      document.getElementById('show-add-amount-balance').innerText = totalAmountBalance;
    }
    else {
      alert('Failed your account .... ')
    }
})