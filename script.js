const cardHolderOutput = document.querySelector('.container-gradient__front__cardBottomInfo__card-holder');
const cardHolderInput = document.querySelector('#cardHolder');

const cardNumberOutput = document.querySelector('.container-gradient__front__card-number');
const cardNumberInput = document.querySelector('#cardNumber');

let numberInput1 = document.querySelector('.numberInput--1');
let numberInput2 = document.querySelector('.numberInput--2');
let numberInput3 = document.querySelector('.numberInput--3');
let numberInput4 = document.querySelector('.numberInput--4');



// cardHolderInput.addEventListener('keyup', ()=> {
//     let inputValue = cardHolderInput.value;
//     cardHolderOutput.innerHTML = inputValue;
// })

cardNumberInput.addEventListener('keyup', ()=> {
    const inputValue = [cardNumberInput.value];
    let numberArr = parseInt(inputValue);
    console.log(numberArr.slice(0,4))

    // const input1 = numberArr.slice(0, 4);


    // numberInput1.innerHTML = input1;

    
    
})