function doMathOperation(firstNum, secondNum, operant) {
  firstNum = +prompt("Введіть перше число");
  while (firstNum === "" || Number(isNaN(firstNum))) {
    firstNum = +prompt("Введіть перше число ще раз:");
  }

  secondNum = +prompt("Введіть друге число");
  while (secondNum === "" || Number(isNaN(secondNum))) {
    secondNum = +prompt("Введіть друге число ще раз:");
  }

  operant = prompt(
    "Введіть математичну операцію, яку потрібно виконати. Сюди може бути введено +, -, *, /."
  );
  while (!/^[\-+*(/)]/.test(operant)) {
    operant = prompt(
      "Введіть математичну операцію, яку потрібно виконати ще раз. Сюди може бути введено +, -, *, /."
    );
  }

  switch (operant) {
    case "+": {
      return firstNum + secondNum;
    }
    case "-": {
      return firstNum - secondNum;
    }
    case "*": {
      return firstNum * secondNum;
    }
    case "/": {
      return firstNum / secondNum;
    }
  }
}
console.log(doMathOperation('firstNum', 'secondNum', 'operant'));
