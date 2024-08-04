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

//하이트라이트 링크


const highlightLinksButtonElement = document.querySelector('#highlight-links button');

function highlightLinks()
{
    const anchorElements = document.querySelectorAll('#highlight-links a')

    for(const anchorElement of anchorElements)
        anchorElement.classList.add('highlight');

}

highlightLinksButtonElement.addEventListener('click',highlightLinks)



//더미 데이터 출력

const dummyUserData = {
    Name1 : 'Yoo-SH',
    Name2 : 'shy',
    age : 32
};


const displayUserDataButtonElement = document.querySelector('#user-data button')

function displayUserData() {
    const outputDataElement = document.getElementById('output-user-data')

    outputDataElement.innerHTML = '';

    for(const key in dummyUserData)
    {
        const newUserDataListItemElement = document.createElement('li');
        const outputText = key.toUpperCase() + ': ' + dummyUserData[key]
        newUserDataListItemElement.textContent = outputText;
        outputDataElement.append(newUserDataListItemElement);

    }
}

displayUserDataButtonElement.addEventListener('click', displayUserData);


// 주사위 프로그램

const rollDiceButtonElement = document.querySelector('#statistics button');

function rollDice() {
    return Math.floor(Math.random() * 6 + 1);
}

function deriveNumberOfDiceRolls() {
    const targetNumberInputElement = document.getElementById('user-target-number');
    const diceRollsListElement = document.getElementById('dice-rolls');

    const enteredNumber = parseInt(targetNumberInputElement.value, 10);
    diceRollsListElement.innerHTML = '';

    let hasRolledTargetNumber = false;
    let numberOfRolls = 0;

    while (!hasRolledTargetNumber) {
        const rolledNumber = rollDice();
        numberOfRolls++;
        const newRollListItemElement = document.createElement('li');
        const outputText = 'Roll ' + numberOfRolls + ': ' + rolledNumber;
        newRollListItemElement.textContent = outputText;
        diceRollsListElement.append(newRollListItemElement);
        hasRolledTargetNumber = (rolledNumber === enteredNumber);
    }

    const outputTotalRollsElement = document.getElementById('output-total-rolls');
    const outputTargetNumberElement = document.getElementById('output-target-number');

    outputTotalRollsElement.textContent = numberOfRolls; // 수정된 부분
    outputTargetNumberElement.textContent = enteredNumber;
}

rollDiceButtonElement.addEventListener('click', deriveNumberOfDiceRolls);
