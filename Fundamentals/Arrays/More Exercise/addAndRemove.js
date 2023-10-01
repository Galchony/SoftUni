function addAndRemove(array) {
    let num = 1;
    let newArray = [];
    for (const command of array) {
        if (command === "add") {
            newArray.push(num);
        }
        else {
            newArray.pop();
        }
        num++;
    }
    console.log(newArray.length > 0 ? newArray.join(' ') : "Empty");
}
addAndRemove(['remove', 'remove', 'remove']);