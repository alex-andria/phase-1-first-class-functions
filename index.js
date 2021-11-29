
function receivesAFunction(cb){
    return cb();
}

function returnsANamedFunction(){
    
    function namedFunc () {
        return console.log("This is the callback of a named function.");
    }
    
    return namedFunc;
}

function returnsAnAnonymousFunction(){
    
    return () => console.log("This is the callback of an anonymous function.")
    
}