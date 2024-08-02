let paragraphElement = document.querySelector('p');

function changeParagraphText() {
    paragraphElement.textContent = 'Clicked';
    console.log('clicked!');
}


paragraphElement.addEventListener('click',changeParagraphText)
