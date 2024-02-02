function calculateBMI() {
  var weight = parseFloat(document.getElementById("Weight").value);
  var height = parseFloat(document.getElementById("Height").value);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    document.getElementById("result").innerHTML = "Please enter valid values.";
    return;
  }

  var bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);

  var resultText = "Your BMI is " + bmi + ". ";
  resultText += interpretBMI(bmi);

  document.getElementById("result").innerHTML = resultText;
}

function interpretBMI(bmi) {
  if (bmi < 18.5) {
    return "This is considered underweight.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "This is considered normal weight.";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "This is considered overweight.";
  } else {
    return "This is considered obese.";
  }
}
function resetForm() {
  document.getElementById("Weight").value = "";
  document.getElementById("Height").value = "";
  document.getElementById("result").innerHTML = "";
}
