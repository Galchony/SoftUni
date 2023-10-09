function daysInAmonth(month, year) {
    let day = new Date(year, month, 0);
    return day.getDate();
}
daysInAmonth(2, 2021)