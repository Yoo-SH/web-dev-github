//console.dir(document);
//document.body.children[1].children[0].href = 'https://google.com'


/* let anchorElement = document.getElementById('external-link');
anchorElement.href = 'https://google.com'
 */

let anchorElement = document.querySelector('p a');
anchorElement.href = 'https://www.instagram.com'

//ADD AN ELEMENT
//1. 새로운 엘리먼트를 생성

let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://google.com'
newAnchorElement.textContent = 'This leads to Google!'

//2. 새로운 엘리먼트를 가져야할 부모 엘리먼트에 접근

let firstParagraph = document.querySelector('p')

//3. 새로운 엘리먼트를 부모 엘리먼트에 삽입함.

firstParagraph.append(newAnchorElement)


//REMOVE ELEMENTS
//1. 삭제되어야할 엘리먼트를 선택

let firstH1Element = document.querySelector('h1');

//2. 삭제
firstH1Element.remove()
/*firstH1Element.parentElement.removeChild(firstH1Element);*/


//MOVE ELEMENTS
firstParagraph.parentElement.append(firstParagraph);

//innerHTML

firstParagraph.innerHTML = "HI! This is <strong> important </strong>" +
"inner test "
