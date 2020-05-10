//BMI = KG / (Height/100 * Height/100)

//listen for event of clicking submit button, then call bmiCalculator function
document.getElementById('submit').addEventListener("click", bmiCalculator);
  function bmiCalculator(){
    //parse string, return integer (parseInt) on cm input
    let cm = parseInt(document.getElementById('cm').value);
    //parse string, return floating point number on kg input
    let kg = parseFloat(document.getElementById('kg').value);

    let bmi;
    //parse string, return floating point number
    let newCm = parseFloat(cm/100);

    bmi = kg / (newCm * newCm);
    //convert to string with 1 decimal place
    bmi = bmi.toFixed(1);
    //set innerHTML to the result of the JS calculations
    document.getElementById('result').innerHTML = bmi;
  }
