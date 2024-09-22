document.getElementById('show-add-money-form').addEventListener('click', function (event) {
  event.preventDefault();
  showSectionById('home-add-money');
})
document.getElementById('show-cash-form').addEventListener('click', function (event) {
  event.preventDefault();
  showSectionById('home-cash-out');
})
document.getElementById('show-transaction').addEventListener('click', function (event) {
  event.preventDefault();
  showSectionById('home-transaction');
})