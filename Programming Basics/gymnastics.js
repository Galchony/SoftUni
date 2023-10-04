function gymnastics(args) {
    let country = args[0];
    let appliance = args[1];
    let grade = 0;

    switch (country) {
        case "Russia":
            if (appliance === "ribbon") {
                grade = 9.100 + 9.400;
            }
            else if (appliance === "hoop") {
                grade = 9.300 + 9.800;
            }
            else if (appliance === "rope") {
                grade = 9.600 + 9.000;
            }
            break;
        case "Bulgaria":
            if (appliance === "ribbon") {
                grade = 9.600 + 9.400;
            }
            else if (appliance === "hoop") {
                grade = 9.550 + 9.750;
            }
            else if (appliance === "rope") {
                grade = 9.500 + 9.400;
            }
            break;

        case "Italy":
            if (appliance === "ribbon") {
                grade = 9.200 + 9.500;
            }
            else if (appliance === "hoop") {
                grade = 9.450 + 9.350;
            }
            else if (appliance === "rope") {
                grade = 9.700 + 9.150;
            }
            break;
    }
    let maxGrade = 20;

    console.log(`The team of ${country} get ${(grade).toFixed(3)} on ${appliance}.`);
    console.log(`${((1-grade/maxGrade)*100).toFixed(2)}%`);
}
gymnastics(["Russia",
"rope"])

