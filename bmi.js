//BMI = KG / (Height/100 * Height/100)

//listen for event of clicking submit button, then call bmiCalculator function
document.getElementById('submit').addEventListener("click", bmiCalculator);
  function bmiCalculator(){
    //parse string, return integer (parseInt) on cm input
    let inches = parseInt(document.getElementById('in').value);
    //parse string, return floating point number on kg input
    let lbs = parseInt(document.getElementById('lbs').value);

    let insq = inches * inches;
    let bmi = (703 * lbs)/insq;
    //convert to string with 1 decimal place
    bmi = bmi.toFixed(1);
    //set innerHTML to the result of the JS calculations
    document.getElementById('result').innerHTML = bmi;
  }
