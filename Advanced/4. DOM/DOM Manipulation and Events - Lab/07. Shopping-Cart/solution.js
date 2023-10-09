function solve() {
   let addBtns = Array.from(document.querySelectorAll('button.add-product'));
   let textarea = document.querySelectorAll('textarea')[0];
   let checkBtn = document.querySelector('button.checkout');
   let list = new Set();
   let totalPrice = 0;
   for (const btn of addBtns) {
      btn.addEventListener('click', (event) => {
         let name = btn.parentElement.parentElement.getElementsByClassName('product-title')[0].textContent;
         let money = btn.parentElement.parentElement.getElementsByClassName('product-line-price')[0].textContent;
         textarea.textContent += `Added ${name} for ${Number(money).toFixed(2)} to the cart.\n`;
         totalPrice += Number(money);
         list.add(name);
      })
   }
   checkBtn.addEventListener('click', () => {
      textarea.textContent += `You bought ${(Array.from(list)).join(', ')} for ${(totalPrice).toFixed(2)}.`
      checkBtn.disabled = true;
      addBtns.map(x => x.disabled = true)
   })
}