function palindromeIntegers(array) {
    for (let index = 0; index < array.length; index++) {
        const element = String(array[index]);
        let newElement = "";
        for (let j = element.length - 1; j >= 0; j--) {
            let char = element[j];
            newElement += char;
        }
        if (newElement === element){
            console.log(true);
        } else {
            console.log(false);
        }
    }
}
palindromeIntegers([123, 323, 421, 121])