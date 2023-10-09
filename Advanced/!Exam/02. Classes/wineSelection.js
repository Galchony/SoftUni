class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.wines.length >= this.space) {
            throw new Error('Not enough space in the cellar.');
        }
        this.wines.push({ wineName, wineType, price, paid: false })
        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle(wineName, price) {
        let wineToSell = this.wines.find(x => x.wineName == wineName);
        if (!wineToSell) {
            throw new Error(`${wineName} is not in the cellar.`);
        }
        else if (wineToSell.paid) {
            throw new Error(`${wineName} has already been paid.`);
        } else {
            wineToSell.paid = true;
            this.bill += Number(price);
        }
        return `You bought a ${wineName} for a ${price}$.`
    }

    openBottle(wineName) {
        let wineToOpen = this.wines.find(x => x.wineName == wineName);
        if (!wineToOpen) {
            throw new Error(`The wine, you're looking for, is not found.`);
        } else if (!wineToOpen.paid) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        } else {
            this.wines = this.wines.filter(x => x != wineToOpen);
            return `You drank a bottle of ${wineName}.`;
        }
    }

    cellarRevision(wineType) {
        if (!wineType) {
            let emptySlots = this.space - this.wines.length;
            return `You have space for ${emptySlots} bottles more.\nYou paid ${this.bill}$ for the wine.\n${this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName)).map(x => `${x.wineName} > ${x.wineType} - ${x.paid ? `Has Paid` : `Not Paid`}.`).join('\n')}`
        } else {
            let result = this.wines.filter(x => x.wineType == wineType).map(x => `${x.wineName} > ${x.wineType} - ${x.paid ? 'Has Paid' : 'Not Paid'}.`);
            if (result.length === 0) {
                return `There is no ${wineType} in the cellar.`
            } else {
                return result.join('\n')
            }
        }
    }
}

// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
// console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));



// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White',50);
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White',50);
// console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
// console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
// // console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));
// console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
// console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
// console.log(selection.cellarRevision());


// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
// console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
// console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));

// const selection = new WineSelection(2)
// console.log(1);
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144)); 
// console.log(selection.cellarRevision('Rose'));


const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'Rose', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());