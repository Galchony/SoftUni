function suitcasesLoad(args) {
    let capacity = Number(args[0]);
    let index = 1;
    let command = args[index];
    let totalVolume = 0;
    let counter = 0;
    while (command !== "End") {
        counter++;
        let volumeOfSuitcase = Number(args[index]);
        if (counter % 3 === 0) {
            volumeOfSuitcase *= 1.10;
        }
        if (volumeOfSuitcase > (capacity - totalVolume)) {
            console.log(`No more space!`);
            counter--;
            break;
        }
        totalVolume += volumeOfSuitcase;

        command = args[++index];
    }
    if (command === "End") {
        console.log(`Congratulations! All suitcases are loaded!`);
    }
    console.log(`Statistic: ${counter} suitcases loaded.`);
}
suitcasesLoad(["700.5",
"180",
"340.6",
"126",
"220"])

