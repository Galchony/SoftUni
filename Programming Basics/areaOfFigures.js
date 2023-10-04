function areaOfFigures(args) {
    let typeOfFigure = args[0];
    let area = 0;

    if (typeOfFigure == "square") {
        let a = parseFloat(args[1]);
        area = a * a;
    }
    if (typeOfFigure == "rectangle") {
        let a = parseFloat(args[1]);
        let b = parseFloat(args[2]);
        area = a * b;
    }
    if (typeOfFigure == "circle") {
        let r = parseFloat(args[1]);
        area = Math.PI * Math.pow(r, 2);
    }
    if (typeOfFigure == "triangle") {
        let a = parseFloat(args[1]);
        let h = parseFloat(args[2]);
        area = (a * h) / 2;
    }
    console.log(area.toFixed(3));


}
areaOfFigures(["square", "5"]);
areaOfFigures(["rectangle","7","2.5"]);
areaOfFigures(["circle","6"]);
areaOfFigures(["triangle","4.5","20"]);
