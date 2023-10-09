class List {
    constructor() {
        this.list = [];
        this.size = 0;
    }
    add(element) {
        this.list.push(element);
        this.list.sort((a, b) => a - b);
        this.size = this.list.length;
    }
    remove(index) {
        if (this.list[index] !== undefined) {
            this.list.splice(index, 1);
            this.list.sort((a, b) => a - b);
            this.size = this.list.length;
        }
    }
    get(index) {
        if (this.list[index] !== undefined) {
            this.list.sort((a, b) => a - b);
            return this.list[index];
        } else {
            return;
        }
    }
}


let list = new List();
list.add(8);
console.log(list.get(8));
list.add(6);
list.add(7);
list.remove(0);
console.log(list.get(1));
