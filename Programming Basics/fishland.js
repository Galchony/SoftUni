function fishland(args) {
    let priceFish1 = Number(args[0]);
    let priceFish2 = Number(args[1]);

    let fish3 = Number(args[2]);
    let fish4 = Number(args[3]);
    let fish5 = Number(args[4]);
    let priceFish3 = priceFish1 * 1.6;
    let priceFish4 = priceFish2 * 1.8;
    let priceFish5 = 7.50;
    let result = (priceFish3*fish3+priceFish4*fish4+priceFish5*fish5);
    console.log(result.toFixed(2));

}
fishland([6.90, 4.20, 1.5, 2.5, 1])