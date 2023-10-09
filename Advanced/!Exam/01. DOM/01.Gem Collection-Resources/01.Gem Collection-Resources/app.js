window.addEventListener("load", solve);

// function solve() {
//     let gemNameInput = document.getElementById('gem-name');
//     let typeInput = document.getElementById('type');
//     let html = {
//         colorInput: document.getElementById('color'),
//         caratsInput: document.getElementById('carats'),
//         priceInput: document.getElementById('price'),
//     }
//     let btn = document.getElementById('add-btn');
//     let ulPreview = document.getElementById('preview-list');
//     let ulCollection = document.getElementById('collection');
//     btn.addEventListener('click', func);

//     function func() {
//         if (gemNameInput.value === '' || html.colorInput.value === '' || html.caratsInput.value === '' || html.priceInput.value === '' || typeInput.value === '') {
//             return;
//         }
//         let arr = [];
//         let secArr = [];
//         let li = document.createElement('li');
//         li.classList.add('gem-info');
//         let article = document.createElement('article');
//         let h4 = document.createElement('h4');
//         h4.textContent = gemNameInput.value;
//         arr.push(gemNameInput.value);
//         secArr.push(gemNameInput.value);
//         article.appendChild(h4);
//         for (const key in html) {
//             let p = document.createElement('p');
//             let text = '';
//             if (key === 'priceInput') {
//                 text = `${html[key].placeholder} : ${html[key].value} $`;
//             } else {
//                 text = `${html[key].placeholder} : ${html[key].value}`;
//             }
//             p.textContent = text;
//             article.appendChild(p);
//             arr.push(html[key].value);
//             secArr.push(html[key].value);
//         }
//         let p = document.createElement('p');
//         let text = `Type : ${typeInput.value}`;
//         arr.push(typeInput.value);
//         secArr.push(typeInput.value);
//         p.textContent = text;
//         article.appendChild(p);
//         li.appendChild(article);
//         let saveBtn = document.createElement('button');
//         let editBtn = document.createElement('button');
//         let cancelBtn = document.createElement('button');
//         saveBtn.classList.add('save-btn');
//         editBtn.classList.add('edit-btn');
//         cancelBtn.classList.add('cancel-btn');
//         saveBtn.textContent = 'Save to Collection';
//         editBtn.textContent = 'Edit Information';
//         cancelBtn.textContent = 'Cancel';
//         li.appendChild(saveBtn);
//         li.appendChild(editBtn);
//         li.appendChild(cancelBtn);
//         ulPreview.appendChild(li);
//         gemNameInput.value = '';
//         Object.values(html).map(x => x.value = '');
//         typeInput.value = '';
//         btn.disabled = true;
//         saveBtn.addEventListener('click', saveFunc);
//         editBtn.addEventListener('click', editFunc);
//         cancelBtn.addEventListener('click', cancelFunc);

//         function saveFunc(e) {
//             let li2 = document.createElement('li');
//             let p2 = document.createElement('p');
//             p2.classList.add('collection-item');
//             p2.textContent = `${secArr[0]} - Color: ${secArr[1]}/ Carats: ${secArr[2]}/ Price: ${secArr[3]}$/ Type: ${secArr[4]}`;

//             li2.appendChild(p2);
//             ulCollection.appendChild(li2);

//             ulPreview.removeChild(li);
//             btn.disabled = false;
//         }
//         function editFunc(e) {
//             gemNameInput.value = arr[0];
//             html.colorInput.value = arr[1];
//             html.caratsInput.value = arr[2];
//             html.priceInput.value = arr[3];
//             typeInput.value = arr[4];
//             ulPreview.removeChild(li);
//             btn.disabled = false;
//         }
//         function cancelFunc(e) {
//             ulPreview.removeChild(li);
//             btn.disabled = false;
//         }
//     }
// }
function solve() {
    //(Gemstone Name, Color, Carats, Price, and Type) 
    let arr = [];
    let gemNameInput = document.getElementById('gem-name');
    let colorInput = document.getElementById('color');
    let caratsInput = document.getElementById('carats');
    let priceInput = document.getElementById('price');
    let typeInput = document.getElementById('type');
    let ulPrewiew = document.getElementById('preview-list');
    let ulCollection = document.getElementById('collection');

    let addBtn = document.getElementById('add-btn');

    addBtn.addEventListener('click', () => {
        if (gemNameInput.value === '' || colorInput.value === '' || caratsInput.value === '' || priceInput.value === '' || typeInput.value === '') {
            return
        }
        arr = [gemNameInput.value, colorInput.value, caratsInput.value, priceInput.value, typeInput.value]
        let li = document.createElement('li');
        li.classList.add('gem-info');
        let article = document.createElement('article');
        let h4 = document.createElement('h4');
        h4.textContent = gemNameInput.value;
        let p1 = document.createElement('p');
        p1.textContent = `Color: ${colorInput.value}`;
        let p2 = document.createElement('p');
        p2.textContent = `Carats: ${caratsInput.value}`;
        let p3 = document.createElement('p');
        p3.textContent = `Price: ${priceInput.value}$`;
        let p4 = document.createElement('p');
        p4.textContent = `Type: ${typeInput.value}`;


        let saveBtn = document.createElement('button');
        saveBtn.textContent = 'Save to Collection';
        saveBtn.classList.add('save-btn');

        let editBtn = document.createElement('button');
        editBtn.textContent = 'Edit Information';
        editBtn.classList.add('edit-btn');

        let cancelBtn = document.createElement('button');
        cancelBtn.textContent = 'Cancel';
        cancelBtn.classList.add('cancel-btn');


        article.appendChild(h4);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);
        article.appendChild(p4);

        li.appendChild(article);
        li.appendChild(saveBtn);
        li.appendChild(editBtn);
        li.appendChild(cancelBtn);

        ulPrewiew.appendChild(li);

        gemNameInput.value = '';
        colorInput.value = '';
        caratsInput.value = '';
        priceInput.value = '';
        typeInput.value = '';

        addBtn.disabled = true;

        editBtn.addEventListener('click', () => {
            addBtn.disabled = false;
            li.remove();

            gemNameInput.value = arr[0];
            colorInput.value = arr[1];
            caratsInput.value = arr[2];
            priceInput.value = arr[3];
            typeInput.value = arr[4];
        })
        saveBtn.addEventListener('click', () => {
            addBtn.disabled = false;
            li.remove();

            let li1 = document.createElement('li');
            let p6 = document.createElement('p');
            p6.classList.add('collection-item');
            p6.textContent = `${arr[0]} - Color: ${arr[1]}/ Carats: ${arr[2]}/ Price: ${arr[3]}$/ Type: ${arr[4]}`
            li1.appendChild(p6);
            ulCollection.appendChild(li1);

        })
        cancelBtn.addEventListener('click', () => {
            addBtn.disabled = false;
            li.remove();
        })
    })
}