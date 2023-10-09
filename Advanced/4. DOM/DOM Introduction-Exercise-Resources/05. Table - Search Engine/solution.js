function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let inputElement = document.getElementById('searchField');
      let input = inputElement.value;
      let cellElements = document.querySelectorAll('tbody tr');
      let cellArr = Array.from(cellElements);
      for (const el of cellArr) {
         el.classList.remove('select');
         if (input.value !== '' && el.textContent.includes(input)) {
            el.className = 'select';
         }
      }
      inputElement.value = '';
   }
}