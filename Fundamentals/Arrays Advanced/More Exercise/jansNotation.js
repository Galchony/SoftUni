function jansNotation(array) {
    let result = Number;
    let nums = [];
    let operators = [];
    let counterOfNums = 0;
    let isTrue = false;
    if (array.length < 3) {
        for (let index = 0; index < array.length; index++) {
            if (typeof array[index] === "number") {
                counterOfNums++;
            }
        }
        if (counterOfNums > 1) {
            console.log(`Error: too many operands!`);
        } else {
            console.log(`Error: not enough operands!`);
        }
    } else {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (typeof (element) === "number") {
            nums.push(element);
        } else {
            let operator = element;
            if (nums.length < 2) {
                console.log(`Error: not enough operands!`);
                isTrue = true;
                break;
            }
            let num = nums[nums.length - 2];
            let secondNum = nums[nums.length - 1];

            if (operator === "+") {
                result = num + secondNum;
            } else if (operator === "-") {
                result = num - secondNum;
            } else if (operator === "*") {
                result = num * secondNum;
            } else if (operator === "/") {
                result = num / secondNum;
            }
            array.splice(index - 2, 3, result);
            index -= 2;
            nums.splice(- 2, 2, result)
        }
    }
    if (array.length > 1) {
        if (nums.length > 1) {
            console.log(`Error: too many operands!`);
        }

    } else {
        console.log(array.join());
    }
    }

}

jansNotation([1,
    ]
      );