function salary(args) {
    let n = Number(args[0]);
    let salary = Number(args[1]);
    let page = "";
    for (let index = 2; index < n + 2; index++) {
        page = args[index];
        if (page === "Facebook") {
            salary -= 150;
        }
        else if (page === "Instagram") {
            salary -= 100;
        }
        else if (page === "Reddit") {
            salary -= 50;
        }
        if (salary <= 0) {
            console.log(`You have lost your salary.`);
            break;
        }
    }
    if (salary>0){
        console.log(Math.trunc(salary));
    }
}
salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])

