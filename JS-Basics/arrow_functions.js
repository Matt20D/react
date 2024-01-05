const X = function() {
    // this here is the caller of x
}


// these are good for handlers b/c we can define funcs in the env it is called. 
const Y = () => {
    // this here is not the caller of Y

    // its the same this found in Y's scope at the time of invocation
}

// obj literals
cosnt obj = {
    key: value
}

const mystery = 'answer'; 
const InverseOfPI = 1 / Math.PI;

const obj = {
    p1: 10,
    p2: 20,
    f1() {},
    f2: () => {},
    [mystery]: 42,

    // shorthand 
    
    // InverseOfPI: InverseOfPI
    InverseOfPI
}

console.log(obj.mystery); // undefined
console.log(obj.answer); // undefined