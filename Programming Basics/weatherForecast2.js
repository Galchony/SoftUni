function weatherForecast(args) {
    let degree = Number(args[0]);
    if (degree <= 35 & degree >= 26) {
        console.log("Hot");
    }
    else if (degree <= 25.9 & degree >= 20.1) {
        console.log("Warm");
    }
    else if (degree <= 20 & degree >= 15) {
        console.log("Mild");
    }
    else if (degree <= 14.9 & degree >= 12) {
        console.log("Cool");
    } 
    else if (degree <= 11.9 & degree >= 5) {
        console.log("Cold");
    }
    else {
        console.log("unknown");
    }
}
weatherForecast(["0"])