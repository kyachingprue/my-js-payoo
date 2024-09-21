//setup the cash out section
document.getElementById('btn-show-cash-out').addEventListener('click', function () {
  
  document.getElementById('show-cash-out-form').classList.remove('hidden');

  document.getElementById('show-add-balance').classList.add('hidden');
})
//setup the add money section
document.getElementById('btn-show-add-money').addEventListener('click', function () {
  document.getElementById('show-add-balance').classList.remove('hidden');

  document.getElementById('show-cash-out-form').classList.add('hidden');
})