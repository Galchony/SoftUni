function argumentInfo(...args) {
    let countObj = {};
    for (const arg of args) {
        let argumentType = typeof arg;
        let argumentValue = arg;
        console.log(`${argumentType}: ${argumentValue}`);

        countObj[argumentType] ? countObj[argumentType] += 1 : countObj[argumentType] = 1;
    }
    Object.entries(countObj).sort((a,b)=>b[1]-a[1]).forEach(x => {
        let type = x[0];
        let count = x[1];
        console.log(`${type} = ${count}`)
    });
}

argumentInfo({ name: 'bob'}, 3.333, 9.999)

