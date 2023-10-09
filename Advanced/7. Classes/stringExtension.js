(function solve() {
    String.prototype.ensureStart = function (str) {
        if (!this.toString().startsWith(str)) {
            return `${str}${this.toString()}`;
        }
        return this.toString();
    }
    String.prototype.ensureEnd = function (str) {
        if (!this.toString().endsWith(str)) {
            return `${this.toString()}${str}`;
        }
        return this.toString();
    }
    String.prototype.isEmpty = function () {
        if (this.length === 0) {
            return true;
        }
        return false;
    }
    String.prototype.truncate = function (n) {
        if (n < 4) {
            return '.'.repeat(n);
        }
        if (this.toString().length <= n) {
            return this.toString();
        }
        let ind = this.toString().substring(0,n-2).lastIndexOf(' ');
        if (ind === -1) {
            return `${this.toString().substring(0, n - 3)}...`
        } else {
            let str = this.toString().substring(0,ind);
            return str + '...'
        }
    }
    String.format = function (string, ...params) {
        let str = string;
        for (let i = 0; i < params.length; i++) {
            const element = params[i];

            let ind = str.indexOf(`{${i}}`)
            while (ind !== -1) {
                str = str.replace(`{${i}}`, element);
                ind = str.indexOf(`{${i}}`)
            }
        }
        return str.toString();
    }
})();

let str = 'my string';
str = str.ensureStart('my');
console.log(str);
str = str.ensureStart('hello ');
console.log(str);
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format('The {0} {1} fox',
'quick', 'brown');
console.log(str);

str = String.format('jumps {0} {1}',
    'dog');
    console.log(str);

//  truncate(n) – returns the string truncated to n characters by removing words and appends an ellipsis
// (three periods) to the end. If a string is less than n characters long, return the same string. If it is longer, split
// the string where a space occurs and append an ellipsis to it so that the total length is less than or equal to n.
// If no space occurs anywhere in the string, return n - 3 characters and an ellipsis. If n is less than 4, return n
// amount of periods.
//  format(string, …params)