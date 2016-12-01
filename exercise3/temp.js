function converter(){
var ttype, temp, newtemp;
ttype = window.prompt("Is your temperature fahrenheit or celcius (f or c)?","f");

if(ttype == "f")
{
  temp = parseFloat(window.prompt("Enter temperature","0"));
  if (isNaN(temp)) {
      alert("Please enter a number.");
  }
  else newtemp = (temp - 32) * (5 / 9);
  alert(temp + " f is equal to " + +newtemp.toFixed(2) +" c.");
}
else if(ttype == "c")
{
  temp = parseFloat(window.prompt("Enter temperature","0"));
  if (isNaN(temp)) {
      alert("Please enter a number.");
  }
  else newtemp = temp * 1.8 + 32;
  alert(temp + " c is equal to " + +newtemp.toFixed(2) +" f.");
}
else alert("Invalid entry. Please enter 'f' or 'c'.");

}

function gconverter(){
  var tempin = document.getElementById("usertemp").value;
  var tempout = document.getElementById("results");
  var newtemp = 0;
  var fahr = document.getElementById("radfahr");
  var celc = document.getElementById("radcelc");
  tempin= parseFloat(tempin);
  if(fahr.checked){
    newtemp = (tempin - 32) * 5 /9;
    tempout.value = +newtemp.toFixed(2) + "° Celcius";
    }
  else if(celc.checked){
    newtemp = (tempin * 1.8) + 32;
    tempout.value = +newtemp.toFixed(2) + "° Fahrenheit";
  }
  return;
}
