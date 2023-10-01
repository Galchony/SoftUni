function commonElements(arr1, arr2) {
    for (const el of arr1) {
        for (const el2 of arr2) {
            if (el === el2) {
                console.log(el);
            }
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],['Petar', 10, 'hey', 4, 'hello', '2']);
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],['s', 'o', 'c', 'i', 'a', 'l']);
