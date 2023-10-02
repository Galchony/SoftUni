function chessBoard(num) {
    let color = "black";
    console.log(`<div class="chessboard">`);
    for (let row = 0; row < num; row++) {
    console.log(`\t<div>`);
    for (let col = 0; col < num; col++) {
        (row+col) %2!==0 ? color = "white" : color = "black";
      console.log(`\t\t<span class="${color}"></span>`);     
    }
        console.log(`\t</div>`);
    }
    console.log(`</div>`);
}
chessBoard(3);