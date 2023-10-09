function extensibleObject() {
    let obj = {
        extend: function (a) {
            for (const key in a) {
                let temp = a[key];
                if (typeof temp === 'function') {
                    Object.getPrototypeOf(obj)[key] = temp;
                } else {
                    obj[key] = temp;
                }
            }
        }
    }
    return obj;
}

const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
}

const myObj = extensibleObject();

myObj.extend(template);
console.log('a');
