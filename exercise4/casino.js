function getSSN(){
  var citizen = document.getElementById("USyes");
  var social = document.getElementById("SSN");
    if(citizen.checked){
    social.disabled = false;
    social.required = true;
                        }
    else{
    social.disabled = true;
    social.required = false;
        }
                }

function addReceipt(){
  var recValue = document.getElementById("Receiptin");
  var recDisplay = document.getElementById("RecBox");
  var recTotal = document.getElementById("RecTotal");

  recTotal.value =parseInt(recTotal.value) + parseInt(recValue.value);
  recDisplay.value = recDisplay.value + "$" + recValue.value + "\n";
}

function chipcounter(){
  var Black = parseInt(document.getElementById("cBlack").value);
  var Blue = parseInt(document.getElementById("cBlue").value);
  var Red = parseInt(document.getElementById("cRed").value);
  var Green = parseInt(document.getElementById("cGreen").value);
  var Purple = parseInt(document.getElementById("cPurple").value);
  var Gold = parseInt(document.getElementById("cGold").value);
  var ChipTotal = document.getElementById("cTotal");

  ChipTotal.value = (Black * 5) + (Blue * 20) + (Red * 50) + (Green * 100) + (Purple * 500) + (Gold * 1000);
}

function getwinnings(){
  var SubTotal = document.getElementById("winsub");
  var Chips = document.getElementById("cTotal");
  var Receipts = document.getElementById("RecTotal");
  var Tax = document.getElementById("taxes");
  var Cashout = document.getElementById("winnings");
  var citizen = document.getElementById("USyes");

  SubTotal.value = parseInt(Chips.value) - parseInt(Receipts.value);

  if(citizen.checked && SubTotal.value > 0){
    Tax.value = 0.1 * SubTotal.value;
  }
  else Tax.value = 0;

  Cashout.value = SubTotal.value - Tax.value;
}
