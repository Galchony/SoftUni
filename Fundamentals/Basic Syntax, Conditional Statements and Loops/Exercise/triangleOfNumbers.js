function triangleOfNumbers(num) {
    let digit = 0;
    let result = "";
    for (let i = 0; i < num; i++) {
        digit++;
        result = "";
        for (let j = 0; j <= i; j++) {
            result += `${digit} `;
            
        }
        console.log(result);
    }
}
triangleOfNumbers(5);