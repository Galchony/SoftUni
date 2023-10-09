function solve() {
    let firstNameInput = document.getElementById('fname');
    let lastNameInput = document.getElementById('lname');
    let emailInput = document.getElementById('email');
    let birthInput = document.getElementById('birth');
    let positionInput = document.getElementById('position');
    let salaryInput = document.getElementById('salary');
    let tbody = document.getElementById('tbody');
    let sumInput = document.getElementById('sum');
    

    let addBtn = document.getElementById('add-worker');
    addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (firstNameInput.value === '' || lastNameInput.value === '' || emailInput.value === '' || birthInput.value === '' || positionInput.value === '' || salaryInput.value === '') {
            return;
        }
        let arr = [firstNameInput.value, lastNameInput.value, emailInput.value, birthInput.value, positionInput.value, salaryInput.value]
        let tr = document.createElement('tr');
        for (let i = 0; i < arr.length; i++) {
            let td = document.createElement('td');
            const text = arr[i];
            td.textContent = text;
            tr.appendChild(td);
        }
        let td = document.createElement('td');
        let firedBtn = document.createElement('button');
        firedBtn.classList.add('fired');
        firedBtn.textContent = 'Fired';
        let editBtn = document.createElement('button');
        editBtn.classList.add('edit');
        editBtn.textContent = 'Edit';

        td.appendChild(firedBtn);
        td.appendChild(editBtn);
        tr.appendChild(td);

        tbody.appendChild(tr);

        sumInput.textContent = (Number(sumInput.textContent) + Number(salaryInput.value)).toFixed(2);
        firstNameInput.value = '';
        lastNameInput.value = '';
        emailInput.value = '';
        birthInput.value = '';
        positionInput.value = '';
        salaryInput.value = '';

        firedBtn.addEventListener('click', (e) => {
            e.target.parentElement.parentElement.remove();
            let el = e.target.parentElement.parentElement.querySelector('td:nth-last-child(2)');
            sumInput.textContent = (Number(sumInput.textContent) - Number(el.textContent)).toFixed(2);
        })
        editBtn.addEventListener('click', (e) => {
            firstNameInput.value = e.target.parentElement.parentElement.querySelector('td:nth-child(1)').textContent;
            lastNameInput.value = e.target.parentElement.parentElement.querySelector('td:nth-child(2)').textContent;
            emailInput.value = e.target.parentElement.parentElement.querySelector('td:nth-child(3)').textContent;
            birthInput.value = e.target.parentElement.parentElement.querySelector('td:nth-child(4)').textContent;
            positionInput.value = e.target.parentElement.parentElement.querySelector('td:nth-child(5)').textContent;
            salaryInput.value = e.target.parentElement.parentElement.querySelector('td:nth-child(6)').textContent;
            let el = e.target.parentElement.parentElement.querySelector('td:nth-last-child(2)');
            sumInput.textContent = (Number(sumInput.textContent) - Number(el.textContent)).toFixed(2);
            e.target.parentElement.parentElement.remove();
        })
    })
}
solve()