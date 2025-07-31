const display = document.getElementById("display");
const history = document.getElementById("history");
const buttons = document.querySelectorAll("button");

const clickSound = new Audio("click.mp3");


function append(value) {
  display.value += value;
  playSound();
}


function clearDisplay() {
  display.value = "";
  playSound();
}


function backspace() {
  display.value = display.value.slice(0, -1);
  playSound();
}


function calculate() {
  try {
    let result = eval(display.value);
    history.innerHTML += `<div>${display.value} = ${result}</div>`;
    display.value = result;
    playSound();
  } catch (e) {
    alert("Invalid Expression");
  }
}

function toggleTheme() {
  document.body.classList.toggle("light");
  document.querySelector(".mode-switch").classList.toggle("switched");
  playSound();
}


function playSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}


document.addEventListener("keydown", function (event) {
  const key = event.key;
  if ((key >= "0" && key <= "9") || ["+", "-", "*", "/", ".", "%", "(", ")"].includes(key)) {
    append(key);
  } else if (key === "Enter") {
    event.preventDefault();
    calculate();
  } else if (key === "Backspace") {
    backspace();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
