function addItem() {
    let ul = document.getElementById('items');
    let inputEl = document.getElementById('newItemText');
    let input = inputEl.value;
    if (input === '') {
        return;
    }
    let li = document.createElement('li');
    li.textContent = input;
    let a = document.createElement('a');
    a.href = "#";
    a.textContent = '[Delete]';
    a.addEventListener('click', deleteItem);

    li.appendChild(a);
    ul.appendChild(li);

    function deleteItem(event) {
        event.target.parentElement.remove(event.target);
    }
    inputEl.value = '';
}