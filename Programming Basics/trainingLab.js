function trainingLab(args) {
let l = Number(args[0])*100;
let w = Number(args[1])*100;
let workPlaceW = 70;
let workPlaceL = 120;
let corridorAreaW = 100;
let countOfWorkPLaceInW = parseInt((w - corridorAreaW)/workPlaceW);
let countOfWorkPLaceInL = parseInt (l/workPlaceL);
let sumPlace = (countOfWorkPLaceInW*countOfWorkPLaceInL)
let result = (sumPlace-3);
console.log(result);
}
trainingLab(["8.4", "5.2"]);