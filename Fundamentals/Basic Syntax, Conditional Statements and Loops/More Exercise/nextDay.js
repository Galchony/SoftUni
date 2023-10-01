function nextDay(year, month, day) {
    let nextDay = day + 1;
    if (month == 1 && nextDay == 32) {
        month++;
        nextDay = 1;
    } else if (month == 2 && nextDay == 29 && year % 4 != 0) {
        month++;
        nextDay = 1;
    } else if (month == 2 && nextDay == 30 && year % 4 == 0) {
        month++;
        nextDay = 1;
    } else if (month == 3 && nextDay == 32) {
        month++;
        nextDay = 1;
    } else if (month == 4 && nextDay == 31) {
        month++;
        nextDay = 1;
    } else if (month == 5 && nextDay == 32) {
        month++;
        nextDay = 1;
    } else if (month == 6 && nextDay == 31) {
        month++;
        nextDay = 1;
    } else if (month == 7 && nextDay == 32) {
        month++;
        nextDay = 1;
    } else if (month == 8 && nextDay == 32) {
        month++;
        nextDay = 1;
    } else if (month == 9 && nextDay == 31) {
        month++;
        nextDay = 1;
    } else if (month == 10 && nextDay == 32) {
        month++;
        nextDay = 1;
    } else if (month == 11 && nextDay == 31) {
        month++;
        nextDay = 1;
    } else if (month == 12 && nextDay == 32) {
        month = 1;
        year = year + 1;
        nextDay = 1;
    }
    if(year == 1) {
        year = 1901;
    }
    console.log(`${year}-${month}-${nextDay}`);
}
nextDay(01, 1, 1);
//nextDay(2024, 2, 29);

