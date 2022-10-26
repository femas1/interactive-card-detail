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

submitBtn.addEventListener('click', (event)=> {
    event.preventDefault();
    cardForm.classList.add('hidden');
    completedState.classList.remove('hidden');
})

cardHolderInput.addEventListener('keyup', ()=> {
    let inputValue = cardHolderInput.value;
    cardHolderOutput.innerHTML = inputValue;
})

cardHolderInput.addEventListener('focusout', ()=> {
    if(cardHolderInput.value.length < 8 || cardHolderInput.value.length > 22) {cardHolderInput.style.border = ("2px solid red")}
    else {cardHolderInput.style.border = "2px solid green"};
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

cardNumberInput.addEventListener('focusout', ()=> {
    if(cardNumberInput.value.length < 16) {cardNumberInput.style.border = ("2px solid red")}
    else {cardNumberInput.style.border = "2px solid green"};
})

monthInput.addEventListener('keyup', () =>  {
    let monthDigits = monthInput.value.slice(0,2);
    monthOutput.innerText = monthDigits;
})
monthInput.addEventListener('focusout', () =>  {
    if(monthInput.value.length < 2){monthInput.style.border = "2px solid red"}
    else{monthInput.style.border = "2px solid green"}
})

yearInput.addEventListener('keyup', () =>  {
    let yearDigits = yearInput.value.slice(0,2);
    yearOutput.innerText = yearDigits;
})
yearInput.addEventListener('focusout', () =>  {
    if(yearInput.value.length < 2){yearInput.style.border = "2px solid red"}
    else{yearInput.style.border = "2px solid green"}
})

cvcInput.addEventListener('keyup', ()=> {
    cvcOutput.innerText = cvcInput.value.slice(0,3);
})
cvcInput.addEventListener('focusout', () =>  {
    if(cvcInput.value.length < 3){cvcInput.style.border = "2px solid red"}
    else{cvcInput.style.border = "2px solid green"}
})
