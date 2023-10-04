function footballKit(args) {
    let priceOfTShirt = Number(args[0]);
    let neededSum = Number(args[1]);
    let priceOfShorts = priceOfTShirt * 0.75;
    let priceOfSocks = priceOfShorts * 0.20;
    let priceOfButtons = (priceOfTShirt + priceOfShorts) * 2;
    let totalCosts = (priceOfTShirt+priceOfShorts+priceOfSocks+priceOfButtons)*0.85;
    if (totalCosts>=neededSum) {
        console.log(`Yes, he will earn the world-cup replica ball!`);
        console.log(`His sum is ${totalCosts.toFixed(2)} lv.`);
    }
    else {
        console.log(`No, he will not earn the world-cup replica ball.`);
        console.log(`He needs ${(neededSum-totalCosts).toFixed(2)} lv. more.`)
    }
}
footballKit(["55",
"310"])

