/* This file is not connected, file for practice only */

// Elements on the HTML page
const house = document.querySelector('.house');
const bedrooms = document.querySelectorAll('.bedroom');
const masterBedroom = document.querySelectorAll('#master-bedroom');

// =====================================================
// TODO: Type each one of these 3 times
// Write code here

// =====================================================

// Creating new elements
const newDiv = document.createElement('div');
newDiv.setAttribute('class', 'kitchen');

const newTitle = document.createElement('h1');
newTitle.textContent = 'DOM Muscle Memory';

const newImage = document.createElement('img');
newImage.src = 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8a2l0Y2hlbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80';
newImage.setAttribute('alt', 'Image of a kitchen') // Accessibility

// =====================================================
// TODO: Type each one of the new elements 3 times
// Write code here

// =====================================================

// Prepend and append elements
house.append(newDiv);
house.prepend(newTitle);
house.append(newImage);

// =====================================================
// TODO: Type each one of these 3 times
// Write code here

// =====================================================

// Add styling on elements
newDiv.style.backgroundColor = 'blue';

newImage.style.width = '600px';
newImage.style.height = '600px';

newTitle.style.fontWeight = 'bold';
newTitle.style.margin = '0 auto';

// =====================================================
// TODO: Type each one of the styles elements 3 times
// Write code here

// =====================================================

// Event Listeners
masterBedroom.addEventListner('click', () => {
    console.log('Inside of masterBedroom event');
    alert('This is the Master Bedroom');
});

house.addEventListner('click', () => {
    console.log('Inside of house event');
    alert('This is the Master Bedroom');
});

newImage.addEventListener('mouseover', () => {
    console.log('Inside of newImage mouseover event');
    newImage.style.width = '100%';
});

newImage.addEventListener('mouseout', () => {
    console.log('Inside of newImage mouseout event');
    newImage.style.width = '600px';
    newImage.style.height = '600px';
});

// =====================================================
// TODO: Type each one of the event listeners 3 times
// Write code here

// =====================================================

// Using a function to create an element that uses text
function createNewTextElement(tagName, text) {
    const newElement = document.createElement(tagName);
    newElement.textContent = text;  
    return newElement;
}

const newParagraph = createNewTextElement('p', 'This is a paragraph');
const newHeader = createNewTextElement('h1', 'Title of Website');
const newDivWithText = createNewTextElement('div', 'I am a DIV, what are you? Software Engineer');

// =====================================================
// TODO: Type function that create an element that uses text 3 times
// Write code here

// =====================================================


// Using a function to add background color to element
function colorElementBackground(className, color) {
    const elementToColor = document.querySelector(`.${className}`);
    elementToColor.style.backgroundColor = color;
    return elementToColor;
}

colorElementBackground('house', 'red');
colorElementBackground('bedroom', 'yellow');
colorElementBackground('kitchen', 'blue');

// =====================================================
// Write code here
// TODO: Type the function that styles background color 3 times

// =====================================================