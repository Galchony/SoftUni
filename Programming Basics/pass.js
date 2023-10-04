function pass(args) {
    let n = Number(args[0]);
    let l = Number(args[1]);
    let result = "";
    for (let s1 = 1; s1 <= n; s1++) {
        for (let s2 = 1; s2 <= n; s2++) {
            for (let s3ascii = 97; s3ascii < 97 + l; s3ascii++) {
                let s3 = String.fromCharCode(s3ascii);
                for (let s4ascii = 97; s4ascii < 97 + l; s4ascii++) {
                    let s4 = String.fromCharCode(s4ascii);
                    for (let s5=(Math.max(s1, s2)+1); s5<=n; s5++)
                result += `${s1}${s2}${s3}${s4}${s5} `
                
                }
            }
        }
    }
    count = result.length/6
    console.log(result + count);
}
pass(["3", "2"]);