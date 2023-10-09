function generateReport() {
    let colElement = Array.from(document.querySelectorAll('thead tr th input'));
    let rowElement = document.querySelectorAll('tbody tr');
    let arr = [];
    let obj = {};
    let newObj = {};


    for (const row of rowElement) {
        for (const el of colElement) {
            if (el.checked === true) {
                let pa = el.parentNode;
                let key = (pa.textContent).toLowerCase().trim();
                let n = pa.cellIndex;
                let value = row.children[n].textContent;
                obj[key]= value;
                newObj = JSON.parse(JSON.stringify(obj));
            }
        }
        arr.push(newObj);
    }

    let text = JSON.stringify(arr,);
    let outputElement = document.getElementById('output');
    outputElement.value = text;
}