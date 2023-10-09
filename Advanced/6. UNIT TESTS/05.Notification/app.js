function notify(message) {
  let divElement = document.getElementById('notification');
  divElement.textContent = message 
  divElement.style.display = 'block';

  divElement.addEventListener('click', func);

  function func () {
    divElement.style.display = 'none';
  }

}