function sortAnArrayByTwoCriteria(arr) {
    console.log(arr.sort((a, b) => {
        if (a.length - b.length === 0) {
            return a.localeCompare(b);
        }
        return a.length - b.length;

    }).join('\n'));
}

console.log(sortAnArrayByTwoCriteria(['gamma', 'alpha', 'beta']));