function graduation(args) {
    let name = args[0];
    let grade = 0;
    let group = 1;
    let repietGroup = 0;
    let sumOfGrades = 0;
    for (let index = 1; index < args.length; index++) {
        grade = parseFloat(args[index]);
        sumOfGrades += grade;
        if (grade < 4) {
            repietGroup ++;
            sumOfGrades -= grade;
            if (repietGroup >=2) {
                console.log(`${name} has been excluded at ${group} grade`);
                break;
            }
            group--;
        }
        group++;
    }
    if (repietGroup <2) {
    console.log(`${name} graduated. Average grade: ${(sumOfGrades/(12)).toFixed(2)}`);
    }
}
graduation(["Mimi", 
"6",
"6",
"6",
"6",
"6",
"6",
"6",
"6",
"6","6","6","4","4"])

