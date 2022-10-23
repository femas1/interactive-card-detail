const cardHolderOutput = document.querySelector('.container-gradient__front__cardBottomInfo__card-holder');
const cardHolderInput = document.querySelector('#cardHolder');


cardHolderInput.addEventListener('keydown', ()=> {
    let inputValue = cardHolderInput.value;
    cardHolderOutput.innerHTML = inputValue;
})
