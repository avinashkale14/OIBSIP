function convertTemp() {
  const temp = document.getElementById("tempInput").value;
  const unit = document.getElementById("unit").value;
  const result = document.getElementById("result");

  if (temp === "") {
    result.innerText = "Please enter a temperature value.";
    return;
  }

  let convertedTemp;

  if (unit === "celsius") {
    convertedTemp = (temp * 9/5) + 32;
    result.innerText = `${convertedTemp.toFixed(2)} °F`;
  } else {
    convertedTemp = (temp - 32) * 5/9;
    result.innerText = `${convertedTemp.toFixed(2)} °C`;
  }
}
