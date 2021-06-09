/**
 * Let's make a calculator 🧮
 */

const OPERATOR = {
    add : "+",
    substract : "-",
    multiply : "*",
    divide: "/",
    remainder: "%"
} as const;

type Operator = keyof typeof OPERATOR;

function calculate(operator:Operator, first: number, second: number):number {
    return eval(`${first} ${OPERATOR[operator]} ${second}`);
}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
