function godzillavsKong(args) {
    let budget = Number(args[0]);
    let countOfWalkingGentleman = parseInt(args[1]);
    let priceForClothing = Number(args[2]);

    let decor = budget * 0.10;
    if (countOfWalkingGentleman > 150) {
        priceForClothing *= 0.90;
    }
    if (decor+priceForClothing*countOfWalkingGentleman>budget){
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(decor+priceForClothing*countOfWalkingGentleman-budget).toFixed(2)} leva more.`);
    }
    else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget-(decor+priceForClothing*countOfWalkingGentleman)).toFixed(2)} leva left.`);
    }
}
godzillavsKong(["20000",
    "120",
    "55.5"])
godzillavsKong(["9587.88",
"222",
"55.68"])