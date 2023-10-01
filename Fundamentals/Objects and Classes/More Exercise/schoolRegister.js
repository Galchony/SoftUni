function schoolRegister(input) {
    let objNames = {};
    let objScore = {};

    for (const line of input) {
        let arr = [];
        let pairs = line.split(", ")
        let name = pairs[0].split(": ")[1];
        let grade = pairs[1].split(": ")[1];
        let score = Number(pairs[2].split(": ")[1]);
        // arr.push([name, score])
        if (score < 3) {
            continue;
        }
        if (objScore.hasOwnProperty(grade)) {
            objScore[grade] += score;
        } else {
            objScore[grade] = score;
        }
        if (objNames.hasOwnProperty(grade)) {
            arr = objNames[grade];
            arr.push(name);
            objNames[grade] = arr;
        } else {
            arr.push(name);
            objNames[grade] = arr;
        }
    }
    let sortedGrades = Object.keys(objNames).sort((a, b) => a - b);
    for (const grade of sortedGrades) {
        let nextGrade = Number(grade)+1;
        console.log(`${nextGrade} Grade`);
        console.log(`List of students: ${objNames[grade].join(", ")}`);
        console.log(`Average annual score from last year: ${(objScore[grade] / objNames[grade].length).toFixed(2)}`);
        console.log(``);
    }
}
schoolRegister([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
    ]
    
)