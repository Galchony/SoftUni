function addItem() {
    let textEl = document.getElementById('newItemText');
    let valueEl = document.getElementById('newItemValue');
    let selectEl = document.getElementById('menu');

    let o = document.createElement('option');
    o.textContent = textEl.value;
    o.value = valueEl.value;
    selectEl.appendChild(o);

    textEl.value = '';
    valueEl.value = '';
}