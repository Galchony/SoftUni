function addItem() {
    let inputElement = document.getElementById('newItemText');
    let inputText = inputElement.value;
    let liElement = document.createElement('li');
    liElement.textContent = inputText;
    let tableElement = document.getElementById('items');
    tableElement.appendChild(liElement);
}