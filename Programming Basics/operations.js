function operations(args) {
    let n1 = parseInt(args[0]);
    let n2 = parseInt(args[1]);
    let operator = args[2];

    let result = 0;
    let EvOrOd = "";

    if (operator === "+") {
        result = n1 + n2;
        if ((result % 2) != 0) {
            EvOrOd += "odd"
        }
        else {
            EvOrOd += "even"
        }
        console.log(`${n1} ${operator} ${n2} = ${result} - ${EvOrOd}`);
    }
    if (operator === "-") {
        result = n1 - n2;
        if ((result % 2) != 0) {
            EvOrOd += "odd"
        }
        else {
            EvOrOd += "even"
        }
        console.log(`${n1} ${operator} ${n2} = ${result} - ${EvOrOd}`);
    }
    if (operator === "*") {
        result = n1 * n2;
        if ((result % 2) != 0) {
            EvOrOd += "odd"
        }
        else {
            EvOrOd += "even"
        }
        console.log(`${n1} ${operator} ${n2} = ${result} - ${EvOrOd}`);
    }
    if (operator === "/") {
        if (n2==0) {
            console.log(`Cannot divide ${n1} by zero`);
    }
       else { result = n1 / n2;
        console.log(`${n1} / ${n2} = ${(result).toFixed(2)}`);
}
    }
    if (operator === "%") {
        if (n2==0) {
            console.log(`Cannot divide ${n1} by zero`);
    }
        else {result = n1 % n2;
        console.log(`${n1} % ${n2} = ${(result)}`);
        }
    }
   
}
operations(["10", "3", "%"])