function requestValidator(obj) {
    let wrong = "";
    // try {
    let httpRequest = {
        method: ["GET", "POST", "DELETE", "CONNECT"],
        uri: 'a',
        version: ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"],
        message: ''
    }
    let uriPattern = /^[A-Za-z0-9.]+$/;
    let messagePattern = /[<>&\\"']/;
    if (obj.hasOwnProperty("method")) {
        if (!httpRequest.method.includes(obj.method)) {
            wrong = "Method";
            throw new Error(`Invalid request header: Invalid ${wrong}`);
        }
    } else {
        wrong = "Method";
        throw new Error(`Invalid request header: Invalid ${wrong}`);
    }
    if (obj.hasOwnProperty("uri")) {
        if (!uriPattern.test(obj.uri) && obj.uri != "*") {
            wrong = "URI";
            throw new Error(`Invalid request header: Invalid ${wrong}`);
        }
    } else {
        wrong = "URI";
        throw new Error(`Invalid request header: Invalid ${wrong}`);
    }
    if (obj.hasOwnProperty("version")) {
        if (!httpRequest.version.includes(obj.version)) {
            wrong = "Version";
            throw new Error(`Invalid request header: Invalid ${wrong}`);
        }
    } else {
        wrong = "Version";
        throw new Error(`Invalid request header: Invalid ${wrong}`);
    }
    if (obj.hasOwnProperty("message")) {
        if (messagePattern.test(obj.message)) {
            wrong = "Message";
            throw new Error(`Invalid request header: Invalid ${wrong}`);
        }
    } else {
        wrong = "Message";
        throw new Error(`Invalid request header: Invalid ${wrong}`);
    }
    return obj;
    // } catch (error) {
    //     return `Invalid request header: Invalid ${wrong}` ;
    // }
}
console.log(requestValidator({
    method: 'GET',
    uri: '**',
    version: 'HTTP/1.1',
    message: ''
}
))
console.log(requestValidator({
    method: 'GET',
    uri: 'a',
    version: 'HTTP/1.1',
    message: '\\-recursive'
})

)
