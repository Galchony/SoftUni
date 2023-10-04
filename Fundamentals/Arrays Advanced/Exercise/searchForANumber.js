function searchForANumber(array, nums) {
    let numberOfElements = nums[0];
    let deleteCount = nums[1];
    let number = nums[2];
    let counter = 0;
    let newArray = array.slice(0, numberOfElements);
    newArray.splice(0, deleteCount);
    for (const el of newArray) {
        if (el === number) {
            counter++;
        }
    }
    console.log(`Number ${number} occurs ${counter} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3])
searchForANumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
)