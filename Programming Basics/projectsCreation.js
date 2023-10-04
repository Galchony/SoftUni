function projectsCreation(args) {
    let name = (args[0]);
    let count = (args[1]);
    let workHours = (count * 3);
    console.log(`The architect ${name} will need ${workHours} hours to complete ${count} project/s.`);
}

projectsCreation(["Galia", "4"]);

