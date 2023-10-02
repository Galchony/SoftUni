function radioCrystals(array) {
    let thicknessTarget = array[0];
    for (let i = 1; i < array.length; i++) {
        let cristal = array[i];
        console.log(`Processing chunk ${cristal} microns`);
        let counter = 0;
        while (cristal / 4 >= thicknessTarget) {
            cristal = cut(cristal);
            counter++;
        }
        if (counter !== 0) {
            console.log(`Cut x${counter}`);
            console.log(`Transporting and washing`);
        }
        counter = 0;
        while ((cristal * 0.80) >= thicknessTarget) {
            cristal = lap(cristal);
            counter++;
        }
        if (counter !== 0) {
            console.log(`Lap x${counter}`);
            console.log(`Transporting and washing`);
        }
        counter = 0;
        while ((cristal - 20) >= thicknessTarget) {
            cristal = grind(cristal);
            counter++;
        }
        if (counter !== 0) {
            console.log(`Grind x${counter}`);
            console.log(`Transporting and washing`);
        }
        counter = 0;
        while ((cristal - 2) >= thicknessTarget - 1) {
            cristal = etch(cristal);
            counter++;
        }
        if (counter !== 0) {
            console.log(`Etch x${counter}`);
            console.log(`Transporting and washing`);
        }
        counter = 0;
        if ((cristal + 1) === thicknessTarget) {
            cristal = xRay(cristal);
            counter++;
            console.log(`X-ray x${counter}`);
        }
        console.log(`Finished crystal ${thicknessTarget} microns`);

    }

    function cut(a) {
        return a / 4;
    }
    function lap(a) {
        return a * 0.80;
    }
    function grind(a) {
        return a - 20;
    }
    function etch(a) {
        return a - 2;
    }
    function xRay(a) {
        return a + 1;
    }
}
// radioCrystals([1375, 50000]);
radioCrystals([1000, 4000, 8100]);