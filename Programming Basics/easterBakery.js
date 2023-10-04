function easterBakery(args) {
    let priceOfFloor = Number(args[0]);
    let weightOfFloor = Number(args[1]);
    let weightOfSugar = Number(args[2]);
    let countOfEggs = Number(args[3]);
    let countOfYeast = Number(args[4]);
    let priceOfSugar = priceOfFloor*0.75;
    let priceOfEggs = priceOfFloor*1.10;
    let priceOfYeast = priceOfSugar*0.20;
    let result = priceOfFloor*weightOfFloor+priceOfSugar*weightOfSugar+countOfEggs*priceOfEggs+countOfYeast*priceOfYeast;
    console.log(result.toFixed(2));

}
easterBakery(["50",
"10",
"3.5",
"6",
"1"])
