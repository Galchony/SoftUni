function trainTheTrainers(args) {
    let countOfJury = Number(args[0]);
    let sumGrade = 0;
    let counter = 0;
    let totalSumGrade = 0;
    for (let i = 1; i <= args.length; i++) {
        let command = args[i];
        if (command === "Finish") {
            break;
        }
        let name = args[i];
        i++;
        sumGrade = 0;
        for (let j = i; j < i + countOfJury; j++) {
            counter++;
            let grade = Number(args[j]);
            sumGrade += grade;

        }
        i = i + countOfJury-1;
        totalSumGrade += sumGrade;
        console.log(`${name} - ${(sumGrade / countOfJury).toFixed(2)}.`);
      
    }
    console.log(`Student's final assessment is ${(totalSumGrade / counter).toFixed(2)}.`);
}
trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])

