function extract(content) {
    // let text = document.querySelector('#content').textContent;
    // let pattern = new RegExp(/\((?<name>[A-Za-z ]+)\)/, 'g');
    // let obj = Array.from(text.matchAll(pattern));
    // let result = [];
    // for (const arr of obj) {
    //     result.push(arr.groups.name);
    // }
    // content = result.join('; ');
    // return content;

    let text = document.getElementById(content).textContent;
    let pattern = /\(([^()]+)\)/g;
    let result = Array.from(text.matchAll(pattern)).map(x=>x[1]);
    return result.join('; ');
  

}