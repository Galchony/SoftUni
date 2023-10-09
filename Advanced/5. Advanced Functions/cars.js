function cars(input) {
    let obj = {};
    let commands = {
        create(name, arr) {
            obj[name] = {};
            if (arr.length > 0) {
                let [key, value] = arr;
                this.inherit(name, value);
            }
        },
        inherit(name, v) {
            obj[name]['inherit'] = obj[v];
        },
        set(name, arr) {
            let [key, value] = arr;
            obj[name][key] = value;
        },
        print(name) {
            let result = '';
            for (const key in obj[name]) {
                if (key === 'inherit') {
                    continue;
                }
                result += `${key}:${obj[name][key]},`
            }
            if (obj[name]['inherit']) {
                for (const key in obj[name]['inherit']) {
                    result += `${key}:${obj[name]['inherit'][key]},`
                }
            }
            result = result.substring(0, result.length - 1);
            console.log(result);
        }
    }
    for (const command of input) {
        let [action, name, ...innerArr] = command.split(' ');
        commands[action](name, innerArr);

    }
}

cars(['create pesho', 'create gosho inherit pesho', 'create stamat inherit gosho', 'set pesho rank number1', 'set gosho nick goshko', 'print stamat']
)