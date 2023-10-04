function movieDay(args) {
    let timeForAction = Number(args[0]);
    let countOfScenes = Number(args[1]);
    let durationOfScene = Number(args[2]);
    let preparation = 0.15*timeForAction;
    if (timeForAction>=(countOfScenes*durationOfScene+preparation)) {
console.log(`You managed to finish the movie on time! You have ${Math.round(timeForAction-(countOfScenes*durationOfScene+preparation))} minutes left!`);
    }
    else {
console.log(`Time is up! To complete the movie you need ${Math.round((countOfScenes*durationOfScene+preparation)-timeForAction)} minutes.`);
    }
}

movieDay(["54",
"15",
"3"])

