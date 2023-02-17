const btns = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
const equal = document.querySelector(".btn-equal");
const clear = document.querySelector(".btn-clear");

btns.forEach((btn) => {
  const showNumber = () => {
    let number = btn.textContent;
    screen.value += number;
  };

  btn.addEventListener("click", showNumber);
});

const showEqual = () => {
  if (screen.value === "") {
    screen.value = `Please enter, a value`;
  } else {
    let value = eval(screen.value);
    screen.value = value;
  }
};

const clearAll = () => {
  screen.value = "";
};

equal.addEventListener("click", showEqual);
clear.addEventListener("click", clearAll);
