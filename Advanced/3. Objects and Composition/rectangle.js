function rectangle(width, height, color) {
    let obj = {
        width,
        height,
        color: color.split('').map((x, i) => {
            if (i === 0) {
                return x = x.toUpperCase();
            }
            return x;
        }).join(''),
        calcArea() {
            return this.width * this.height;
        }
    };

    return obj;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());