function oscarsCeremony(args) {
    let rentForHall = Number(args[0]);
    let priceForStatuettes = rentForHall * 0.70;
    let priceForKettering = priceForStatuettes * 0.85;
    let priceForVoiceover = priceForKettering * 0.50;
    let result = rentForHall + priceForStatuettes + priceForKettering + priceForVoiceover;
    console.log(result.toFixed(2));
}

oscarsCeremony(["5555"])