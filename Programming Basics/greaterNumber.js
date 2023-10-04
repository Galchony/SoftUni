function greaterNumber(args) {
    let num1 = parseInt(args[0]);
    let num2 = parseInt(args[1]);

    if (num1>num2) {
        console.log(num1);
    }
    else {
        console.log(num2);
    }
}
greaterNumber(["5", "3"]);
greaterNumber(["-5", "5"])