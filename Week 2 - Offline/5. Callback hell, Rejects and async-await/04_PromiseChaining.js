function setTimeoutPromisified(duration) {
    return new promise(function(resolve){
        setTimeout(resolve, duration)
    });
}

setTimeoutPromisified(1000)
    .then(function(){
        console.log("Hi");
        return setTimeoutPromisified(3000)
    })
    .then(function(){
        console.log("Hello");
        return setTimeoutPromisified(5000);
    })
    .then(function(){
        console.log("Hello There");
    });