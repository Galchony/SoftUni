function binaryToDecimal(binary) {
    // let decimal = parseInt(binary,2);

    let decimal = 0;
    for (let i = 0; i < binary.length; i++) {
        let sym = Number(binary[binary.length - i - 1]);
        if (sym === 1) {
            let sum = Math.pow(2, i);
            decimal += sum;
        }
    }

    console.log(decimal);
}
binaryToDecimal("10000000"); // 128
binaryToDecimal("11111111"); // 255
binaryToDecimal("11110000"); // 240
binaryToDecimal("00001001"); // 9
binaryToDecimal("00000001"); // 1
binaryToDecimal("00000000"); // 0
binaryToDecimal("11111110"); // 254
binaryToDecimal("111111101110"); // 4078