let arr = [1, 2, 3];
let a = arr.map(x => x - 1);
// console.log(arr);
// console.log(a);
// console.log(arr.filter(x => x !== 1));
// console.log(arr['pesho']);


// let car1 = {
//     model: 'm',
//     startM() {
//         console.log(this['$^#)*']);
//     }
// }
// let car2 = {
//     '$^#)*': 'a',
//     startA: car1.startM
// }
// car2.startA();

let car = {
    model: 'BMW'
}
Object.defineProperty(car,'color', {value: 'red'});

let descriptors = Object.getOwnPropertyDescriptors(car);
let descriptor = Object.getOwnPropertyDescriptor(car,'color');
descriptor.enumerable = true;

console.log(descriptors);
console.log(descriptor);
