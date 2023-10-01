function movies(arr) {
    let newArray = [];
    for (const el of arr) {
        let command = el;
        if (command.includes("addMovie")) {
            let obj = {};
            let action = command.split(" ");
            action.shift();
            obj.name = action.join(" ");
            newArray.push(obj);
        } else if (command.includes("directedBy")) {
            let action = command.split(" directedBy ");
            let name = action[0];
            let director = action[1];
            for (const el of newArray) {
                if (el.name === name) {
                    el.director = director;
                }
            }
        } else if (command.includes("onDate")) {
            let action = command.split(" onDate ");
            let name = action[0];
            let date = action[1];
            for (const el of newArray) {
                if (el.name === name) {
                    el.date = date;
                }
            }
        }
    }
    // console.log(newArray)
    for (const el of newArray) {
        if (el.hasOwnProperty("director") && el.hasOwnProperty("date")) {
            let movieJson = JSON.stringify(el);
            console.log(movieJson);
        }
    }
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)