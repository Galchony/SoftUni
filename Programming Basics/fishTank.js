function fishTank(args) {
    let length = Number(args[0]);
    let width = Number(args[1]);
    let height = Number(args[2]);
    let rateOfOtherStuff= Number(args[3]/100);
    let volume = (length*width*height);
    let volumeInLiters = volume/1000;
    let result = (volumeInLiters - volumeInLiters*rateOfOtherStuff);
    console.log(result);

}
fishTank(["105", "77", "89", "18.5"]);
