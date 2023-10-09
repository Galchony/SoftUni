function solution() {
    let library = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }

    let commands = {
        restock(microelement, quantity) {
            obj[microelement] += Number(quantity);
            return `Success`;
        },
        prepare(recipe, quantity) {
            for (const [key, value] of Object.entries(library[recipe])) {
                if (obj[key] < value * quantity) {
                    return `Error: not enough ${key} in stock`;
                }
            }
            for (const [key, value] of Object.entries(library[recipe])) {
                obj[key] -= (Number(value)*quantity);
            }
            return `Success`;

        },
        report() {
            let output = '';
            for (const key in obj) {
                output += `${key}=${obj[key]} `;
            }
            return output.trim();
        }
    }

    let obj = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    return function solve(input) {
        let [command, ...arr] = input.split(' ');
        return commands[command](...arr);
    }
}

let manager = solution();
console.log(manager("restock carbohydrate 2")); 
console.log(manager("restock flavour 4"));
console.log(manager("prepare apple 2"));
// console.log(manager("restock carbohydrate 10"));
console.log(manager("report"));




// console.log(manager("prepare turkey 1"));
// console.log(manager("restock fat 10"));
// console.log(manager("prepare turkey 1"));
// console.log(manager("restock flavour 10"));
// console.log(manager("prepare turkey 1"));
// console.log(manager("report"));












