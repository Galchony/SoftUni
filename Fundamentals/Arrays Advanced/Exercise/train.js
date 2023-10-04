function train(array) {
    let wagons = array[0].split(" ");
    let maxCapacityOfWagon = Number(array[1]);
    for (let index = 2; index < array.length; index++) {
        let command = array[index].split(" ");
        let action = command[0];
        if (action === "Add") {
            let num = Number(command[1]);
            wagons.push(num);
        }
        else {
            let num = Number(command[0]);
            for (let i = 0; i < wagons.length; i++) {
                let passengers = Number(wagons[i]);
                if (passengers + num <= maxCapacityOfWagon) {
                    wagons[i] = passengers + num;
                    break;
                }
            }
        }
    }

    console.log(wagons.join(" "));
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
)
console.log("-------------");
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
)