function listProcessor(input) {
    let innerCollection = [];
    let obj = {
        add(str) {
            innerCollection.push(str);
        },
        remove(str) {
            innerCollection = innerCollection.filter(x => x !== str);
        },
        print() {
            console.log(innerCollection.join(','));
        }
    }

    for (const command of input) {
        let [action, str] = command.split(' ');
        obj[action](str);
    }

}

listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']
)