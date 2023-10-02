function triangleArea(a, b, c) {
    let area = Math.sqrt((a + b + c) / 2 * ((a + b + c) / 2 - a) * ((a + b + c) / 2 - b) * ((a + b + c) / 2 - c));
    console.log(area);
}
triangleArea(2, 3.5, 4);
triangleArea(3, 5.5, 4);