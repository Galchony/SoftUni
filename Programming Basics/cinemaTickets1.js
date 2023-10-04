function cinemaTickets(args) {
    let index = 0;
    let command = args[index];
    let name = "";
    let totalCounter = 0;
    let totalStudentTicketCounter = 0;
    let totalStandardTicketCounter = 0;
    let totalKIdsTicketCounter = 0;
    while (command !== "Finish") {
        name = args[index];
        index++;
        let freeSeats = Number(args[index]);
        index++;
        command = args[index];
        let counter = 0;
        let studentTicketCounter = 0;
        let standardTicketCounter = 0;
        let kidTicketCounter = 0;
        while (command !== "End") {
            let typeOfTicket = command;
            counter++;
            switch (typeOfTicket) {
                case "student": studentTicketCounter++; break;
                case "standard": standardTicketCounter++; break;
                case "kid": kidTicketCounter++; break;
            }
            if (counter >= freeSeats) {
                break;
            }
            command = args[++index];
        }
        totalCounter += counter;
        totalStudentTicketCounter += studentTicketCounter;
        totalStandardTicketCounter += standardTicketCounter;
        totalKIdsTicketCounter += kidTicketCounter
        console.log(`${name} - ${(counter / freeSeats * 100).toFixed(2)}% full.`);
        command = args[++index];
    }
    console.log(`Total tickets: ${totalCounter}`);
    console.log(`${(totalStudentTicketCounter / totalCounter * 100).toFixed(2)}% student tickets.`);
    console.log(`${(totalStandardTicketCounter / totalCounter * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(totalKIdsTicketCounter / totalCounter * 100).toFixed(2)}% kids tickets.`);
}
cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
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

