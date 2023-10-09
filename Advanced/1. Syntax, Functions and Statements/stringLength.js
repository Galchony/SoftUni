function stringLength(firstStr,secondStr,thirdStr) {
    let sum = firstStr.length+secondStr.length+thirdStr.length;
    let averageLength = Math.floor(sum/3);
    console.log(sum);
    console.log(averageLength);
}
stringLength('chocolate', 'ice cream', 'cake' )