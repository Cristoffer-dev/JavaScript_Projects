function sum (a, b) {
    console.log(arguments);
    return a + b;
}

let result = sum(5, 6);
console.log(`The result of the addition is ${result}`);
