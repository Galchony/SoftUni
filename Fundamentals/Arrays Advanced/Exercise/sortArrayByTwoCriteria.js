function sortArrayByTwoCriteria(array) {
    array.sort();
    array.sort((x, y) => x.length - y.length);
    for (const element of array) {
        console.log(element);
    }
}
sortArrayByTwoCriteria(['alpha', 'beta', 'gamma']);