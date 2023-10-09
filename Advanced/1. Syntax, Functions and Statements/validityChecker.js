function validityChecker(x1, y1, x2, y2) {
    const output = (x1, y1, x2, y2) => {
        let distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
        let status = Number.isInteger(distance) ? 'valid' : 'invalid';
        return `{${x1}, ${y1}} to {${x2}, ${y2}} is ${status}`;
    }

    console.log(output(x1, y1, 0, 0));
    console.log(output(x2, y2, 0, 0));
    console.log(output(x1, y1, x2, y2));
}

validityChecker(3, 0, 0, 4);