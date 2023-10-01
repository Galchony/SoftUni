function ladybugs(array) {
    let countOfFields = Number(array[0]);
    let busyFields = (array[1]).split(" ");
    let isTrue = false;
    let startBugs = Number;
    let newStartBugs = 0;
    let result = "";
    for (let index = 2; index < array.length; index++) {
        let command = (array[index]).split(" ");
        newStartBugs = 0;
        for (let i = 0; i < busyFields.length; i++) {
            startBugs = Number(busyFields[i]);
            let firstCommand = Number(command[0]);
            if (firstCommand == startBugs && firstCommand >= 0 && firstCommand < countOfFields) {
                if (command[1] === "right") {
                    newStartBugs = startBugs + Number(command[2]);
                    if (newStartBugs > countOfFields - 1 || newStartBugs < 0) {
                        busyFields.splice(i, 1);
                        break;
                    }
                    else {
                        for (let k = 0; k < busyFields.length; k++) {
                            if (newStartBugs == Number(busyFields[k])) {
                                newStartBugs += Number(command[2]);
                            }
                        }
                        if (newStartBugs > countOfFields - 1 || newStartBugs < 0) {
                            busyFields.splice(i, 1);
                            break;
                        } else {
                            busyFields.splice(i, 1, newStartBugs);
                            break;
                        }
                    }
                } else {
                    newStartBugs = startBugs - Number(command[2]);
                    if (newStartBugs > countOfFields - 1 || newStartBugs < 0) {
                        busyFields.splice(i, 1);
                        break;
                    }
                    else {
                        for (let k = 0; k < busyFields.length; k++) {
                            if (newStartBugs == Number(busyFields[k])) {
                                newStartBugs -= Number(command[2]);
                            }
                        }
                        if (newStartBugs > countOfFields - 1 || newStartBugs < 0) {
                            busyFields.splice(i, 1);
                            break;
                        } else {
                            busyFields.splice(i, 1, newStartBugs);
                            break;
                        }
                    }
                }
            }
            else {
                continue;
            }
        }
    }
    for (let i = 0; i < countOfFields; i++) {
        isTrue = false;
        for (let k = 0; k < busyFields.length; k++) {
            if (i == Number(busyFields[k])) {
                result += `${1} `
                isTrue = true;
                break;
            }
        }
        if (isTrue) {
            continue;
        }
        else {
            result += `${0} `;
        }

    }
    console.log(result.trim());

}
// ladybugs([ 3, '0 1','0 right 1','2 right 1' ]);
// ladybugs([ 3, '0 1 2','0 right 1','1 right 1','2 right 1']);
// ladybugs([5, '3', '3 left 2', '1 left -2']);
ladybugs([8, '7 3 3', '3 left 4']);