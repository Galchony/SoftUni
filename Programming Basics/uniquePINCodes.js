function uniquePINCodes(args) {
    let max1 = Number(args[0]);
    let max2 = Number(args[1]);
    let max3 = Number(args[2]);

    for (let s1 = 2; s1 <= max1; s1 += 2) {
        let pin = "";
        for (let s2 = 2; s2 <= Math.min(max2, 7); s2++) {
            if (s2 !== 4 && s2 !== 6) {
                for (let s3 = 2; s3 <= max3; s3 += 2) {
                    pin = `${s1} ${s2} ${s3}`
                    console.log(pin);
                }
            }

        }
    }
}
uniquePINCodes(["8", "2", "8"]);