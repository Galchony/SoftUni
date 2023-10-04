function cinemaTickets(args) {
    let nameOfMovie = "";
    let placeInHall = 0;
    let typeOfTicket = "";

    let sumOfTickets = 0;
    let totalSumOfTickets = 0;

    let totalCountOfStudentsTickets = 0;
    let totalCountOfStandartTickets = 0;
    let totalCountOfKidsTickets = 0;
    for (let i = 0; i < args.length; i += (sumOfTickets + 2)) {
        if (typeOfTicket === "End") {
            i += 1;
        }
        nameOfMovie = args[i];
        placeInHall = Number(args[i + 1]);
        sumOfTickets = 0;
        if (nameOfMovie === "Finish") {
            break;
        }
        for (let row = i; row < i + placeInHall; row++) {
            typeOfTicket = args[row + 2];
            if (typeOfTicket === "End") {
                break;
            }
            if (typeOfTicket === "student") {
                totalCountOfStudentsTickets += 1;
            }
            else if (typeOfTicket === "standard") {
                totalCountOfStandartTickets += 1;
            }
            else if (typeOfTicket === "kid") {
                totalCountOfKidsTickets += 1;
            }
            sumOfTickets += 1;
        }
        totalSumOfTickets += sumOfTickets;
        console.log(`${nameOfMovie} - ${((sumOfTickets / placeInHall) * 100).toFixed(2)}% full.`);
    }
    console.log(`Total tickets: ${totalSumOfTickets}`);
    console.log(`${((totalCountOfStudentsTickets / totalSumOfTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((totalCountOfStandartTickets / totalSumOfTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((totalCountOfKidsTickets / totalSumOfTickets) * 100).toFixed(2)}% kids tickets.`);
}
cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student","standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])
