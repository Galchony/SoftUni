function summerOutfit(args) {
    let degrees = Number(args[0]);
    let time = args[1];

    let outfit = "";
    let shoes = "";
    if (time === "Morning") {
        if (10 <= degrees && degrees <= 18) {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        }
        else if (18 < degrees && degrees <= 24) {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
        else if (25 <= degrees) {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
    }
    if (time === "Afternoon") {
        if (10 <= degrees && degrees <= 18) {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
        else if (18 < degrees && degrees <= 24) {
            outfit = "T-Shirt";
            shoes = "Sandals"
        }
        else if (25 <= degrees) {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        }
    }
    if (time === "Evening") {
        if (10 <= degrees && degrees <= 18) {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
        else if (18 < degrees && degrees <= 24) {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
        else if (25 <= degrees) {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }
 console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}
summerOutfit(["10", "Morning"])
