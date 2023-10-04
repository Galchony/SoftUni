function foodDelivery(args) {
    let chickenMenu = Number(args[0]);
    let fishMenu = Number(args[1]);
    let vegieMenu = Number(args[2]);
    let chickenMenuPrice = 10.35;
    let fishMenuPrice = 12.40;
    let vegieMenuPrice = 8.15;
    let sumMenus = (chickenMenu * chickenMenuPrice + fishMenu * fishMenuPrice + vegieMenu * vegieMenuPrice);
    let dessert = (sumMenus * 0.20);
    let deliveryFee = 2.50;
    let result = (sumMenus + dessert + deliveryFee);
    console.log(result);

}
foodDelivery(["9", "2", "6"])