let numOne = '';
let operator = '';
let numTwo = '';
let result = '';
const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');

const onClickNumber = (event) => {
  if (!(operator && numOne)) { // 연산기호가 없을 때
    numOne += event.target.textContent;
    $result.value += event.target.textContent;
  }
  if (!numTwo && operator) { // num2가 없고 연산자가 있을 때
    numTwo += event.target.textContent;
    $result.value = '';
    $result.value += event.target.textContent;
    return;
  }
  if (numTwo) {
    numTwo += event.target.textContent;
    $result.value += event.target.textContent;
  }
};

//  const onClickNumber = (event) => { // 숫자 버튼을 입력시
//    if(!operator) { // 연산자가 없다면
//      numOne += event.target.textContent;
//      $result.value = event.target.textContent;
//      return;
//    }
//    if(!numTwo) { // 숫자2가 없다면
//      $result.value = '';
//    }
//    numTwo += event.target.textContent;
//    $result.value = event.target.textContent;
//  }

const onclickOperator = (op) => () => {
  if (!numOne) { // num1이 없을 경우
    if (op === '-') {
      numOne += '-';
      $result.value = numOne;
      return;
    }
    alert('숫자를 먼저 입력하세요');
  }
  if (!numTwo && operator && op === '-') {
    return;
    numTwo += op;
    $result.value = numTwo;
  }
  if (numOne && !numTwo) { // num1 이 있을 경우
    operator = op;
    $operator.value = operator;
  }
  if (numTwo) { // num2 가 있을 경우
    if (operator === '+') {
      $result.value = parseInt(numOne) + parseInt(numTwo);
    } else if (operator === '-') {
      $result.value = parseInt(numOne) - parseInt(numTwo);
    } else if (operator === '*') {
      $result.value = parseInt(numOne) * parseInt(numTwo);
    } else if (operator === '/') {
      $result.value = parseInt(numOne) / parseInt(numTwo);
    }
    numOne = $result.value;
    numTwo = '';
    operator = op;
    $operator.value = op;

  }
}

document.querySelector('#bksp').addEventListener('click', () => {
  if(!numOne) {
    return;
  }
  let tmpArr = $result.value.split("");
  if (tmpArr.length === 1) {
    tmpArr = 0;
    $result.value = tmpArr;
    numOne = $result.value;
    return;
  }
  let tmp = tmpArr.slice(0, length - 1);
  let sum = tmp.reduce((a, b) => a + b);
  $result.value = parseInt(sum);
  numOne = $result.value;
});
document.querySelector('#num-0').addEventListener('click', onClickNumber);
document.querySelector('#num-1').addEventListener('click', onClickNumber);
document.querySelector('#num-2').addEventListener('click', onClickNumber);
document.querySelector('#num-3').addEventListener('click', onClickNumber);
document.querySelector('#num-4').addEventListener('click', onClickNumber);
document.querySelector('#num-5').addEventListener('click', onClickNumber);
document.querySelector('#num-6').addEventListener('click', onClickNumber);
document.querySelector('#num-7').addEventListener('click', onClickNumber);
document.querySelector('#num-8').addEventListener('click', onClickNumber);
document.querySelector('#num-9').addEventListener('click', onClickNumber);
document.querySelector('#plus').addEventListener('click', onclickOperator('+'));
document.querySelector('#minus').addEventListener('click', onclickOperator('-'));
document.querySelector('#divide').addEventListener('click', onclickOperator('/'));
document.querySelector('#multiply').addEventListener('click', onclickOperator('*'));
document.querySelector('#calculate').addEventListener('click', () => {
  if (numTwo) {
    if (operator === '+') {
      $result.value = parseInt(numOne) + parseInt(numTwo);
    } else if (operator === '-') {
      $result.value = parseInt(numOne) - parseInt(numTwo);
    } else if (operator === '*') {
      $result.value = parseInt(numOne) * parseInt(numTwo);
    } else if (operator === '/') {
      $result.value = parseInt(numOne) / parseInt(numTwo);
    }
  } else {
    alert('올바르지 않은 계산식입니다.22');
  };
  numOne = $result.value;
  numTwo = '';
  operator = '';
  $operator.value = '';
});
document.querySelector('#clear').addEventListener('click', () => {
  numOne = '';
  operator = '';
  numTwo = '';
  $result.value = '';
  $operator.value = '';
});

document.body.style.overflow = 'hidden'; 