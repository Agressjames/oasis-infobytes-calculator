document.addEventListener("DOMContentLoaded", function () {
    let display = document.getElementById("display");
    let buttons = document.getElementById("buttons");
    let evalString = "";
  
    buttons.addEventListener("click", function (event) {
      const target = event.target;
      const value = target.innerText;
  
      if (value === "C") {
        // Clear the display and evaluation string
        display.innerText = "0";
        evalString = "";
      } else if (value === "←") {
        // Backspace functionality
        evalString = evalString.slice(0, -1);
        display.innerText = evalString === "" ? "0" : evalString;
      } else if (value === "=") {
        // Evaluate the expression and display the result
        try {
          evalString = eval(evalString).toString();
          display.innerText = evalString;
        } catch (error) {
          display.innerText = "Error";
        }
      } else {
        // Append the clicked value to the evaluation string
        evalString += value;
        display.innerText = evalString;
      }
    });
  });
  