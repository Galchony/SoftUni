function solve() {
  // let input = document.getElementById('input').value;
  // let arr = input.split('.').filter(x => x !== "");
  // let outputElement = document.getElementById('output');

  // while (arr.length > 0) {
  //   let text = arr.splice(0, 3).join('. ') + '.';
  //   let pElement = document.createElement('p');
  //   pElement.textContent = text;
  //   outputElement.appendChild(pElement);
  // }
  let textAreaElement = document.querySelector('#input');
  let text = textAreaElement.value;
  let textArr = text.split('.').filter(x => x !== "").map(x => (x + '.'));
  let outputDiv = document.getElementById('output');
   while (textArr.length > 0) {
    let newT = textArr.splice(0, 3);
    let p = document.createElement('p');
    p.textContent = newT.join('');
    outputDiv.appendChild(p);
  }
}