function basketballEquipment(args) {
    let feeForYear = Number(args[0]);
    let sneakers = feeForYear*0.60;
    let outfit = sneakers*0.80;
    let ball = outfit/4;
    let others = ball/5;
    let result = feeForYear+sneakers+outfit+ball+others;
    console.log(result.toFixed(2));
}
basketballEquipment(["320"]) 