function yardGreening(args) {
    let areaInMeters = Number(args[0]);
    let priceOfMeter = 7.61;
    let priceOfArea = (areaInMeters * priceOfMeter);
    let discount = (0.18 * priceOfArea);
    let finalPrice = (priceOfArea - discount);
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`)


}
yardGreening(["150"]);