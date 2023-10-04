function moving(args) {
    let a = Number(args[0]);
    let b = Number(args[1]);
    let h = Number(args[2]);
    let area = a * b * h;
    let index = 3;
    let command = args[index];
    let sumOfCountOfPackets = 0;
    while (command !== "Done") {
        countOfPackets = Number(args[index]);
        sumOfCountOfPackets += countOfPackets;
        if (sumOfCountOfPackets > area) {
            console.log(`No more free space! You need ${sumOfCountOfPackets - area} Cubic meters more.`);
            break;
        }
        index++;
        command = args[index];
    }
    if (command === "Done") {
        if (sumOfCountOfPackets > area) {
            console.log(`No more free space! You need ${sumOfCountOfPackets - area} Cubic meters more.`);
        }
        else {
            console.log(`${area- sumOfCountOfPackets} Cubic meters left.`);
        }
    }
}
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])

