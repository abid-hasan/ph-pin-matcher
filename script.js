const generatorDisplay = document.querySelector('.pin-generator input');
const generateButton = document.querySelector('.generate-btn');
const inputDisplay = document.querySelector('.input-section input');
const notifyMatched = document.querySelector('.matched');
const notifyNotMatched = document.querySelector('.not-matched');

let pin = 0;

generateButton.addEventListener('click', () => {
	pin = Math.floor(1000 + Math.random() * 9000);
	generatorDisplay.value = pin;
	inputDisplay.value = '';
	clearNotify();
});

const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const clearOne = document.querySelector('.clear-one');
const clearAll = document.querySelector('.clear-all');

zero.addEventListener('click', () => {
	inputDisplay.value += 0;
});
one.addEventListener('click', () => {
	inputDisplay.value += 1;
});
two.addEventListener('click', () => {
	inputDisplay.value += 2;
});
three.addEventListener('click', () => {
	inputDisplay.value += 3;
});
four.addEventListener('click', () => {
	inputDisplay.value += 4;
});
five.addEventListener('click', () => {
	inputDisplay.value += 5;
});
six.addEventListener('click', () => {
	inputDisplay.value += 6;
});
seven.addEventListener('click', () => {
	inputDisplay.value += 7;
});
eight.addEventListener('click', () => {
	inputDisplay.value += 8;
});
nine.addEventListener('click', () => {
	inputDisplay.value += 9;
});
clearAll.addEventListener('click', () => {
	inputDisplay.value = '';
});
clearOne.addEventListener('click', () => {
	inputDisplay.value = inputDisplay.value.slice(0, -1);
});

document.querySelector('.submit-btn').addEventListener('click', () => {
	clearNotify();

	const inputPin = parseInt(inputDisplay.value);

	if (inputPin === pin) {
		notifyMatched.style.display = 'block';
	} else {
		notifyNotMatched.style.display = 'block';
	}
});

const clearNotify = () => {
	notifyMatched.style.display = 'none';
	notifyNotMatched.style.display = 'none';
};
