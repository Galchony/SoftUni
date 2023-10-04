function walking(args) {
    let goal = 10000;
    let index = 0;
    let command = args[index];
    let sum = 0;
    while (command !== "Going home") {
        let steps = Number(args[index]);
        sum += steps;
        if (sum >= goal) {
            console.log(`Goal reached! Good job!`);
            console.log(`${sum - goal} steps over the goal!`);
            break;
        }
        index++;
        command = args[index];
    }
    if (command === "Going home") {
        steps = Number(args[index + 1]);
        sum += steps;
        if (sum >= goal) {
            console.log(`Goal reached! Good job!`);
            console.log(`${sum - goal} steps over the goal!`);
        }
        else {
            console.log(`${goal-sum} more steps to reach goal.`);
        }
    }

}
walking(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])


