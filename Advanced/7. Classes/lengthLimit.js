class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(v) {
        this.innerLength += v;

    }
    decrease(v) {
        this.innerLength -= v;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }
    toString() {
        let DOTS = '...'
        if (this.innerString.length > this.innerLength){
            return this.innerString.slice(0,this.innerLength) + DOTS;
        } else if (this.innerLength === 0) {
            return DOTS;
        } else {
            return this.innerString
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(test.toString()); // ...
test.increase(4);
console.log(test.toString()); // TestLimit