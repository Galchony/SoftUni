function weddingSeats(args) {
    let lastSector = args[0];
    let countOfRowsInA = Number(args[1]);
    let countOfSeatsOnOddRow = Number(args[2]);
    let firstSector = "A";
    let sector = "";
    let row = "";
    let seat = "";
    let totalCount = 0;
    for (let s = firstSector.charCodeAt(); s <= lastSector.charCodeAt(); s++) {
        sector = String.fromCharCode(s);
        for (let r = 1; r <= countOfRowsInA; r++) {
            row = Number(r);
            if (row % 2 === 1) {
                for (let st = 1; st <= countOfSeatsOnOddRow; st++) {
                     seat = String.fromCharCode(st+96);
                     console.log(`${sector}${row}${seat}`);
                     totalCount +=1;
                }
            }
            else {
                for (let st = 1; st <= countOfSeatsOnOddRow+2; st++) {
                    seat = String.fromCharCode(st+96);
                    console.log(`${sector}${row}${seat}`);
                    totalCount +=1;
                }
            }
        }
        countOfRowsInA +=1;

    }
    console.log(totalCount);
}
weddingSeats(["C", "4", "2"])