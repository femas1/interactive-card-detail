const cardHolderOutput = document.querySelector('.container-gradient__front__cardBottomInfo__card-holder');
const cardHolderInput = document.querySelector('#cardHolder');

const cardNumberOutput = document.querySelector('.container-gradient__front__card-number');
const cardNumberInput = document.querySelector('#cardNumber');


cardHolderInput.addEventListener('keyup', ()=> {
    let inputValue = cardHolderInput.value;
    cardHolderOutput.innerHTML = inputValue;
})

cardNumberInput.addEventListener('keyup', ()=> {
    let inputValue = [cardNumberInput.value];
    console.log(inputValue);
})