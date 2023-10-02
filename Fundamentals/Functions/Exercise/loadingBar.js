function loadingBar(num) {
   if (num === 100) {
        console.log(`${num}% Complete!`);
        console.log("[" + "%".repeat(num / 10) + ".".repeat(10 - num / 10) + "]");
    } else {
        console.log(num + "% " + "[" + "%".repeat(num / 10) + ".".repeat(10 - num / 10) + "]");
        console.log(`Still loading...`);
    }
}
loadingBar(50);
loadingBar(100);

// 30% [%%%.......]
// Still loading...
