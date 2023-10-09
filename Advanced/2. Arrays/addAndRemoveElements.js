function addAndRemoveElements(arr) {
    let num = 1;
    let result = [];
    for (const command of arr) {
        command === 'add' ? result.push(num) : result.pop(num);
        num++
    }

    if (result.length === 0) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
    }
}

addAndRemoveElements(['remove',
'remove',
'remove']
)