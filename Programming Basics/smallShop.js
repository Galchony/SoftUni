function smallShop(args) {
    let product = args[0];
    let town = args[1];
    let quatity = Number(args[2]);

    let coffeePrice = 0;
    let waterPrice = 0;
    let beerPrice = 0;
    let sweetsPrice = 0;
    let peanutsPrice = 0;

    switch (town) {
        case "Sofia":
            coffeePrice = 0.50;
            waterPrice = 0.80;
            beerPrice = 1.20;
            sweetsPrice = 1.45;
            peanutsPrice = 1.60;

            break;
        case "Plovdiv":
            coffeePrice = 0.40;
            waterPrice = 0.70;
            beerPrice = 1.15;
            sweetsPrice = 1.30;
            peanutsPrice = 1.50;
            break;
        case "Varna":
            coffeePrice = 0.45;
            waterPrice = 0.70;
            beerPrice = 1.10;
            sweetsPrice = 1.35;
            peanutsPrice = 1.55;
            break;

    }
    switch (product) {
        case "coffee":
            console.log(coffeePrice * quatity);
            break;
        case "water":
            console.log(waterPrice * quatity);
            break;
        case "beer":
            console.log(beerPrice * quatity);
            break;
        case "sweets":
            console.log(sweetsPrice * quatity);
            break;
        case "peanuts":
            console.log(peanutsPrice * quatity);
            break;
    }
}
smallShop(["sweets",
"Sofia",
"2.23"])



