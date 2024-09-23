// all button id get 
function getDonateCardInputById(id){
    const inputValue = document.getElementById(id);    
    return inputValue;    
}



// all donation topic name or titile get by id
function getDonateNameById(id){
    const donateName = document.getElementById(id).innerText;
    return donateName;
}



// one common calculation function 
function donateCalculation(inputField, preBalance, donateName){
  const inputValue = parseFloat(inputField.value);
  const preDonateTK = parseFloat(preBalance.innerText);
  
  const myBalance = parseFloat(document.getElementById("my-balance").innerText);
  if (isNaN(inputValue) || inputValue < 0) {
    alert("Wrong input...");
    return;
  }

  const newMyBalance = myBalance - inputValue;
  if (newMyBalance < 0) {
    alert("Not enough balance!!");
    return;
  }

  const newBalance = preDonateTK + inputValue;
  document.getElementById("my-balance").innerText = newMyBalance;
  preBalance.innerText = newBalance;
//   clear input field 
  inputField.value = "";

  // add to transaction history
  const div = document.createElement('div');
  div.innerHTML = `
    <div class="border p-8 m-6 rounded-xl">
      <h2 class="text-xl font-bold primary-color mb-2">${inputValue} Taka is ${donateName}</h2>
      <p class="secondary-color text-sm">Date : ${donationTime()} GMT +0600 (Bangladesh Standard Time)</p></div>
  `
  document.getElementById('individual-donate-history').appendChild(div);

  // open modal 
  const modal = document.getElementById("my_modal_5");
  modal.classList.remove('hidden');
  my_modal_5.showModal();
}



function donationTime(){
    const now = new Date();
    now.setHours(now.getHours() + 6);
    const updatedDateTime = now.toLocaleString();

    return updatedDateTime;
}



// show the selected section
function showSectionById(id){
    // hide all the sections
    document.getElementById('donate-form').classList.add('hidden');
    document.getElementById('donate-history').classList.add('hidden');
    
    // show the section with the provide id as parameter
    document.getElementById(id).classList.remove('hidden');
}
  

// active button function 
function activeBtnColor(id){
    document.getElementById('btn-donate').classList.add('bg-white');
    document.getElementById('btn-history').classList.add('bg-white');

    // show the button with the provide id as parameter
    document.getElementById(id).classList.remove('bg-white');
    document.getElementById(id).classList.add('btn-color');
}