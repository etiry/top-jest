const Calculator = require("../src/calculator");

const calc = new Calculator();

test("2 numbers are added correctly", () => {
  expect(calc.add(2, 2)).toEqual(4);
});

test("add function returns error message when non-number argument provided", () => {
  expect(calc.add(2, "b")).toBe("One or more non-numeric arguments");
});

test("2 numbers are subtracted correctly", () => {
  expect(calc.subtract(10, 2)).toEqual(8);
});

test("subtract function returns error message when non-number argument provided", () => {
  expect(calc.subtract(2, "b")).toBe("One or more non-numeric arguments");
});

test("2 numbers are multiplied correctly", () => {
  expect(calc.multiply(3, 5)).toEqual(15);
});

test("multiply function returns error message when non-number argument provided", () => {
  expect(calc.multiply(2, "b")).toBe("One or more non-numeric arguments");
});

test("2 numbers are divided correctly", () => {
  expect(calc.divide(9, 3)).toEqual(3);
});

test("divide function returns error message when dividing by 0", () => {
  expect(calc.divide(9, 0)).toBe("Cannot divide by 0");
});

test("divide function returns error message when non-number argument provided", () => {
  expect(calc.divide(2, "b")).toBe("One or more non-numeric arguments");
});
