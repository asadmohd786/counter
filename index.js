let counterElement = document.getElementById("counterValue");

function onIncrement() {
  let previousCounterValue = counterElement.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) + 1;
  if (updatedCounterValue > 0) {
    counterElement.style.color = "green";
  }
  else if (updatedCounterValue < 0) {
    counterElement.style.color = "green";
  }
  else {
    counterElement.style.color = "green";
  }
  counterElement.textContent = updatedCounterValue;
}

function onDecrement() {
  let previousCounterValue = counterElement.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) - 1;
  if (updatedCounterValue > 0) {
    counterElement.style.color = "red";
  }
  else if (updatedCounterValue < 0) {
    counterElement.style.color = "red";
  }
  else {
    counterElement.style.color = "red";
  }
  counterElement.textContent = updatedCounterValue;
}

function onReset() {
    let counterValue = 0;
    counterElement.textContent = counterValue;
    counterElement.style.color = "black";
  }