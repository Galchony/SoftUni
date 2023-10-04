function movieRatings(args) {
    let counntOfMovie = Number(args[0]);
    let nameOfMovie = "";
    let ratingOfMovie = 0;
    let maxRating = 0;
    let minRating = 11;
    let sumRating = 0;
    let maxRatingMovie = "";
    let minRatingMovie = "";
    
    for (let row = 1; row <= 2 * counntOfMovie; row += 2) {
        nameOfMovie = args[row];
        ratingOfMovie = Number(args[row + 1]);
        if (ratingOfMovie > maxRating) {
            maxRating = ratingOfMovie;
            maxRatingMovie = nameOfMovie;
        }
        if (ratingOfMovie<minRating) {
            minRating = ratingOfMovie;
            minRatingMovie = nameOfMovie;
        }
        sumRating +=ratingOfMovie;
    }
    console.log(`${maxRatingMovie} is with highest rating: ${maxRating.toFixed(1)}`);
    console.log(`${minRatingMovie} is with lowest rating: ${minRating.toFixed(1)}`);
    console.log(`Average rating: ${(sumRating/counntOfMovie).toFixed(1)}`);
}
movieRatings(["5",
"A Star is Born",
"7.8",
"Creed 2",
"7.3",
"Mary Poppins",
"7.2",
"Vice",
"7.2",
"Captain Marvel",
"7.1"])
