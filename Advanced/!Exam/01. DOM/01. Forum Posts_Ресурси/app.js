window.addEventListener("load", solve);

function solve() {
  let titleInput = document.getElementById('post-title');
  let categoryInput = document.getElementById('post-category');
  let contentTextarea = document.getElementById('post-content');
  let ul = document.getElementById('review-list');
  let ulPublished = document.getElementById('published-list');
  let clearBtn = document.getElementById('clear-btn');

  let publishBtn = document.getElementById('publish-btn');
  publishBtn.addEventListener('click', () => {
    if (titleInput.value === '' || categoryInput.value === '' || contentTextarea.value === '') {
      return;
    }
    let li = document.createElement('li');
    li.classList.add('rpost');
    let article = document.createElement('article');
    let h4 = document.createElement('h4');
    h4.textContent = titleInput.value;
    let p1 = document.createElement('p');
    p1.textContent = `Category: ${categoryInput.value}`;
    let p2 = document.createElement('p');
    p2.textContent = `Content: ${contentTextarea.value}`;

    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);

    let editBtn = document.createElement('btn');
    editBtn.classList.add('action-btn', 'edit');
    editBtn.textContent = 'Edit';
    let approveBtn = document.createElement('btn');
    approveBtn.classList.add('action-btn', 'approve');
    approveBtn.textContent = 'Approve';

    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(approveBtn);

    ul.appendChild(li);

    titleInput.value = '';
    categoryInput.value = '';
    contentTextarea.value = '';

    editBtn.addEventListener('click', () => {
      li.remove();
      titleInput.value = h4.textContent;
      categoryInput.value = p1.textContent.substring(10);
      contentTextarea.value = p2.textContent.substring(9);
    })
    approveBtn.addEventListener('click', () => {
      li.remove()
      editBtn.remove();
      approveBtn.remove();
      ulPublished.appendChild(li);
    })
  })
  clearBtn.addEventListener('click', () => {
    Array.from(ulPublished.children ).forEach(x=>x.remove());
  })
}
