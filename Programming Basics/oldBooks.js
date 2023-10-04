function oldBooks(args) {
    let favoriteBook = args[0];
    let index = 1;
    let currentBook = args[index];
    let countOfBooks = 0;
    while (currentBook !== favoriteBook) {
        if (currentBook === "No More Books") {
            break;
        }
        countOfBooks++;
        index++;
        currentBook = args[index];
    }
    if (currentBook === favoriteBook) {
        console.log(`You checked ${countOfBooks} books and found it.`);
    }
    else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${countOfBooks} books.`);
    }
}
oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])


