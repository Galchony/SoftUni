function evenPositionElement(args) {
    let array = args;
    let nums = 0;
    let rowOfNums = "";
    for (let i = 0; i < array.length;i+=2){
        nums = array[i];
        rowOfNums += nums +" ";
    }
    console.log(rowOfNums.trim());

}
evenPositionElement(['20', '30', '40', '50', '60']);
evenPositionElement(['5', '10'])