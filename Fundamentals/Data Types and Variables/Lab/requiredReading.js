function requiredReading(numberOFPages, speedOfReading, days) {
    let hours = numberOFPages / days / speedOfReading;
    console.log(hours);
}
requiredReading(212, 20, 2);
requiredReading(432, 15, 4);