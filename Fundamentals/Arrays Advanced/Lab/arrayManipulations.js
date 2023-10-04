function arrayManipulations(params) {
    let array = params[0].split(" ");
    for (let i = 1; i < params.length; i++) {
        let operation = params[i].split(" ");
        let command = operation[0];
        let num = Number(operation[1]);
        if (command === "Add") {
            array.push(num);
        } else if (command === "Remove") {
            if (array.includes(String(num))) {
                for (let j = 0; j < array.length; j++) {
                    let el = Number(array[j]);
                    if (el === num) {
                        array.splice(j, 1);
                    }
                }
            } else {
                continue;
            }
        } else if (command === "RemoveAt") {
            array.splice(num, 1);
        } else if (command === "Insert") {
            let index = Number(operation[2]);
            array.splice(index, 0, num);
        }
    }

    console.log(array.join(" "));
}
arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']);
console.log("------------------t");
arrayManipulations(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']
)
