function building(args) {
    let countOfFloors = Number(args[0]);
    let countOfRooms = Number(args[1]);
    let stringOfRooms = "";
    let numOfRooms = "";
    for (let i = countOfFloors; i >= 1; i--) {
        numOfRooms = "";
        if (i === countOfFloors) {
            stringOfRooms = "L";
        }
        else if (i%2===0){
            stringOfRooms = "O";
        }
        else {
            stringOfRooms = "A";
        }
        for (let j = 0; j < countOfRooms; j++) {
          numOfRooms += `${stringOfRooms}${i}${j} `
        }
        console.log(numOfRooms);

    }
}
building(["9", "5"])