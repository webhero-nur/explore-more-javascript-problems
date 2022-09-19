function add(num1, num2) {
    if (typeof num1 != 'number' || typeof num2 != 'number') {
        return 'Please enter numbers'
    }
    return num1 + num2;
}

const result = add(12, 12);
// console.log(result);

function multiply(num1, num2) {
    console.log(num1, num2);
    return num1 * num2;
}

const output = multiply(12, 10);
console.log(output);