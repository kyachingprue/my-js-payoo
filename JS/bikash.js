document.getElementById('btn-add-balance')
  .addEventListener('click', function (event) {
    event.preventDefault();
    
    const addMoney = document.getElementById('input-add-balance').value;
    
    const addNumber = parseFloat(addMoney);
    
    const pinNumber = document.getElementById('input-pin-code').value;
    

  // get the condition declare 
    if (pinNumber === '1234') {
    
      const amountBalance = document.getElementById('amount-balance').innerText;
      
      const numberConvert = parseFloat(amountBalance);
      
      const newBalance = addNumber + numberConvert;
      
      document.getElementById('amount-balance').innerText = newBalance;
      
  }
  else {
    alert('Failed your password typing information');
  }
})