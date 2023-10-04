function seriesCalculator(args) {
    let name = args[0];
    let countOfSeasons = Number(args[1]);
    let countOfEpisodes = Number(args[2]);
    let duration = Number(args[3]);
    let time = countOfSeasons* countOfEpisodes*duration*1.2 + countOfSeasons*10;
    console.log(`Total time needed to watch the ${name} series is ${time} minutes.`);
}
seriesCalculator(["Game of Thrones",
"7",
"10",
"50"])

