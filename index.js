function receivesAFunction(callBack) {
    callBack();
}

function returnsANamedFunction() {
    return function namedFunction () {
    console.log("this is a named function");
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("this is an anonymous function")
    }
}