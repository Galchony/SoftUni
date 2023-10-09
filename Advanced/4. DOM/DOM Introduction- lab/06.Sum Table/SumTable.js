function sumTable() {

    // let costsElement = document.querySelectorAll('table>tbody>tr>td:last-child');
    // let arr = Array.from(costsElement);
    // let sum = arr.pop();
    // sum.textContent = arr.reduce((a, v) => a + Number(v.textContent), 0);

    let arr = Array.from(document.querySelectorAll('tbody tr td:nth-child(2)'))
    let sum = arr.pop();
    sum.textContent = arr.reduce((a, v) => a + Number(v.textContent), 0);

}