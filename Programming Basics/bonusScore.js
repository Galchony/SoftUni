function bonusScore(args) {
    let num = parseInt(args[0]);
    let bonus = 0;
    if (num <= 100) {
        bonus = 5;
    }
    if (num > 100) {
        bonus = num * 0.20;
    }
    if (num > 1000) {
        bonus = num * 0.10;
    }
    if (num % 2 == 0) {
        bonus += 1;
    }
    if (num % 10 == 5) {
        bonus += 2;
    }
    console.log(bonus);
    console.log(num+bonus);
}
bonusScore(["2703"]);