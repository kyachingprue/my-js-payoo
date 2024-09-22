
//Input add money and cash out value .......
function getInputFieldValueById(id) {
  const addInputMoney = document.getElementById(id).value;
  const addNumberValue = parseFloat(addInputMoney);
  return addNumberValue;
}
// Text add money and cash out value .......
function getTextFieldValueById(id) {
  const cashValueInput = document.getElementById(id).innerText;
  const cashNumberInput = parseFloat(cashValueInput);
  return cashNumberInput;
}