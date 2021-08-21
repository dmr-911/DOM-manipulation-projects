document.getElementById('type-button').addEventListener('click', function (event) {
    const screen = document.getElementById("typed-pin-input");
    const screenValue = screen.value + event.target.innerText;
    if (event.target.innerText == '=') {
        screen.value = eval(screenValue);
    }
    else {
        screen.value = screenValue;
    }
})