function cinema(args) {
    let capacity = Number(args[0]);
    let countOfPeople = "";
    let totalCountOfPeople = 0;
    let priceOfTicket = 5;
    let countOfDisscount = 0;
    for (let i = 1; i < args.length; i++) {
        countOfPeople = (args[i]);
        if (countOfPeople === "Movie time!") {
            console.log(`There are ${capacity - totalCountOfPeople} seats left in the cinema.`);
            break;
        }
        countOfPeople = Number(args[i]);
        if (capacity < totalCountOfPeople + countOfPeople) {
            console.log(`The cinema is full.`);
            break;
        }
        totalCountOfPeople += countOfPeople;
        if (countOfPeople % 3 === 0 && capacity >= totalCountOfPeople) {
            countOfDisscount += 1;
        }
       
    }
    console.log(`Cinema income - ${totalCountOfPeople * priceOfTicket - countOfDisscount * 5} lv.`);
}
cinema(["100","15","15","15","15","15","15","15"
    
])


