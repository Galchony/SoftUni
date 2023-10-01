function catalogue(input) {
    let obj = {};
    for (const line of input) {
        let [key, value] = line.split(" : ");
        obj[key] = value;
    }
    let sorted = Object.keys(obj).sort((a, b) => a.localeCompare(b));
    let firstChar = " ";
    for (const key of sorted) {
        if (firstChar !== key[0]) {
            firstChar = key[0];
            console.log(firstChar);
        }
        console.log(`${key}: ${obj[key]}`);
    }
}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
)