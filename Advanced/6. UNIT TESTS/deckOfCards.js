function deckOfCards(arr) {
    function playingCards(face, suit) {
        let faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        let suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        };
        if (!faces.includes(face) || !Object.keys(suits).includes(suit)) {
            throw new Error;
            
        }
        let obj = {
            face,
            suit,
            toString() {
                return this.face + suits[this.suit];
            }
        }
        return obj;
    }
    let result = [];
    for (const el of arr) {
        try {
            // playingCards(el.substring(0, el.length - 1), el[el.length - 1])
            result.push(playingCards(el.substring(0, el.length - 1), el[el.length - 1]));
        } catch (error) {
            console.log(`Invalid card: ${el}`);
            return;
        }
    }

    console.log(result.map(x => x.toString()).join(" "));
}
// deckOfCards(['AS', '10D', 'KH', '2C']);
deckOfCards(['5S', '3D', 'QD', '1C']);