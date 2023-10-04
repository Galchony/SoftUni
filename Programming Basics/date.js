function date(args) {
    const birthday = new Date(args);
    const day = birthday.getDate();
    const month = birthday.getMonth();
    const year = birthday.getFullYear();
    const birthday1 = birthday.setDate(1000+day);
   
    //const birthday1 = new Date (birthday.setDate(+1000));
    console.log (`${birthday.getDate()}-${birthday.getMonth}-${birthday.getFullYear}`);
    //`${birthday.getDate()}-${birthday1.getMonth()}-${birthday1.getFullYear}`;
}
date(["1995-02-25"]);