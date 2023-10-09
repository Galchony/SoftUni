function solve() {
   //author, title, category and content
   let arr = [];
   let authorInput = document.getElementById('creator');
   let titleInput = document.getElementById('title');
   let categoryInput = document.getElementById('category');
   let contentInput = document.getElementById('content');
   let sectionMainInput = document.querySelector('main section');
   let sectionArchiveInput = document.querySelector('section.archive-section');

   let createBtn = document.getElementsByClassName('btn create')[0];
   createBtn.addEventListener('click', (e) => {
      e.preventDefault();
      let article = document.createElement('article');

      let h1 = document.createElement('h1');
      h1.textContent = titleInput.value;

      let p1 = document.createElement('p');
      let srt1 = document.createElement('strong');
      p1.textContent = `Category:`;
      srt1.textContent = categoryInput.value;
      p1.appendChild(srt1);

      let p2 = document.createElement('p');
      let srt2 = document.createElement('strong');
      p2.textContent = `Creator:`;
      srt2.textContent = authorInput.value;
      p2.appendChild(srt2);

      let p3 = document.createElement('p');
      p3.textContent = contentInput.value;

      let div = document.createElement('div');
      div.classList.add('buttons');
      let deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.classList.add('btn', 'delete');
      let archiveBtn = document.createElement('button');
      archiveBtn.textContent = 'Archive';
      archiveBtn.classList.add('btn', 'archive');

      div.appendChild(deleteBtn);
      div.appendChild(archiveBtn);

      article.appendChild(h1);
      article.appendChild(p1);
      article.appendChild(p2);
      article.appendChild(p3);
      article.appendChild(div);

      sectionMainInput.appendChild(article);

      authorInput.value = '';
      titleInput.value = '';
      categoryInput.value = '';
      contentInput.value = '';

      deleteBtn.addEventListener('click', () => {
         article.remove();
      })
      archiveBtn.addEventListener('click', () => {
         article.remove();
         arr.push(h1.textContent);

         let sorted = arr.sort((a, b) => a.localeCompare(b));
         sectionArchiveInput.innerHTML = '';
         let h2 = document.createElement('h2');
         h2.textContent = 'Archive';
         sectionArchiveInput.appendChild(h2);
         let ol = document.createElement('ol');
         for (const el of sorted) {
            let li = document.createElement('li');
            li.textContent = el;
            ol.appendChild(li);
         }
         sectionArchiveInput.appendChild(ol);
      })


   })
}

