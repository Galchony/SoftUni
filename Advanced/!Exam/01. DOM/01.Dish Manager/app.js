window.addEventListener("load", solve);

function solve() {
  let firstNameInput = document.getElementById('first-name');
  let lastNameInput = document.getElementById('last-name');
  let ageInput = document.getElementById('age');
  let genderInput = document.getElementById('genderSelect');
  let descriptionTextarea = document.getElementById('task');
  let ulInPrograss = document.getElementById('in-progress');
  let ulFinished = document.getElementById('finished');
  let counter = document.getElementById('progress-count');
  let clearBtn = document.getElementById('clear-btn');

  let submitBtn = document.getElementById('form-btn');
  submitBtn.addEventListener('click', () => {
    if (firstNameInput.value === '' || lastNameInput.value === '' || ageInput.value === '' || genderInput.value === '' || descriptionTextarea.value === '') {
      return;
    }
    let li = document.createElement('li');
    li.classList.add('each-line');

    let article = document.createElement('article');
    let h4 = document.createElement('h4');
    h4.textContent = firstNameInput.value + ' ' + lastNameInput.value;
    let p1 = document.createElement('p');
    p1.textContent = genderInput.value + ', ' + ageInput.value;
    let p2 = document.createElement('p');
    p2.textContent = `Dish description: ${descriptionTextarea.value}`;

    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);
    li.appendChild(article);

    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    let completeBtn = document.createElement('button');
    completeBtn.textContent = 'Mark as complete';
    completeBtn.classList.add('complete-btn');

    li.appendChild(editBtn);
    li.appendChild(completeBtn);
    ulInPrograss.appendChild(li);

    firstNameInput.value = '';
    lastNameInput.value = '';
    ageInput.value = '';
    genderInput.value = '';
    descriptionTextarea.value = '';

    counter.textContent++;
    editBtn.addEventListener('click', () => {
      [firstNameInput.value, lastNameInput.value] = h4.textContent.split(' ');
      [ genderInput.value,ageInput.value] = p1.textContent.split(', ');
      descriptionTextarea.value = p2.textContent.substring(18);

      li.remove();
      counter.textContent--;
    });
    completeBtn.addEventListener('click', () => {
      editBtn.remove();
      completeBtn.remove();
      ulFinished.appendChild(li);
      counter.textContent--;
    });
  })
  clearBtn.addEventListener('click', () => {
    ulFinished.innerHTML = '';
  })

}
