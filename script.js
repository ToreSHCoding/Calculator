// const clearBtn = document.getElementById('clear-btn');
// const delBtn = document.getElementById('delete-btn');
// const powBtn = document.getElementById('power-btn');
// const btn7 = document.getElementById('7-btn');
// const btn8 = document.getElementById('8-btn');
// const btn9 = document.getElementById('9-btn');
// const divBtn = document.getElementById('div-btn');
// const btn4 = document.getElementById('4-btn');
// const btn5 = document.getElementById('5-btn');
// const btn6 = document.getElementById('6-btn');
// const multBtn = document.getElementById('mult-btn');
// const btn1 = document.getElementById('1-btn');
// const btn2 = document.getElementById('2-btn');
// const btn3 = document.getElementById('3-btn');
// const subBtn = document.getElementById('sub-btn');
// const decBtn = document.getElementById('dec-btn');
// const btn0 = document.getElementById('0-btn');
// const equalsBtn = document.getElementById('eq-btn');
// const addBtn= document.getElementById('add-btn');
const clearBtn = document.querySelector('[data-clear-all]');
const delBtn = document.querySelector('[data-delete]');
const numBtns = document.querySelectorAll('[data-number]');
const operatorBtns = document.querySelectorAll('[data-operation]');
const equealsBtn = document.querySelector('[data-equals]');


// function mathFunc() {
//   let arr = [];
// }

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "ERROR!";
  } else {
    return a / b;
  }
}

function power(a, b) {
  return Math.pow(a, b);
}

function operate(operator, a, b) {
  switch(operator){
    case '+':
      return add(a, b);
      break;
    case '-':
      return subtract(a, b);
      break;
    case '*':
      return multiply(a, b);
      break;
    case '/':
      return divide(a, b);
      break;
    case '^':
      return power(a, b);
      break;
  }
}