function renovation(args) {
    let height = parseInt(args[0]);
    let width = parseInt(args[1]);
    let percentUnpaintArea = parseInt(args[2]);
    let litersPaint = "";
    let sumOfPaint = 0;
    let area = Math.ceil((4 * height * width) - ((4 * height * width) * percentUnpaintArea / 100));

    for (let row = 3; row <= Number.POSITIVE_INFINITY; row++) {
        litersPaint = (args[row]);
        if (litersPaint === "Tired!" || litersPaint === undefined) {
            break;
        }
        else {
            litersPaint = Number(args[row]);
            sumOfPaint += litersPaint;
        }
    }
    if (litersPaint === "Tired!") {
        console.log(`${(area - sumOfPaint)} quadratic m left.`);
    }
    else if (sumOfPaint > area) {
        console.log(`All walls are painted and you have ${(sumOfPaint - area)} l paint left!`);
    }
    else if (area = sumOfPaint) {
        console.log(`All walls are painted! Great job, Pesho!`);
    }


}
//renovation([3, 5, 10, 2, 3, 4, "Tired!"]);
renovation([2, 3, 25, 6, 7, 8,]);