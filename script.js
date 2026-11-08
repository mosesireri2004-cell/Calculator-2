let input = document.querySelector("input");
// const buttons = document.querySelector("button");

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     calculate(number);
//   });
// });

function calculate(number) {
  input.value = input.value + number;
}

function result() {
  try {
    input.value = eval(input.value);
  } catch (error) {
    alert("Invalid Number!");
  }
}

function clr() {
  input.value = "";
}

function del() {
  input.value = input.value.slice(0, -1);
}
