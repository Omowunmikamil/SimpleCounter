const CountDown = document.getElementById("countdown");
const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
const resetButton = document.getElementById("resetButton");

let count = 0;

plusButton.addEventListener("click", () => {
  count++;
  CountDown.textContent = count;
});

minusButton.addEventListener("click", () => {
  count--;
  CountDown.textContent = count;
});

resetButton.addEventListener("click", () => {
  count = 0;
  CountDown.textContent = count;
});
