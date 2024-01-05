{
    // block scope
    {
        // nested block scope
    }
}

// use const and let, in order to protect the values

if (true) {

}

for (var i=1; i <= 10; i++) {
    // block scope
}

function sum(a, b) {
    var result = a + b;
}

sum(4,3);
// result; // compiler error

// we could access i, at the bottom. use let or const!

// const simply means constant reference to it.

// scalar values, immutable cannot be change
const answer = 42;
const greeting = "hello"; 

// arrays and objects
// the references are themselves mutable and can be mutated.
const numbers = [2, 4, 6];
const person = {
    fistName: "matt",
    lastName: "duran"
}

const answer1 = 42;

/*
    program code
*/

answer1; // 42, guaranteed

let answer2 = 42;

/*
    program code
*/

answer1; // 42 is not guaranteed. need to parse the program.the