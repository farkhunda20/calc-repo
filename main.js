(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector(".btn-clear");
  let equal = document.querySelector(".btn-equal");
  //numbers display functionality
  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let userInput = e.target.dataset.num;
      screen.value += userInput;
    });
  });

  //equal button functionality
  equal.addEventListener("click", function (e) {
    if (screen.value === "") {
      screen.value = "";
      console.log("equal button clicked");
    } else {
      let answer = eval(screen.value);
      screen.value = answer;
    }
  });

  // clear button functionality
  clear.addEventListener("click", function (e) {
    screen.value = "";
  });
})();
