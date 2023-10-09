window.addEventListener('load', solve);

function solve() {
    let modelInput = document.getElementById('model');
    let yearInput = document.getElementById('year');
    let descriptionInput = document.getElementById('description');
    let priceInput = document.getElementById('price');
    let tbody = document.getElementById('furniture-list');
    let totalP = document.getElementsByClassName('total-price')[0];

    let addBtn = document.getElementById('add');
    addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (modelInput.value === '' || descriptionInput.value === '' || yearInput.value < 0 || priceInput.value < 0) {
            return;
        }
        let tr = document.createElement('tr');
        tr.classList.add('info');
        let td1 = document.createElement('td');
        td1.textContent = modelInput.value;
        let td2 = document.createElement('td');
        td2.textContent = Number(priceInput.value).toFixed(2);
        let td3 = document.createElement('td');

        let moreBtn = document.createElement('button');
        moreBtn.classList.add('moreBtn');
        moreBtn.textContent = "More Info";
        let buyBtn = document.createElement('button');
        buyBtn.classList.add('buyBtn');
        buyBtn.textContent = "Buy it";

        td3.appendChild(moreBtn);
        td3.appendChild(buyBtn);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        tbody.appendChild(tr);

        let tr2 = document.createElement('tr');
        tr2.classList.add('hide');
        let td4 = document.createElement('td');
        td4.textContent = `Year: ${yearInput.value}`;
        let td5 = document.createElement('td');
        td5.textContent = `Description: ${descriptionInput.value}`;
        td5.colSpan = '3';

        tr2.appendChild(td4);
        tr2.appendChild(td5);

        tbody.appendChild(tr2);

        modelInput.value = '';
        yearInput.value = '';
        descriptionInput.value = '';
        priceInput.value = '';


        moreBtn.addEventListener('click', () => {
            moreBtn.textContent = moreBtn.textContent === 'More Info' ? 'Less Info' : 'More Info';
            tr2.style.display = tr2.style.display !== 'contents' ? 'contents' : 'none';
        })
        buyBtn.addEventListener('click', (e) => {
            let currP = Number(e.target.parentElement.parentElement.querySelector('td:nth-child(2)').textContent)
            totalP.textContent = (Number(totalP.textContent) + currP).toFixed(2);
            tr.remove();
            tr2.remove();
        })
    })
}

