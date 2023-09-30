function songs(arr) {
    let numOfSongs = arr[0];
    let type = arr[arr.length - 1];
    class Songs {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    for (let i = 1; i < arr.length - 1; i++) {
        let element = arr[i].split("_");
        let [typeList, name, time] = element;
        let song = new Songs(typeList, name, time);
        if (type === "all") {
            console.log(song.name);
        } else {
            if (song.typeList === type) {
                console.log(song.name);
            }
        }
    }
}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
)