function examPreparation(args) {
    let maxCountOfBadGrade = Number(args[0]);
    let index = 1;
    let nameOftask = args[index];
    let countOfTask = 0;
    let sumOfGrades = 0;
    let countOfBadGrade = 0;
    while (nameOftask !== "Enough") {
        index++;
        countOfTask++;
        let grade = Number(args[index]);
        sumOfGrades += grade;

        if (grade <= 4) {
            countOfBadGrade++;
            if (countOfBadGrade === maxCountOfBadGrade) {
                console.log(`You need a break, ${countOfBadGrade} poor grades.`);
                break;
            }
        }
        index++;
        nameOftask = args[index];
    }
    if (nameOftask === "Enough") {
        nameOftask = args[index-2];
        console.log(`Average score: ${(sumOfGrades/countOfTask).toFixed(2)}`);
        console.log(`Number of problems: ${ countOfTask}`);
        console.log(`Last problem: ${nameOftask}`);
    }
}
examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])

