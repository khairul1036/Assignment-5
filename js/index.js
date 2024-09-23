document.getElementById("btn-donate-now1").addEventListener("click", function (event) {
  event.preventDefault();

  const inputField = getDonateCardInputById('donate-amount-input1');
  const preBalance = getDonateCardInputById('pre-balance1');

  const donateName = getDonateNameById('donate-name1');
  donateCalculation(inputField, preBalance, donateName);
});




document.getElementById('btn-donate-now2').addEventListener('click', function(event) {
  event.preventDefault();
  
  const inputField = getDonateCardInputById('donate-amount-input2');
  const preBalance = getDonateCardInputById('pre-balance2');

  const donateName = getDonateNameById('donate-name2');
  donateCalculation(inputField, preBalance, donateName);
});




document.getElementById('btn-donate-now3').addEventListener('click', function(event) {
  event.preventDefault();
  
  const inputField = getDonateCardInputById('donate-amount-input3');
  const preBalance = getDonateCardInputById('pre-balance3');

  const donateName = getDonateNameById('donate-name3');
  donateCalculation(inputField, preBalance, donateName);
});



