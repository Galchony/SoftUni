function vegetableMarket(args) {
let vegiePrice = parseFloat(args[0]);
let fruitPrice = parseFloat(args[1]);
let vegieKG = parseInt(args[2]);
let fruitKG = parseInt(args[3]);
let result = parseFloat((vegiePrice*vegieKG + fruitPrice*fruitKG)/1.94);

console.log(result.toFixed(2));
}
vegetableMarket(["0.194", "19.4", "10", "10"]);