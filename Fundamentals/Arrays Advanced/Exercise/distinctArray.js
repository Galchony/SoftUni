function distinctArray(array) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        for (let j = i + 1; j < array.length; j++) {
            const secondElement = array[j];
            if (element === secondElement) {
                array.splice(j, 1);
                j--;
            }
        }
    }
    console.log(array.join(" "));
}

//distinctArray([1, 2, 3, 4]);
console.log("--------");
distinctArray([7, 8, 9, 7, 2, 3, 7, 7, 2]);