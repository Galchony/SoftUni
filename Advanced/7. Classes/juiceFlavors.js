function juiceFlavors(input) {
    let obj = {};
    let bottles = {};
    input.map(x => x.split(' => ')).map(([juice, quantity]) => {
        if (obj[juice]) {
            obj[juice] += Number(quantity);
        } else {
            obj[juice] = Number(quantity);
        }
        if (obj[juice] >= 1000) {
            if (!bottles[juice]) {
                bottles[juice] = 0;
            }
            let diff = Math.floor(obj[juice] / 1000)
            bottles[juice] += diff;
            obj[juice] -= diff * 1000;
        }
    });
    for (const key in bottles) {
        console.log(`${key} => ${(bottles[key])}`);
    }
}


juiceFlavors(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
)