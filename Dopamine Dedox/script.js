const tiltButton = document.getElementById('tiltButton');
const bottle = document.getElementById('bottle');
const gauge = document.getElementById('gauge');
let gaugeValue = 0;

tiltButton.addEventListener('click', () => {
    bottle.style.transform = 'rotate(30deg)';
    increaseGauge();
});

function increaseGauge() {
    gaugeValue += 10;
    if (gaugeValue > 100) {
        gaugeValue = 100;
    }
    gauge.style.width = `${gaugeValue}%`;
}
