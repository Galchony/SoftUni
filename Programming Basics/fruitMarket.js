function fruitMarket(args1, args2,args3,args4,args5) {
    let priceOfStrawberries = Number(args1);
    let countOfBananas = Number(args2);
    let countOfOranges = Number(args3);
    let countOfRaspberries = Number(args4);
    let countOfStrawberries = Number(args5);
    let priceOfRaspberries = priceOfStrawberries * 0.50;
    let priceOfOranges = priceOfRaspberries * 0.60;
    let priceOfBananas = priceOfRaspberries * 0.20;
    let sum = priceOfStrawberries * countOfStrawberries + priceOfBananas * countOfBananas + priceOfOranges * countOfOranges + priceOfRaspberries * countOfRaspberries;
    console.log(sum.toFixed(2));
}


fruitMarket(48, 10, 3.3, 6.5, 1.7)