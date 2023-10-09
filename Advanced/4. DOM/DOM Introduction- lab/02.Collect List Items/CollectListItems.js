function extractText() {
    // let list = Array.from(document.querySelectorAll("#items li"));
    // let result = "";
    // for (const el of list) {
    //     result += `${el.textContent}\n`
    // }
    // let element = document.getElementById("result");
    // element.textContent = result.trim();

    let ulElement = document.getElementById('items');
    let liElements = Array.from(ulElement.children);
    let textAreaElement = document.getElementById('result');
    textAreaElement.value = liElements.map(x=>x.textContent).join('\n');

}