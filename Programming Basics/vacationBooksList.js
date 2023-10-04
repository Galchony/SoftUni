function vacationBooksList (args) {
let countOfPages = Number(args[0]);
let pagesFor1Hour = Number(args[1]);
let countOfDays = Number(args[2]);
let countOfHoursForDay = ((countOfPages/countOfDays)/pagesFor1Hour);
console.log (countOfHoursForDay);
}
vacationBooksList (["432","15","4"]);