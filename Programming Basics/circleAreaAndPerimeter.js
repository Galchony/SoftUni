function circleAreaAndPerimeter(args) {
    let r = Number(args[0]);

    let area = (Math.PI*r*r).toFixed(2);
    let perimeter = (2*Math.PI*r).toFixed(2);

    console.log(area);
    console.log(perimeter);
}
circleAreaAndPerimeter (["3"]);