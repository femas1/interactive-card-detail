const cardHolderOutput = document.querySelector('.container-gradient__front__cardBottomInfo__card-holder');
const cardHolderInput = document.querySelector('#cardHolder');

const cardNumberOutput = document.querySelector('.container-gradient__front__card-number');
const cardNumberInput = document.querySelector('#cardNumber');

const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');

const monthOutput = document.querySelector('.monthInput');
const yearOutput = document.querySelector('.yearInput');

const numberInput1 = document.querySelector('.numberInput--1');
const numberInput2 = document.querySelector('.numberInput--2');
const numberInput3 = document.querySelector('.numberInput--3');
const numberInput4 = document.querySelector('.numberInput--4');

const cvcOutput = document.querySelector('.container-gradient__back__securityNum');
const cvcInput = document.querySelector('#cvc');

const cardForm = document.querySelector('.container-white__form');
const submitBtn = document.querySelector('.btn');
const completedState = document.querySelector('.completedState');

submitBtn.addEventListener('click', ()=> {
    cardForm.classList.add('hidden');
    completedState.classList.remove('hidden');
})

cardHolderInput.addEventListener('keyup', ()=> {
    let inputValue = cardHolderInput.value;
    cardHolderOutput.innerHTML = inputValue;

    if (cardHolderInput.value === '') {cardHolderInput.style.border = "1px solid red"}
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

    if (cardNumberInput.value === '') {cardNumberInput.style.border = "1px solid red"}
})

monthInput.addEventListener('keyup', () =>  {
    let monthDigits = monthInput.value.slice(0,2);
    monthOutput.innerText = monthDigits;

    if (monthInput.value === '') {monthInput.style.border = "1px solid red"}
})

yearInput.addEventListener('keyup', () =>  {
    let yearDigits = yearInput.value.slice(0,2);
    yearOutput.innerText = yearDigits;

    if (yearInput.value === '') {yearInput.style.border = "1px solid red"}
})

cvcInput.addEventListener('keyup', ()=> {
    cvcOutput.innerText = cvcInput.value.slice(0,3);
})
cvcInput.addEventListener('focusout', () =>  {
    if(cvcInput.value.length < 3){cvcInput.style.border = "1px solid red"}
})
