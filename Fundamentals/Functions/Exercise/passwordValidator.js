function passwordValidator(pass) {
    let buff = 0;
    if (pass.length <= 10 && pass.length >= 6) {
        buff++;
    } else {
        console.log(`Password must be between 6 and 10 characters`);
    }

    if (validPass(pass)) {
        buff++;
    } else {
        console.log(`Password must consist only of letters and digits`);
    }

    if (isThereAtLeastTwoDigits(pass)) {
        buff++;
    } else {
        console.log(`Password must have at least 2 digits`);
    }

    if (buff === 3) {
        console.log(`Password is valid`);
    }

    function validPass(a) {
        for (let index = 0; index < a.length; index++) {
            const char = a[index];
            if (char.charCodeAt() >= 65 && char.charCodeAt() < 91) {
                continue;
            } else if (char.charCodeAt() >= 97 && char.charCodeAt() < 123) {
                continue;
            } else if (char.charCodeAt() >= 48 && char.charCodeAt() < 58) {
                continue;
            } else {
                return false;
            }
        }
        return true;
    }

    function isThereAtLeastTwoDigits(a) {
        let counter = 0;
        for (let index = 0; index < a.length; index++) {
            const char = a[index];
            if (char.charCodeAt() >= 48 && char.charCodeAt() < 58) {
                counter++;
                if (counter === 2) {
                    return true;
                }
            }
        }
        return false;
    }

}
passwordValidator('MyPass123');