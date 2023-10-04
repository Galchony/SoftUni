function bombNumbers(sequence, bombArray) {
    let specialNum = bombArray[0];
    let powerOfBomb = bombArray[1];
    let sum = 0;
    for (let i = 0; i < sequence.length; i++) {
        const element = sequence[i];
        if (element === specialNum) {
            if (i - powerOfBomb < 0) {
                sequence.splice(0, powerOfBomb + i + 1);
                i = 0;
            } else {
                sequence.splice(i - powerOfBomb, powerOfBomb * 2 + 1);
                i = 0;
            }
        }
    }
    for (const el of sequence) {
        sum += el;
    }
    console.log(sum);
}
bombNumbers([2, 3, 1, 4, 2, 2, 1, 2, 2, 2, 1], [1, 2]);

