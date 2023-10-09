function townPopulation(input) {
    let obj = {};
    for (const el of input) {
        let [townName, townPopulation] = el.split(' <-> ');
        townPopulation = Number(townPopulation);
        if (!obj.hasOwnProperty(townName)) {
            obj[townName] = 0;
        }
        obj[townName] += townPopulation;
    }
    for (const key in obj) {
        console.log(`${key} : ${obj[key]}`);
    }
}

townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
)