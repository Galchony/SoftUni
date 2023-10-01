function makeADictionary(input) {
    let arr = [];
    let myObj = {};

    for (const line of input) {
        let el = JSON.parse(line);
        let name = Object.keys(el)[0];
        let value = Object.values(el)[0];
        myObj[name] = value;
    }
    arr = Object.keys(myObj).sort((a,b)=>a.localeCompare(b));
    for (const el of arr) {
        console.log(`Term: ${el} => Definition: ${myObj[el]}`);
    }
 
    // let isTrue = false;
    // if (line === input[0]) {
    //     arr.push(el);
    //     continue;
    // }
    // for (const obj of arr) {
    //     if ((Object.keys(obj)[0] === Object.keys(el)[0])) {
    //         obj[Object.keys(obj)[0]] = el[Object.keys(el)[0]];
    //         isTrue = true;
    //         break;
    //     }
    // }
    // if (isTrue) {
    //     continue;
    // } else {
    //     arr.push(el);

    // }
    // arr.sort((a, b) => Object.keys(a)[0].localeCompare(Object.keys(b)[0]));
    // for (const el of arr) {
    //     console.log(`Term: ${Object.keys(el)[0]} => Definition: ${Object.values(el)[0]}`);
    // }

}
makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Coffee":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
)