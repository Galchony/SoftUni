function oddAndEvenSum(num) {
    let string = String(num);
    let array = string.split("");
    let evenSum = 0;
    let oddSum = 0;
    for (let index = 0; index < array.length; index++) {
        const element = Number(array[index]);
        if (element%2===0) {
            evenSum+=element;
        } else {
            oddSum += element;
        }
        
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435)