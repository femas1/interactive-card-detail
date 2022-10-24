const cardHolderOutput = document.querySelector('.container-gradient__front__cardBottomInfo__card-holder');
const cardHolderInput = document.querySelector('#cardHolder');

const cardNumberOutput = document.querySelector('.container-gradient__front__card-number');
const cardNumberInput = document.querySelector('#cardNumber');

const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');

const monthOutput = document.querySelector('.monthInput');
const yearOutput = document.querySelector('.yearInput');

let numberInput1 = document.querySelector('.numberInput--1');
let numberInput2 = document.querySelector('.numberInput--2');
let numberInput3 = document.querySelector('.numberInput--3');
let numberInput4 = document.querySelector('.numberInput--4');



cardHolderInput.addEventListener('keyup', ()=> {
    let inputValue = cardHolderInput.value;
    cardHolderOutput.innerHTML = inputValue;
})

cardNumberInput.addEventListener('keyup', ()=> {
    let cardDigits1 = cardNumberInput.value.slice(0, 4);
    let cardDigits2 = cardNumberInput.value.slice(4, 8);
    let cardDigits3 = cardNumberInput.value.slice(8, 12);
    let cardDigits4 = cardNumberInput.value.slice(12, 16);

    numberInput1.innerText = cardDigits1;
    numberInput2.innerText = cardDigits2;
    numberInput3.innerText = cardDigits3;
    numberInput4.innerText = cardDigits4;
})

monthInput.addEventListener('keyup', () =>  {
    let monthDigits = monthInput.value.slice(0,2);
    monthOutput.innerText = monthDigits;
})

yearInput.addEventListener('keyup', () =>  {
    let yearDigits = yearInput.value.slice(0,2);
    yearOutput.innerText = yearDigits;
})

