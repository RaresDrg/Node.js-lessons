//* ES6 Modules: import //

import { checkOperation, isNumber } from "./utils.js";

console.dir(process.argv);

const calcTwoNumbers = () => {
  if (process.argv.length !== 5) {
    console.error(
      "You must write a mathematical operation between two numbers. For example: 10 + 50"
    );
    return;
  }

  const firstNumber = isNumber(process.argv[2]);
  const secondNumber = isNumber(process.argv[4]);

  const operation = checkOperation(process.argv[3]);

  const result = eval(firstNumber + operation + secondNumber);

  console.log(`${firstNumber} ${operation} ${secondNumber} = ${result}`);
};

calcTwoNumbers();
