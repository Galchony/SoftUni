function nXnMatrix(num) {
    for (let row = 0; row < num; row++) {
        let result = "";
        for (let col = 0; col < num; col++) {
            result += `${num} `;
        }
        console.log(result);
    }
}
nXnMatrix(2)