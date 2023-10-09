window.addEventListener("load", solve);

function solve() {
  let arr = [];
  let firstNameInput = document.getElementById('first-name');
  let lastNameInput = document.getElementById('last-name');
  let ageInput = document.getElementById('age');
  let storyTitleInput = document.getElementById('story-title');
  let genreInput = document.getElementById('genre');
  let storyTextarea = document.getElementById('story');
  let ul = document.getElementById('preview-list');
  let div = document.getElementById('main');

  let publishBtn = document.getElementById('form-btn');
  publishBtn.addEventListener('click', (e) => {
    if (firstNameInput.value === '' || lastNameInput.value === '' || ageInput.value === '' || storyTitleInput.value === '' || genreInput.value === '' || storyTextarea.value === '') {
      return;
    }
    arr = [firstNameInput.value, lastNameInput.value, ageInput.value, storyTitleInput.value, genreInput.value, storyTextarea.value];
    let li = document.createElement('li');
    li.classList.add('story-info');
    let article = document.createElement('article');
    let h4 = document.createElement('h4');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');

    h4.textContent = `Name: ${firstNameInput.value} ${lastNameInput.value}`;
    p1.textContent = `Age: ${ageInput.value}`;
    p2.textContent = `Title: ${storyTitleInput.value}`;
    p3.textContent = `Genre: ${genreInput.value}`;
    p4.textContent = `${storyTextarea.value}`;

    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    article.appendChild(p4);

    let saveBtn = document.createElement('button');
    let editBtn = document.createElement('button');
    let deleteBtn = document.createElement('button');
    saveBtn.classList.add('save-btn');
    editBtn.classList.add('edit-btn');
    deleteBtn.classList.add('delete-btn');
    saveBtn.textContent = 'Save Story';
    editBtn.textContent = 'Edit Story';
    deleteBtn.textContent = 'Delete Story';

    li.appendChild(article);
    li.appendChild(saveBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    ul.appendChild(li);

    firstNameInput.value = '';
    lastNameInput.value = '';
    ageInput.value = '';
    storyTitleInput.value = '';
    genreInput.value = '';
    storyTextarea.value = '';

    publishBtn.disabled = true;
    saveBtn.disabled = false;
    editBtn.disabled = false;
    deleteBtn.disabled = false;

    saveBtn.addEventListener('click', () => {
      div.innerHTML = '';
      let h1 = document.createElement('h1');
      h1.textContent = 'Your scary story is saved!';
      div.appendChild(h1);
    })
    editBtn.addEventListener('click', () => {
      let li = document.getElementsByClassName('story-info')[0];
      li.remove();
      firstNameInput.value = arr[0];
      lastNameInput.value = arr[1];
      ageInput.value = arr[2];
      storyTitleInput.value = arr[3];
      genreInput.value = arr[4];
      storyTextarea.value = arr[5];

      publishBtn.disabled = false;
      saveBtn.disabled = true;
      editBtn.disabled = true;
      deleteBtn.disabled = true;
    })
    deleteBtn.addEventListener('click', () => {
      let li = document.getElementsByClassName('story-info')[0];
      li.remove();
      publishBtn.disabled = false;

    })
  })
}
