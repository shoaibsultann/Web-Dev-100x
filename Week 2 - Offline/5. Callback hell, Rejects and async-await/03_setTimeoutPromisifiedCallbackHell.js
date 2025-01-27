

function setTimeoutPromisified(duration){
    return new Promise(function (resolve) {
        setTimeout(resolve, duration);
    });
}

setTimeoutPromisified(1000).then(function(){
    console.log("Hi");
    setTimeoutPromisified(3000).then(function(){
        console.log("Hello");
        setTimeoutPromisified(5000).then(function(){
            console.log("Hello There");
        });
    });
});

console.log("Outside the Callback Hell");
