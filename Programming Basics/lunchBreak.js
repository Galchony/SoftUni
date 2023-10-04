function lunchBreak(args) {
    let nameOfSeries = args[0];
    let durationOfEpisode = parseInt(args[1]);
    let durationOfBreak = parseInt(args[2]);

    let timeForLunch = durationOfBreak/8;
    let timeForRecreation = durationOfBreak/4;
    let allTimeYouNeed = timeForLunch+timeForRecreation+durationOfEpisode;
    if(allTimeYouNeed<=durationOfBreak) {
        console.log(`You have enough time to watch ${nameOfSeries} and left with ${Math.ceil(durationOfBreak-allTimeYouNeed)} minutes free time.`);
    }
    else {
        console.log(`You don't have enough time to watch ${nameOfSeries}, you need ${Math.ceil(allTimeYouNeed-durationOfBreak)} more minutes.`);
    }
    
}
lunchBreak(["Game of Thrones","60","96"]);
lunchBreak(["Teen Wolf","48","60"]);

