let firstNum = +prompt("Введіть перше число");
while (firstNum === "" || Number(isNaN(firstNum))) {
    firstNum = +prompt("Введіть перше число ще раз:");
}

let secondNum = +prompt("Введіть друге число");
while (secondNum === "" || Number(isNaN(secondNum))) {
    secondNum = +prompt("Введіть друге число ще раз:");
}

let operant = prompt(
  "Введіть математичну операцію, яку потрібно виконати. Сюди може бути введено +, -, *, /."
);
while (!/^[\-+*(/)]/.test(operant)) {
    operant = prompt("Введіть математичну операцію, яку потрібно виконати ще раз. Сюди може бути введено +, -, *, /.");
}


function doMathOperation() {
  if (operant === "+") {
    console.log(`${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
  } else  if (operant === "-"){
    console.log(`${firstNum} - ${secondNum} = ${firstNum - secondNum}`);
  }else  if (operant === "*"){
    console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
  }else  if (operant === "/"){
    console.log(`${firstNum} / ${secondNum} = ${firstNum / secondNum}`);
  }
}

doMathOperation();

