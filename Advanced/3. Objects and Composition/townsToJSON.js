function townsToJSON(input) {
    let keys = input
        .shift()
        .split('|')
        .filter(x => x !== "")
        .map(x => x.trim());
    let result = [];
    for (let i = 0; i < input.length; i++) {
        const line = input[i]
            .split('|')
            .filter(x => x !== "")
            .map(x => x.trim());
        let obj = {};
        for (let j = 0; j < line.length; j++) {
            if (j !== 0) {
                obj[keys[j]] = Number(Number(line[j]).toFixed(2));
            } else {
                obj[keys[j]] = line[j];
            }
        }
        result.push(obj);
    }

    console.log(JSON.stringify(result));
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)

