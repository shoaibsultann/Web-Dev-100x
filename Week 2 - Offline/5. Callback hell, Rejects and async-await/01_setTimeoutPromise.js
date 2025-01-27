function setTimeoutPromisified(duration){
    return new Promise(function (resolve) {
        setTimeout(resolve, duration);
    });
}

function callback() {
    console.log("5 sec passed");
}

setTimeoutPromisified(5000).then(callback);