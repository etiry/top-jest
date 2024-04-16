class Calculator {
  check_input(number1, number2) {
    if (typeof number1 !== "number" || typeof number2 !== "number") {
      return false;
    }
    return true;
  }

  add(number1, number2) {
    if (this.check_input(number1, number2)) {
      return number1 + number2;
    }
    return "One or more non-numeric arguments";
  }

  subtract(number1, number2) {
    if (this.check_input(number1, number2)) {
      return number1 - number2;
    }
    return "One or more non-numeric arguments";
  }

  multiply(number1, number2) {
    if (this.check_input(number1, number2)) {
      return number1 * number2;
    }
    return "One or more non-numeric arguments";
  }

  divide(number1, number2) {
    if (this.check_input(number1, number2)) {
      if (number2 === 0) {
        return "Cannot divide by 0";
      }
      return number1 / number2;
    }
    return "One or more non-numeric arguments";
  }
}

module.exports = Calculator;
