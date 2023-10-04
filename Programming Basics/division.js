function division(args) {
    let nums = parseInt(args[0]);
    let num = 0;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    for (let i = 1; i <= nums; i++) {
        num = parseInt(args[i]);
        if (num % 2 === 0) {
            p1 += 1;
        }
        if (num % 3 === 0) {
            p2 += 1;
        }
        if (num % 4 === 0) {
            p3 += 1;
        }
    }
    console.log(((p1 / nums) * 100).toFixed(2) + "%");
    console.log(((p2 / nums) * 100).toFixed(2) + "%");
    console.log(((p3 / nums) * 100).toFixed(2) + "%");

}
division(["10", "680", "2", "600", "200", "800", "799", "199", "46", "128", "65"]);
division(["3", "3", "6", "9"]);
division(["1", "12"]);