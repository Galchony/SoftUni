function latinLetters() {
    let abc ="";
    for (let row = 97 ; row<=122; row++) {
        abc += `${String.fromCharCode(row)} `;
    }
    console.log(abc);
}
latinLetters()