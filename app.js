// TODO Grab all the current elements on the page
const body = document.querySelector('body');
const house = document.querySelector('.house');

// TODO: Add event listener here
house.addEventListener('mouseover', () => {
    console.log('I am currently hovering over the container element');
});



function createNewTextElement(tagName, text) {
    const newElement = document.createElement(tagName);
    newElement.textContent = text;  
    return newElement;
}

const bedroomOne = document.querySelector('.bedroom-one');
const bedroomOneHeader = createNewElement('h2', 'Bedroom 1');
console.log(bedroomOneHeader);
bedroomOne.prepend(bedroomOneHeader);
const newImage = document.createElement('img');
newImage.setAttribute('class', 'bedroom-one__image');
newImage.setAttribute('src', 'https://ca-times.brightspotcdn.com/dims4/default/6da3fb7/2147483647/strip/true/crop/3200x1800+0+0/resize/840x473!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fb6%2Ff3%2Ffb2517b547f5a49d2ad144b8dcfd%2F1-lp.jpg');

newImage.addEventListener('click', () => {
    alert('Bedroom 1');
});
bedroomOne.append(newImage);

const houseImage = document.querySelector('.house__image');
houseImage.addEventListener('click', () => {
    alert('Welcome to my house!');
});

house.addEventListener('mouseover', () => {
    bedroomOne.style.backgroundColor = 'red';
    console.log('I am currently hovering over the container element');
});

house.addEventListener('mouseout', () => {
    bedroomOne.style.backgroundColor = 'white';
    console.log('I am NOT currently hovering over the container element');
});