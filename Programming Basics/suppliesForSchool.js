function suppliesForSchool(args) {
    let pens = Number(args[0]);
    let markers = Number(args[1]);
    let preparations = Number(args[2]);
    let discount = Number(args[3] / 100);
    let pensPrice = 5.80;
    let markersPrice = 7.20;
    let preparationsPrice = 1.20;
    let expenss = (pens*pensPrice+markers*markersPrice+preparations*preparationsPrice);
    let result = (expenss - expenss*discount);
    console.log(result);
}
suppliesForSchool(["4", "2", "5", "13"]);