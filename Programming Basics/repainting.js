function repainting(args) {
    let nylon = Number(args[0]);
    let paint = Number(args[1]);
    let thinner = Number(args[2]);
    let hours = Number(args[3]);
    let nylonPrice = 1.50;
    let paintPrice = 14.50;
    let thinnerPrice = 5.00;
    let expenssForMaterials = (((nylon + 2) * nylonPrice) + ((paint * 1.1) * paintPrice) + thinner * thinnerPrice + 0.40);
    let sumForWorkHour = (expenssForMaterials * 0.3);
    let result = (expenssForMaterials+sumForWorkHour*hours)
    console.log(result);
}
repainting(["5", "10", "10", "1"]);