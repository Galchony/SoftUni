function pieceOfPie(arr, firstFlavor,secondFlavor) {
    let startIndex = arr.indexOf(firstFlavor);
    let endIndex = arr.indexOf(secondFlavor);
    let result = arr.slice(startIndex,endIndex+1);
    return result;
}
console.log(pieceOfPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
))