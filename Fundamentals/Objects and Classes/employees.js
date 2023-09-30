function employees(arr) {
    let obj = {};
    for (const el of arr) {
        obj.name = el;
        obj.number = el.length;
        console.log(`Name: ${obj.name} -- Personal Number: ${obj.number}`);
    }
    
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )