function fruitShop(args) {
    let fruit = args[0];
    let day = args[1];
    let quantity = Number(args[2]);

    let bananaPrice = 0;
    let applePrice = 0;
    let orangePrice = 0;
    let grapefruitPrice = 0;
    let kiwiPrice = 0;
    let pineapplePrice = 0;
    let grapesPrice = 0;
    let isError = false;

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            bananaPrice = 2.50;
            applePrice = 1.20;
            orangePrice = 0.85;
            grapefruitPrice = 1.45;
            kiwiPrice = 2.70;
            pineapplePrice = 5.50;
            grapesPrice = 3.85;
            break;
        case "Saturday":
        case "Sunday":
            bananaPrice = 2.70;
            applePrice = 1.25;
            orangePrice = 0.90;
            grapefruitPrice = 1.60;
            kiwiPrice = 3;
            pineapplePrice = 5.60;
            grapesPrice = 4.2;
            break;
        default:
            isError = true;
            break;
    }
    if (isError == true) {
        console.log("error")
    } 
    else {
    switch (fruit) {
        case "banana":
            console.log((quantity * bananaPrice).toFixed(2));
            break;
        case "apple":
            console.log((quantity * applePrice).toFixed(2));
            break;
        case "orange":
            console.log((quantity * orangePrice).toFixed(2));
            break;
        case "grapefruit":
            console.log((quantity * grapefruitPrice).toFixed(2));
            break;
        case "kiwi":
            console.log((quantity * kiwiPrice).toFixed(2));
            break;
        case "pineapple":
            console.log((quantity * pineapplePrice).toFixed(2));
            break;
        case "grapes":
            console.log((quantity * grapesPrice).toFixed(2));
            break;
        default:
            console.log("error");
            break;
    }
}
}
fruitShop(["fsdfsd", "jhghjg", "2"]);
fruitShop(["orange","Sunday","3"])


