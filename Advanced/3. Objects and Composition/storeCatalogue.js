function storeCatalogue(input) {
    let obj = input.reduce((acc, el) => {
        const [productName, productPrice] = el.split(' : ');
        acc[productName] = Number(productPrice);
        return acc;
    }, {});
    let sorted = Object.keys(obj).sort((a,b)=>a.localeCompare(b));
    let char = sorted[0][0];
    console.log(char); 
    for (const el of sorted) {
        if (el[0]!== char) {
            char = el[0];
            console.log(char);
        }
        console.log(`${el}: ${obj[el]}`);
    }
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)