function solve() {
  let buttons = document.querySelectorAll('div#exercise button')
  let generateBtn = buttons[0];
  let buyBtn = buttons[1];

  let textAreas = document.querySelectorAll('div#exercise textarea');

  let boughtFurniture = [];
  let totalPrice = 0;
  let decFactor = 0;
  generateBtn.addEventListener('click', () => {
    let order = JSON.parse(textAreas[0].value);
  
    for (const el of order) {
      let obj = el;
      let tr = document.createElement('tr');
      let tdImg = document.createElement('td');
      let img = document.createElement('img');
      img.setAttribute('src', obj.img);
      tdImg.appendChild(img);
      tr.appendChild(tdImg);
      for (const [key, value] of Object.entries(obj)) {
        if (key === 'img') {
          continue;
        }
        let td = document.createElement('td');
        let p = document.createElement('p');
        p.textContent = value;
        td.appendChild(p);
        tr.appendChild(td);
      }
      let tdIn = document.createElement('td');
      let input = document.createElement('input');
      input.type = 'checkbox';
      tdIn.appendChild(input);
      tr.appendChild(tdIn);
      let tbody = document.querySelector('tbody');
      tbody.appendChild(tr);
    }
    
    textAreas[0].value = '';
  })
  buyBtn.addEventListener('click', () => {
    let checkedArr = Array.from(document.querySelectorAll('input[type="checkbox"]'));
    for (const el of checkedArr) {
      if (el.checked) {
        boughtFurniture.push(el.parentElement.parentElement.querySelector('td:nth-child(2)').textContent);
        totalPrice += Number(el.parentElement.parentElement.querySelector('td:nth-child(3)').textContent);
        decFactor += Number(el.parentElement.parentElement.querySelector('td:nth-child(4) p').textContent)
      }
    }
    textAreas[1].value = `Bought furniture: ${boughtFurniture.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${decFactor/boughtFurniture.length}`

  })
}