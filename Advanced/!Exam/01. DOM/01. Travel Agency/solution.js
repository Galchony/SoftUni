window.addEventListener('load', solution);

function solution() {
  let arr = [];
  let fnameInput = document.getElementById('fname');
  let emailInput = document.getElementById('email');
  let phoneInput = document.getElementById('phone');
  let addressInput = document.getElementById('address');
  let codeInput = document.getElementById('code');
  let ulPreview = document.getElementById('infoPreview');
  let div = document.getElementById('block');

  let submitBtn = document.getElementById('submitBTN');
  let editBtn = document.getElementById('editBTN');
  let continueBtn = document.getElementById('continueBTN');

  submitBtn.addEventListener('click', () => {
    if (fnameInput.value === '' || emailInput.value === '') {
      return;
    }
    arr = [fnameInput.value, emailInput.value, phoneInput.value, addressInput.value, codeInput.value]
    let li1 = document.createElement('li');
    li1.textContent = `Full Name: ${fnameInput.value}`;
    let li2 = document.createElement('li');
    li2.textContent = `Email: ${emailInput.value}`;
    let li3 = document.createElement('li');
    li3.textContent = `Phone Number: ${phoneInput.value}`;
    let li4 = document.createElement('li');
    li4.textContent = `Address: ${addressInput.value}`;
    let li5 = document.createElement('li');
    li5.textContent = `Postal Code: ${codeInput.value}`;

    ulPreview.appendChild(li1);
    ulPreview.appendChild(li2);
    ulPreview.appendChild(li3);
    ulPreview.appendChild(li4);
    ulPreview.appendChild(li5);

    fnameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    addressInput.value = '';
    codeInput.value = '';

    submitBtn.disabled = true;
    editBtn.disabled = false;
    continueBtn.disabled = false;

    editBtn.addEventListener('click', () => {
      fnameInput.value = arr[0];
      emailInput.value = arr[1];
      phoneInput.value = arr[2];
      addressInput.value = arr[3];
      codeInput.value = arr[4];

      submitBtn.disabled = false;
      editBtn.disabled = true;
      continueBtn.disabled = true;
      ulPreview.innerHTML = '';
    })
    continueBtn.addEventListener('click', () => {
      div.textContent = '';
      let h3 = document.createElement('h3');
      h3.textContent = 'Thank you for your reservation!'
      div.appendChild(h3);
    })
  })



}
