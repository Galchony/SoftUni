function solve() {
    let recipientInput = document.getElementById('recipientName');
    let titleInput = document.getElementById('title');
    let messageTextarea = document.getElementById('message');

    let ul = document.getElementById('list');
    let ulSent = document.getElementsByClassName('sent-list')[0];
    let ulDelete = document.getElementsByClassName('delete-list')[0];

    let addBtn = document.getElementById('add');
    let resetBtn = document.getElementById('reset');

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (recipientInput.value === '' || titleInput.value === '' || messageTextarea.value === '') {
            return;
        }
        let li = createEl('li');
        let h41 = createEl('h4', `Title: ${titleInput.value}`);
        let h42 = createEl('h4', `Recipient Name: ${recipientInput.value}`);
        let span = createEl('span', messageTextarea.value);
        let div = createEl('div', undefined, undefined, 'list-action');
        let sendBtn = createEl('button', 'Send', undefined, 'send');
        let deleteBtn = createEl('button', 'Delete', undefined, 'delete');
        sendBtn.type = 'submit';
        deleteBtn.type = 'submit';

        div.appendChild(sendBtn);
        div.appendChild(deleteBtn);

        li.appendChild(h41);
        li.appendChild(h42);
        li.appendChild(span);
        li.appendChild(div);

        ul.appendChild(li);

        recipientInput.value = '';
        titleInput.value = '';
        messageTextarea.value = '';

        sendBtn.addEventListener('click', () => {
            li.remove();
            let li2 = createEl('li');
            let span3 = createEl('span', `To: ${h42.textContent.substring(16)}`);
            let span4 = createEl('span', `${h41.textContent}`);
            let div2 = createEl('div', undefined, 'btn');
            let deleteBtn2 = createEl('button', 'Delete', 'delete');
            deleteBtn2.type = 'submit';

            div2.appendChild(deleteBtn2);

            li2.appendChild(span3);
            li2.appendChild(span4);
            li2.appendChild(div2);
            ulSent.appendChild(li2);

            deleteBtn2.addEventListener('click', () => {
                li2.remove();
                let li3 = createEl('li');
                let span5 = createEl('span', `To: ${h42.textContent.substring(16)}`);
                let span6 = createEl('span', `${h41.textContent}`);

                li3.appendChild(span5);
                li3.appendChild(span6);

                ulDelete.appendChild(li3);
            });

        })

        deleteBtn.addEventListener('click', () => {
            li.remove();
            let li3 = createEl('li');
            let span5 = createEl('span', `To: ${h42.textContent.substring(16)}`);
            let span6 = createEl('span', `${h41.textContent}`);

            li3.appendChild(span5);
            li3.appendChild(span6);

            ulDelete.appendChild(li3);
        })
    })

    resetBtn.addEventListener('click', (e) => {
        e.preventDefault();
        recipientInput.value = '';
        titleInput.value = '';
        messageTextarea.value = '';
    })

    function createEl(type, text, classType, id) {
        let element = document.createElement(type);
        if (text !== undefined) {
            element.textContent = text;
        }
        if (classType !== undefined) {
            element.classList.add(classType);
        }
        if (id !== undefined) {
            element.id = id;
        }
        return element;
    }

}
solve()