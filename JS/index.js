
document.getElementById('btn-button')
   .addEventListener('click', function(event) {
     event.preventDefault();
     
     const addMoney = document.getElementById('input-add-money').value;
     const addMoneyNumber = parseFloat(addMoney);
     const addPinNumber = document.getElementById('input-pin-number').value;

     // condition declare
     if (addPinNumber === '1234') {
       
       const accountBalance = document.getElementById('account-balance').innerText;
       const addAccountBalance = parseFloat(accountBalance);

       const newBalance = addMoneyNumber + addAccountBalance;
       document.getElementById('account-balance').innerText = newBalance;
       
     }
     else {
       alert('Failed your pin number')
     }
})