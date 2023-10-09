function solve() {
  let textElement = document.getElementById('text');
  let textArr = textElement.value.split(' ');
  let conventionElement = document.getElementById('naming-convention');
  let convention = conventionElement.value;
  let result = '';
  if (convention === 'Camel Case') {
    result += textArr[0].toLowerCase();
    for (let i = 1; i < textArr.length; i++) {
      let word = textArr[i][0].toUpperCase() + textArr[i].slice(1).toLowerCase();
      result += word;
    }
  } else if (convention === 'Pascal Case') {
    for (let i = 0; i < textArr.length; i++) {
      let word = textArr[i][0].toUpperCase() + textArr[i].slice(1).toLowerCase();
      result += word;
    }
  } else {
    result += 'Error!'
  }
  let resultElement = document.getElementById('result');
  resultElement.textContent = result;
}