window.addEventListener('load', solve);

function solve() {

    let arr = [];
    let firstNameInput = document.getElementById('first-name');
    let lastNameInput = document.getElementById('last-name');
    let dateInInput = document.getElementById('date-in');
    let dateOutInput = document.getElementById('date-out');
    let countOfPeopleInput = document.getElementById('people-count');

    let ulInfo = document.getElementsByClassName('info-list')[0];
    let ulConfirm = document.getElementsByClassName('confirm-list')[0];
    let h1 = document.getElementById('verification');

    let nextBtn = document.getElementById('next-btn');
    let editBtn = document.createElement('button');
    let contBtn = document.createElement('button');
    let confirmBtn = document.createElement('button');
    let cancelBtn = document.createElement('button');

    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (firstNameInput.value === '' || lastNameInput.value === '' || dateInInput.value === "" || dateOutInput.value === "" || countOfPeopleInput.value === "" || dateInInput.value > dateOutInput.value) {
            return;
        }
        let li = document.createElement('li');
        let article = document.createElement('article');
        li.classList.add('reservation-content');
        let h3 = document.createElement('h3');
        h3.textContent = `Name: ${firstNameInput.value} ${lastNameInput.value}`;
        let p1 = document.createElement('p');
        p1.textContent = `From date: ${dateInInput.value}`;
        let p2 = document.createElement('p');
        p2.textContent = `To date: ${dateOutInput.value}`;
        let p3 = document.createElement('p');
        p3.textContent = `For ${countOfPeopleInput.value} people`;

        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);

        li.appendChild(article);

        editBtn.textContent = "Edit";
        contBtn.textContent = "Continue";
        editBtn.classList.add('edit-btn');
        contBtn.classList.add('continue-btn');

        li.appendChild(editBtn);
        li.appendChild(contBtn);

        ulInfo.appendChild(li);

        arr = [firstNameInput.value, lastNameInput.value, dateInInput.value, dateOutInput.value, countOfPeopleInput.value];

        firstNameInput.value = '';
        lastNameInput.value = '';
        dateInInput.value = '';
        dateOutInput.value = '';
        countOfPeopleInput.value = '';

        nextBtn.disabled = true;
        editBtn.disabled = false;
        contBtn.disabled = false;

    })
    editBtn.addEventListener('click', (e) => {
        let li = document.getElementsByClassName('reservation-content')[0];
        li.remove();
        firstNameInput.value = arr[0];
        lastNameInput.value = arr[1];
        dateInInput.value = arr[2];
        dateOutInput.value = arr[3];
        countOfPeopleInput.value = arr[4];

        nextBtn.disabled = false;
        editBtn.disabled = true;
        contBtn.disabled = true;

    })

    contBtn.addEventListener('click', (e) => {
        let li = document.getElementsByClassName('reservation-content')[0];
        confirmBtn.classList.add('confirm-btn');
        cancelBtn.classList.add('cancel-btn');
        confirmBtn.textContent = "Confirm";
        cancelBtn.textContent = "Cancel";
        editBtn.remove();
        contBtn.remove();
        li.appendChild(confirmBtn);
        li.appendChild(cancelBtn);
        ulConfirm.appendChild(li);

    })
    confirmBtn.addEventListener('click', () => {
        let li = document.getElementsByClassName('reservation-content')[0];
        ulConfirm.removeChild(li);
        h1.className = "";
        h1.classList.add('reservation-confirmed');
        h1.textContent = 'Confirmed.';
        nextBtn.disabled = false;
    })

    cancelBtn.addEventListener('click', () => {
        let li = document.getElementsByClassName('reservation-content')[0];
        ulConfirm.removeChild(li);
        h1.className = "";
        h1.classList.add('reservation-cancelled');
        h1.textContent = 'Cancelled.';
        nextBtn.disabled = false;

    })

}






