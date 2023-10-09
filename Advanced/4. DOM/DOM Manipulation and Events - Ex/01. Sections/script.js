function create(words) {
   for (const el of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = el;
      p.style.display = 'none';
      div.appendChild(p);
      div.addEventListener('click', () => {
         p.style.display = 'inline';
      })
      let res = document.getElementById('content');
      res.appendChild(div);
   }
}