function numberTable(args) {
    let n = Number(args[0]);
    let num = 1;
    let printNum = "";
    for (let i = 1; i <= n; i++) {
        num = i;
        printNum = ""
        for (let j = 1; j <= n; j++) {
            printNum += num + " ";
            num++;
            if (num > n) {
                while (num > 1 && j < n) {
                    num -= 2;
                    printNum += num + " ";
                    num++
                    j++

                }
            }
        }
        console.log(printNum);
    }
}
numberTable(["8"]);