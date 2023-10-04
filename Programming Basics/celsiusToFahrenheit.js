function celsiusToFahrenheit(args) {
    let C = parseFloat(args[0]);
    let F = (C*1.8 +32);
    let result = F;
    console.log(result.toFixed(2));
}
celsiusToFahrenheit (["-5.5"]);