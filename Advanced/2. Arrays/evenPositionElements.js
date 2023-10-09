function evenPositionElements(arr) {
    let result = arr.filter((x, i) => {
        if (i % 2 === 0) {
            return x;
        }
    });
    console.log(result.join(" "))
}

evenPositionElements(['20', '30', '40', '50', '60'])