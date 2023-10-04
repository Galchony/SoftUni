function courierExpress(args) {
    let weight = Number(args[0]);
    let typeOfService = args[1];
    let distance = Number(args[2]);
    let priceOfKm = 0;
    switch (typeOfService) {
        case "standard":
            if (weight < 1) {
                priceOfKm = 0.03;
            }
            else if (weight < 10) {
                priceOfKm = 0.05;
            }
            else if (weight < 40) {
                priceOfKm = 0.10;
            }
            else if (weight < 90) {
                priceOfKm = 0.15;
            }
            else if (weight < 150) {
                priceOfKm = 0.20;
            }
            break;

        case "express":
            if (weight < 1) {
                priceOfKm = 0.03 + weight * 0.80 * 0.03;
            }
            else if (weight < 10) {
                priceOfKm = 0.05 + weight * 0.40 * 0.05;
            }
            else if (weight < 40) {
                priceOfKm = 0.10 + weight * 0.05 * 0.10;
            }
            else if (weight < 90) {
                priceOfKm = 0.15 + weight * 0.02 * 0.15;
            }
            else if (weight < 150) {
                priceOfKm = 0.20 + weight * 0.01 * 0.20;;
            }
            break;
    }
    let totalPrice =  distance*priceOfKm;
    console.log(`The delivery of your shipment with weight of ${weight.toFixed(3)} kg. would cost ${totalPrice.toFixed(2)} lv.`);
}
courierExpress(["20", 
"standard",
"349"])

