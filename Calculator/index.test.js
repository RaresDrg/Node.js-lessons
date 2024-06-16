import CalculatorService from "./index";

describe("Calculator", () => {
  test("add two numbers ", () => {
    expect(CalculatorService.add(10, 5)).toBe(15);
  });

  test("decrese two numbers", () => {
    expect(CalculatorService.decrese(10, 5)).toBe(5);
  });

  test("multiply two number", () => {
    expect(CalculatorService.multiply(10, 5)).toBe(50);
  });

  test("divide two numbers", () => {
    expect(CalculatorService.divide(10, 5)).toBe(2);
  });
});
