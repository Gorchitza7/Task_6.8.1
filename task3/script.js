const trafficLights = document.querySelector('#trafficLights');
const trafficLightEls = document.querySelectorAll('#trafficLights > div');
let currentColorIndex = 0;

function resetColors() {
    trafficLightEls.forEach(light => light.style.background = 'black');
}

function changeColor() {
    resetColors();
    const colors = ['green', 'yellow', 'red'];
    trafficLightEls[currentColorIndex].style.background = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}

function makeColor() {
    changeColor();
}

trafficLights.addEventListener('click', makeColor);