let numOne = document.getElementById('number1');
let numTwo = document.getElementById('number2');
let numThree = document.getElementById('number3');
let numFour = document.getElementById('number4');
let numFive = document.getElementById('number5');
let numSix = document.getElementById('number6');
let numSeven = document.getElementById('number7');
let numEight = document.getElementById('number8');
let numNine = document.getElementById('number9');
let numZero = document.getElementById('number0');
let numP = document.getElementById('numberp');
let hello = document.getElementById('hello');

let minus = document.getElementById('operand-');
let plus = document.getElementById('operand+');
let divide = document.getElementById('operand%');
let multiply = document.getElementById('operand*');
let equals = document.getElementById('equals');

let allClear = document.getElementById('allclear');
let deleted = document.getElementById('delete');

let currentText = document.getElementById('current-num');
let previousText = document.getElementById('previous-num');


function changeText1() {
    currentText.innerHTML = '1';
};

function changeText2() {
    currentText.innerHTML = '2';
};

function changeText3() {
    currentText.innerHTML = '3';
};

function changeText4() {
    currentText.innerHTML = '4';
};

function changeText5() {
    currentText.innerHTML = '5';
};

function changeText6() {
    currentText.innerHTML = '6';
};

function changeText7() {
    currentText.innerHTML = '7';
};

function changeText8() {
    currentText.innerHTML = '8';
};

function changeText9() {
    currentText.innerHTML = '9';
};

function changeText0() {
    currentText.innerHTML = '0';
};

function changeTextDecimal() {
    currentText.innerHTML = '.';
};

function changeTextDivide() {
    currentText.innerHTML = '÷';
};

function changeTextMultiply() {
    currentText.innerHTML = '*';
};

function changeTextPlus() {
    currentText.innerHTML = '+';
};

function changeTextMinus() {
    currentText.innerHTML = '-';
};

function changeTextDelete() {
    currentText.innerHTML = '';
};

function changeTextAllClear() {
    currentText.innerHTML = '';
    previousText.innerHTML = '';
};

numOne.addEventListener('click', changeText1);
numTwo.addEventListener('click', changeText2);
numThree.addEventListener('click', changeText3);
numFour.addEventListener('click', changeText4);
numFive.addEventListener('click', changeText5);
numSix.addEventListener('click', changeText6);
numSeven.addEventListener('click', changeText7);
numEight.addEventListener('click', changeText8);
numNine.addEventListener('click', changeText9);
numZero.addEventListener('click', changeText0);
numP.addEventListener('click', changeTextDecimal);
minus.addEventListener('click', changeTextMinus);
plus.addEventListener('click', changeTextPlus);
divide.addEventListener('click', changeTextDivide);
multiply.addEventListener('click', changeTextMultiply);
deleted.addEventListener('click', changeTextDelete);
allClear.addEventListener('click', changeTextAllClear);



