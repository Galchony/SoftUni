function tradeCommissions(args) {
    let town = args[0];
    let sales = Number(args[1]);
    let commission = 0;
    let isError = false;

    if (sales >= 0 && sales <= 500) {
        switch (town) {
            case "Sofia":
                commission = 0.05;
                break;
            case "Varna":
                commission = 0.045;
                break;
            case "Plovdiv":
                commission = 0.055;
                break;
            default:
                isError = true;
                console.log("error");
                break;
        }
    }
    else if (sales > 500 && sales <= 1000) {
        switch (town) {
            case "Sofia":
                commission = 0.07;
                break;
            case "Varna":
                commission = 0.075;
                break;
            case "Plovdiv":
                commission = 0.08;
                break;
            default:
                isError = true;
                console.log("error");
                break;
        }
    }
    else if (sales > 1000 && sales <= 10000) {
        switch (town) {
            case "Sofia":
                commission = 0.08;
                break;
            case "Varna":
                commission = 0.10;
                break;
            case "Plovdiv":
                commission = 0.12;
                break;

            default:
                isError = true;
                console.log("error");
                break;
        }
    }
    else if (sales>10000) {
        switch (town) {
            case "Sofia":
                commission = 0.12;
                break;
            case "Varna":
                commission = 0.13;
                break;
            case "Plovdiv":
                commission = 0.145;
                break;

            default:
                isError = true;
                console.log("error");
                break;
        }
    }
    else {
        isError = true;
        console.log("error");

    }
    if (isError !== true) {
        console.log((sales*commission).toFixed(2));
    }

}
tradeCommissions(["Sofia","1500"]);
tradeCommissions(["Plovdiv","499.99"]);
tradeCommissions(["Varna","3874.50"]);
tradeCommissions(["Kaspichan","-50"]);



