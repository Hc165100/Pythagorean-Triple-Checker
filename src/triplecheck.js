let result = document.getElementById("result");
function checkSides() {
  let sideA = document.getElementById("sideA").value;
  let sideB = document.getElementById("sideB").value;
  let sideC = document.getElementById("sideC").value;
  if (sideA === "" || sideB === "" || sideC === "") {
    result.innerHTML = "Please enter a full set of values.";
  } else if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
    result.innerHTML = "Please enter only lengths greater than zero.";
  } else {
    sideA * sideA + sideB * sideB === sideC * sideC
      ? (result.innerHTML = "That is a triple.")
      : (result.innerHTML = "That is not a triple.");
  }
}

function clear() {
  result.innerHTML = "";
}

let checkButton = document.getElementById("checkBtn");

checkButton.addEventListener("click", checkSides);

let clearButton = document.getElementById("clearBtn");

clearButton.addEventListener("click", clear);
