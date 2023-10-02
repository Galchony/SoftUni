function echoType(params) {
    let type = typeof (params);
    console.log(type);
    type == "string" || type == "number" 
    ? console.log((params)) 
    : console.log("Parameter is not suitable for printing");

}
echoType('Hello, JavaScript!');
echoType(1);
echoType(null);