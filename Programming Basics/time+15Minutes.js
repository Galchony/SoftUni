function time15Minutes(args) {
    let hour = Number(args[0]);
    let minutes = Number(args[1]);

    let enlargedMinutes = minutes + 15;
    let time = 0;
    if (enlargedMinutes >= 60) {
        hour += 1;
        enlargedMinutes = enlargedMinutes % 60;
    }
    if (enlargedMinutes < 10) {
        enlargedMinutes = ("0" + enlargedMinutes);
    }
    if (hour >= 24) {
        hour = 0;
    }
    time = (hour + ":" + enlargedMinutes);
    console.log(time);
}
time15Minutes(["1", "46"]);