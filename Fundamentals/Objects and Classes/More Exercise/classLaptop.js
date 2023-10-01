class Laptop {
    constructor(info, quality) {
        this.info = {
            producer: info.producer,
            age: info.age,
            brand: info.brand
        }
        this.quality = quality;
    }
    isOn = false;
    turnOn() {
        this.quality -= 1;
        this.isOn = true;
    }
    turnOff() {
        this.quality -= 1;
        this.isOn = false;
    }
    showInfo() {
        let jsonText = JSON.stringify(this.info);
        return jsonText;
    }
    get price() {
        let infoAge = Number(this.info.age);
        let sum = (800 - (infoAge * 2) + (this.quality * 0.5));
        return sum;
    }
}
let info = {producer: "Lenovo", age: 1, brand: "Legion"}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
laptop.turnOn()
laptop.turnOff()
console.log(laptop.isOn)

