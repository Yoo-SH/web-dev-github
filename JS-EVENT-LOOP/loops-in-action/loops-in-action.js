const calculateSumButtonElement = document.querySelector('#calculator button')

function calculateSum(){
    const userNumberInputElement = document.getElementById('user-number')
    const enteredNumber = userNumberInputElement.value;

    let sumUpToNumber =0;

    for(let i =0; i<= enteredNumber; i++)
        sumUpToNumber = sumUpToNumber+ i;

    const outputResultElemnet = document.getElementById('calculated-sum')

    outputResultElemnet.textContent = sumUpToNumber;
    outputResultElemnet.style.display ='block';
}

calculateSumButtonElement.addEventListener('click',calculateSum);