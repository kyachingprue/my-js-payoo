function showSectionById(id) {
  document.getElementById('home-add-money').classList.add('hidden');
  document.getElementById('home-cash-out').classList.add('hidden');
  document.getElementById('home-transaction').classList.add('hidden');
  //show elements id
  document.getElementById(id).classList.remove('hidden');
}