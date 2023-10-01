function towns(arr) {
    let obj = {};
    for (const el of arr) {
        let infos = el.split(" | ");
        obj.town = infos[0];
        obj.latitude = Number(infos[1]).toFixed(2);
        obj.longitude = Number(infos[2]).toFixed(2);
        console.log(obj);

    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)