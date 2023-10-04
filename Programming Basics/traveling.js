function traveling(args) {
    let destination = args[0];
    let neededMonye = 0;
    let budget = 0;
    let monyeToSave = 0;
    let isValid = true;
    for (let index = 0; index < args.length; index++) {
        destination = args[index];
        index++;
        neededMonye = Number(args[index]);
        budget = 0;
        for (let j = (++index); j < args.length; j++) {
            let command = args[j];
            if (command === "End") {
                isValid = false;
                break;
            }
            monyeToSave = Number(args[j]);
            budget += monyeToSave;
            if (budget >= neededMonye) {
                console.log(`Going to ${destination}!`);
                break;
            }
            index++;
        }
        if (isValid === false) {
            break;
        }
    }
    
}
traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])


