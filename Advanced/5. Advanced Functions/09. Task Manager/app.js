function solve() {
    let taskInput = document.getElementById('task');
    let descriptionTextArea = document.getElementById('description');
    let dateInput = document.getElementById('date');
    let addBtn = document.getElementById('add');
    let sections = document.querySelectorAll('section');
    let divElement = sections[1].children[1];
    let div2Element = sections[2].children[1];
    let div3Element = sections[3].children[1];

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (taskInput.value === '' || descriptionTextArea.value === '' || dateInput.value === '') {
            return;
        }
        let articleElement = document.createElement('article');
        let h3El = document.createElement('h3');
        let p1El = document.createElement('p');
        let p2El = document.createElement('p');
        let divEl = document.createElement('div');

        h3El.textContent = taskInput.value;
        p1El.textContent = `Description: ${descriptionTextArea.value}`;
        p2El.textContent = `Due Date: ${dateInput.value}`;
        divEl.classList.add('flex');

        let startBtn = document.createElement('button');
        let deleteBtn = document.createElement('button');
        startBtn.textContent = 'Start';
        deleteBtn.textContent = 'Delete';
        startBtn.classList.add('green');
        deleteBtn.classList.add('red');
        divEl.appendChild(startBtn);
        divEl.appendChild(deleteBtn);

        articleElement.appendChild(h3El);
        articleElement.appendChild(p1El);
        articleElement.appendChild(p2El);
        articleElement.appendChild(divEl);
        divElement.appendChild(articleElement);

        taskInput.value = ''
        descriptionTextArea.value = ''
        dateInput.value = ''

        startBtn.addEventListener('click', (e) => {
            // e.preventDefault();
            startBtn.remove();
            deleteBtn.remove();
            let finishBtn = document.createElement('button');
            let deleteBtn2 = document.createElement('button');

            deleteBtn2.textContent = 'Delete';
            finishBtn.textContent = 'Finish';

            deleteBtn2.classList.add('red');
            finishBtn.classList.add('orange');

            divEl.appendChild(deleteBtn2);
            divEl.appendChild(finishBtn);

            div2Element.appendChild(articleElement);

            deleteBtn2.addEventListener('click', (e) => {
                div2Element.removeChild(articleElement);
            })
            finishBtn.addEventListener('click', (e) => {
              divEl.remove();
                div3Element.appendChild(articleElement);
            })
        });

        deleteBtn.addEventListener('click', (e) => {
            // e.preventDefault();
           articleElement.remove();

        });
    });

}