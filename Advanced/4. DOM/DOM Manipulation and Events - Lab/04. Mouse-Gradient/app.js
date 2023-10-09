function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', getCoorditanes);

    function getCoorditanes(event) {
        let x = event.offsetX;
        let output = `${Math.floor(x / event.target.clientWidth * 100)}%`;
        let result = document.getElementById('result');
        result.textContent = output;
    }
}