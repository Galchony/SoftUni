function login(input) {
    let user = input[0];
    let pass = "";
    let attempt = "";
    for (let i = 0; i < user.length; i++) {
        pass += user[user.length - 1 - i];
    }
    for (let i = 1; i <= 4; i++) {
        attempt = input[i];
        if (attempt == pass) {
            console.log(`User ${user} logged in.`);
            break;
        }
        else {
            if (i == 4) {
                console.log(`User ${user} blocked!`);
            }
            else {
                console.log(`Incorrect password. Try again.`);
            }
        }
    }
}
login(['Acer', 'login', 'go', 'let me in', 'recA']);
login(['momo','omom']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])


