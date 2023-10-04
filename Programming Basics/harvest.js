function harvest (args){
let vineyard = parseInt(args[0]);
let grapes = Number(args[1]);
let vineForSale = parseInt(args[2]);
let workers = parseInt(args[3]);

let vineyardForVine = vineyard*0.40;
let grapesProduction = grapes*vineyardForVine;
let vineProduction = grapesProduction/2.5;
if (vineProduction<vineForSale) {
    console.log(`It will be a tough winter! More ${Math.floor(vineForSale-vineProduction)} liters wine needed.`);
}
else {
    console.log (`Good harvest this year! Total wine: ${Math.floor(vineProduction)} liters.`);
    console.log (`${Math.ceil(vineProduction-vineForSale)} liters left -> ${Math.ceil((vineProduction-vineForSale)/workers)} liters per person.`);
}

}
harvest (["1020", "1.5", "425", "4"]);