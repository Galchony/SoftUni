window.addEventListener('load', solve);

function solve() {
        let arr = [];
        let modelInput = document.getElementById('car-model');
        let yearInput = document.getElementById('car-year');
        let partNameInput = document.getElementById('part-name');
        let partNumberInput = document.getElementById('part-number');
        let conditionInput = document.getElementById('condition');

        let ulInfo = document.getElementsByClassName('info-list')[0];
        let ulConfirm = document.getElementsByClassName('confirm-list')[0];

        let img = document.getElementById('complete-img');
        let complTP = document.getElementById('complete-text');

        let nextBtn = document.getElementById('next-btn');
        nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if (modelInput.value === '' || yearInput.value === '' || partNameInput.value === '' || partNumberInput.value === '' || conditionInput.value === '' || yearInput.value < 1980 || yearInput.value > 2023) {
                        return;
                }

                arr = [modelInput.value, yearInput.value, partNameInput.value, partNumberInput.value, conditionInput.value];

                img.style.visibility = 'hidden';
                complTP.textContent = '';

                let li = document.createElement('li');
                li.classList.add('part-content');
                let article = document.createElement('article');
                let p1 = document.createElement('p');
                p1.textContent = `Car Model: ${modelInput.value}`;
                let p2 = document.createElement('p');
                p2.textContent = `Car Year: ${yearInput.value}`;
                let p3 = document.createElement('p');
                p3.textContent = `Part Name: ${partNameInput.value}`;
                let p4 = document.createElement('p');
                p4.textContent = `Part Number: ${partNumberInput.value}`;
                let p5 = document.createElement('p');
                p5.textContent = `Condition: ${conditionInput.value}`;

                let editBtn = document.createElement('button');
                editBtn.textContent = 'Edit';
                editBtn.classList.add('edit-btn');

                let contBtn = document.createElement('button');
                contBtn.textContent = 'Continue';
                contBtn.classList.add('continue-btn');

                article.appendChild(p1);
                article.appendChild(p2);
                article.appendChild(p3);
                article.appendChild(p4);
                article.appendChild(p5);

                li.appendChild(article);
                li.appendChild(editBtn);
                li.appendChild(contBtn);

                ulInfo.appendChild(li);

                modelInput.value = '';
                yearInput.value = '';
                partNameInput.value = '';
                partNumberInput.value = '';
                conditionInput.value = '';

                nextBtn.disabled = true;

                editBtn.addEventListener('click', (e) => {
                        nextBtn.disabled = false;

                        modelInput.value = arr[0];
                        yearInput.value = arr[1];
                        partNameInput.value = arr[2];
                        partNumberInput.value = arr[3];
                        conditionInput.value = arr[4];


                        li.remove();
                })
                contBtn.addEventListener('click', (e) => {
                        editBtn.remove();
                        contBtn.remove();

                        let confirmBtn = document.createElement('button');
                        confirmBtn.textContent = 'Confirm';
                        confirmBtn.classList.add('confirm-btn');

                        let cancelBtn = document.createElement('button');
                        cancelBtn.textContent = 'Cancel';
                        cancelBtn.classList.add('cancel-btn');

                        li.appendChild(confirmBtn);
                        li.appendChild(cancelBtn);

                        ulConfirm.appendChild(li);

                        confirmBtn.addEventListener('click', () => {
                                nextBtn.disabled = false;
                                li.remove();
                                img.style.visibility = 'visible';
                                complTP.textContent = 'Part is Ordered!';

                        })

                        cancelBtn.addEventListener('click', () => {
                                nextBtn.disabled = false;
                                li.remove();
                        })
                })
        })
}




