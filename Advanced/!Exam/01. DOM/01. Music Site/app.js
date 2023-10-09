window.addEventListener('load', solve);

function solve() {

    let genreInput = document.getElementById('genre');
    let nameInput = document.getElementById('name');
    let authorInput = document.getElementById('author');
    let dateInput = document.getElementById('date');
    let divHitsCont = document.getElementsByClassName('all-hits-container')[0];
    let divSaveCont = document.getElementsByClassName('saved-container')[0];
    let likesInput = document.querySelector('#total-likes p');
    let totalLikes = 0;

    let addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (genreInput.value === '' || nameInput.value === '' || authorInput.value === '' || dateInput.value === '') {
            return;
        }
        let div = document.createElement('div');
        div.classList.add('hits-info');
        let img = document.createElement('img');
        img.src = "./static/img/img.png";
        let h21 = document.createElement('h2');
        h21.textContent = `Genre: ${genreInput.value}`;
        let h22 = document.createElement('h2');
        h22.textContent = `Name: ${nameInput.value}`;
        let h23 = document.createElement('h2');
        h23.textContent = `Author: ${authorInput.value}`;
        let h3 = document.createElement('h3');
        h3.textContent = `Date: ${dateInput.value}`;

        let saveBtn = document.createElement('button');
        saveBtn.textContent = 'Save song';
        saveBtn.classList.add('save-btn');
        let likeBtn = document.createElement('button');
        likeBtn.textContent = 'Like song';
        likeBtn.classList.add('like-btn');
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');

        div.appendChild(img);
        div.appendChild(h21);
        div.appendChild(h22);
        div.appendChild(h23);
        div.appendChild(h3);
        div.appendChild(saveBtn);
        div.appendChild(likeBtn);
        div.appendChild(deleteBtn);

        divHitsCont.appendChild(div);

        genreInput.value = '';
        nameInput.value = '';
        authorInput.value = '';
        dateInput.value = '';

        saveBtn.addEventListener('click', () => {
            saveBtn.remove();
            likeBtn.remove();
            divSaveCont.appendChild(div);
        })
        likeBtn.addEventListener('click', () => {
            totalLikes = Number(likesInput.textContent.substring(13));
            totalLikes++;
            likesInput.textContent = `Total Likes: ${totalLikes}`;
            likeBtn.disabled = true;
        })
        deleteBtn.addEventListener('click', () => {
            div.remove();
        })
    })
}