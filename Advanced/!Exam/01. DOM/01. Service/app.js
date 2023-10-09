window.addEventListener('load', solve);

function solve() {
    let productInput = document.getElementById('type-product');
    let descriptionInput = document.getElementById('description');
    let nameInput = document.getElementById('client-name');
    let phoneInput = document.getElementById('client-phone');
    let section = document.getElementById('received-orders');
    let sectionCompleted = document.getElementById('completed-orders');

    let sendBtn = document.getElementsByTagName('button')[0];
    let clearBtn = document.getElementsByClassName('clear-btn')[0];

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (descriptionInput.value === '' || nameInput.value === '' || phoneInput.value === '') {
            return;
        }
        let div = document.createElement('div');
        div.classList.add('container');
        let h2 = document.createElement('h2');
        h2.textContent = `Product type for repair: ${productInput.value}`
        let h3 = document.createElement('h3');
        h3.textContent = `Client information: ${nameInput.value}, ${phoneInput.value}`
        let h4 = document.createElement('h4');
        h4.textContent = `Description of the problem: ${descriptionInput.value}`

        let startBtn = document.createElement('button');
        startBtn.classList.add('start-btn');
        startBtn.textContent = 'Start repair';
        let finishBtn = document.createElement('button');
        finishBtn.classList.add('finish-btn');
        finishBtn.textContent = 'Finish repair';
        finishBtn.disabled = true;

        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(startBtn);
        div.appendChild(finishBtn);

        section.appendChild(div);

        descriptionInput.value = ''
        nameInput.value = '';
        phoneInput.value = '';
        startBtn.addEventListener('click', () => {
            startBtn.disabled = true;
            finishBtn.disabled = false;
        })

        finishBtn.addEventListener('click', ()=>{
            startBtn.remove();
            finishBtn.remove();
            sectionCompleted.appendChild(div);
        })
    })
    clearBtn.addEventListener('click', ()=>{
        let divs = sectionCompleted.querySelectorAll('div .container');
        for (const div of divs) {
            div.remove();
        }
    })
}