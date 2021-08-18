function generateRandomPin() {
    const randomPin = Math.round(Math.random() * 10000);
    const stringRandomPin = randomPin + '';
    if (stringRandomPin.length == 4) {
        return stringRandomPin;
    }
    else {
        return generateRandomPin();
    }
}
document.getElementById('generate-btn').addEventListener('click', function () {
    const randomPin = generateRandomPin();
    const randomPinInput = document.getElementById('random-pin-input');
    randomPinInput.value = randomPin;
})
document.getElementById('type-button').addEventListener('click', function (event) {
    const typedPin = document.getElementById('typed-pin-input');
    const screen = typedPin.value + event.target.innerText;
    if (isNaN(event.target.innerText)) {
            if (event.target.innerText == "C") {
              typedPin.value = "";
            } else if (event.target.innerText == "<") {
                typedPin.value = screen.slice(0, -2);
            } else if (event.target.innerText == "Submit") {
              const randomPin = document.getElementById("random-pin-input");
              if (typedPin.value == randomPin.value) {
                document.getElementById("notify-success").style.display =
                  "block";
                document.getElementById("notify-fail").style.display = "none";
              } else {
                document.getElementById("notify-fail").style.display = "block";
                document.getElementById("notify-success").style.display =
                  "none";
              }
            }
    }
    else {
      typedPin.value = screen;
    }    
})
