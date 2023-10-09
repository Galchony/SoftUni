class Hex {
    constructor(value) {
        this.value = Number(value);
    }

    valueOf() {
        return this.value;
    }
    toString() {
        return '0x' + (this.value.toString(16)).toUpperCase();
    }
    plus(obj) {
        let v = obj.value + this.value;
        let g = new Hex(v);
        return g;

    }
    minus(obj) {
        let v = this.value - obj.value;
        let g = new Hex(v);
        return g;

    }
    parse(obj) {
        return parseInt(obj.valueOf().toString(), 16);
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));




