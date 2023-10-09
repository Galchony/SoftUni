let a = document.getElementById('a');

let li = document.createElement('li');
li.textContent = '';
li.classList.add('');

let p = document.createElement('p');

li.appendChild(p);
p.remove();

btn.addEventListener('click', (e) => {
    e.preventDefault();
})
btn.disabled = true;

