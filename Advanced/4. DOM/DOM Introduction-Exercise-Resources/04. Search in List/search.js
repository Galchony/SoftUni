function search() {
   let counter = 0;
   let inputElement = document.getElementById('searchText');
   let input = inputElement.value;
   let listOfTownsElement = document.querySelectorAll('#towns li');
   let townsArr = Array.from(listOfTownsElement);
   let resultElement = document.getElementById('result');
   for (const el of townsArr) {
      if (el.textContent.includes(input)) {
         counter++;
         el.style.fontWeight = 'bold';
         el.style.textDecoration = 'underline';
      }
      
   }
   resultElement.textContent = `${counter} matches found`;
}
