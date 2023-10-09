window.addEventListener('load', solve);

function solve() {
    let firstNameInput = document.getElementById('first-name');
    let lastNameInput = document.getElementById('last-name');
    let countOfPeopleInput = document.getElementById('people-count');
    let dateInput = document.getElementById('from-date');
    let countOfDaysInput = document.getElementById('days-count');
    let nextBtn = document.getElementById('next-btn');
    let previewUl = document.querySelector('.ticket-info-list');
    let confirmUl = document.querySelector('.confirm-ticket');
    let divElement = document.querySelector('#main');
    let body = document.querySelector('body');

    nextBtn.addEventListener('click', func);

    function func(e) {
        e.preventDefault();
        if (firstNameInput.value === ''
            || lastNameInput.value === ''
            || countOfPeopleInput.value === ''
            || dateInput.value === ''
            || countOfDaysInput.value === '') {
            return;
        }
        let li = document.createElement('li');
        li.classList.add('ticket');

        let article = document.createElement('article');

        let h3 = document.createElement('h3');
        h3.textContent = `Name: ${firstNameInput.value} ${lastNameInput.value}`;

        let p1 = document.createElement('p');
        p1.textContent = `From date: ${dateInput.value}`;

        let p2 = document.createElement('p');
        p2.textContent = `For ${countOfDaysInput.value} days`;

        let p3 = document.createElement('p');
        p3.textContent = `For ${countOfPeopleInput.value} people`;

        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);

        li.appendChild(article);

        let editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit';
        let continueBtn = document.createElement('button');
        continueBtn.classList.add('continue-btn');
        continueBtn.textContent = 'Continue';

        li.appendChild(editBtn);
        li.appendChild(continueBtn);
        previewUl.appendChild(li);

        let editFirstNameInput = firstNameInput.value;
        let editLastNameInput = lastNameInput.value;
        let editCountOfPeopleInput = countOfPeopleInput.value;
        let editDateInput = dateInput.value;
        let editCountOfDaysInput = countOfDaysInput.value;

        firstNameInput.value = '';
        lastNameInput.value = '';
        countOfPeopleInput.value = '';
        dateInput.value = '';
        countOfDaysInput.value = '';

        nextBtn.disabled = true;

        editBtn.addEventListener('click', editFunc);
        function editFunc(e) {
            firstNameInput.value = editFirstNameInput;
            lastNameInput.value = editLastNameInput;
            countOfPeopleInput.value = editCountOfPeopleInput;
            dateInput.value = editDateInput;
            countOfDaysInput.value = editCountOfDaysInput;
            li.remove();
            nextBtn.disabled = false;
        }

        continueBtn.addEventListener('click', continueFunc);
        function continueFunc(e) {
            li.classList.remove('ticket');
            li.classList.add('ticket-content');

            editBtn.remove();
            continueBtn.remove();
            let confirmBtn = document.createElement('button');
            confirmBtn.classList.add('confirm-btn');
            confirmBtn.textContent = 'Confirm';
            let cancelBtn = document.createElement('button');
            cancelBtn.classList.add('cancel-btn');
            cancelBtn.textContent = 'Cancel';

            li.appendChild(confirmBtn);
            li.appendChild(cancelBtn);
            confirmUl.appendChild(li);

            confirmBtn.addEventListener('click', confirmFunc);
            function confirmFunc() {
                divElement.remove();
                let h1Element = document.createElement('h1');
                h1Element.id = 'thank-you';
                h1Element.textContent = 'Thank you, have a nice day!';
                let backBtn = document.createElement('h1');
                backBtn.id = 'back-btn';
                backBtn.textContent = 'Back';
                body.appendChild(h1Element);
                body.appendChild(backBtn);
                backBtn.addEventListener('click', function(){location.reload()});

            }
            cancelBtn.addEventListener('click', cancelFunc);
            function cancelFunc() {
                li.remove();
                nextBtn.disabled = false;
            }
        }
    }
}




