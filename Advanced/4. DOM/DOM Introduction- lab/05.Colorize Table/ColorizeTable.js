function colorize() {

    // let arr = document.getElementsByTagName('tr');
    // // console.log(arr.forEach(x=>console.log(x.textContent)));
    // for (let i = 0; i < arr.length; i++) {
    //     if (i % 2 !== 0) {
    //         arr[i].style.backgroundColor = 'teal';
    //     }
    // }
    let rowElement = document.querySelector('body table tbody').children;
    let rowArr = Array.from(rowElement);
    for (let i = 0; i < rowArr.length; i++) {
        if (i % 2 !== 0) {
            rowArr[i].style.backgroundColor = 'teal';
        }

    }
}