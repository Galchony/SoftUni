window.addEventListener("load", solve);

function solve() {
  let makeInput = document.getElementById('make');
  let modelInput = document.getElementById('model');
  let yearInput = document.getElementById('year');
  let fuelInput = document.getElementById('fuel');
  let originalCostInput = document.getElementById('original-cost');
  let sellingPriceInput = document.getElementById('selling-price');

  let tbodyEl = document.getElementById('table-body');
  let ul = document.getElementById('cars-list');
  let totalProfitEl = document.getElementById('profit');
  let totalProfit = 0;

  let publishBtn = document.getElementById('publish');
  publishBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (makeInput.value === ''
      || modelInput.value === ''
      || yearInput.value === ''
      || fuelInput.value === ''
      || originalCostInput.value === ''
      || sellingPriceInput.value === ''
      || Number(originalCostInput.value) >= Number(sellingPriceInput.value)) {
      return;
    }

    let tr = document.createElement('tr');
    tr.classList.add('row');

    let td1 = document.createElement('td');
    td1.textContent = makeInput.value;
    let td2 = document.createElement('td');
    td2.textContent = modelInput.value;
    let td3 = document.createElement('td');
    td3.textContent = yearInput.value;
    let td4 = document.createElement('td');
    td4.textContent = fuelInput.value;
    let td5 = document.createElement('td');
    td5.textContent = originalCostInput.value;
    let td6 = document.createElement('td');
    td6.textContent = sellingPriceInput.value;

    let td7 = document.createElement('td');
    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('action-btn', 'edit');
    let sellBtn = document.createElement('button');
    sellBtn.textContent = 'Sell';
    sellBtn.classList.add('action-btn', 'sell');
    td7.appendChild(editBtn);
    td7.appendChild(sellBtn);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);

    tbodyEl.appendChild(tr);

    makeInput.value = '';
    modelInput.value = '';
    yearInput.value = '';
    fuelInput.value = '';
    originalCostInput.value = '';
    sellingPriceInput.value = '';

    editBtn.addEventListener('click', () => {
      makeInput.value = td1.textContent;
      modelInput.value = td2.textContent;
      yearInput.value = td3.textContent;
      fuelInput.value = td4.textContent;
      originalCostInput.value = td5.textContent;
      sellingPriceInput.value = td6.textContent;
      tr.remove();
    })
    sellBtn.addEventListener('click', () => {
      let li = document.createElement('li');
      li.classList.add('each-list')
      let span1 = document.createElement('span');
      span1.textContent = `${td1.textContent} ${td2.textContent}`;
      let span2 = document.createElement('span');
      span2.textContent = td3.textContent;
      let span3 = document.createElement('span');
      span3.textContent = Number(td6.textContent) - Number(td5.textContent);
      li.appendChild(span1);
      li.appendChild(span2);
      li.appendChild(span3);
      ul.appendChild(li);
   
      totalProfit += Number(td6.textContent) - Number(td5.textContent);
      totalProfitEl.textContent = totalProfit.toFixed(2);
      tr.remove();
    })
  })
}
