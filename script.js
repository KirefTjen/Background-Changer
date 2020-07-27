var color1 = document.querySelector('#color1');
var color2 = document.querySelector('#color2');
var body = document.getElementById('background_base');
var css = document.querySelector('h3');
var random = document.getElementById('random');

css.textContent =
	'left-Color: ' + color1.value + ' & ' + 'Right-Color: ' + color2.value;

function backgroundSetter() {
	body.style.background =
		'linear-gradient(to right,' + color1.value + ',' + color2.value + ')';

	css.textContent =
		'left-Color: ' + color1.value + ' & ' + 'Right-Color: ' + color2.value;
}

function randomColor() {
	var newColor = '#' + ((Math.random() * 0xffffff) << 0).toString(16);
	return newColor;
}

function randomGradient() {
	color1.value = randomColor();
	color2.value = randomColor();
	backgroundSetter();
}

color1.addEventListener('input', backgroundSetter);
color2.addEventListener('input', backgroundSetter);
random.addEventListener('click', randomGradient);
