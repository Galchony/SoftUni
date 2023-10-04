function arrayManipulator(array, commandsArray) {
    for (let i = 0; i < commandsArray.length; i++) {
        const command = commandsArray[i].split(" ");
        let action = command[0];
        if (action === "add") {
            let index = Number(command[1]);
            let element = Number(command[2]);
            array.splice(index, 0, element)
        } else if (action === "addMany") {
            let index = Number(command[1]);
            for (let j = 2; j < command.length; j++) {
                let element = Number(command[j]);
                array.splice(index, 0, element)
                index++;
            }
        } else if (action === "contains") {
            let element = Number(command[1]);
            let index = array.indexOf(element);
            console.log(index);
        } else if (action === "remove") {
            let index = Number(command[1]);
            array.splice(index, 1);
        } else if (action === "shift") {
            let positions = Number(command[1]);
            for (let index = 0; index < positions; index++) {
                array.push(array.shift());
            }
        } else if (action === "sumPairs") {
            let length = array.length;
            if (length % 2 === 0) {
                for (let index = 0; index < array.length; index++) {
                    array[index] += Number(array[index + 1]);
                    array.splice(index + 1, 1);
                }
            } else {
                for (let index = 0; index < array.length - 1; index++) {
                    array[index] += Number(array[index + 1]);
                    array.splice(index + 1, 1);
                }
            }
        } else if (action === "print") {
            break;
        }
    }
    console.log(`[ ${array.join(", ")} ]`);
}
// arrayManipulator([0,1,1,2],
//     ['contains 1', 'contains 3', 'remove 0', 'print']
// );
arrayManipulator([-1,-1],
    ['sumPairs', 'contains -1', 'print']);
