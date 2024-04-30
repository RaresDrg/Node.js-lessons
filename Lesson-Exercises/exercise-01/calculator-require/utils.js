function isNumber(arg) {
  const number = Number(arg);

  if (isNaN(number)) {
    console.error("Please write a number");
    return;
  }

  return number;
}

function checkOperation(arg) {
  const OPERATIONS = ["+", "-", "/", "*"];

  if (!OPERATIONS.includes(arg)) {
    console.error('Please, write one of these operation: "+", "-", "*", "/" ');
    return;
  }

  return arg;
}

module.exports = {
  isNumber,
  checkOperation,
};
