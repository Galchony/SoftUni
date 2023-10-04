function changeTiles(args) {
    let n = Number(args[0]);
    let w = Number(args[1]);
    let l = Number(args[2]);
    let m = Number(args[3]);
    let o = Number(args[4]);
    let area = n*n;
    let bench = m*o;
    let tile = w*l; 
    let countOfTiles = ((area-bench)/tile);
    let time = countOfTiles*0.2;

    console.log (Math.round(countOfTiles*100)/100);
    console.log (Math.round(time*100)/100);
}
changeTiles(["20", "5", "4", "1", "2"]);