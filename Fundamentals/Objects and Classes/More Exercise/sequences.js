function sequences(input) {
    let obj = {};
    let length = input.length;
    for (let index = 1; index <= length; index++) {
        let arr = JSON.parse(input.shift()).sort((a, b) => b - a);
        obj[arr.join(" ")] = arr.length;
    }
    let sorted = Object.entries(obj).sort((a, b) => (a[1] - b[1]))
       for (const [key, value] of sorted) {
        let result = key.split(" ").map(el => Number(el));
        console.log(`[${result.join(", ")}]`);
    }
}

sequences(["[7.339, 1]",
    "[7.339]",
    "[7.439]", "[7.239,1]"]

)