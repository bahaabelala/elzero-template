const btns = document.getElementsByTagName('a');
Array.from(btns).forEach((btn) => {
    btn.addEventListener('click', function (e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        const circle = document.createElement('span');
        this.appendChild(circle);
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
        // setTimeout(() => {
        //     btn.removeChild(circle);
        // }, 700);
    });
});

function addToScreen(letter) {
    const calcScreen = document.getElementById('calcscreen');
    if (calcScreen.value == '0') {
        if (letter === '.') {
            calcScreen.value += letter;
        } else {
            calcScreen.value = letter;
        }
    } else {
        if (letter === '.' && calcScreen.value.includes('.')) {
            calcScreen.value += '';
        } else {
            calcScreen.value += letter;
        }
    }
}

function clr() {
    document.getElementById('calcscreen').value = '0';
}

function solve() {
    const calcScreen = document.getElementById('calcscreen');
    calcScreen.value = eval(calcScreen.value);
}
