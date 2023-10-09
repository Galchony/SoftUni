class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(point1, point2) {
        let distX = point2.x - point1.x;
        let distY = point2.y - point1.y;
        let dist = Math.sqrt(distX ** 2 + distY ** 2);
        return dist;
    }
}
let p1 = new Point(5, 5);
let p2 = new Point(10, 10);
console.log(Point.distance(p1, p2));
