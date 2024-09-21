document.getElementById('btn-cash-out')
  .addEventListener('click', function (event) {
  event.preventDefault();
  
    const cashAmount = document.getElementById('input-cash-out').value;
    const numberCashOut = parseFloat(cashAmount);
    const cashPinCode = document.getElementById('input-pin-cash').value;

    //Get the condition declare
    if (cashPinCode === '1234') {
      const cashOutBalance = document.getElementById('amount-balance').innerText;
      const numberDeclare = parseFloat(cashOutBalance);
      const totalCashOut = numberDeclare - numberCashOut;
      document.getElementById('amount-balance').innerText = totalCashOut;
    }
    else {
      alert('Failed your password typing value---');
    }
})